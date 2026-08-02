'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Expand,
  Home,
  Pause,
  Play,
  Shrink,
} from 'lucide-react';
import { ProdeskelMark } from '@/components/navigation/ProdeskelMark';
import { withBasePath } from '@/lib/base-path';
import { PROPOSAL_SLIDES, SLIDE_COMPONENTS } from './ProposalSlides';

const AUTOPLAY_DELAY = 9000;

export function RedesignProposal() {
  const rootRef = useRef<HTMLElement>(null);
  const activeSlideRef = useRef<HTMLDivElement>(null);
  const outgoingSlideRef = useRef<HTMLDivElement>(null);
  const pointerStartRef = useRef<number | null>(null);
  const currentRef = useRef(0);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [outgoing, setOutgoing] = useState<{ index: number; direction: 'next' | 'prev'; id: number } | null>(null);
  const [playing, setPlaying] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const goTo = useCallback((index: number) => {
    const nextIndex = Math.max(0, Math.min(PROPOSAL_SLIDES.length - 1, index));
    const previousIndex = currentRef.current;
    if (previousIndex === nextIndex) return;
    const nextDirection = nextIndex > previousIndex ? 'next' : 'prev';
    setOutgoing({ index: previousIndex, direction: nextDirection, id: Date.now() });
    setDirection(nextDirection);
    currentRef.current = nextIndex;
    setCurrent(nextIndex);
  }, []);

  const next = useCallback(() => {
    goTo(currentRef.current + 1);
  }, [goTo]);

  const previous = useCallback(() => {
    goTo(currentRef.current - 1);
  }, [goTo]);

  useEffect(() => {
    const match = window.location.hash.match(/slide-(\d+)/);
    if (match) goTo(Number(match[1]) - 1);
  }, [goTo]);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    window.scrollTo(0, 0);
    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, []);

  useEffect(() => {
    window.history.replaceState(null, '', `${window.location.pathname}#slide-${current + 1}`);
  }, [current]);

  useEffect(() => {
    const prepareItems = (root: HTMLDivElement | null, reverse = false) => {
      if (!root) return;
      const items = Array.from(root.querySelectorAll<HTMLElement>('[data-proposal-reveal]'));
      items.forEach((item, index) => {
        const order = reverse ? items.length - index - 1 : index;
        const cappedOrder = Math.min(order, 10);
        item.style.setProperty('--proposal-reveal-index', String(cappedOrder));
        item.style.setProperty('--proposal-reveal-delay', `${cappedOrder * (reverse ? 16 : 62)}ms`);
      });
      root.classList.add('proposal-items-ready');
    };
    const activeRoot = activeSlideRef.current;
    prepareItems(activeRoot);
    prepareItems(outgoingSlideRef.current, true);
    const completionTimer = window.setTimeout(() => activeRoot?.classList.add('proposal-items-complete'), 1400);
    return () => window.clearTimeout(completionTimer);
  }, [current, outgoing]);

  useEffect(() => {
    if (!outgoing) return;
    const timer = window.setTimeout(() => setOutgoing((value) => value?.id === outgoing.id ? null : value), 520);
    return () => window.clearTimeout(timer);
  }, [outgoing]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (target.matches('input, textarea, select, button, a')) return;
      if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
        event.preventDefault();
        next();
      }
      if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        event.preventDefault();
        previous();
      }
      if (event.key === 'Home') goTo(0);
      if (event.key === 'End') goTo(PROPOSAL_SLIDES.length - 1);
      if (event.key.toLowerCase() === 'f') rootRef.current?.requestFullscreen?.();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [goTo, next, previous]);

  useEffect(() => {
    const onFullscreenChange = () => setFullscreen(document.fullscreenElement === rootRef.current);
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  useEffect(() => {
    if (!playing) return;
    if (current === PROPOSAL_SLIDES.length - 1) {
      setPlaying(false);
      return;
    }
    const timer = window.setTimeout(next, AUTOPLAY_DELAY);
    return () => window.clearTimeout(timer);
  }, [current, next, playing]);

  const toggleFullscreen = async () => {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await rootRef.current?.requestFullscreen?.();
  };

  const CurrentSlide = SLIDE_COMPONENTS[current];
  const OutgoingSlide = outgoing ? SLIDE_COMPONENTS[outgoing.index] : null;

  return (
    <main ref={rootRef} className="fixed inset-0 z-[100] flex min-h-[620px] flex-col overflow-hidden bg-pd-primary-950 text-text-main">
      <header className="relative z-30 flex h-[68px] shrink-0 items-center border-b border-border-subtle bg-white/95 px-4 shadow-sm backdrop-blur-md md:px-7">
        <Link href="/" aria-label="Kembali ke Beranda" className="rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pd-secondary-400">
          <ProdeskelMark className="scale-90 origin-left md:scale-100" />
        </Link>
        <div className="mx-5 hidden h-8 w-px bg-border-subtle sm:block" />
        <div className="hidden min-w-0 sm:block">
          <p className="truncate text-xs font-bold uppercase tracking-[0.15em] text-primary">Proposal Redesign Interaktif</p>
          <p className="truncate text-xs text-text-muted">Modernisasi Portal Data Desa dan Kelurahan</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <img src={withBasePath('/proposal/mitreka-horizontal.svg')} alt="Mitreka" className="mr-2 hidden h-6 w-auto xl:block" />
          <Link href="/" className="inline-flex h-9 items-center gap-1.5 rounded-md border border-border-subtle bg-white px-3 text-xs font-semibold text-ink hover:bg-subtle" title="Kembali ke Beranda">
            <Home size={15} aria-hidden="true" /><span className="hidden md:inline">Beranda</span>
          </Link>
          <button type="button" onClick={() => setPlaying((value) => !value)} className="inline-flex h-9 items-center gap-1.5 rounded-md border border-border-subtle bg-white px-3 text-xs font-semibold text-ink hover:bg-subtle" aria-label={playing ? 'Jeda autoplay' : 'Mulai autoplay'}>
            {playing ? <Pause size={15} /> : <Play size={15} />}<span className="hidden lg:inline">{playing ? 'Jeda' : 'Putar'}</span>
          </button>
          <button type="button" onClick={toggleFullscreen} className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border-subtle bg-white text-ink hover:bg-subtle" aria-label={fullscreen ? 'Keluar layar penuh' : 'Layar penuh'} title={fullscreen ? 'Keluar layar penuh' : 'Layar penuh'}>
            {fullscreen ? <Shrink size={16} /> : <Expand size={16} />}
          </button>
        </div>
      </header>

      <section
        className="relative min-h-0 min-w-0 flex-1 overflow-hidden bg-pd-neutral-100 p-2 md:p-3"
        aria-live="polite"
        aria-label={`Slide ${current + 1}: ${PROPOSAL_SLIDES[current].title}`}
        onPointerDown={(event) => { pointerStartRef.current = event.clientX; }}
        onPointerUp={(event) => {
          if (pointerStartRef.current === null) return;
          const delta = event.clientX - pointerStartRef.current;
          pointerStartRef.current = null;
          if (Math.abs(delta) < 60) return;
          if (delta < 0) next(); else previous();
        }}
      >
        <div className="relative h-full w-full min-w-0 max-w-full">
          {OutgoingSlide && outgoing ? <div ref={outgoingSlideRef} key={`outgoing-${outgoing.id}`} aria-hidden="true" className={`proposal-slide-layer proposal-slide-exit pointer-events-none absolute inset-0 z-20 overflow-x-hidden overflow-y-auto rounded-xl bg-white shadow-md ${outgoing.direction === 'prev' ? 'proposal-slide-exit--prev' : ''}`}>
            <OutgoingSlide />
          </div> : null}
          <div ref={activeSlideRef} key={current} className={`proposal-slide-layer proposal-slide-enter absolute inset-0 z-10 overflow-x-hidden overflow-y-auto rounded-xl bg-white shadow-md ${direction === 'prev' ? 'proposal-slide-enter--prev' : ''}`}>
            <CurrentSlide />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-2 hidden items-center md:flex">
          <button type="button" onClick={previous} disabled={current === 0} className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle bg-white/90 text-primary shadow-md backdrop-blur disabled:opacity-30" aria-label="Slide sebelumnya"><ArrowLeft size={18} /></button>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-2 hidden items-center md:flex">
          <button type="button" onClick={next} disabled={current === PROPOSAL_SLIDES.length - 1} className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle bg-white/90 text-primary shadow-md backdrop-blur disabled:opacity-30" aria-label="Slide berikutnya"><ArrowRight size={18} /></button>
        </div>
      </section>

      <nav aria-label="Navigasi slide" className="relative z-30 shrink-0 border-t border-pd-primary-800 bg-pd-primary-950 px-3 py-2 text-white md:px-6">
        <div className="absolute inset-x-0 top-0 h-0.5 bg-white/10"><div className="h-full bg-pd-secondary-400 transition-[width] duration-500" style={{ width: `${((current + 1) / PROPOSAL_SLIDES.length) * 100}%` }} /></div>
        <div className="flex items-center gap-3">
          <button type="button" onClick={previous} disabled={current === 0} className="flex h-9 items-center gap-1 rounded-md border border-white/15 px-3 text-xs font-semibold text-white/80 hover:bg-white/10 disabled:opacity-30"><ArrowLeft size={14} /><span className="hidden sm:inline">Sebelumnya</span></button>
          <div className="prodeskel-scrollbar flex min-w-0 flex-1 items-center justify-center gap-1 overflow-x-auto py-1">
            {PROPOSAL_SLIDES.map((slide, index) => (
              <button
                key={slide.short}
                type="button"
                onClick={() => goTo(index)}
                aria-current={index === current ? 'step' : undefined}
                className={`group flex min-w-[42px] items-center gap-1.5 rounded-md px-1.5 py-1 text-left transition-colors xl:min-w-[92px] ${index === current ? 'bg-white/12 text-white' : 'text-white/50 hover:bg-white/5 hover:text-white/80'}`}
              >
                <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${index === current ? 'bg-pd-secondary-400 text-pd-primary-950' : index < current ? 'bg-white/20 text-white' : 'border border-white/20'}`}>{index < current ? <Check size={12} /> : String(index + 1).padStart(2, '0')}</span>
                <span className="hidden truncate text-[10px] font-semibold xl:block">{slide.short}</span>
              </button>
            ))}
          </div>
          <span className="whitespace-nowrap text-xs font-bold text-white/70">{String(current + 1).padStart(2, '0')} / {PROPOSAL_SLIDES.length}</span>
          <button type="button" onClick={next} disabled={current === PROPOSAL_SLIDES.length - 1} className="flex h-9 items-center gap-1 rounded-md bg-pd-secondary-500 px-3 text-xs font-bold text-pd-primary-950 hover:bg-pd-secondary-400 disabled:opacity-30"><span className="hidden sm:inline">Berikutnya</span><ArrowRight size={14} /></button>
        </div>
      </nav>
    </main>
  );
}
