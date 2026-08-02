'use client';

import { useEffect, useRef, useState } from 'react';
import { Download, Share2, X } from 'lucide-react';
import { Button, Divider } from '@/ui';
import { formatNumber } from './population.data';
import type { PopulationRow } from './population.types';
import { StatusBadge } from './RegionalDataTable';

interface RegionDetailDrawerProps {
  row: PopulationRow | null;
  onClose: () => void;
  onShare: (row: PopulationRow) => void;
  onDownload: (row: PopulationRow) => void;
}

type DetailTab = 'summary' | 'population' | 'social' | 'economy';

const detailTabs: { id: DetailTab; label: string }[] = [
  { id: 'summary', label: 'Ringkasan' },
  { id: 'population', label: 'Kependudukan' },
  { id: 'social', label: 'Sosial' },
  { id: 'economy', label: 'Ekonomi' },
];

const provinceCodes: Record<string, string> = {
  'Jawa Barat': '32',
  'Jawa Tengah': '33',
  'DI Yogyakarta': '34',
  'Jawa Timur': '35',
  Bali: '51',
  'DKI Jakarta': '31',
  Lampung: '18',
  'Sumatera Barat': '13',
  'Kalimantan Timur': '64',
  'Sulawesi Selatan': '73',
};

export function RegionDetailDrawer({ row, onClose, onShare, onDownload }: RegionDetailDrawerProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [activeTab, setActiveTab] = useState<DetailTab>('summary');

  useEffect(() => {
    if (!row) return;
    setActiveTab('summary');
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    closeRef.current?.focus();
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [row, onClose]);

  if (!row) return null;

  const malePercent = (row.male / row.population) * 100;
  const regionCode = `${provinceCodes[row.province] ?? '00'}.${String((row.id % 12) + 1).padStart(2, '0')}.${String((row.id % 18) + 1).padStart(2, '0')}.${String(1000 + row.id)}`;
  const rwCount = 6 + (row.id % 9);
  const rtCount = rwCount * 7 + row.id;
  const area = (1.2 + row.id * 0.31).toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const regionType = row.village.startsWith('Kelurahan') ? 'Kelurahan' : 'Desa';

  return (
    <div className="fixed inset-0 z-modal">
      <button type="button" tabIndex={-1} aria-label="Tutup detail wilayah" className="absolute inset-0 bg-pd-neutral-900/40" onClick={onClose} />
      <aside role="dialog" aria-modal="true" aria-labelledby="region-detail-title" className="absolute inset-y-0 right-0 flex w-full flex-col bg-surface shadow-lg sm:max-w-[500px]">
        <header className="border-b border-border-subtle px-5 pt-4 sm:px-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-primary">Detail Wilayah</p>
              <h2 id="region-detail-title" className="mt-2 text-xl font-bold text-text-main">{row.village}</h2>
              <p className="mt-1 text-xs font-medium text-text-muted">Kode Wilayah: {regionCode}</p>
              <p className="mt-1 text-sm text-ink">Kec. {row.district}, {row.regency}</p>
              <p className="text-sm text-text-muted">{row.province}</p>
            </div>
            <button ref={closeRef} type="button" onClick={onClose} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-text-muted hover:bg-subtle hover:text-text-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-pd-secondary-400" aria-label="Tutup detail">
              <X size={18} aria-hidden="true" />
            </button>
          </div>
          <div className="mt-3 flex items-center gap-2"><StatusBadge status={row.status} /><span className="rounded-full bg-pd-primary-50 px-2 py-1 text-[10px] font-bold text-primary">Tahun Data {row.period}</span></div>
          <div role="tablist" aria-label="Kategori detail wilayah" className="mt-4 flex gap-5 overflow-x-auto">
            {detailTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`region-tab-${tab.id}`}
                aria-selected={activeTab === tab.id}
                aria-controls={`region-panel-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 border-b-2 pb-3 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-pd-secondary-400 ${activeTab === tab.id ? 'border-primary text-primary' : 'border-transparent text-text-muted hover:text-text-main'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">
          {activeTab === 'summary' ? <div role="tabpanel" id="region-panel-summary" aria-labelledby="region-tab-summary">
          <section>
            <h3 className="text-sm font-bold text-text-main">Informasi Umum</h3>
            <dl className="mt-3 grid grid-cols-2 gap-x-5 gap-y-3 rounded-lg border border-border-subtle p-4 text-sm">
              {[
                ['Luas Wilayah', `${area} km²`],
                ['Jumlah RW', String(rwCount)],
                ['Jumlah RT', String(rtCount)],
                ['Status Wilayah', regionType],
                ['Klasifikasi', regionType === 'Kelurahan' ? 'Perkotaan' : 'Perdesaan'],
                ['Periode Data', String(row.period)],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs text-text-muted">{label}</dt>
                  <dd className="mt-0.5 font-semibold text-text-main">{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <Divider className="my-5" />

          <section>
            <h3 className="text-sm font-bold text-text-main">Ringkasan Kependudukan</h3>
            <dl className="mt-3 grid grid-cols-2 gap-3">
              {[
                ['Jumlah Penduduk', row.population],
                ['Laki-laki', row.male],
                ['Perempuan', row.female],
                ['Kepala Keluarga', row.households],
              ].map(([label, value]) => (
                <div key={String(label)} className="rounded-lg border border-border-subtle bg-subtle p-3">
                  <dt className="text-xs text-text-muted">{label}</dt>
                  <dd className="mt-1 text-lg font-bold tabular-nums text-text-main">{formatNumber(Number(value))}</dd>
                </div>
              ))}
            </dl>
          </section>

          <Divider className="my-5" />

          <section>
            <h3 className="text-sm font-bold text-text-main">Komposisi Penduduk</h3>
            <div className="mt-3 overflow-hidden rounded-full bg-pd-accent-100" role="img" aria-label={`Laki-laki ${malePercent.toFixed(1)} persen, perempuan ${(100 - malePercent).toFixed(1)} persen`}>
              <div className="h-3 rounded-full bg-primary" style={{ width: `${malePercent}%` }} />
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-ink">
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-primary" />Laki-laki {malePercent.toFixed(1)}%</span>
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-pd-accent-400" />Perempuan {(100 - malePercent).toFixed(1)}%</span>
            </div>
          </section>

          <Divider className="my-5" />

          <section>
            <h3 className="text-sm font-bold text-text-main">Metadata</h3>
            <dl className="mt-3 divide-y divide-border-subtle rounded-lg border border-border-subtle">
              {[
                ['Periode Data', String(row.period)],
                ['Terakhir Diperbarui', row.updatedAt],
                ['Sumber Data', row.source],
                ['Status', row.status],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-4 px-3 py-2.5 text-sm">
                  <dt className="text-text-muted">{label}</dt>
                  <dd className="text-right font-medium text-text-main">{value}</dd>
                </div>
              ))}
            </dl>
          </section>
          </div> : null}

          {activeTab === 'population' ? <section role="tabpanel" id="region-panel-population" aria-labelledby="region-tab-population">
            <h3 className="text-sm font-bold text-text-main">Profil Kependudukan</h3>
            <p className="mt-1 text-xs leading-5 text-text-muted">Ikhtisar struktur penduduk dan rumah tangga berdasarkan data aktif {row.period}.</p>
            <dl className="mt-4 divide-y divide-border-subtle rounded-lg border border-border-subtle">
              {[
                ['Jumlah Penduduk', `${formatNumber(row.population)} jiwa`],
                ['Penduduk Laki-laki', `${formatNumber(row.male)} jiwa`],
                ['Penduduk Perempuan', `${formatNumber(row.female)} jiwa`],
                ['Jumlah Kepala Keluarga', `${formatNumber(row.households)} KK`],
                ['Rata-rata Anggota Keluarga', `${(row.population / row.households).toLocaleString('id-ID', { maximumFractionDigits: 1 })} jiwa`],
              ].map(([label, value]) => <div key={label} className="flex items-center justify-between gap-4 px-4 py-3 text-sm"><dt className="text-text-muted">{label}</dt><dd className="text-right font-semibold text-text-main">{value}</dd></div>)}
            </dl>
          </section> : null}

          {activeTab === 'social' ? <section role="tabpanel" id="region-panel-social" aria-labelledby="region-tab-social">
            <h3 className="text-sm font-bold text-text-main">Indikator Sosial</h3>
            <p className="mt-1 text-xs leading-5 text-text-muted">Gambaran awal layanan dasar dan kelembagaan sosial wilayah.</p>
            <dl className="mt-4 grid grid-cols-2 gap-3">
              {[['Fasilitas Pendidikan', `${8 + row.id} unit`],['Fasilitas Kesehatan', `${2 + (row.id % 5)} unit`],['Posyandu', `${4 + (row.id % 7)} unit`],['Lembaga Kemasyarakatan', `${3 + (row.id % 4)} lembaga`]].map(([label, value]) => <div key={label} className="rounded-lg border border-border-subtle bg-subtle p-3"><dt className="text-xs text-text-muted">{label}</dt><dd className="mt-1 text-base font-bold text-text-main">{value}</dd></div>)}
            </dl>
          </section> : null}

          {activeTab === 'economy' ? <section role="tabpanel" id="region-panel-economy" aria-labelledby="region-tab-economy">
            <h3 className="text-sm font-bold text-text-main">Potensi Ekonomi</h3>
            <p className="mt-1 text-xs leading-5 text-text-muted">Ringkasan unit usaha, kelembagaan ekonomi, dan potensi unggulan wilayah.</p>
            <dl className="mt-4 divide-y divide-border-subtle rounded-lg border border-border-subtle">
              {[['BUM Desa/Kelurahan', regionType === 'Desa' ? 'Aktif' : 'Tidak berlaku'],['UMKM Terdata', `${36 + row.id * 4} unit`],['Pasar Desa/Kelurahan', `${1 + (row.id % 3)} unit`],['Potensi Unggulan', row.id % 2 === 0 ? 'Perdagangan dan jasa' : 'Pertanian dan pangan']].map(([label, value]) => <div key={label} className="flex items-center justify-between gap-4 px-4 py-3 text-sm"><dt className="text-text-muted">{label}</dt><dd className="text-right font-semibold text-text-main">{value}</dd></div>)}
            </dl>
          </section> : null}
        </div>

        <footer className="border-t border-border-subtle bg-surface px-5 py-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-2">
            <Button size="sm">Lihat Profil Lengkap</Button>
            <Button size="sm" variant="outline" iconLeft={<Download size={14} aria-hidden="true" />} onClick={() => onDownload(row)}>Unduh Data Wilayah</Button>
            <Button size="sm" variant="ghost" iconLeft={<Share2 size={14} aria-hidden="true" />} onClick={() => onShare(row)}>Bagikan</Button>
          </div>
        </footer>
      </aside>
    </div>
  );
}
