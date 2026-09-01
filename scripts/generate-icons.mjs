// Generates the raster brand assets from the same shapes as public/favicon.svg.
// Dependency-free: a minimal PNG encoder on top of node:zlib.
// Run with `npm run generate:icons` after changing the brand mark.
import { deflateSync } from 'node:zlib';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const publicDir = resolve(dirname(fileURLToPath(import.meta.url)), '../public');

const CANVAS = [0xf4, 0xef, 0xe5];
const SAGE_DARK = [0x40, 0x4a, 0x3d];
const ROSE = [0xc8, 0x87, 0x78];

const crcTable = Array.from({ length: 256 }, (_, index) => {
  let value = index;
  for (let bit = 0; bit < 8; bit += 1) {
    value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
  }
  return value >>> 0;
});

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const typed = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(typed));
  return Buffer.concat([length, typed, crc]);
}

function encodePng(width, height, rgba) {
  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y += 1) {
    raw[y * (stride + 1)] = 0;
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

/** Signed distance to an axis-aligned rounded rectangle. */
function roundedRect(x, y, cx, cy, halfWidth, halfHeight, radius) {
  const dx = Math.abs(x - cx) - (halfWidth - radius);
  const dy = Math.abs(y - cy) - (halfHeight - radius);
  const outside = Math.hypot(Math.max(dx, 0), Math.max(dy, 0));
  return outside + Math.min(Math.max(dx, dy), 0) - radius;
}

/** Signed distance to an axis-aligned ellipse (approximate but stable for AA). */
function ellipse(x, y, cx, cy, rx, ry) {
  const nx = (x - cx) / rx;
  const ny = (y - cy) / ry;
  const distance = Math.hypot(nx, ny);
  return (distance - 1) * Math.min(rx, ry);
}

/** Renders shapes back-to-front with 4x4 supersampled coverage. */
function render(size, shapes) {
  const rgba = Buffer.alloc(size * size * 4);
  const samples = 4;
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      let [r, g, b] = [0, 0, 0];
      let a = 0;
      for (const shape of shapes) {
        let coverage = 0;
        for (let sy = 0; sy < samples; sy += 1) {
          for (let sx = 0; sx < samples; sx += 1) {
            const px = x + (sx + 0.5) / samples;
            const py = y + (sy + 0.5) / samples;
            if (shape.distance(px, py) <= 0) coverage += 1;
          }
        }
        coverage /= samples * samples;
        if (coverage === 0) continue;
        const [sr, sg, sb] = shape.color;
        r = sr * coverage + r * (1 - coverage);
        g = sg * coverage + g * (1 - coverage);
        b = sb * coverage + b * (1 - coverage);
        a = coverage + a * (1 - coverage);
      }
      const offset = (y * size + x) * 4;
      rgba[offset] = Math.round(r);
      rgba[offset + 1] = Math.round(g);
      rgba[offset + 2] = Math.round(b);
      rgba[offset + 3] = Math.round(a * 255);
    }
  }
  return rgba;
}

/** The favicon.svg artwork expressed in a 0..64 unit square, scaled to `size`. */
function markShapes(size) {
  const u = size / 64;
  const circle = (color, cx, cy, r) => ({
    color,
    distance: (x, y) => ellipse(x, y, cx * u, cy * u, r * u, r * u),
  });

  return [
    {
      color: CANVAS,
      distance: (x, y) => roundedRect(x, y, 32 * u, 32 * u, 32 * u, 32 * u, 14 * u),
    },
    circle(SAGE_DARK, 15, 18, 12.5),
    circle(SAGE_DARK, 49, 18, 12.5),
    circle(ROSE, 15, 18, 6.5),
    circle(ROSE, 49, 18, 6.5),
    { color: SAGE_DARK, distance: (x, y) => ellipse(x, y, 32 * u, 38 * u, 17.5 * u, 16 * u) },
    circle(CANVAS, 25.5, 36, 2.3),
    circle(CANVAS, 38.5, 36, 2.3),
    circle(ROSE, 32, 45, 3.2),
  ];
}

function writePng(name, size) {
  const png = encodePng(size, size, render(size, markShapes(size)));
  writeFileSync(resolve(publicDir, name), png);
  return png;
}

function writeIco(name, pngForIco, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  const entry = Buffer.alloc(16);
  entry[0] = size;
  entry[1] = size;
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(pngForIco.length, 8);
  entry.writeUInt32LE(22, 12);
  writeFileSync(resolve(publicDir, name), Buffer.concat([header, entry, pngForIco]));
}

function writeOgImage() {
  const width = 1200;
  const height = 630;
  const rgba = Buffer.alloc(width * height * 4);
  const markSize = 320;
  const mark = render(markSize, markShapes(markSize));
  const markX = Math.round((width - markSize) / 2);
  const markY = Math.round((height - markSize) / 2);

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const offset = (y * width + x) * 4;
      // Soft rose wash in the top-right corner, mirroring the site shell gradient.
      const wash = Math.max(0, 1 - Math.hypot(x - width * 0.89, y - height * 0.06) / 460) * 0.18;
      rgba[offset] = Math.round(CANVAS[0] * (1 - wash) + ROSE[0] * wash);
      rgba[offset + 1] = Math.round(CANVAS[1] * (1 - wash) + ROSE[1] * wash);
      rgba[offset + 2] = Math.round(CANVAS[2] * (1 - wash) + ROSE[2] * wash);
      rgba[offset + 3] = 255;

      const mx = x - markX;
      const my = y - markY;
      if (mx < 0 || my < 0 || mx >= markSize || my >= markSize) continue;
      const markOffset = (my * markSize + mx) * 4;
      const alpha = mark[markOffset + 3] / 255;
      if (alpha === 0) continue;
      for (let channel = 0; channel < 3; channel += 1) {
        rgba[offset + channel] = Math.round(
          mark[markOffset + channel] * alpha + rgba[offset + channel] * (1 - alpha),
        );
      }
    }
  }

  writeFileSync(resolve(publicDir, 'og-image.png'), encodePng(width, height, rgba));
}

mkdirSync(publicDir, { recursive: true });
const favicon32 = writePng('favicon-32.png', 32);
writePng('apple-touch-icon.png', 180);
writePng('icon-192.png', 192);
writePng('icon-512.png', 512);
writeIco('favicon.ico', favicon32, 32);
writeOgImage();

console.log('Brand raster assets written to public/.');
