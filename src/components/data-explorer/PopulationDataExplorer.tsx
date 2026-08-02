'use client';

import { useCallback, useMemo, useRef, useState } from 'react';
import { Info } from 'lucide-react';
import { Breadcrumb, Card, Skeleton, ToastProvider, useToast } from '@/ui';
import { PageContainer } from '@/components/layout/PageContainer';
import { ActiveFilterChips } from './ActiveFilterChips';
import { AdministrativeFilter } from './AdministrativeFilter';
import { DataPageHeader } from './DataPageHeader';
import { DatasetSummary } from './DatasetSummary';
import { DataTableToolbar } from './DataTableToolbar';
import { RegionDetailDrawer } from './RegionDetailDrawer';
import { RegionalDataTable } from './RegionalDataTable';
import { DEFAULT_COLUMNS, DEFAULT_FILTERS, populationRows } from './population.data';
import type {
  DatasetFilters,
  OptionalColumn,
  PopulationRow,
  SortDirection,
  SortKey,
} from './population.types';

function TableLoadingSkeleton() {
  return (
    <div className="space-y-2 p-4" aria-label="Memuat data" aria-busy="true">
      {Array.from({ length: 7 }).map((_, index) => (
        <div key={index} className="grid grid-cols-[1.5fr_1fr_1fr_0.8fr] gap-4 py-2">
          <Skeleton className="h-7" />
          <Skeleton className="h-7" />
          <Skeleton className="h-7" />
          <Skeleton className="h-7" />
        </div>
      ))}
    </div>
  );
}

