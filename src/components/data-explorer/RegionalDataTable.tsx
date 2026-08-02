'use client';

import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { createPortal } from 'react-dom';
import { ArrowDown, ArrowUp, ArrowUpDown, SearchX, MoreHorizontal } from 'lucide-react';
import {
  Badge,
  Button,
  EmptyState,
  Pagination,
  type BadgeTone,
} from '@/ui';
import { formatNumber } from './population.data';
import type { OptionalColumn, PopulationRow, SortDirection, SortKey } from './population.types';
import { PortalSelect } from './PortalSelect';

interface RegionalDataTableProps {
  rows: PopulationRow[];
  totalResults: number;
  visibleColumns: Set<OptionalColumn>;
  density: 'compact' | 'comfortable';
  sortKey: SortKey;
  sortDirection: SortDirection;
  page: number;
  pageSize: number;
  onSort: (key: SortKey) => void;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
  onOpenRow: (row: PopulationRow, trigger: HTMLElement) => void;
  onRowAction: (action: string, row: PopulationRow) => void;
  onReset: () => void;
}

const STATUS_TONE: Record<PopulationRow['status'], BadgeTone> = {
  Terverifikasi: 'success',
  'Dalam Validasi': 'info',
  'Perlu Perbaikan': 'warning',
  Draft: 'secondary',
};

export function StatusBadge({ status }: { status: PopulationRow['status'] }) {
  return <Badge size="sm" variant="soft" tone={STATUS_TONE[status]}>{status}</Badge>;
}

interface SortableHeaderProps {
  label: string;
  sortKeyValue: SortKey;
  activeKey: SortKey;
  direction: SortDirection;
  align?: 'left' | 'right';
  onSort: (key: SortKey) => void;
}

function SortableHeader({ label, sortKeyValue, activeKey, direction, align = 'left', onSort }: SortableHeaderProps) {
  const active = sortKeyValue === activeKey;
  const SortIcon = active ? (direction === 'asc' ? ArrowUp : ArrowDown) : ArrowUpDown;
  return (
    <button
      type="button"
      onClick={() => onSort(sortKeyValue)}
      className={`inline-flex w-full items-center gap-1 font-semibold hover:text-primary ${align === 'right' ? 'justify-end' : ''}`}
      aria-label={`Urutkan berdasarkan ${label}`}
    >
      {label}
      <SortIcon size={12} className={active ? 'text-primary' : 'text-text-muted'} aria-hidden="true" />
    </button>
  );
}

