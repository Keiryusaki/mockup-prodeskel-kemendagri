import { Badge } from '@/ui';
import type { ProvinceMockEntry } from './province-mock-data';

export interface RegionSummaryCardProps {
  name: string;
  data?: ProvinceMockEntry;
}

export function RegionSummaryCard({ name, data }: RegionSummaryCardProps) {
  return (
    <div className="rounded-lg border border-border-subtle bg-subtle p-4">
      <div className="flex items-center justify-between gap-2">
        <p className="font-semibold text-text-main">{name}</p>
        {data ? (
          <Badge tone="accent" variant="soft" size="sm">
            {data.status}
          </Badge>
        ) : null}
      </div>

      {data ? (
        <>
          <p className="mt-1 text-sm text-ink">
            Capaian Pendataan: <span className="font-semibold text-text-main">{data.progress.toString().replace('.', ',')}%</span>
          </p>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center">
            <div>
              <p className="text-sm font-bold text-text-main">{data.regencies}</p>
              <p className="text-[11px] text-ink">Kabupaten/Kota</p>
            </div>
            <div>
              <p className="text-sm font-bold text-text-main">{data.districts}</p>
              <p className="text-[11px] text-ink">Kecamatan</p>
            </div>
            <div>
              <p className="text-sm font-bold text-text-main">{data.villages.toLocaleString('id-ID')}</p>
              <p className="text-[11px] text-ink">Desa/Kelurahan</p>
            </div>
          </div>
          <p className="mt-2 text-xs text-ink">Diperbarui {data.updatedAt}</p>
        </>
      ) : (
        <p className="mt-1 text-sm text-ink">Detail lengkap untuk wilayah ini belum tersedia pada mockup ini.</p>
      )}
    </div>
  );
}
