import type { ReactNode } from 'react';
import {
  ArrowRight,
  BarChart3,
  Check,
  Database,
  FileCheck2,
  Gauge,
  Globe2,
  Handshake,
  Landmark,
  Layers3,
  LayoutDashboard,
  Map,
  MonitorSmartphone,
  MousePointer2,
  Search,
  ShieldCheck,
  Sparkles,
  Table2,
} from 'lucide-react';
import { HeroIndonesiaMap } from '@/components/prodeskel/HeroIndonesiaMap';
import { withBasePath } from '@/lib/base-path';
import { MaterialSymbol } from '@/ui/MaterialSymbol';

export const PROPOSAL_SLIDES = [
  { short: 'Cover', title: 'Redesign Prodeskel' },
  { short: 'Analisis', title: 'Masalah Saat Ini' },
  { short: 'Tujuan', title: 'Tujuan Redesign' },
  { short: 'Prinsip', title: 'Prinsip Desain' },
  { short: 'Transformasi', title: 'Before & After' },
  { short: 'Beranda', title: 'Landing Page Baru' },
  { short: 'Data', title: 'Detail Data Prodeskel' },
  { short: 'Sistem', title: 'Design System' },
  { short: 'Roadmap', title: 'Roadmap Implementasi' },
  { short: 'Penutup', title: 'Penutup' },
] as const;

function SlideHeading({ eyebrow, title, description, align = 'left' }: { eyebrow: string; title: string; description: string; align?: 'left' | 'center' }) {
  return (
    <div data-proposal-reveal className={align === 'center' ? 'mx-auto max-w-4xl text-center' : 'max-w-4xl'}>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold leading-tight text-text-main md:text-5xl">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-ink md:text-base">{description}</p>
    </div>
  );
}

function SoftIcon({ children, tone = 'primary', large = false, extraLarge = false }: { children: ReactNode; tone?: 'primary' | 'secondary' | 'accent' | 'success'; large?: boolean; extraLarge?: boolean }) {
  const tones = {
    primary: 'bg-pd-primary-50 text-pd-primary-600',
    secondary: 'bg-pd-secondary-50 text-pd-secondary-700',
    accent: 'bg-pd-accent-50 text-pd-accent-600',
    success: 'bg-success/10 text-pd-success',
  };
  return <span className={`flex shrink-0 items-center justify-center rounded-full ${extraLarge ? 'h-20 w-20' : large ? 'h-16 w-16' : 'h-11 w-11'} ${tones[tone]}`}>{children}</span>;
}

function GlassCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div data-proposal-reveal className={`rounded-xl border-2 border-border-subtle bg-white/85 shadow-sm backdrop-blur-md ${className}`}>{children}</div>;
}

