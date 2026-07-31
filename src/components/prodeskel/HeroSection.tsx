import { Button, Heading, Text, Icon, ArrowRight } from '@/ui';
import { PageContainer } from '@/components/layout/PageContainer';
import { HeroBackground } from './HeroBackground';
import { HeroIndonesiaMap } from './HeroIndonesiaMap';

const FLOATING_STATS = [
  { label: 'Desa/Kelurahan', value: '83.961' },
  { label: 'Penduduk Terdata', value: '238,7 Juta' },
  { label: 'Variabel Data', value: '1.793' },
  { label: 'Pemutakhiran', value: '2026' },
];

export function HeroSection() {
  return (
    <div className="relative min-h-[420px] overflow-hidden border-b border-border-subtle">
      <HeroBackground />
      <PageContainer className="relative grid grid-cols-1 items-center gap-8 py-10 lg:grid-cols-[38%_62%] lg:gap-6">
        <div>
          <Heading level="display" as="h1">
            <span className="block">Data Desa dan</span>
            <span className="block">Kelurahan Indonesia</span>
          </Heading>
          <Text variant="muted" size="lg" className="mt-4 max-w-[600px]">
            Data potensi, perkembangan, dan profil desa/kelurahan sebagai dasar perencanaan pembangunan yang tepat
            sasaran dan berkelanjutan.
          </Text>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button className="!h-14" iconRight={<Icon icon={ArrowRight} size="sm" aria-hidden="true" />}>
              Jelajahi Data
            </Button>
            <Button className="!h-14" variant="outline" tone="accent">
              Lihat Progres
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="h-[220px] sm:h-[300px] lg:h-[380px]">
            <HeroIndonesiaMap className="h-full w-full" />
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2.5 sm:absolute sm:right-4 sm:top-4 sm:mt-0 sm:grid-cols-1">
            {FLOATING_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex h-[68px] w-full flex-col justify-center rounded-[12px] border border-border-subtle bg-surface/95 px-4 shadow-md backdrop-blur-sm sm:w-[220px]"
              >
                <p className="truncate text-xs text-ink">{stat.label}</p>
                <p className="truncate text-xl font-bold text-text-main">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
