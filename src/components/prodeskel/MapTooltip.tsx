export interface MapTooltipData {
  name: string;
  progress: number;
  villages?: number;
  x: number;
  y: number;
}

export function MapTooltip({ data }: { data: MapTooltipData }) {
  return (
    <div
      className="pointer-events-none fixed z-tooltip w-52 rounded-lg border border-border-subtle bg-surface p-3 shadow-lg"
      style={{ left: data.x + 14, top: data.y + 14 }}
    >
      <p className="text-sm font-semibold text-text-main">{data.name}</p>
      <p className="mt-0.5 text-xs text-ink">
        Capaian Pendataan {data.progress.toString().replace('.', ',')}%
      </p>
      {typeof data.villages === 'number' ? (
        <p className="text-xs text-ink">{data.villages.toLocaleString('id-ID')} Desa/Kelurahan</p>
      ) : null}
      <p className="mt-1 text-[11px] text-primary">Klik untuk melihat ringkasan</p>
    </div>
  );
}
