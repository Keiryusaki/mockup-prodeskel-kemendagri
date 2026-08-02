'use client';

import { useEffect, useRef, useState } from 'react';
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
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const dragRef = useRef({
    pointerId: -1,
    startX: 0,
    startY: 0,
    panX: 0,
    panY: 0,
    moved: false,
  });
  const q = highlightQuery?.trim().toLowerCase();

  const clampPan = (x: number, y: number) => {
    const svg = svgRef.current;
    const viewport = svg?.parentElement;
    if (!svg || !viewport || zoom <= 1) return { x: 0, y: 0 };

    const maxX = Math.max(0, (svg.clientWidth * zoom - viewport.clientWidth) / 2);
    const maxY = Math.max(0, (svg.clientHeight * zoom - viewport.clientHeight) / 2);

    return {
      x: Math.max(-maxX, Math.min(maxX, x)),
      y: Math.max(-maxY, Math.min(maxY, y)),
    };
  };

  // Keep the map inside its viewport when zooming out or resizing the window.
  useEffect(() => {
    const keepPanInBounds = () => setPan((current) => clampPan(current.x, current.y));
    keepPanInBounds();
    window.addEventListener('resize', keepPanInBounds);
    return () => window.removeEventListener('resize', keepPanInBounds);
    // clampPan intentionally follows the current zoom value.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zoom]);

  return (
    <>
      <svg
        ref={svgRef}
        viewBox={PROVINCES_VIEWBOX}
        className={className}
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
          transformOrigin: '50% 50%',
          transition: isDragging ? 'none' : 'transform 150ms ease',
          cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
          touchAction: zoom > 1 ? 'none' : 'auto',
          userSelect: 'none',
        }}
        role="img"
        aria-label="Peta interaktif progres pendataan per provinsi (batas wilayah disederhanakan)"
        onClick={() => onSelectProvince?.(null)}
        onClickCapture={(event) => {
          if (dragRef.current.moved) {
            event.preventDefault();
            event.stopPropagation();
            dragRef.current.moved = false;
          }
        }}
        onPointerDown={(event) => {
          if (zoom <= 1 || event.button !== 0) return;
          dragRef.current = {
            pointerId: event.pointerId,
            startX: event.clientX,
            startY: event.clientY,
            panX: pan.x,
            panY: pan.y,
            moved: false,
          };
          setIsDragging(true);
          setHovered(null);
        }}
        onPointerMove={(event) => {
          const drag = dragRef.current;
          if (drag.pointerId !== event.pointerId) return;

          const deltaX = event.clientX - drag.startX;
          const deltaY = event.clientY - drag.startY;
          if (!drag.moved && (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3)) {
            drag.moved = true;
            event.currentTarget.setPointerCapture(event.pointerId);
          }
          setPan(clampPan(drag.panX + deltaX, drag.panY + deltaY));
        }}
        onPointerUp={(event) => {
          if (dragRef.current.pointerId !== event.pointerId) return;
          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
          }
          dragRef.current.pointerId = -1;
          setIsDragging(false);
        }}
        onPointerCancel={(event) => {
          if (dragRef.current.pointerId === event.pointerId) {
            dragRef.current.pointerId = -1;
            dragRef.current.moved = false;
            setIsDragging(false);
          }
        }}
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
