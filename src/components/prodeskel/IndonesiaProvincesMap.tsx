import { PROVINCE_SHAPES, PROVINCES_VIEWBOX } from './indonesia-provinces-data';

function progressColor(pct: number) {
  if (pct >= 90) return 'rgb(var(--pd-secondary-500))';
  if (pct >= 80) return 'rgb(var(--pd-primary-400))';
  if (pct >= 70) return 'rgb(var(--pd-primary-600))';
  return 'rgb(var(--pd-primary-800))';
}

export interface IndonesiaProvincesMapProps {
  className?: string;
  /** When set, non-matching provinces are dimmed to spotlight the search result. */
  highlightQuery?: string;
}

export function IndonesiaProvincesMap({ className, highlightQuery }: IndonesiaProvincesMapProps) {
  const q = highlightQuery?.trim().toLowerCase();

  return (
    <svg
      viewBox={PROVINCES_VIEWBOX}
      className={className}
      role="img"
      aria-label="Peta progres pendataan per provinsi (batas wilayah disederhanakan)"
    >
      {PROVINCE_SHAPES.map((province) => {
        const isMatch = !q || province.name.toLowerCase().includes(q);
        return (
          <path
            key={province.name}
            d={province.path}
            fill={progressColor(province.progress)}
            fillRule="evenodd"
            fillOpacity={isMatch ? 0.95 : 0.25}
            stroke="rgb(var(--pd-neutral-0))"
            strokeWidth={0.6}
            className="cursor-pointer transition-opacity duration-200 hover:opacity-80"
          >
            <title>{`${province.name} — ${province.progress.toString().replace('.', ',')}%`}</title>
          </path>
        );
      })}
    </svg>
  );
}
