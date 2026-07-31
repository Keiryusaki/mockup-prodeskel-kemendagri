import { PROVINCE_SHAPES, PROVINCES_VIEWBOX } from './indonesia-provinces-data';

// Approximate positions of a few major cities (real lng/lat projected into the
// same viewBox as the province shapes), west to east, for the decorative
// glow/connection overlay — not tied to any dataset, purely illustrative.
const GLOW_POINTS: { x: number; y: number; label: string }[] = [
  { x: 75.9, y: 49.9, label: 'Medan' },
  { x: 254.5, y: 263.6, label: 'Jakarta' },
  { x: 383.2, y: 286.8, label: 'Surabaya' },
  { x: 471.6, y: 156.2, label: 'Balikpapan' },
  { x: 528.4, y: 240.9, label: 'Makassar' },
  { x: 993.4, y: 183.6, label: 'Jayapura' },
];

export function HeroIndonesiaMap({ className }: { className?: string }) {
  return (
    <svg
      viewBox={PROVINCES_VIEWBOX}
      className={className}
      role="img"
      aria-label="Ilustrasi peta Indonesia"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heroMapGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1000" y2="0">
          <stop offset="0%" stopColor="rgb(var(--pd-primary-700))" />
          <stop offset="55%" stopColor="rgb(var(--pd-primary-500))" />
          <stop offset="100%" stopColor="rgb(var(--pd-secondary-500))" />
        </linearGradient>
        <radialGradient id="heroMapGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgb(var(--pd-secondary-300))" stopOpacity="0.95" />
          <stop offset="100%" stopColor="rgb(var(--pd-secondary-300))" stopOpacity="0" />
        </radialGradient>
      </defs>

      {PROVINCE_SHAPES.map((province) => (
        <path key={province.name} d={province.path} fill="url(#heroMapGradient)" fillRule="evenodd" fillOpacity={0.9} />
      ))}

      {GLOW_POINTS.map((point, i) =>
        i === 0 ? null : (
          <line
            key={`line-${point.label}`}
            x1={GLOW_POINTS[i - 1].x}
            y1={GLOW_POINTS[i - 1].y}
            x2={point.x}
            y2={point.y}
            stroke="rgb(var(--pd-secondary-200))"
            strokeWidth={1}
            strokeOpacity={0.8}
          />
        ),
      )}

      {GLOW_POINTS.map((point) => (
        <g key={point.label}>
          <circle cx={point.x} cy={point.y} r={16} fill="url(#heroMapGlow)" />
          <circle cx={point.x} cy={point.y} r={3.5} fill="rgb(var(--pd-neutral-0))" />
          <circle cx={point.x} cy={point.y} r={2} fill="rgb(var(--pd-secondary-500))" />
        </g>
      ))}
    </svg>
  );
}
