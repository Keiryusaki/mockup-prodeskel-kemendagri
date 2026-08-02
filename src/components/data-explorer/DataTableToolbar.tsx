'use client';

import { Columns3, Download, ListFilter, Rows3, Search, SlidersHorizontal } from 'lucide-react';
import {
  Button,
  Checkbox,
  Dropdown,
  DropdownItem,
  DropdownPanel,
  DropdownSeparator,
  DropdownTrigger,
  Input,
  Popover,
} from '@/ui';
import { COLUMN_LABELS, DEFAULT_COLUMNS } from './population.data';
import type { OptionalColumn, SortDirection, SortKey } from './population.types';

interface DataTableToolbarProps {
  search: string;
  resultCount: number;
  density: 'compact' | 'comfortable';
  visibleColumns: Set<OptionalColumn>;
  onSearchChange: (value: string) => void;
  onDensityChange: (value: 'compact' | 'comfortable') => void;
  onVisibleColumnsChange: (columns: Set<OptionalColumn>) => void;
  onSortChange: (key: SortKey, direction: SortDirection) => void;
  onExport: (format: string) => void;
}

const columnKeys = Object.keys(COLUMN_LABELS) as OptionalColumn[];

export function DataTableToolbar({
  search,
  resultCount,
  density,
  visibleColumns,
  onSearchChange,
  onDensityChange,
  onVisibleColumnsChange,
  onSortChange,
  onExport,
}: DataTableToolbarProps) {
  const toggleColumn = (key: OptionalColumn) => {
    const next = new Set(visibleColumns);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    onVisibleColumnsChange(next);
  };

  return (
    <div className="border-b border-border-subtle bg-surface p-3 lg:p-4">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <Input
            size="sm"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            onClear={() => onSearchChange('')}
            clearable
            leadingIcon={<Search size={15} aria-hidden="true" />}
            placeholder="Cari wilayah atau data..."
            aria-label="Cari wilayah atau data"
            className="w-full max-w-md"
          />
          <span className="hidden whitespace-nowrap text-xs font-medium text-text-muted sm:inline">
            {new Intl.NumberFormat('id-ID').format(resultCount)} hasil
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="lg:hidden">
            <Button
              size="sm"
              variant="outline"
              iconLeft={<ListFilter size={14} aria-hidden="true" />}
              onClick={() => document.getElementById('dataset-filter')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Filter
            </Button>
          </div>

          <Popover
            side="bottom"
            align="end"
            content={
              <div className="w-64 p-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-bold text-text-main">Kelola Kolom</p>
                  <button
                    type="button"
                    className="text-xs font-semibold text-primary hover:text-primary-hover"
                    onClick={() => onVisibleColumnsChange(new Set(columnKeys))}
                  >
                    Tampilkan Semua
                  </button>
                </div>
                <div className="mt-3 grid gap-2">
                  {columnKeys.map((key) => (
                    <Checkbox
                      key={key}
                      size="sm"
                      checked={visibleColumns.has(key)}
                      label={COLUMN_LABELS[key]}
                      onChange={() => toggleColumn(key)}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  className="mt-3 border-t border-border-subtle pt-3 text-xs font-semibold text-primary hover:text-primary-hover"
                  onClick={() => onVisibleColumnsChange(new Set(DEFAULT_COLUMNS))}
                >
                  Reset Kolom
                </button>
              </div>
            }
          >
            <Button size="sm" variant="outline" iconLeft={<Columns3 size={14} aria-hidden="true" />}>
              <span className="hidden sm:inline">Kelola Kolom</span>
              <span className="sm:hidden">Kolom</span>
            </Button>
          </Popover>

          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Button size="sm" variant="outline" iconLeft={<SlidersHorizontal size={14} aria-hidden="true" />}>
                Urutkan
              </Button>
            </DropdownTrigger>
            <DropdownPanel className="min-w-[220px]">
              <DropdownItem onClick={() => onSortChange('village', 'asc')}>Wilayah A–Z</DropdownItem>
              <DropdownItem onClick={() => onSortChange('population', 'desc')}>Penduduk terbanyak</DropdownItem>
              <DropdownItem onClick={() => onSortChange('households', 'desc')}>Kepala keluarga terbanyak</DropdownItem>
              <DropdownItem onClick={() => onSortChange('updatedAt', 'desc')}>Pembaruan terbaru</DropdownItem>
            </DropdownPanel>
          </Dropdown>

          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Button size="sm" variant="outline" iconLeft={<Download size={14} aria-hidden="true" />}>
                Ekspor
              </Button>
            </DropdownTrigger>
            <DropdownPanel className="min-w-[160px]">
              {['CSV', 'XLSX', 'PDF'].map((format) => (
                <DropdownItem key={format} onClick={() => onExport(format)}>Ekspor {format}</DropdownItem>
              ))}
            </DropdownPanel>
          </Dropdown>

          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Button size="sm" variant="outline" iconLeft={<Rows3 size={14} aria-hidden="true" />}>
                Density
              </Button>
            </DropdownTrigger>
            <DropdownPanel className="min-w-[170px]">
              <DropdownItem onClick={() => onDensityChange('compact')}>
                Compact {density === 'compact' ? '✓' : ''}
              </DropdownItem>
              <DropdownItem onClick={() => onDensityChange('comfortable')}>
                Comfortable {density === 'comfortable' ? '✓' : ''}
              </DropdownItem>
              <DropdownSeparator />
              <div className="px-3 py-2 text-xs text-text-muted">Saat ini: {density === 'compact' ? 'Compact' : 'Comfortable'}</div>
            </DropdownPanel>
          </Dropdown>
        </div>
      </div>
      <p className="mt-2 text-xs font-medium text-text-muted sm:hidden">
        {new Intl.NumberFormat('id-ID').format(resultCount)} hasil
      </p>
    </div>
  );
}
