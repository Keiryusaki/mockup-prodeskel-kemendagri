'use client';

import { useState } from 'react';
import { PROVINCE_SHAPES, PROVINCES_VIEWBOX } from './indonesia-provinces-data';
import { PROVINCE_MOCK_DATA } from './province-mock-data';
import { MapTooltip, type MapTooltipData } from './MapTooltip';

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
  selectedProvince?: string | null;
  onSelectProvince?: (name: string | null) => void;
  /** CSS scale applied to the map — 1 = fit, >1 zooms in around the center. */
  zoom?: number;
}

export function IndonesiaProvincesMap({
  className,
  highlightQuery,
  selectedProvince,
  onSelectProvince,
  zoom = 1,
}: IndonesiaProvincesMapProps) {
  const [hovered, setHovered] = useState<MapTooltipData | null>(null);
  const q = highlightQuery?.trim().toLowerCase();

  return (
    <>
      <svg
        viewBox={PROVINCES_VIEWBOX}
        className={className}
        style={{ transform: `scale(${zoom})`, transformOrigin: '50% 50%', transition: 'transform 150ms ease' }}
        role="img"
        aria-label="Peta interaktif progres pendataan per provinsi (batas wilayah disederhanakan)"
        onClick={() => onSelectProvince?.(null)}
      >
        {PROVINCE_SHAPES.map((province) => {
          const isMatch = !q || province.name.toLowerCase().includes(q);
          const isSelected = selectedProvince === province.name;
          return (
            <path
              key={province.name}
              d={province.path}
              fill={isSelected ? 'rgb(var(--pd-secondary-500))' : progressColor(province.progress)}
              fillRule="evenodd"
              fillOpacity={isMatch ? 0.95 : 0.25}
              stroke={isSelected ? 'rgb(var(--pd-secondary-700))' : 'rgb(var(--pd-neutral-0))'}
              strokeWidth={isSelected ? 2 : 0.6}
              className="cursor-pointer transition-opacity duration-200 hover:opacity-80"
              onMouseEnter={(e) =>
                setHovered({
                  name: province.name,
                  progress: province.progress,
                  villages: PROVINCE_MOCK_DATA[province.name]?.villages,
                  x: e.clientX,
                  y: e.clientY,
                })
              }
              onMouseMove={(e) => setHovered((h) => (h ? { ...h, x: e.clientX, y: e.clientY } : h))}
              onMouseLeave={() => setHovered(null)}
              onClick={(e) => {
                e.stopPropagation();
                onSelectProvince?.(province.name);
              }}
            />
          );
        })}
      </svg>
      {hovered ? <MapTooltip data={hovered} /> : null}
    </>
  );
}
