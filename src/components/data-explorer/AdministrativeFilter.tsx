'use client';

import { useMemo, useState } from 'react';
import { CalendarDays, ChevronDown, RotateCcw, SlidersHorizontal } from 'lucide-react';
import { Button, Card, Input } from '@/ui';
import type { DatasetFilters, PopulationRow } from './population.types';
import { PortalSelect } from './PortalSelect';

interface AdministrativeFilterProps {
  value: DatasetFilters;
  rows: PopulationRow[];
  onChange: (value: DatasetFilters) => void;
  onApply: () => void;
  onReset: () => void;
}

const unique = (values: string[]) => [...new Set(values)].sort((a, b) => a.localeCompare(b, 'id'));
const options = (values: string[], allLabel: string) => [
  { value: '', label: allLabel },
  ...unique(values).map((value) => ({ value, label: value })),
];

interface FilterFieldProps {
  label: string;
  children: React.ReactNode;
}

function FilterField({ label, children }: FilterFieldProps) {
  return (
    <label className="block min-w-0">
      <span className="mb-1.5 block text-xs font-semibold text-ink">{label}</span>
      {children}
    </label>
  );
}

export function AdministrativeFilter({ value, rows, onChange, onApply, onReset }: AdministrativeFilterProps) {
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const provinceRows = value.province ? rows.filter((row) => row.province === value.province) : [];
  const regencyRows = value.regency ? provinceRows.filter((row) => row.regency === value.regency) : [];
  const districtRows = value.district ? regencyRows.filter((row) => row.district === value.district) : [];

  const provinceOptions = useMemo(() => options(rows.map((row) => row.province), 'Semua Provinsi'), [rows]);
  const sourceOptions = useMemo(() => options(rows.map((row) => row.source), 'Semua Sumber'), [rows]);

  const patchValue = (patch: Partial<DatasetFilters>) => onChange({ ...value, ...patch });

  return (
    <Card compact id="dataset-filter" className="min-w-0 scroll-mt-28">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div>
            <h2 className="text-sm font-bold text-text-main">Filter Data Wilayah</h2>
            <p className="mt-0.5 text-xs text-text-muted">Pilih cakupan administratif dan status data.</p>
          </div>
          <div className="self-stretch sm:self-auto">
            <Button
              size="sm"
              variant="ghost"
              iconLeft={<SlidersHorizontal size={15} aria-hidden="true" />}
              iconRight={<ChevronDown size={14} className={advancedOpen ? 'rotate-180' : ''} aria-hidden="true" />}
              onClick={() => setAdvancedOpen((open) => !open)}
              aria-expanded={advancedOpen}
            >
              Filter Lanjutan
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
          <FilterField label="Tahun Data">
            <PortalSelect size="md" value={value.year} options={[{ value: '2026', label: '2026' }, { value: '2025', label: '2025' }]} onChange={(year) => patchValue({ year })} />
          </FilterField>
          <FilterField label="Provinsi">
            <PortalSelect
              size="md"
              value={value.province}
              options={provinceOptions}
              onChange={(province) => patchValue({ province, regency: '', district: '', village: '' })}
            />
          </FilterField>
          <FilterField label="Kabupaten/Kota">
            <PortalSelect
              size="md"
              value={value.regency}
              disabled={!value.province}
              options={options(provinceRows.map((row) => row.regency), 'Semua Kabupaten/Kota')}
              onChange={(regency) => patchValue({ regency, district: '', village: '' })}
            />
          </FilterField>
          <FilterField label="Kecamatan">
            <PortalSelect
              size="md"
              value={value.district}
              disabled={!value.regency}
              options={options(regencyRows.map((row) => row.district), 'Semua Kecamatan')}
              onChange={(district) => patchValue({ district, village: '' })}
            />
          </FilterField>
          <FilterField label="Desa/Kelurahan">
            <PortalSelect
              size="md"
              value={value.village}
              disabled={!value.district}
              options={options(districtRows.map((row) => row.village), 'Semua Desa/Kelurahan')}
              onChange={(village) => patchValue({ village })}
            />
          </FilterField>
          <FilterField label="Status Data">
            <PortalSelect
              size="md"
              value={value.status}
              options={options(rows.map((row) => row.status), 'Semua Status')}
              onChange={(status) => patchValue({ status })}
            />
          </FilterField>
        </div>

        {advancedOpen ? (
          <div className="grid grid-cols-1 gap-3 border-t border-border-subtle pt-4 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-7">
            <FilterField label="Penduduk Minimum">
              <Input size="md" type="number" min="0" value={value.minPopulation} placeholder="Contoh: 5.000" onChange={(event) => patchValue({ minPopulation: event.target.value })} />
            </FilterField>
            <FilterField label="Penduduk Maksimum">
              <Input size="md" type="number" min="0" value={value.maxPopulation} placeholder="Tanpa batas" onChange={(event) => patchValue({ maxPopulation: event.target.value })} />
            </FilterField>
            <FilterField label="KK Minimum">
              <Input size="md" type="number" min="0" value={value.minHouseholds} placeholder="Contoh: 1.000" onChange={(event) => patchValue({ minHouseholds: event.target.value })} />
            </FilterField>
            <FilterField label="KK Maksimum">
              <Input size="md" type="number" min="0" value={value.maxHouseholds} placeholder="Tanpa batas" onChange={(event) => patchValue({ maxHouseholds: event.target.value })} />
            </FilterField>
            <FilterField label="Sumber Data">
              <PortalSelect size="md" value={value.source} options={sourceOptions} onChange={(source) => patchValue({ source })} />
            </FilterField>
            <FilterField label="Diperbarui Sejak">
              <Input
                size="md"
                type="date"
                value={value.updatedAfter}
                trailingIcon={<CalendarDays size={16} className="pointer-events-none" aria-hidden="true" />}
                className="prodeskel-date-input cursor-pointer"
                onClick={(event) => event.currentTarget.showPicker?.()}
                onChange={(event) => patchValue({ updatedAfter: event.target.value })}
              />
            </FilterField>
            <FilterField label="Diperbarui Hingga">
              <Input
                size="md"
                type="date"
                value={value.updatedBefore}
                trailingIcon={<CalendarDays size={16} className="pointer-events-none" aria-hidden="true" />}
                className="prodeskel-date-input cursor-pointer"
                onClick={(event) => event.currentTarget.showPicker?.()}
                onChange={(event) => patchValue({ updatedBefore: event.target.value })}
              />
            </FilterField>
          </div>
        ) : null}

        <div className="flex flex-wrap items-center justify-end gap-2 border-t border-border-subtle pt-4">
          <Button size="sm" variant="ghost" iconLeft={<RotateCcw size={14} aria-hidden="true" />} onClick={onReset}>
            Reset
          </Button>
          <Button size="sm" onClick={onApply}>Terapkan Filter</Button>
        </div>
      </div>
    </Card>
  );
}