export function RegionalDataTable({
  rows,
  totalResults,
  visibleColumns,
  density,
  sortKey,
  sortDirection,
  page,
  pageSize,
  onSort,
  onPageChange,
  onPageSizeChange,
  onOpenRow,
  onRowAction,
  onReset,
}: RegionalDataTableProps) {
  const [actionMenu, setActionMenu] = useState<{ row: PopulationRow; top: number; left: number } | null>(null);
  const actionMenuRef = useRef<HTMLDivElement>(null);
  const totalPages = Math.max(1, Math.ceil(totalResults / pageSize));
  const firstResult = totalResults ? (page - 1) * pageSize + 1 : 0;
  const lastResult = Math.min(page * pageSize, totalResults);
  const rowPadding = density === 'compact' ? 'py-2' : 'py-3.5';

  const handleKeyDown = (event: KeyboardEvent<HTMLTableRowElement>, row: PopulationRow) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onOpenRow(row, event.currentTarget);
    }
  };

  useEffect(() => {
    if (!actionMenu) return;
    const closeOnPointerDown = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      if (!actionMenuRef.current?.contains(target) && !target.closest('[data-row-action-trigger]')) setActionMenu(null);
    };
    const closeOnKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') setActionMenu(null);
    };
    const closeOnScroll = () => setActionMenu(null);
    document.addEventListener('pointerdown', closeOnPointerDown);
    document.addEventListener('keydown', closeOnKeyDown);
    window.addEventListener('scroll', closeOnScroll, true);
    return () => {
      document.removeEventListener('pointerdown', closeOnPointerDown);
      document.removeEventListener('keydown', closeOnKeyDown);
      window.removeEventListener('scroll', closeOnScroll, true);
    };
  }, [actionMenu]);

  const openActionMenu = (row: PopulationRow, trigger: HTMLButtonElement) => {
    const rect = trigger.getBoundingClientRect();
    const menuWidth = 220;
    const menuHeight = 184;
    const top = rect.bottom + menuHeight + 8 > window.innerHeight ? rect.top - menuHeight - 6 : rect.bottom + 6;
    const left = Math.max(8, Math.min(window.innerWidth - menuWidth - 8, rect.right - menuWidth));
    setActionMenu({ row, top, left });
  };

  const runRowAction = (action: string, row: PopulationRow) => {
    setActionMenu(null);
    onRowAction(action, row);
  };

  if (!totalResults) {
    return (
      <div className="py-10">
        <EmptyState
          icon={<SearchX size={30} aria-hidden="true" />}
          title="Data tidak ditemukan"
          description="Belum ada data yang sesuai dengan filter atau kata kunci yang dipilih."
          action={<Button size="sm" onClick={onReset}>Reset Filter</Button>}
        />
      </div>
    );
  }

  return (
    <>
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[1280px] border-collapse text-[13px]">
          <thead className="sticky top-0 z-20 bg-subtle text-ink">
            <tr className="border-b border-border-subtle">
              <th className="sticky left-0 z-30 min-w-[190px] bg-subtle px-4 py-3 text-left">
                <SortableHeader label="Wilayah" sortKeyValue="village" activeKey={sortKey} direction={sortDirection} onSort={onSort} />
              </th>
              {visibleColumns.has('province') && <th className="min-w-[130px] px-3 py-3 text-left">Provinsi</th>}
              {visibleColumns.has('regency') && <th className="min-w-[170px] px-3 py-3 text-left">Kabupaten/Kota</th>}
              {visibleColumns.has('district') && <th className="min-w-[130px] px-3 py-3 text-left">Kecamatan</th>}
              {visibleColumns.has('population') && <th className="min-w-[130px] px-3 py-3 text-right"><SortableHeader label="Penduduk" sortKeyValue="population" activeKey={sortKey} direction={sortDirection} align="right" onSort={onSort} /></th>}
              {visibleColumns.has('male') && <th className="min-w-[100px] px-3 py-3 text-right"><SortableHeader label="Laki-laki" sortKeyValue="male" activeKey={sortKey} direction={sortDirection} align="right" onSort={onSort} /></th>}
              {visibleColumns.has('female') && <th className="min-w-[100px] px-3 py-3 text-right"><SortableHeader label="Perempuan" sortKeyValue="female" activeKey={sortKey} direction={sortDirection} align="right" onSort={onSort} /></th>}
              {visibleColumns.has('households') && <th className="min-w-[110px] px-3 py-3 text-right"><SortableHeader label="Kepala Keluarga" sortKeyValue="households" activeKey={sortKey} direction={sortDirection} align="right" onSort={onSort} /></th>}
              {visibleColumns.has('period') && <th className="min-w-[85px] px-3 py-3 text-center"><SortableHeader label="Periode" sortKeyValue="period" activeKey={sortKey} direction={sortDirection} onSort={onSort} /></th>}
              {visibleColumns.has('status') && <th className="min-w-[130px] px-3 py-3 text-left">Status</th>}
              {visibleColumns.has('updatedAt') && <th className="min-w-[145px] px-3 py-3 text-left"><SortableHeader label="Diperbarui" sortKeyValue="updatedAt" activeKey={sortKey} direction={sortDirection} onSort={onSort} /></th>}
              {visibleColumns.has('source') && <th className="min-w-[170px] px-3 py-3 text-left">Sumber Data</th>}
              <th className="sticky right-0 z-30 w-14 bg-subtle px-3 py-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => {
              const stripeClass = rowIndex % 2 === 1 ? 'bg-pd-neutral-50' : 'bg-surface';
              return (
              <tr
                key={row.id}
                tabIndex={0}
                onClick={(event) => onOpenRow(row, event.currentTarget)}
                onKeyDown={(event) => handleKeyDown(event, row)}
                className={`group cursor-pointer border-b border-border-subtle outline-none transition-colors hover:bg-pd-primary-50 focus-visible:bg-pd-primary-50 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-pd-secondary-400 ${stripeClass}`}
              >
                <td className={`sticky left-0 z-10 px-4 ${rowPadding} ${stripeClass} group-hover:bg-pd-primary-50 group-focus-visible:bg-pd-primary-50`}>
                  <p className="font-semibold text-text-main">{row.village}</p>
                  <p className="mt-0.5 text-xs text-text-muted">Kec. {row.district}</p>
                </td>
                {visibleColumns.has('province') && <td className={`px-3 text-ink ${rowPadding}`}>{row.province}</td>}
                {visibleColumns.has('regency') && <td className={`px-3 text-ink ${rowPadding}`}>{row.regency}</td>}
                {visibleColumns.has('district') && <td className={`px-3 text-ink ${rowPadding}`}>{row.district}</td>}
                {visibleColumns.has('population') && <td className={`px-3 text-right font-semibold tabular-nums text-text-main ${rowPadding}`}>{formatNumber(row.population)}</td>}
                {visibleColumns.has('male') && <td className={`px-3 text-right tabular-nums text-ink ${rowPadding}`}>{formatNumber(row.male)}</td>}
                {visibleColumns.has('female') && <td className={`px-3 text-right tabular-nums text-ink ${rowPadding}`}>{formatNumber(row.female)}</td>}
                {visibleColumns.has('households') && <td className={`px-3 text-right tabular-nums text-ink ${rowPadding}`}>{formatNumber(row.households)}</td>}
                {visibleColumns.has('period') && <td className={`px-3 text-center tabular-nums text-ink ${rowPadding}`}>{row.period}</td>}
                {visibleColumns.has('status') && <td className={`px-3 ${rowPadding}`}><StatusBadge status={row.status} /></td>}
                {visibleColumns.has('updatedAt') && <td className={`px-3 text-ink ${rowPadding}`}>{row.updatedAt}</td>}
                {visibleColumns.has('source') && <td className={`px-3 text-ink ${rowPadding}`}>{row.source}</td>}
                <td className={`sticky right-0 z-10 px-3 text-center ${stripeClass} group-hover:bg-pd-primary-50 group-focus-visible:bg-pd-primary-50 ${rowPadding}`} onClick={(event) => event.stopPropagation()}>
                  <button
                    type="button"
                    data-row-action-trigger
                    aria-haspopup="menu"
                    aria-expanded={actionMenu?.row.id === row.id}
                    aria-label={`Aksi untuk ${row.village}`}
                    onClick={(event) => openActionMenu(row, event.currentTarget)}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md text-text-muted hover:bg-pd-primary-100 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-pd-secondary-400"
                  >
                    <MoreHorizontal size={17} aria-hidden="true" />
                  </button>
                </td>
              </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="divide-y divide-border-subtle md:hidden">
        {rows.map((row) => (
          <button key={row.id} type="button" onClick={(event) => onOpenRow(row, event.currentTarget)} className="block w-full bg-surface p-4 text-left transition-colors hover:bg-pd-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-pd-secondary-400">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-semibold text-text-main">{row.village}</p>
                <p className="mt-0.5 text-xs text-text-muted">{row.regency}, {row.province}</p>
              </div>
              <StatusBadge status={row.status} />
            </div>
            <dl className="mt-3 grid grid-cols-3 gap-3 text-xs">
              <div><dt className="text-text-muted">Penduduk</dt><dd className="mt-0.5 font-semibold tabular-nums text-text-main">{formatNumber(row.population)}</dd></div>
              <div><dt className="text-text-muted">Kepala Keluarga</dt><dd className="mt-0.5 font-semibold tabular-nums text-text-main">{formatNumber(row.households)}</dd></div>
              <div><dt className="text-text-muted">Periode</dt><dd className="mt-0.5 font-semibold tabular-nums text-text-main">{row.period}</dd></div>
            </dl>
          </button>
        ))}
      </div>

      <footer className="flex flex-col gap-3 border-t border-border-subtle bg-surface px-4 py-3 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-xs text-text-muted">Menampilkan {firstResult}–{lastResult} dari {formatNumber(totalResults)} data</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="flex items-center gap-2 text-xs text-ink">
            <span className="whitespace-nowrap">Baris per halaman:</span>
            <PortalSelect
              size="sm"
              value={String(pageSize)}
              options={[10, 25, 50, 100].map((value) => ({ value: String(value), label: String(value) }))}
              onChange={(value) => onPageSizeChange(Number(value))}
              className="w-20"
            />
          </label>
          <Pagination current={page} total={totalPages} onChange={onPageChange} siblings={1} />
        </div>
      </footer>

      {actionMenu && typeof document !== 'undefined' ? createPortal(
        <div
          ref={actionMenuRef}
          role="menu"
          aria-label={`Aksi untuk ${actionMenu.row.village}`}
          className="fixed z-modal w-[220px] overflow-hidden rounded-lg border border-border-subtle bg-surface py-1 shadow-md"
          style={{ top: actionMenu.top, left: actionMenu.left }}
        >
          {[
            ['detail', 'Lihat Detail'],
            ['profile', 'Buka Profil Lengkap'],
            ['download', 'Unduh Data Wilayah'],
          ].map(([action, label]) => (
            <button key={action} type="button" role="menuitem" onClick={() => runRowAction(action, actionMenu.row)} className="block w-full px-3 py-2 text-left text-sm text-text-main transition-colors hover:bg-pd-primary-50 focus-visible:bg-pd-primary-50 focus-visible:outline-none">
              {label}
            </button>
          ))}
          <div className="my-1 border-t border-border-subtle" />
          <button type="button" role="menuitem" onClick={() => runRowAction('copy', actionMenu.row)} className="block w-full px-3 py-2 text-left text-sm text-text-main transition-colors hover:bg-pd-primary-50 focus-visible:bg-pd-primary-50 focus-visible:outline-none">
            Salin Tautan
          </button>
        </div>,
        document.body,
      ) : null}
    </>
  );
}
