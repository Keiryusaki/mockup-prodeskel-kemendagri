'use client';

import { useMemo, useState } from 'react';
import { Maximize2, Plus, Minus } from 'lucide-react';
import { IconButton, Icon, Text, Button, Search, EmptyState } from '@/ui';
import { ChartPanel } from '@/components/data-display/ChartPanel';
import { IndonesiaProvincesMap } from './IndonesiaProvincesMap';
import { RegionSearch } from './RegionSearch';
import { PROVINCE_SHAPES } from './indonesia-provinces-data';

export function RegionalMapPanel() {
  const [query, setQuery] = useState('');
  const [isLoadingDetail, setIsLoadingDetail] = useState(false);

  const hasMatch = useMemo(() => {
    if (!query.trim()) return true;
    const q = query.trim().toLowerCase();
    return PROVINCE_SHAPES.some((p) => p.name.toLowerCase().includes(q));
  }, [query]);

  function handleLihatDetail() {
    setIsLoadingDetail(true);
    window.setTimeout(() => setIsLoadingDetail(false), 1200);
  }

  return (
    <ChartPanel title="Jelajahi Data Wilayah" description="Pilih wilayah pada peta atau gunakan pencarian untuk melihat ringkasan data.">
      <RegionSearch value={query} onChange={setQuery} />

      <div className="relative mt-4 flex flex-1 items-center overflow-hidden rounded-lg bg-subtle">
        {hasMatch ? (
          <>
            <IndonesiaProvincesMap className="w-full" highlightQuery={query} />
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

      <div className="mt-4 flex items-center justify-between gap-3">
        <Text size="sm" className="shrink-0 text-ink">
          Progres Pendataan
        </Text>
        <div className="flex flex-1 items-center gap-2">
          <span className="text-xs text-ink">0%</span>
          <div className="h-2 flex-1 rounded-full bg-gradient-to-r from-pd-secondary-300 via-pd-primary-500 to-pd-primary-800" />
          <span className="text-xs text-ink">100%</span>
        </div>
      </div>

      <Button variant="outline" fullWidth className="mt-4" isLoading={isLoadingDetail} onClick={handleLihatDetail}>
        Lihat Detail Wilayah
      </Button>
    </ChartPanel>
  );
}