function BrowserShot({ src, alt, cropLegacy = false, className = '' }: { src: string; alt: string; cropLegacy?: boolean; className?: string }) {
  return (
    <div data-proposal-reveal className={`overflow-hidden rounded-xl border border-border-subtle bg-surface shadow-md ${className}`}>
      <div className="flex h-7 items-center gap-1.5 border-b border-border-subtle bg-subtle px-3">
        <span className="h-2.5 w-2.5 rounded-full bg-error" />
        <span className="h-2.5 w-2.5 rounded-full bg-warning" />
        <span className="h-2.5 w-2.5 rounded-full bg-success" />
        <span className="mx-auto h-4 w-2/5 rounded-full bg-pd-neutral-200" />
      </div>
      <div className="relative aspect-video overflow-hidden bg-subtle">
        <img
          src={withBasePath(src)}
          alt={alt}
          className={cropLegacy ? 'h-full w-[132%] max-w-none object-cover object-left-top' : 'h-full w-full object-cover object-top'}
        />
        {cropLegacy ? <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white/90 to-transparent" aria-hidden="true" /> : null}
      </div>
    </div>
  );
}

export function CoverSlide() {
  return (
    <div className="relative flex min-h-full min-w-0 flex-col overflow-hidden bg-gradient-to-br from-white via-white to-pd-primary-50 p-6 md:p-9 xl:p-12">
      <div className="grid min-w-0 flex-1 items-center gap-5 md:grid-cols-[0.8fr_1.2fr] xl:gap-10">
        <div data-proposal-reveal className="relative z-10 flex min-w-0 flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-pd-primary-100 bg-white/80 px-3 py-1.5 text-xs font-semibold text-primary shadow-sm">
            <Sparkles size={14} aria-hidden="true" /> Proposal Interaktif 2026
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.02] text-text-main md:text-5xl xl:text-6xl">Redesign Prodeskel</h1>
          <p className="mt-3 text-lg font-semibold text-pd-secondary-700 md:text-xl xl:text-2xl">Modernisasi Portal Data Desa dan Kelurahan</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-ink md:text-base">Transformasi antarmuka Prodeskel menjadi lebih modern, informatif, mudah dipindai, dan siap dikembangkan.</p>
          <div className="mt-5 flex items-center gap-3 border-t border-border-subtle pt-4">
            <span className="text-xs font-medium text-text-muted">Disusun oleh</span>
            <img src={withBasePath('/proposal/mitreka-horizontal.svg')} alt="Mitreka" className="h-7 w-auto" />
          </div>
        </div>

        <div data-proposal-reveal className="relative flex min-h-[210px] min-w-0 items-center md:min-h-0">
          <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pd-secondary-200/40 blur-3xl" />
          <HeroIndonesiaMap className="relative z-10 w-full drop-shadow-xl" />
        </div>
      </div>

      <div className="relative z-20 mt-5 grid shrink-0 gap-3 sm:grid-cols-2 xl:grid-cols-[0.82fr_0.82fr_1.22fr_1.14fr]">
        <GlassCard className="flex min-h-[154px] flex-col p-4">
          <div className="flex items-start gap-3">
            <SoftIcon tone="secondary"><Landmark size={22} /></SoftIcon>
            <div><h2 className="font-bold text-text-main">Portal Publik</h2><p className="mt-1 text-xs leading-5 text-ink">Akses data desa dan kelurahan yang terbuka dan mudah dipahami.</p></div>
          </div>
          <div className="mt-auto pt-3"><p className="text-2xl font-bold text-pd-secondary-700">83.961</p><p className="text-xs text-text-muted">Desa/Kelurahan</p></div>
        </GlassCard>

        <GlassCard className="flex min-h-[154px] flex-col p-4">
          <div className="flex items-start gap-3">
            <SoftIcon><Database size={22} /></SoftIcon>
            <div><h2 className="font-bold text-text-main">Sistem Data</h2><p className="mt-1 text-xs leading-5 text-ink">Pengelolaan data terintegrasi, akurat, dan siap mendukung kebijakan.</p></div>
          </div>
          <div className="mt-auto pt-3"><p className="text-2xl font-bold text-primary">1.793</p><p className="text-xs text-text-muted">Variabel Data</p></div>
        </GlassCard>

        <GlassCard className="min-h-[154px] p-4">
          <h2 className="text-sm font-bold text-text-main">Sebaran Desa/Kelurahan</h2>
          <div className="mt-2 grid grid-cols-[90px_1fr] items-center gap-3">
            <div className="space-y-1.5 text-[10px] text-ink">
              {[["bg-pd-primary-800","> 5.000"],["bg-pd-primary-600","2.000 – 5.000"],["bg-pd-secondary-500","1.000 – 2.000"],["bg-pd-secondary-300","500 – 1.000"],["bg-pd-neutral-300","< 500"]].map(([tone,label]) => <p key={label} className="flex items-center gap-1.5"><span className={`h-2 w-2 rounded-full ${tone}`} />{label}</p>)}
            </div>
            <HeroIndonesiaMap className="w-full" />
          </div>
        </GlassCard>

        <GlassCard className="min-h-[154px] p-4">
          <h2 className="text-sm font-bold text-text-main">Progres Pendataan Nasional</h2>
          <div className="mt-2 flex items-center gap-4">
            <div className="relative h-20 w-20 shrink-0">
              <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90" aria-label="Progres pendataan 85,42 persen">
                <circle cx="50" cy="50" r="38" pathLength="100" fill="none" strokeWidth="10" className="stroke-pd-neutral-200" />
                <circle cx="50" cy="50" r="38" pathLength="100" fill="none" strokeWidth="10" strokeLinecap="round" strokeDasharray="85.42 100" className="stroke-primary" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-text-main">85,42%</span>
            </div>
            <div className="flex h-20 min-w-0 flex-1 items-end gap-1.5">
              {[36, 48, 57, 68, 78, 88].map((height, index) => <div key={height} className="flex h-full flex-1 items-end"><span className={`w-full rounded-t ${index > 3 ? 'bg-pd-secondary-400' : 'bg-pd-primary-500'}`} style={{ height: `${height}%` }} /></div>)}
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

const problems = [
  { icon: Layers3, title: 'Hierarki Informasi Lemah', points: ['Struktur informasi tidak jelas dan tidak konsisten antarhalaman.', 'Navigasi membingungkan sehingga pengguna sulit menemukan data.'], tone: 'primary' as const },
  { icon: MonitorSmartphone, title: 'Tampilan Terlihat Jadul', points: ['Desain antarmuka sudah usang dan belum mengikuti standar modern.', 'Penggunaan warna, tipografi, dan komponen belum konsisten.'], tone: 'secondary' as const },
  { icon: Table2, title: 'Data Sulit Dipindai', points: ['Penyajian data padat dan tabel besar membuat informasi sulit dipahami.', 'Visualisasi belum cukup membantu pengguna menangkap insight dan pola.'], tone: 'accent' as const },
  { icon: Gauge, title: 'Belum Terasa sebagai Portal Data Aktif', points: ['Informasi dan pembaruan data belum terlihat secara real-time.', 'Insight, berita, dan aktivitas terkini belum tampil sebagai satu cerita.'], tone: 'success' as const },
];

export function ProblemsSlide() {
  return (
    <div className="relative min-h-full overflow-hidden bg-gradient-to-br from-white via-white to-pd-primary-50 p-6 md:p-10 xl:p-12">
      <div className="absolute right-8 top-8 w-[34%] opacity-[0.07]"><HeroIndonesiaMap /></div>
      <SlideHeading eyebrow="02 · Analisis" title="Masalah Saat Ini" description="Analisis terhadap kondisi portal Prodeskel saat ini untuk mengidentifikasi tantangan utama yang perlu diatasi dalam redesign." />
      <div className="relative mt-7 grid items-start gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-3 sm:grid-cols-2">
          {problems.map((item, index) => (
            <GlassCard key={item.title} className="min-h-[214px] p-4 xl:p-5">
              <div className="flex items-center gap-3">
                <SoftIcon tone={item.tone}><item.icon size={21} /></SoftIcon>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-primary">Tantangan 0{index + 1}</p>
                  <h3 className="mt-1 font-bold leading-5 text-text-main">{item.title}</h3>
                </div>
              </div>
              <ul className="mt-4 space-y-2.5 text-xs leading-5 text-ink xl:text-sm">
                {item.points.map((point) => <li key={point} className="flex items-start gap-2.5"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /><span>{point}</span></li>)}
              </ul>
            </GlassCard>
          ))}
        </div>
        <div className="relative pb-4">
          <BrowserShot src="/proposal/legacy-prodeskel.png" alt="Portal Prodeskel sebelum redesign" cropLegacy />
          <div className="absolute bottom-0 left-4 right-4 grid grid-cols-3 gap-2">
            {['Navigasi padat', 'Komponen tidak konsisten', 'Insight tersembunyi'].map((label, index) => <span key={label} className="rounded-lg border border-pd-primary-100 bg-white px-2 py-2 text-center text-[10px] font-semibold text-primary shadow-sm xl:text-[11px]"><strong className="mr-1">0{index + 1}</strong>{label}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}

const goals = [
  { symbol: 'desktop_windows' as const, title: 'Lebih Modern', text: 'Tampilan antarmuka yang segar, konsisten, dan selaras dengan standar desain digital pemerintah.', tone: 'primary' as const },
  { symbol: 'verified_user' as const, title: 'Lebih Kredibel', text: 'Penyajian data yang transparan, akurat, dan mudah diverifikasi untuk meningkatkan kepercayaan publik.', tone: 'secondary' as const },
  { symbol: 'bar_chart' as const, title: 'Lebih Informatif', text: 'Visualisasi data yang lebih jelas dan ringkas untuk membantu pengambilan keputusan berbasis data.', tone: 'accent' as const },
  { symbol: 'person_heart' as const, title: 'Lebih Nyaman Digunakan', text: 'Navigasi yang intuitif, akses cepat ke informasi penting, dan responsif di berbagai perangkat.', tone: 'success' as const },
];

export function GoalsSlide() {
  return (
    <div className="relative min-h-full overflow-hidden bg-gradient-to-br from-white via-white to-pd-secondary-50 p-6 md:p-10 xl:p-12">
      <div className="pointer-events-none absolute bottom-0 right-8 w-[48%] opacity-[0.14]" aria-hidden="true"><HeroIndonesiaMap /></div>
      <div className="relative grid items-center gap-6 lg:grid-cols-[0.72fr_1.28fr]">
        <SlideHeading eyebrow="03 · Tujuan" title="Tujuan Redesign" description="Redesign Prodeskel bertujuan menghadirkan pengalaman yang lebih relevan, terpercaya, dan bermanfaat bagi seluruh pengguna." />

        <div className="grid gap-3 sm:grid-cols-[0.8fr_1.35fr_0.95fr]">
          <GlassCard className="border-strong bg-white/95 p-4">
            <p className="text-xs font-bold text-text-main">Progres Nasional</p>
            <div className="mt-3 flex items-center gap-3">
              <div className="relative h-16 w-16 shrink-0">
                <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90" aria-label="Progres nasional 85,42 persen">
                  <circle cx="50" cy="50" r="38" pathLength="100" fill="none" strokeWidth="11" className="stroke-pd-neutral-200" />
                  <circle cx="50" cy="50" r="38" pathLength="100" fill="none" strokeWidth="11" strokeLinecap="round" strokeDasharray="85.42 100" className="stroke-pd-accent-400" />
                </svg>
              </div>
              <div><p className="text-2xl font-bold text-text-main">85,42%</p><p className="text-[10px] text-text-muted">Nasional</p></div>
            </div>
          </GlassCard>

          <GlassCard className="border-strong bg-white/95 p-4">
            <p className="text-xs font-bold text-text-main">Top 5 Provinsi</p>
            <div className="mt-3 flex h-20 items-end gap-2">
              {[93, 92, 91, 90, 88].map((value, index) => <div key={value} className="flex h-full flex-1 flex-col justify-end text-center"><span className="mb-1 text-[8px] font-semibold text-ink">{value}%</span><span className={`w-full rounded-t ${index > 2 ? 'bg-pd-secondary-400' : 'bg-pd-primary-500'}`} style={{ height: `${value - 25}%` }} /></div>)}
            </div>
          </GlassCard>

          <GlassCard className="border-strong bg-white/95 p-4">
            <div className="flex items-center gap-3"><SoftIcon tone="secondary"><Landmark size={21} /></SoftIcon><div><p className="text-[10px] text-text-muted">Jumlah Wilayah</p><p className="text-2xl font-bold text-text-main">83.961</p></div></div>
            <div className="mt-4 flex h-7 items-end gap-1">{[35, 52, 44, 70, 62, 88].map((height, index) => <span key={`${height}-${index}`} className="flex-1 rounded-t bg-pd-secondary-300" style={{ height: `${height}%` }} />)}</div>
            <p className="mt-1 text-[10px] text-text-muted">Desa/Kelurahan</p>
          </GlassCard>
        </div>
      </div>

      <div className="relative mt-8 grid gap-x-4 gap-y-6 md:grid-cols-2">
        {goals.map((goal) => <GlassCard key={goal.title} className="flex items-center gap-5 border-strong bg-white/95 p-5"><SoftIcon tone={goal.tone} extraLarge><MaterialSymbol name={goal.symbol} className="text-5xl" /></SoftIcon><div><h3 className="text-lg font-bold text-text-main md:text-xl">{goal.title}</h3><p className="mt-1 text-sm leading-6 text-ink">{goal.text}</p></div></GlassCard>)}
      </div>

      <div className="relative mt-10 grid items-center gap-5 rounded-xl border border-pd-primary-200 bg-pd-primary-50/95 px-6 py-5 backdrop-blur-sm md:grid-cols-[88px_1fr_240px]">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white shadow-sm">
          <svg viewBox="0 -960 960 960" className="h-14 w-14 -rotate-90" fill="currentColor" aria-hidden="true">
            <path d="M468-240q-96-5-162-74t-66-166q0-100 70-170t170-70q97 0 166 66t74 162l-84-25q-13-54-56-88.5T480-640q-66 0-113 47t-47 113q0 57 34.5 100t88.5 56l25 84Zm48 158q-9 2-18 2h-18q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v18q0 9-2 18l-78-24v-12q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h12l24 78Zm305 22L650-231 600-80 480-480l400 120-151 50 171 171-79 79Z" />
          </svg>
        </div>
        <div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">Fokus Redesign</p><p className="mt-1 text-base font-bold text-text-main md:text-xl">Bukan mengurangi data, tetapi merapikan cara data dibaca dan digunakan.</p></div>
        <div className="hidden h-16 items-end gap-2 border-l border-pd-primary-100 pl-5 md:flex">{[34, 49, 58, 76, 92].map((height, index) => <span key={height} className={`flex-1 rounded-t ${index > 2 ? 'bg-pd-secondary-400' : 'bg-pd-primary-500'}`} style={{ height: `${height}%` }} />)}</div>
      </div>
    </div>
  );
}

const principles = [
  { symbol: 'database' as const, title: 'Data-First', text: 'Setiap keputusan desain berawal dari kebutuhan data dan pengguna. Informasi disajikan akurat, terstruktur, dan siap digunakan untuk perencanaan pembangunan yang berbasis bukti.', tone: 'primary' as const },
  { symbol: 'article' as const, title: 'Readable', text: 'Informasi disajikan dengan hierarki yang jelas, tipografi yang nyaman dibaca, dan visual yang membantu pengguna memahami data dengan cepat dan tepat.', tone: 'secondary' as const },
  { symbol: 'person' as const, title: 'Accessible', text: 'Dapat diakses oleh semua pengguna dengan beragam perangkat dan kemampuan, mengikuti prinsip aksesibilitas agar inklusif dan merata di seluruh wilayah.', tone: 'success' as const },
  { symbol: 'north_east' as const, title: 'Scalable', text: 'Dirancang modular dan fleksibel agar sistem dan tampilan dapat berkembang sesuai kebutuhan data, fitur, dan pengguna di masa depan.', tone: 'accent' as const },
  { symbol: 'verified_user' as const, title: 'Consistent', text: 'Pengalaman yang konsisten di seluruh halaman melalui pola interaksi, komponen, dan visual yang seragam untuk memperkuat kepercayaan dan kemudahan penggunaan.', tone: 'primary' as const },
];

const designChecklist = [
  { symbol: 'format_list_bulleted' as const, title: 'Hierarchy', text: 'Informasi diurutkan berdasarkan prioritas dan kepentingan.', tone: 'primary' as const },
  { symbol: 'apps' as const, title: 'Density', text: 'Kepadatan informasi seimbang agar tetap ringkas dan efisien.', tone: 'secondary' as const },
  { symbol: 'visibility' as const, title: 'Scanability', text: 'Konten mudah dipindai dengan pola visual yang konsisten.', tone: 'success' as const },
  { symbol: 'lightbulb' as const, title: 'Clarity', text: 'Bahasa, visual, dan data disampaikan secara jelas dan tidak ambigu.', tone: 'accent' as const },
  { symbol: 'near_me' as const, title: 'Usability', text: 'Interaksi intuitif dan alur yang mudah dipahami pengguna.', tone: 'secondary' as const },
];

export function PrinciplesSlide() {
  return (
    <div className="relative min-h-full overflow-hidden bg-gradient-to-br from-white via-white to-pd-primary-50 p-6 md:p-10 xl:p-12">
      <div className="pointer-events-none absolute right-8 top-8 w-[36%] opacity-[0.08]" aria-hidden="true"><HeroIndonesiaMap /></div>
      <SlideHeading eyebrow="04 · Prinsip" title="Prinsip Desain" description="Prinsip utama yang menjadi landasan dalam perancangan ulang Prodeskel agar pengalaman pengguna lebih baik, informasi lebih mudah dipahami, dan sistem lebih siap untuk berkembang." />

      <div className="relative mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {principles.map((item) => (
          <GlassCard key={item.title} className="min-h-[248px] border-strong bg-white/95 p-5">
            <div className="flex items-center gap-3 lg:block">
              <SoftIcon tone={item.tone} large><MaterialSymbol name={item.symbol} className="text-4xl" /></SoftIcon>
              <h3 className="text-lg font-bold text-text-main lg:mt-4">{item.title}</h3>
            </div>
            <p className="mt-4 text-sm leading-6 text-ink">{item.text}</p>
          </GlassCard>
        ))}
      </div>

      <div className="relative mt-6">
        <h3 className="text-lg font-bold text-text-main">Checklist Desain</h3>
        <p className="mt-1 text-xs text-text-muted">Elemen yang selalu kami jaga dalam setiap halaman dan komponen.</p>
        <GlassCard className="mt-3 grid gap-3 border-strong bg-white/95 p-4 sm:grid-cols-2 lg:grid-cols-5">
          {designChecklist.map((item) => (
            <div key={item.title} className="flex items-center gap-3 lg:items-start">
              <SoftIcon tone={item.tone}><MaterialSymbol name={item.symbol} className="text-3xl" /></SoftIcon>
              <div><p className="text-sm font-bold text-text-main">{item.title}</p><p className="mt-1 text-[11px] leading-5 text-ink">{item.text}</p></div>
            </div>
          ))}
        </GlassCard>
      </div>
    </div>
  );
}

export function BeforeAfterSlide() {
  const benefits = [
    { symbol: 'explore' as const, title: 'Navigasi Lebih Jelas', text: 'Struktur menu yang ringkas dan intuitif memudahkan pengguna menemukan data.', tone: 'primary' as const },
    { symbol: 'bar_chart' as const, title: 'Statistik Lebih Terlihat', text: 'Informasi kunci ditampilkan dalam kartu ringkas yang mudah dipahami sekilas.', tone: 'secondary' as const },
    { symbol: 'table_chart' as const, title: 'Tabel Lebih Mudah Dipindai', text: 'Penyajian data yang lebih rapi dengan visualisasi progres dan peringkat untuk perbandingan cepat.', tone: 'accent' as const },
    { symbol: 'palette' as const, title: 'Konsistensi Visual', text: 'Desain modern dengan warna, ikon, dan komponen yang konsisten untuk pengalaman yang nyaman.', tone: 'success' as const },
  ];
  return (
    <div className="min-h-full bg-gradient-to-br from-white to-pd-primary-50 p-6 md:p-10 xl:p-12">
      <SlideHeading eyebrow="05 · Transformasi" title="Before & After" description="Perbandingan tampilan portal PRODESKEL sebelum dan sesudah redesign untuk pengalaman yang lebih baik." />
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <div><span className="mb-2 inline-flex rounded-t-lg bg-pd-neutral-700 px-4 py-1.5 text-sm font-bold text-white">Sebelum</span><BrowserShot src="/proposal/legacy-prodeskel.png" alt="Prodeskel lama" cropLegacy /></div>
        <div><span className="mb-2 inline-flex rounded-t-lg bg-primary px-4 py-1.5 text-sm font-bold text-white">Sesudah</span><BrowserShot src="/proposal/new-landing.png" alt="Prodeskel setelah redesign" /></div>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{benefits.map((item, index) => <GlassCard key={item.title} className="relative min-h-[126px] border-strong bg-white/95 p-4"><div className="flex items-start gap-3"><SoftIcon tone={item.tone}><MaterialSymbol name={item.symbol} className="text-3xl" /></SoftIcon><div><h3 className="font-bold text-text-main">{item.title}</h3><p className="mt-1 text-xs leading-5 text-ink">{item.text}</p></div></div>{index < benefits.length - 1 ? <ArrowRight size={16} className="absolute -right-2.5 top-1/2 hidden -translate-y-1/2 text-primary lg:block" /> : null}</GlassCard>)}</div>
    </div>
  );
}

export function LandingSlide() {
  const featureNotes = [
    { symbol: 'campaign' as const, title: 'Hero Informatif', text: 'Menyampaikan nilai utama Prodeskel dengan jelas dan menarik.' },
    { symbol: 'bar_chart' as const, title: 'Statistik Nasional', text: 'Ringkasan indikator kunci untuk situasi dan capaian secara cepat.' },
    { symbol: 'menu_book' as const, title: 'Peta Wilayah', text: 'Visualisasi sebaran dan progres pendataan per wilayah.' },
    { symbol: 'progress_activity' as const, title: 'Progres Pendataan', text: 'Gambaran capaian pendataan nasional dan provinsi secara ringkas.' },
    { symbol: 'newspaper' as const, title: 'Aktivitas & Publikasi', text: 'Menampilkan aktivitas terkini dan publikasi resmi yang relevan.' },
  ];
  return (
    <div className="min-h-full bg-gradient-to-br from-white to-pd-primary-50 p-6 md:p-10 xl:p-12">
      <SlideHeading eyebrow="06 · Visual Design" title="Landing Page Baru" description="Rancangan beranda publik yang menyatukan informasi utama, statistik nasional, peta wilayah, progres pendataan, serta aktivitas dan publikasi terkini." />
      <div className="mt-6 grid items-start gap-4 lg:grid-cols-[190px_1fr_300px]">
        <div className="space-y-3">
          {featureNotes.slice(0, 4).map((item) => <GlassCard key={item.title} className="border-strong bg-white/95 p-3"><div className="flex items-center gap-2"><MaterialSymbol name={item.symbol} className="text-2xl text-primary" /><p className="text-sm font-bold text-text-main">{item.title}</p></div><p className="mt-2 text-[11px] leading-5 text-ink">{item.text}</p></GlassCard>)}
        </div>
        <BrowserShot src="/proposal/new-landing.png" alt="Landing page Prodeskel baru" />
        <div className="space-y-3">
          <GlassCard className="border-strong bg-white/95 p-3">
            <div className="flex items-center gap-2"><MaterialSymbol name={featureNotes[4].symbol} className="text-2xl text-primary" /><p className="text-sm font-bold text-text-main">{featureNotes[4].title}</p></div>
            <p className="mt-2 text-[11px] leading-5 text-ink">{featureNotes[4].text}</p>
          </GlassCard>
          <GlassCard className="border-strong bg-white/95 p-4">
            <h3 className="flex items-center gap-2 text-lg font-bold text-text-main"><MaterialSymbol name="diamond" className="text-3xl text-primary" />Nilai Tambah</h3>
            <div className="mt-4 space-y-4">{([
              ['search' as const, 'Kejelasan Informasi', 'Informasi utama disajikan secara ringkas dan mudah dipahami sejak pertama kali dilihat.'],
              ['layers' as const, 'Hierarki Visual Kuat', 'Tata letak dan penekanan visual membantu pengguna menemukan informasi penting dengan cepat.'],
              ['shield' as const, 'Kepercayaan & Kredibilitas', 'Data terbaru, sumber resmi, dan pembaruan berkala membangun kepercayaan pengguna terhadap sistem.'],
            ] as const).map(([symbol, title, text]) => <div key={title} className="flex gap-3"><MaterialSymbol name={symbol} className="mt-0.5 shrink-0 text-2xl text-primary" /><div><p className="text-xs font-bold text-text-main">{title}</p><p className="mt-1 text-[10px] leading-4 text-ink">{text}</p></div></div>)}</div>
            <p className="mt-4 border-t border-border-subtle pt-3 text-[10px] font-medium text-ink">Desain responsif siap untuk berbagai perangkat.</p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

export function DetailDataSlide() {
  return (
    <div className="min-h-full bg-gradient-to-br from-white to-pd-primary-50 p-6 md:p-10 xl:p-12">
      <SlideHeading eyebrow="07 · Pengalaman Data" title="Halaman Detail Data Prodeskel" description="Halaman detail yang dirancang untuk kebutuhan operasional dengan tampilan padat, terstruktur, dan mudah ditindaklanjuti." />
      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_300px]">
        <div className="relative">
          <BrowserShot src="/proposal/new-detail.png" alt="Halaman detail data kependudukan" />
          {([
            ['Filter Wilayah', 'top-[49%]'],
            ['Summary Metrics', 'top-[69%]'],
            ['Tabel Data', 'top-[86%]'],
          ] as const).map(([label, position]) => (
            <div key={label} className={`absolute -left-8 ${position} flex items-center`}>
              <span className="rounded-md bg-primary px-3 py-2 text-xs font-bold text-white shadow-md">{label}</span>
              <span className="h-0.5 w-5 bg-primary" aria-hidden="true" />
              <span className="h-2 w-2 rounded-full bg-primary ring-2 ring-white" aria-hidden="true" />
            </div>
          ))}
        </div>
        <GlassCard className="flex h-full flex-col border-strong bg-white/95 p-5">
          <div className="flex items-center justify-between"><p className="text-base font-bold text-text-main">Detail Wilayah</p><span className="text-xl text-text-muted">×</span></div>
          <div className="mt-4"><h3 className="font-bold text-text-main">Kelurahan Candisari</h3><p className="mt-1 text-[10px] text-text-muted">Kode Wilayah: 33.74.01.1001</p><p className="mt-1 text-[10px] text-ink">Kecamatan Semarang Selatan, Kota Semarang</p><span className="mt-2 inline-flex rounded-full bg-success/10 px-2 py-1 text-[9px] font-bold text-pd-success">Tahun Data 2026</span></div>
          <div className="mt-4 flex gap-3 border-b border-border-subtle text-[9px] font-semibold text-ink"><span className="border-b-2 border-primary pb-2 text-primary">Ringkasan</span><span>Kependudukan</span><span>Sosial</span><span>Ekonomi</span></div>
          <div className="mt-4 rounded-lg border border-border-subtle p-3"><p className="text-xs font-bold text-text-main">Informasi Umum</p><dl className="mt-2 space-y-2 text-[10px]">{[['Luas Wilayah','1,45 km²'],['Jumlah RW','12'],['Jumlah RT','86'],['Status Wilayah','Kelurahan'],['Klasifikasi','Perkotaan']].map(([label,value])=><div key={label} className="flex justify-between gap-2"><dt className="text-text-muted">{label}</dt><dd className="font-semibold text-text-main">{value}</dd></div>)}</dl></div>
          <div className="mt-3 rounded-lg border border-border-subtle p-3"><p className="text-xs font-bold text-text-main">Ringkasan Kependudukan</p><dl className="mt-2 space-y-2 text-[10px]">{[['Jumlah Penduduk','12.845 jiwa'],['Penduduk Laki-laki','6.287 jiwa'],['Penduduk Perempuan','6.558 jiwa'],['Jumlah KK','4.512 KK']].map(([label,value])=><div key={label} className="flex justify-between gap-2"><dt className="text-text-muted">{label}</dt><dd className="font-semibold text-text-main">{value}</dd></div>)}</dl></div>
          <a href="/data-prodeskel/kependudukan" className="mt-auto inline-flex h-9 items-center justify-center gap-1 rounded-md bg-primary px-3 text-xs font-bold text-white hover:bg-primary-hover">Lihat Profil Lengkap <ArrowRight size={14} /></a>
        </GlassCard>
      </div>
    </div>
  );
}

export function DesignSystemSlide() {
  return (
    <div className="min-h-full bg-gradient-to-br from-white to-pd-primary-50 p-6 md:p-9 xl:p-10">
      <div className="grid items-center gap-5 lg:grid-cols-[1fr_420px]">
        <SlideHeading eyebrow="08 · Fondasi" title="Pendekatan Design System" description="Design system Prodeskel disusun untuk menciptakan pengalaman yang konsisten, inklusif, dan efisien. Sistem ini mencakup token, komponen, pattern, dan template yang menjadi fondasi antarmuka pada seluruh modul." />
        <div className="flex items-center gap-4 rounded-xl border border-pd-primary-200 bg-pd-primary-50 p-4"><SoftIcon large><MaterialSymbol name="lightbulb" className="text-4xl" /></SoftIcon><p className="text-sm font-medium leading-6 text-text-main">Pendekatan berbasis komponen mempercepat pengembangan, menjaga konsistensi, dan memudahkan implementasi tahap berikutnya.</p></div>
      </div>
      <div className="mt-5 space-y-3">
        <GlassCard className="grid gap-4 border-strong bg-white/95 p-4 lg:grid-cols-[220px_1fr]"><div><p className="text-sm font-bold text-primary">01 · Token</p><p className="mt-1 text-[11px] leading-5 text-ink">Token mendefinisikan nilai dasar desain seperti warna, tipografi, radius, bayangan, dan spacing untuk menjaga konsistensi visual dan aksesibilitas.</p></div><div className="grid gap-4 sm:grid-cols-5"><div><p className="text-[10px] font-semibold text-ink">Warna</p><div className="mt-2 flex gap-1.5">{['bg-pd-primary-700','bg-pd-primary-950','bg-pd-secondary-500','bg-pd-accent-400','bg-error','bg-pd-neutral-300'].map(c => <span key={c} className={`h-7 w-7 rounded ${c}`} />)}</div></div><div><p className="text-[10px] font-semibold text-ink">Tipografi</p><p className="mt-1 text-xl font-bold text-text-main">Inter Aa</p><p className="text-[9px] text-text-muted">Regular · Medium · Semibold</p></div><div><p className="text-[10px] font-semibold text-ink">Radius</p><div className="mt-2 flex items-end gap-2"><span className="h-6 w-6 rounded-sm border border-strong"/><span className="h-7 w-7 rounded-md border border-strong"/><span className="h-8 w-8 rounded-xl border border-strong"/></div></div><div><p className="text-[10px] font-semibold text-ink">Bayangan</p><div className="mt-2 flex gap-2"><span className="h-7 w-7 rounded bg-white shadow-sm"/><span className="h-7 w-7 rounded bg-white shadow-md"/></div></div><div><p className="text-[10px] font-semibold text-ink">Spacing (8pt)</p><div className="mt-3 flex items-end gap-1.5">{[2,3,4,5,6].map(size=><span key={size} className={`h-${size} flex-1 bg-pd-primary-100`} />)}</div></div></div></GlassCard>
        <GlassCard className="grid gap-4 border-strong bg-white/95 p-4 lg:grid-cols-[220px_1fr]"><div><p className="text-sm font-bold text-primary">02 · Komponen</p><p className="mt-1 text-[11px] leading-5 text-ink">Komponen adalah elemen UI dasar yang dapat digunakan kembali pada berbagai halaman dan modul.</p></div><div className="grid grid-cols-2 gap-3 md:grid-cols-5">{[['Button','Primary'],['Input Field','Masukkan kata kunci...'],['Badge','Terverifikasi'],['Card','83.961 Desa/Kelurahan'],['Table Header','Nama Wilayah · Provinsi']].map(([title,sample],i)=><div key={title} className="rounded-lg border border-border-subtle bg-subtle p-2.5"><p className="text-[9px] font-bold uppercase text-text-muted">{title}</p><div className={`mt-2 rounded-md px-2 py-2 text-[10px] font-semibold ${i===0?'bg-primary text-white':i===2?'bg-success/10 text-pd-success':'bg-white text-text-main'}`}>{sample}</div></div>)}</div></GlassCard>
        <GlassCard className="grid gap-4 border-strong bg-white/95 p-4 lg:grid-cols-[220px_1fr]"><div><p className="text-sm font-bold text-primary">03 · Pattern</p><p className="mt-1 text-[11px] leading-5 text-ink">Pattern menggabungkan komponen untuk menyelesaikan tugas umum dan menciptakan konsistensi interaksi.</p></div><div className="grid gap-3 md:grid-cols-3">{[['Metric Card','238,7 Juta Penduduk'],['Filter Bar','Provinsi · Kabupaten · Kecamatan'],['Search & Suggest','Cari desa/kelurahan...']].map(([title,text])=><div key={title} className="rounded-lg border border-border-subtle p-3"><p className="text-[10px] font-bold text-text-main">{title}</p><p className="mt-2 text-xs font-semibold text-primary">{text}</p></div>)}</div></GlassCard>
        <GlassCard className="grid gap-4 border-strong bg-white/95 p-4 lg:grid-cols-[220px_1fr]"><div><p className="text-sm font-bold text-primary">04 · Template</p><p className="mt-1 text-[11px] leading-5 text-ink">Template adalah susunan layout halaman berdasarkan pattern untuk mempercepat konsistensi antarhalaman.</p></div><div className="grid gap-3 sm:grid-cols-2 md:grid-cols-5">{[['Dashboard','Ringkasan indikator utama'],['Daftar Data','Tabel data dan filter'],['Detail Wilayah','Informasi detail wilayah'],['Laporan','Penyajian data berkala'],['Publikasi','Artikel dan dokumen']].map(([title,text])=><div key={title} className="flex gap-2 rounded-lg border border-border-subtle p-2.5"><MaterialSymbol name="description" className="text-2xl text-primary"/><div><p className="text-[10px] font-bold text-text-main">{title}</p><p className="mt-1 text-[9px] leading-4 text-ink">{text}</p></div></div>)}</div></GlassCard>
      </div>
    </div>
  );
}

const roadmap = [
  { title: 'Portal Publik', text: 'Membangun portal publik dengan informasi desa/kelurahan yang terbuka dan mudah diakses.', symbol: 'public' as const, tone: 'primary' as const },
  { title: 'Data Detail', text: 'Menyajikan data desa/kelurahan secara lebih lengkap, akurat, dan terstruktur.', symbol: 'database' as const, tone: 'secondary' as const },
  { title: 'Dashboard Internal', text: 'Menyediakan dashboard internal untuk monitoring dan analisis berbasis data.', symbol: 'bar_chart' as const, tone: 'accent' as const },
  { title: 'Form DDK & Potensi', text: 'Digitalisasi pengumpulan data DDK dan potensi desa/kelurahan secara terstandar.', symbol: 'assignment' as const, tone: 'primary' as const },
  { title: 'Validasi & Integrasi', text: 'Validasi data berlapis dan integrasi dengan sistem nasional terkait untuk memastikan kualitas data.', symbol: 'verified_user' as const, tone: 'success' as const },
];

const roadmapAccents = [
  'bg-pd-primary-600',
  'bg-pd-secondary-600',
  'bg-pd-accent-500',
  'bg-pd-primary-500',
  'bg-success',
];

export function RoadmapSlide() {
  return (
    <div className="relative min-h-full overflow-hidden bg-gradient-to-br from-white via-white to-pd-primary-50 p-6 md:p-10 xl:p-12">
      <div className="absolute inset-x-0 top-0 h-[42%] bg-gradient-to-r from-white via-pd-primary-50 to-pd-secondary-50" />
      <div className="relative grid items-start gap-6 lg:grid-cols-[1fr_300px]">
        <SlideHeading eyebrow="09 · Implementasi" title="Roadmap Implementasi" description="Peta jalan strategis untuk implementasi Prodeskel yang lebih modern, terintegrasi, dan berorientasi pada kebutuhan pengguna." />
        <GlassCard className="border-strong bg-white/95 p-4"><h3 className="flex items-center gap-2 text-lg font-bold text-text-main"><MaterialSymbol name="description" className="text-3xl text-primary"/>Deliverables</h3><div className="mt-3 grid grid-cols-2 gap-2 text-xs font-semibold text-ink lg:grid-cols-1">{['UI Mockup','Design System','Prototype','Implementasi Bertahap'].map(item=><span key={item} className="flex items-center gap-2"><Check size={14} className="text-primary"/>{item}</span>)}</div></GlassCard>
      </div>
      <div className="relative mt-10">
        <div className="absolute left-[8%] right-[8%] top-6 hidden h-0.5 bg-pd-primary-200 lg:block" />
        <div className="grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-5 xl:gap-10">{roadmap.map((phase,index)=><div key={phase.title} className="relative flex h-full min-w-0 flex-col">
          <span className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-white text-sm font-bold text-primary shadow-md">0{index+1}</span>
          <GlassCard className="relative mt-3 min-h-[270px] flex-1 overflow-hidden bg-white p-5 pb-8 shadow-xl transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
            <span className="pointer-events-none absolute inset-0 rounded-xl border-2 border-pd-primary-300" aria-hidden="true" />
            <span className={`absolute inset-x-0 top-0 h-1 ${roadmapAccents[index]}`} aria-hidden="true" />
            <span className="absolute -bottom-5 -right-2 select-none text-7xl font-black text-pd-primary-50" aria-hidden="true">0{index+1}</span>
            <div className="relative z-10">
              <SoftIcon tone={phase.tone} large><MaterialSymbol name={phase.symbol} className="text-4xl"/></SoftIcon>
              <p className="mt-4 text-xs font-bold uppercase tracking-wide text-primary">Tahap {index+1}</p>
              <h3 className="mt-1 text-lg font-bold leading-snug text-text-main">{phase.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink">{phase.text}</p>
            </div>
          </GlassCard>
          {index < roadmap.length - 1 ? <span className="absolute -right-9 top-[178px] z-20 hidden h-8 w-8 items-center justify-center rounded-full border border-pd-primary-200 bg-white text-primary shadow-sm lg:flex" aria-hidden="true"><ArrowRight size={16}/></span> : null}
        </div>)}</div>
      </div>
      <GlassCard className="relative mt-7 overflow-hidden border-pd-primary-300 bg-pd-primary-50 p-4 shadow-md lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-8 lg:px-6">
        <span className="absolute -left-12 -top-16 h-36 w-36 rounded-full border border-pd-primary-200 bg-white/50" aria-hidden="true" />
        <span className="absolute bottom-0 left-[42%] h-px w-40 rotate-[-12deg] bg-pd-primary-200" aria-hidden="true" />
        <div className="relative flex items-center gap-4">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-md">
            <MaterialSymbol name="near_me" className="-rotate-90 text-4xl" />
          </span>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">Target Akhir</p>
            <h3 className="mt-1 text-xl font-bold text-text-main">Ekosistem Prodeskel Terintegrasi</h3>
            <p className="mt-1 text-xs leading-5 text-ink">Data wilayah yang terbuka, terstruktur, mudah dipantau, dan siap terhubung dengan sistem nasional.</p>
          </div>
        </div>
        <div className="relative mt-4 flex items-center justify-center gap-2 lg:mt-0">
          {([['public' as const, 'Portal Publik'], ['database' as const, 'Data Terpadu'], ['verified_user' as const, 'Sistem Nasional']] as const).map(([symbol, label], index, items) => (
            <div key={label} className="contents">
              <div className="flex min-w-[116px] items-center gap-2 rounded-lg border border-pd-primary-200 bg-white px-3 py-2 shadow-sm">
                <MaterialSymbol name={symbol} className="text-2xl text-primary" />
                <span className="text-[11px] font-bold text-text-main">{label}</span>
              </div>
              {index < items.length - 1 ? <ArrowRight size={16} className="shrink-0 text-primary" aria-hidden="true" /> : null}
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}

export function ClosingSlide() {
  return (
    <div className="relative grid min-h-full overflow-hidden bg-gradient-to-br from-white to-pd-primary-50 p-6 md:grid-cols-[1.15fr_0.85fr] md:p-12 xl:p-14">
      <div className="absolute inset-0 opacity-[0.08]"><HeroIndonesiaMap className="h-full w-full" /></div>
      <div className="relative z-10 flex flex-col justify-center">
        <SlideHeading eyebrow="10 · Penutup" title="Penutup" description="Rangkuman nilai utama dari rancangan Prodeskel baru dan kesiapan untuk melangkah ke tahap implementasi." />
        <p className="mt-7 max-w-4xl text-2xl font-bold leading-snug text-text-main md:text-3xl">Prodeskel baru dirancang untuk menjadi portal data desa dan kelurahan yang lebih modern, lebih mudah dipahami, dan lebih siap dikembangkan.</p>
        <div className="mt-7 grid max-w-4xl gap-3 sm:grid-cols-3">{([
          ['devices' as const,'Modern','Tampilan yang bersih, konsisten, dan intuitif untuk pengalaman pengguna yang lebih baik di setiap perangkat.','primary' as const],
          ['bar_chart' as const,'Data-Driven','Informasi yang akurat, terintegrasi, dan divisualisasikan secara jelas untuk mendukung pengambilan keputusan berbasis data.','secondary' as const],
          ['layers' as const,'Scalable','Arsitektur yang fleksibel dan siap dikembangkan seiring kebutuhan, teknologi, dan pertumbuhan data ke depan.','accent' as const],
        ] as const).map(([symbol,title,text,tone])=><GlassCard key={title} className="min-h-[180px] border-strong bg-white/95 p-5"><SoftIcon tone={tone} large><MaterialSymbol name={symbol} className="text-4xl"/></SoftIcon><p className="mt-4 text-lg font-bold text-text-main">{title}</p><p className="mt-2 text-xs leading-5 text-ink">{text}</p></GlassCard>)}</div>
      </div>
      <div className="relative z-10 mt-8 flex items-center justify-center md:mt-0"><GlassCard className="w-full max-w-md border-strong bg-white/95 p-10 text-center"><SoftIcon extraLarge><MaterialSymbol name="handshake" className="text-5xl"/></SoftIcon><h3 className="mt-6 text-4xl font-bold text-text-main">Terima kasih</h3><div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary"/><p className="mt-5 text-base leading-7 text-ink">Siap dikembangkan ke tahap implementasi berikutnya.</p><div className="mt-7 border-t border-border-subtle pt-5"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-text-muted">Disusun oleh</p><p className="mt-1 text-lg font-bold text-text-main">Eka D. Purnama</p></div><img src={withBasePath('/proposal/mitreka-horizontal.svg')} alt="Mitreka" className="mx-auto mt-5 h-8 w-auto"/></GlassCard></div>
    </div>
  );
}

export const SLIDE_COMPONENTS = [CoverSlide, ProblemsSlide, GoalsSlide, PrinciplesSlide, BeforeAfterSlide, LandingSlide, DetailDataSlide, DesignSystemSlide, RoadmapSlide, ClosingSlide];
