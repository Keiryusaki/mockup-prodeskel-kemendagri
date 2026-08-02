'use client';

import { useEffect, useMemo, useState } from 'react';
import { Maximize2, Minimize2, Plus, Minus, ArrowRight, X } from 'lucide-react';
import { IconButton, Icon, Text, Button, Search, EmptyState, Heading } from '@/ui';
import { ChartPanel } from '@/components/data-display/ChartPanel';
import { IndonesiaProvincesMap } from './IndonesiaProvincesMap';
import { RegionSearch } from './RegionSearch';
import { PROVINCE_SHAPES } from './indonesia-provinces-data';
import { PROVINCE_MOCK_DATA } from './province-mock-data';

const ZOOM_MIN = 1;
const ZOOM_MAX = 3;
const ZOOM_STEP = 0.5;

export interface RegionalMapPanelProps {
  selectedProvince: string | null;
  onSelectProvince: (name: string | null) => void;
}

function RegionInfoOverlay({ name, onDismiss }: { name: string; onDismiss: () => void }) {
  const shape = PROVINCE_SHAPES.find((p) => p.name === name);
  const data = PROVINCE_MOCK_DATA[name];

  return (
    <div className="absolute bottom-3 left-3 right-16 z-10 flex max-w-xl flex-col gap-1 rounded-lg border border-border-subtle bg-surface/95 px-3 py-2 shadow-md backdrop-blur-sm">
      <IconButton
        icon={<X size={14} aria-hidden="true" />}
        aria-label="Tutup ringkasan wilayah"
        variant="ghost"
        size="sm"
        className="!absolute !right-1.5 !top-1.5 !h-7 !w-7"
        onClick={onDismiss}
      />
      <div className="flex items-center justify-between gap-2 pr-7">
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
        <p className="text-[11px] text-ink">{data ? `Diperbarui ${data.updatedAt}` : ' '}</p>
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

interface MapZoomControlsProps {
  zoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onToggleFullscreen: () => void;
  isFullscreen?: boolean;
}

function MapZoomControls({ zoom, onZoomIn, onZoomOut, onToggleFullscreen, isFullscreen }: MapZoomControlsProps) {
  return (
    <div className="absolute bottom-3 right-3 flex flex-col gap-1.5">
      <IconButton
        icon={<Icon icon={Plus} size="sm" aria-hidden="true" />}
        aria-label="Perbesar peta"
        variant="glass"
        size="sm"
        disabled={zoom >= ZOOM_MAX}
        onClick={onZoomIn}
      />
      <IconButton
        icon={<Icon icon={Minus} size="sm" aria-hidden="true" />}
        aria-label="Perkecil peta"
        variant="glass"
        size="sm"
        disabled={zoom <= ZOOM_MIN}
        onClick={onZoomOut}
      />
      <IconButton
        icon={isFullscreen ? <Minimize2 size={16} aria-hidden="true" /> : <Maximize2 size={16} aria-hidden="true" />}
        aria-label={isFullscreen ? 'Keluar layar penuh' : 'Layar penuh'}
        variant="glass"
        size="sm"
        onClick={onToggleFullscreen}
      />
    </div>
  );
}

export function RegionalMapPanel({ selectedProvince, onSelectProvince }: RegionalMapPanelProps) {
  const [query, setQuery] = useState('');
  const [zoom, setZoom] = useState(ZOOM_MIN);
  const [isFullscreen, setIsFullscreen] = useState(false);

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

  // Close the fullscreen view with Escape.
  useEffect(() => {
    if (!isFullscreen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFullscreen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isFullscreen]);

  const zoomIn = () => setZoom((z) => Math.min(ZOOM_MAX, z + ZOOM_STEP));
  const zoomOut = () => setZoom((z) => Math.max(ZOOM_MIN, z - ZOOM_STEP));

  const mapArea = hasMatch ? (
    <>
      <IndonesiaProvincesMap
        className="w-full"
        highlightQuery={query}
        selectedProvince={selectedProvince}
        onSelectProvince={onSelectProvince}
        zoom={zoom}
      />
      {selectedProvince ? (
        <RegionInfoOverlay name={selectedProvince} onDismiss={() => onSelectProvince(null)} />
      ) : null}
      <MapZoomControls
        zoom={zoom}
        onZoomIn={zoomIn}
        onZoomOut={zoomOut}
        onToggleFullscreen={() => setIsFullscreen((f) => !f)}
        isFullscreen={isFullscreen}
      />
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
  );

  return (
    <ChartPanel
      title="Jelajahi Data Wilayah"
      description="Pilih wilayah pada peta atau cari nama daerah untuk melihat profil dan progres pendataannya."
    >
      <RegionSearch value={query} onChange={setQuery} placeholder="Cari nama wilayah..." />

      <div className="relative mt-4 flex h-[260px] shrink-0 items-center overflow-hidden rounded-lg bg-subtle">
        {!isFullscreen ? mapArea : null}
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

      {isFullscreen ? (
        <div
          className="fixed inset-0 z-modal flex items-center justify-center bg-pd-neutral-900/60 p-4 sm:p-8"
          onClick={() => setIsFullscreen(false)}
        >
          <div
            className="relative flex h-full w-full max-w-5xl flex-col rounded-xl bg-surface p-5 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <Heading level="5" as="h3">
                  Jelajahi Data Wilayah
                </Heading>
                <Text variant="muted" size="sm" className="mt-1 !text-[13px]">
                  Pilih wilayah pada peta atau cari nama daerah untuk melihat profil dan progres pendataannya.
                </Text>
              </div>
              <IconButton
                icon={<X size={18} aria-hidden="true" />}
                aria-label="Tutup layar penuh"
                variant="ghost"
                size="sm"
                onClick={() => setIsFullscreen(false)}
              />
            </div>
            <div className="relative mt-4 flex flex-1 items-center overflow-hidden rounded-lg bg-subtle">{mapArea}</div>
          </div>
        </div>
      ) : null}
    </ChartPanel>
  );
}
