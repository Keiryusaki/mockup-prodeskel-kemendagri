'use client';

import { useEffect, useMemo, useState } from 'react';
import { Maximize2, Plus, Minus } from 'lucide-react';
import { IconButton, Icon, Text, Button, Search, EmptyState } from '@/ui';
import { ChartPanel } from '@/components/data-display/ChartPanel';
import { IndonesiaProvincesMap } from './IndonesiaProvincesMap';
import { RegionSearch } from './RegionSearch';
import { RegionSummaryCard } from './RegionSummaryCard';
import { PROVINCE_SHAPES } from './indonesia-provinces-data';
import { PROVINCE_MOCK_DATA } from './province-mock-data';

export interface RegionalMapPanelProps {
  selectedProvince: string | null;
  onSelectProvince: (name: string | null) => void;
}

export function RegionalMapPanel({ selectedProvince, onSelectProvince }: RegionalMapPanelProps) {
  const [query, setQuery] = useState('');
  const [isLoadingDetail, setIsLoadingDetail] = useState(false);

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

  function handleLihatDetail() {
    setIsLoadingDetail(true);
    window.setTimeout(() => setIsLoadingDetail(false), 1200);
  }

  const selectedData = selectedProvince ? PROVINCE_MOCK_DATA[selectedProvince] : undefined;

  return (
    <ChartPanel
      title="Jelajahi Data Wilayah"
      description="Pilih wilayah pada peta atau cari nama daerah untuk melihat profil dan progres pendataannya."
    >
      <RegionSearch value={query} onChange={setQuery} placeholder="Cari nama wilayah..." />

      <div className="relative mt-4 flex flex-1 items-center overflow-hidden rounded-lg bg-subtle">
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
            className="w-full py-10"
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

      <div className="mt-4">
        <Text size="sm" className="text-ink">
          Capaian Pendataan 2026
        </Text>
        <div className="mt-1.5 h-2 w-full rounded-full bg-gradient-to-r from-pd-secondary-300 via-pd-primary-500 to-pd-primary-800" />
        <div className="mt-1 flex justify-between text-xs text-ink">
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </div>
      </div>

      <div className="mt-4">
        {selectedProvince ? (
          <RegionSummaryCard name={selectedProvince} data={selectedData} />
        ) : (
          <p className="rounded-lg border border-dashed border-border-subtle p-4 text-center text-sm text-ink">
            Pilih wilayah pada peta untuk melihat ringkasan data.
          </p>
        )}
      </div>

      <Button
        variant={selectedProvince ? undefined : 'outline'}
        fullWidth
        className="mt-4"
        disabled={!selectedProvince}
        isLoading={isLoadingDetail}
        onClick={handleLihatDetail}
      >
        {selectedProvince ? `Lihat Profil ${selectedProvince}` : 'Lihat Profil Wilayah'}
      </Button>
    </ChartPanel>
  );
}
