import { resolve } from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { seo } from './scripts/vite-plugin-seo';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, import.meta.dirname, 'VITE_');

  return {
    plugins: [react(), seo(env.VITE_SITE_URL ?? 'https://example.invalid/')],
    build: {
      rollupOptions: {
        input: {
          de: resolve(import.meta.dirname, 'index.html'),
          en: resolve(import.meta.dirname, 'en/index.html'),
          legalDe: resolve(import.meta.dirname, 'rechtliches/index.html'),
          legalEn: resolve(import.meta.dirname, 'en/legal/index.html'),
        },
      },
    },
  };
});
