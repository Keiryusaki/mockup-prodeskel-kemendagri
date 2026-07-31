'use client';

import { useEffect, useMemo, useState } from 'react';
import { Maximize2, Plus, Minus, ArrowRight } from 'lucide-react';
import { IconButton, Icon, Text, Button, Search, EmptyState } from '@/ui';
import { ChartPanel } from '@/components/data-display/ChartPanel';
import { IndonesiaProvincesMap } from './IndonesiaProvincesMap';
import { RegionSearch } from './RegionSearch';
import { PROVINCE_SHAPES } from './indonesia-provinces-data';
import { PROVINCE_MOCK_DATA } from './province-mock-data';

export interface RegionalMapPanelProps {
  selectedProvince: string | null;
  onSelectProvince: (name: string | null) => void;
}

function RegionInfoStrip({ name }: { name: string }) {
  const shape = PROVINCE_SHAPES.find((p) => p.name === name);
  const data = PROVINCE_MOCK_DATA[name];

  return (
    <div className="flex min-h-[88px] flex-col justify-center gap-1 rounded-lg border border-border-subtle bg-subtle px-4 py-2.5">
      <div className="flex items-center justify-between gap-2">
        <p className="truncate text-sm font-semibold text-text-main">{name}</p>
        {shape ? (
          <p className="shrink-0 text-xs font-semibold text-primary">
            {shape.progress.toString().replace('.', ',')}% Capaian Pendataan
          </p>
        ) : null}
      </div>
      <p className="truncate text-xs text-ink">
        {data
          ? `${data.regencies} Kabupaten/Kota · ${data.districts} Kecamatan · ${data.villages.toLocaleString('id-ID')} Desa/Kelurahan`
          : 'Detail lengkap untuk wilayah ini belum tersedia pada mockup ini.'}
      </p>
      <div className="flex items-center justify-between gap-2">
        <p className="text-[11px] text-ink">{data ? `Diperbarui ${data.updatedAt}` : ' '}</p>
        <a
          href="#"
          className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-primary hover:text-primary-hover"
        >
          Lihat Profil Wilayah
          <ArrowRight size={12} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

export function RegionalMapPanel({ selectedProvince, onSelectProvince }: RegionalMapPanelProps) {
  const [query, setQuery] = useState('');

  const matches = useMemo(() => {
    if (!query.trim()) return null;
    const q = query.trim().toLowerCase();
    return PROVINCE_SHAPES.filter((p) => p.name.toLowerCase().includes(q));
  }, [query]);

  const hasMatch = matches === null || matches.length > 0;

  // Search picks and highlights the matching province once it's unambiguous.
  useEffect(() => {
    if (matches && matches.length === 1) {
      onSelectProvince(matches[0].name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matches]);

  return (
    <ChartPanel
      className="!h-auto"
      title="Jelajahi Data Wilayah"
      description="Pilih wilayah pada peta atau cari nama daerah untuk melihat profil dan progres pendataannya."
    >
      <RegionSearch value={query} onChange={setQuery} placeholder="Cari nama wilayah..." />

      <div className="relative mt-4 flex h-[260px] shrink-0 items-center overflow-hidden rounded-lg bg-subtle">
        {hasMatch ? (
          <>
            <IndonesiaProvincesMap
              className="w-full"
              highlightQuery={query}
              selectedProvince={selectedProvince}
              onSelectProvince={onSelectProvince}
            />
            <div className="absolute bottom-3 right-3 flex flex-col gap-1.5">
              <IconButton icon={<Icon icon={Plus} size="sm" aria-hidden="true" />} aria-label="Perbesar peta" variant="glass" size="sm" />
              <IconButton icon={<Icon icon={Minus} size="sm" aria-hidden="true" />} aria-label="Perkecil peta" variant="glass" size="sm" />
              <IconButton icon={<Maximize2 size={16} aria-hidden="true" />} aria-label="Layar penuh" variant="glass" size="sm" />
            </div>
          </>
        ) : (
          <EmptyState
            className="w-full py-6"
            icon={<Icon icon={Search} size="lg" aria-hidden="true" />}
            title="Wilayah tidak ditemukan"
            description={`Tidak ada provinsi yang cocok dengan "${query}".`}
            action={
              <Button size="sm" variant="outline" onClick={() => setQuery('')}>
                Reset Pencarian
              </Button>
            }
          />
        )}
      </div>

      <div className="mt-3">
        <div className="flex items-center justify-between">
          <Text size="sm" className="text-ink">
            Capaian Pendataan 2026
          </Text>
        </div>
        <div className="mt-1 h-1 w-full rounded-full bg-gradient-to-r from-pd-secondary-300 via-pd-primary-500 to-pd-primary-800" />
        <div className="mt-0.5 flex justify-between text-xs text-ink">
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </div>
      </div>

      <div className="mt-3">
        {selectedProvince ? (
          <RegionInfoStrip name={selectedProvince} />
        ) : (
          <p className="flex min-h-[88px] items-center justify-center rounded-lg border border-dashed border-border-subtle p-4 text-center text-sm text-ink">
            Pilih wilayah pada peta untuk melihat ringkasan data.
          </p>
        )}
      </div>
    </ChartPanel>
  );
}
