'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { DATA_CATEGORIES } from '@/components/prodeskel/data-categories';

const OPEN_DELAY = 120;
const CLOSE_DELAY = 180;

export function DataProdeskelMegaMenu({ active = false }: { active?: boolean }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const openTimer = useRef<number | undefined>(undefined);
  const closeTimer = useRef<number | undefined>(undefined);

  const clearTimers = () => {
    window.clearTimeout(openTimer.current);
    window.clearTimeout(closeTimer.current);
  };

  const scheduleOpen = () => {
    clearTimers();
    openTimer.current = window.setTimeout(() => setOpen(true), OPEN_DELAY);
  };

  const scheduleClose = () => {
    clearTimers();
    closeTimer.current = window.setTimeout(() => setOpen(false), CLOSE_DELAY);
  };

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  useEffect(() => () => clearTimers(), []);

  return (
    // No `relative` here on purpose — the panel below anchors to Nara's
    // `.nara-topbar` (which is itself `position: relative` and spans the
    // full bar width), not to this small trigger, so it can align with the
    // page container instead of just the trigger's own bounds.
    <div ref={wrapperRef} onMouseEnter={scheduleOpen} onMouseLeave={scheduleClose}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
        className={`inline-flex items-center gap-1 rounded-lg border px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pd-secondary-400 ${
          open || active
            ? 'border-pd-primary-100 bg-pd-primary-50 text-pd-primary-700'
            : 'border-transparent text-text-main hover:border-pd-primary-100 hover:bg-pd-primary-50 hover:text-pd-primary-700'
        }`}
      >
        Data Prodeskel
        <ChevronDown size={15} className={`transition-transform duration-150 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Data Prodeskel"
          className="absolute left-1/2 top-full z-popover mt-2 w-[min(960px,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-xl border border-border-subtle bg-surface shadow-lg"
        >
          <div className="grid grid-cols-[minmax(0,280px)_1fr]">
            <div className="flex flex-col justify-between bg-subtle p-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">Data Prodeskel</p>
                <h3 className="mt-2 text-xl font-bold text-text-main">Jelajahi Data Desa dan Kelurahan</h3>
                <p className="mt-3 text-sm text-ink">
                  Akses data profil, potensi, kependudukan, dan tingkat perkembangan desa/kelurahan di seluruh
                  Indonesia.
                </p>
              </div>
              <Link
                href="/data-prodeskel/kependudukan"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex h-8 self-start items-center gap-1.5 rounded-md bg-primary px-3 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pd-secondary-400"
              >
                Buka Data Kependudukan
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-1 p-5">
              {DATA_CATEGORIES.map((cat) => (
                <a
                  key={cat.title}
                  href={cat.href ?? '/#data-utama'}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-pd-primary-50"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <cat.icon size={18} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-center gap-1 text-sm font-semibold text-text-main">
                      {cat.title}
                      <ArrowRight
                        size={13}
                        className="shrink-0 -translate-x-1 opacity-0 transition-all duration-150 group-hover:translate-x-0 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="mt-0.5 line-clamp-2 block text-xs text-ink">{cat.description}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
