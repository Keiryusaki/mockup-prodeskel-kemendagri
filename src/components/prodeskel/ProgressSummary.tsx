'use client';

import { useMemo, useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button, Icon, ChevronDown, Dropdown, DropdownTrigger, DropdownPanel, DropdownItem } from '@/ui';
import { ChartPanel } from '@/components/data-display/ChartPanel';
import { ProgressBarList } from '@/components/data-display/ProgressBarList';
import { RankedRegionList } from '@/components/data-display/RankedRegionList';
import { PROVINCE_PROGRESS, TOP_REGENCIES } from './region-data';

type SortMode = 'top' | 'bottom' | 'all';

const SORT_LABELS: Record<SortMode, string> = {
  top: '10 Provinsi Tertinggi',
  bottom: '10 Provinsi Terendah',
  all: 'Semua Provinsi',
};

export interface ProgressSummaryProps {
  selectedProvince?: string | null;
}

export function ProgressSummary({ selectedProvince }: ProgressSummaryProps) {
  const [sortMode, setSortMode] = useState<SortMode>('top');

  const sortedProvinces = useMemo(() => {
    const base = [...PROVINCE_PROGRESS];
    if (sortMode === 'bottom') return base.sort((a, b) => a.progress - b.progress);
    return base.sort((a, b) => b.progress - a.progress);
  }, [sortMode]);

  return (
    <ChartPanel
      className="!h-auto"
      headingLevel="5"
      title="Ringkasan Progres Nasional"
      description="Perbandingan capaian pendataan desa dan kelurahan berdasarkan provinsi."
      action={
        <div className="flex items-center gap-2">
          <span className="hidden !h-9 items-center rounded-md border border-border-subtle px-2.5 text-xs font-medium text-ink sm:inline-flex">
            2026
          </span>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Button
                variant="outline"
                size="sm"
                iconRight={<Icon icon={ChevronDown} size="xs" aria-hidden="true" />}
                className="!h-9 focus-visible:!outline-pd-primary-300"
              >
                {SORT_LABELS[sortMode]}
              </Button>
            </DropdownTrigger>
            <DropdownPanel className="min-w-[220px]">
              {(Object.keys(SORT_LABELS) as SortMode[]).map((mode) => (
                <DropdownItem
                  key={mode}
                  icon={sortMode === mode ? <Check size={14} /> : undefined}
                  onClick={() => setSortMode(mode)}
                  className={
                    sortMode === mode
                      ? 'bg-pd-primary-50 text-pd-primary-700 hover:!bg-pd-primary-50'
                      : 'hover:!bg-pd-neutral-50'
                  }
                >
                  {SORT_LABELS[mode]}
                </DropdownItem>
              ))}
            </DropdownPanel>
          </Dropdown>
        </div>
      }
    >
      <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(0,1fr)_250px]">
        <ProgressBarList
          items={sortedProvinces.map((r) => ({ label: r.name, value: r.progress }))}
          highlightLabel={selectedProvince}
        />
        <div className="lg:border-l lg:border-border-subtle lg:pl-5">
          <RankedRegionList
            title="Kabupaten/Kota Teratas"
            items={TOP_REGENCIES.map((r) => ({ rank: r.rank, name: r.name, value: r.progress }))}
          />
          <Button variant="outline" size="sm" fullWidth className="mt-3" iconRight={<ArrowRight size={14} aria-hidden="true" />}>
            Lihat Peringkat Lengkap
          </Button>
        </div>
      </div>
    </ChartPanel>
  );
}
