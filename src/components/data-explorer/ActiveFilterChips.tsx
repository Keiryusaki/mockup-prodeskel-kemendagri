import { X } from 'lucide-react';
import type { DatasetFilters } from './population.types';

type FilterKey = keyof DatasetFilters;

const FILTER_LABELS: Partial<Record<FilterKey, string>> = {
  province: 'Provinsi',
  regency: 'Kabupaten/Kota',
  district: 'Kecamatan',
  village: 'Wilayah',
  status: 'Status',
  source: 'Sumber',
  minPopulation: 'Penduduk min.',
  maxPopulation: 'Penduduk maks.',
  minHouseholds: 'KK min.',
  maxHouseholds: 'KK maks.',
  updatedAfter: 'Diperbarui sejak',
  updatedBefore: 'Diperbarui hingga',
};

interface ActiveFilterChipsProps {
  filters: DatasetFilters;
  onRemove: (key: FilterKey) => void;
  onClear: () => void;
}

export function ActiveFilterChips({ filters, onRemove, onClear }: ActiveFilterChipsProps) {
  const entries = (Object.entries(filters) as [FilterKey, string][]).filter(
    ([key, value]) => key !== 'year' && Boolean(value),
  );

  if (!entries.length) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 rounded-lg border border-pd-primary-100 bg-pd-primary-50 px-3 py-2.5">
      <span className="mr-1 text-xs font-semibold text-ink">Filter aktif:</span>
      {entries.map(([key, value]) => (
        <button
          key={key}
          type="button"
          onClick={() => onRemove(key)}
          className="inline-flex h-7 items-center gap-1.5 rounded-full border border-pd-primary-200 bg-surface px-2.5 text-xs font-medium text-pd-primary-700 transition-colors hover:bg-pd-primary-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pd-secondary-400"
          aria-label={`Hapus filter ${FILTER_LABELS[key]} ${value}`}
        >
          <span>{FILTER_LABELS[key]}: {value}</span>
          <X size={12} aria-hidden="true" />
        </button>
      ))}
      <button
        type="button"
        onClick={onClear}
        className="ml-auto rounded-sm text-xs font-semibold text-primary hover:text-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pd-secondary-400"
      >
        Hapus Semua
      </button>
    </div>
  );
}