function PopulationDataExplorerContent() {
  const { toast } = useToast();
  const [draftFilters, setDraftFilters] = useState<DatasetFilters>({ ...DEFAULT_FILTERS });
  const [filters, setFilters] = useState<DatasetFilters>({ ...DEFAULT_FILTERS });
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>('village');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [density, setDensity] = useState<'compact' | 'comfortable'>('compact');
  const [visibleColumns, setVisibleColumns] = useState<Set<OptionalColumn>>(new Set(DEFAULT_COLUMNS));
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(25);
  const [selectedRow, setSelectedRow] = useState<PopulationRow | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const notifyExport = (format: string, row?: PopulationRow) => {
    toast({
      title: `File ${format} sedang disiapkan`,
      description: row ? `Data ${row.village} akan segera tersedia.` : 'Data sesuai filter aktif akan segera tersedia.',
      tone: 'info',
    });
  };

  const filteredRows = useMemo(() => {
    const term = search.trim().toLocaleLowerCase('id-ID');
    return populationRows.filter((row) => {
      if (filters.year && String(row.period) !== filters.year) return false;
      if (filters.province && row.province !== filters.province) return false;
      if (filters.regency && row.regency !== filters.regency) return false;
      if (filters.district && row.district !== filters.district) return false;
      if (filters.village && row.village !== filters.village) return false;
      if (filters.status && row.status !== filters.status) return false;
      if (filters.source && row.source !== filters.source) return false;
      if (filters.minPopulation && row.population < Number(filters.minPopulation)) return false;
      if (filters.maxPopulation && row.population > Number(filters.maxPopulation)) return false;
      if (filters.minHouseholds && row.households < Number(filters.minHouseholds)) return false;
      if (filters.maxHouseholds && row.households > Number(filters.maxHouseholds)) return false;
      if (filters.updatedAfter && row.updatedAtValue < filters.updatedAfter) return false;
      if (filters.updatedBefore && row.updatedAtValue > filters.updatedBefore) return false;
      if (!term) return true;
      return [row.village, row.district, row.regency, row.province, row.source, row.status]
        .some((value) => value.toLocaleLowerCase('id-ID').includes(term));
    });
  }, [filters, search]);

  const sortedRows = useMemo(() => {
    return [...filteredRows].sort((a, b) => {
      const aValue = sortKey === 'updatedAt' ? a.updatedAtValue : a[sortKey];
      const bValue = sortKey === 'updatedAt' ? b.updatedAtValue : b[sortKey];
      const comparison = typeof aValue === 'number' && typeof bValue === 'number'
        ? aValue - bValue
        : String(aValue).localeCompare(String(bValue), 'id');
      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }, [filteredRows, sortDirection, sortKey]);

  const pageRows = useMemo(() => {
    const start = (page - 1) * pageSize;
    return sortedRows.slice(start, start + pageSize);
  }, [page, pageSize, sortedRows]);

  const flashLoading = () => {
    setIsLoading(true);
    window.setTimeout(() => setIsLoading(false), 320);
  };

  const applyFilters = () => {
    setFilters({ ...draftFilters });
    setPage(1);
    flashLoading();
  };

  const resetAll = () => {
    setDraftFilters({ ...DEFAULT_FILTERS });
    setFilters({ ...DEFAULT_FILTERS });
    setSearch('');
    setPage(1);
  };

  const removeFilter = (key: keyof DatasetFilters) => {
    const next = { ...filters, [key]: '' };
    if (key === 'province') Object.assign(next, { regency: '', district: '', village: '' });
    if (key === 'regency') Object.assign(next, { district: '', village: '' });
    if (key === 'district') Object.assign(next, { village: '' });
    setFilters(next);
    setDraftFilters(next);
    setPage(1);
  };

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDirection((direction) => direction === 'asc' ? 'desc' : 'asc');
    else {
      setSortKey(key);
      setSortDirection('asc');
    }
    setPage(1);
  };

  const handleToolbarSort = (key: SortKey, direction: SortDirection) => {
    setSortKey(key);
    setSortDirection(direction);
    setPage(1);
  };

  const openRow = (row: PopulationRow, trigger: HTMLElement) => {
    returnFocusRef.current = trigger;
    setSelectedRow(row);
  };

  const closeDrawer = useCallback(() => {
    setSelectedRow(null);
    window.setTimeout(() => returnFocusRef.current?.focus(), 0);
  }, []);

  const rowAction = (action: string, row: PopulationRow) => {
    if (action === 'detail') {
      openRow(row, document.activeElement as HTMLElement);
      return;
    }
    if (action === 'download') {
      notifyExport('CSV', row);
      return;
    }
    toast({
      title: action === 'copy' ? 'Tautan berhasil disalin' : 'Profil wilayah dibuka',
      description: row.village,
      tone: 'success',
    });
  };

  return (
    <main className="prodeskel-data-explorer min-w-0 overflow-x-clip bg-app pb-10">
      <PageContainer className="min-w-0 max-w-full">
        <div className="pt-5">
          <Breadcrumb items={[
            { label: 'Beranda', href: '/' },
            { label: 'Data Prodeskel', href: '/#data-utama' },
            { label: 'Kependudukan' },
          ]} />
        </div>

        <DataPageHeader
          onShare={() => toast({ title: 'Tautan halaman berhasil disalin', tone: 'success' })}
          onExport={notifyExport}
        />

        <div className="space-y-4">
          <AdministrativeFilter value={draftFilters} rows={populationRows} onChange={setDraftFilters} onApply={applyFilters} onReset={resetAll} />
          <DatasetSummary />
          <ActiveFilterChips filters={filters} onRemove={removeFilter} onClear={resetAll} />

          <Card flush className="overflow-hidden">
            <DataTableToolbar
              search={search}
              resultCount={filteredRows.length}
              density={density}
              visibleColumns={visibleColumns}
              onSearchChange={(value) => { setSearch(value); setPage(1); }}
              onDensityChange={setDensity}
              onVisibleColumnsChange={setVisibleColumns}
              onSortChange={handleToolbarSort}
              onExport={notifyExport}
            />
            {isLoading ? (
              <TableLoadingSkeleton />
            ) : (
              <RegionalDataTable
                rows={pageRows}
                totalResults={filteredRows.length}
                visibleColumns={visibleColumns}
                density={density}
                sortKey={sortKey}
                sortDirection={sortDirection}
                page={page}
                pageSize={pageSize}
                onSort={handleSort}
                onPageChange={setPage}
                onPageSizeChange={(value) => { setPageSize(value); setPage(1); }}
                onOpenRow={openRow}
                onRowAction={rowAction}
                onReset={resetAll}
              />
            )}
          </Card>

          <p className="flex items-center justify-end gap-1.5 text-xs text-text-muted">
            <Info size={13} aria-hidden="true" />
            Data yang ditampilkan merupakan data simulasi untuk kebutuhan visualisasi konsep.
          </p>
        </div>
      </PageContainer>

      <RegionDetailDrawer
        row={selectedRow}
        onClose={closeDrawer}
        onShare={(row) => toast({ title: 'Tautan wilayah berhasil disalin', description: row.village, tone: 'success' })}
        onDownload={(row) => notifyExport('CSV', row)}
      />
    </main>
  );
}

export function PopulationDataExplorer() {
  return (
    <ToastProvider>
      <PopulationDataExplorerContent />
    </ToastProvider>
  );
}
