interface BrandProps {
  eyebrow: string;
  name: string;
}

export function Brand({ eyebrow, name }: BrandProps) {
  return (
    <div className="brand">
      {/* Temporary mark. Replace with the real logo in Phase 11; keep the shapes in sync
          with public/favicon.svg and scripts/generate-icons.mjs. */}
      <svg className="brand__mark" viewBox="1 4 62 51" aria-hidden="true" focusable="false">
        <g fill="currentColor">
          <circle cx="15" cy="18" r="12.5" />
          <circle cx="49" cy="18" r="12.5" />
        </g>
        <g className="brand__mark-accent">
          <circle cx="15" cy="18" r="6.5" />
          <circle cx="49" cy="18" r="6.5" />
        </g>
        <ellipse cx="32" cy="38" rx="17.5" ry="16" fill="currentColor" />
        <g className="brand__mark-eyes">
          <circle cx="25.5" cy="36" r="2.3" />
          <circle cx="38.5" cy="36" r="2.3" />
        </g>
        <circle className="brand__mark-accent" cx="32" cy="45" r="3.2" />
      </svg>
      <span className="brand__wordmark">
        <span className="brand__name">{name}</span>
        <span className="brand__eyebrow">{eyebrow}</span>
      </span>
    </div>
  );
}
