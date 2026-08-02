import { Building2, Users, FileText, Calendar, BarChart3 } from 'lucide-react';
import { Button, Heading, Text, Icon, ArrowRight } from '@/ui';
import { PageContainer } from '@/components/layout/PageContainer';
import { HeroBackground } from './HeroBackground';
import { HeroIndonesiaMap } from './HeroIndonesiaMap';

const FLOATING_STATS = [
  { label: 'Desa/Kelurahan', value: '83.961', icon: Building2 },
  { label: 'Penduduk Terdata', value: '238,7 Juta', icon: Users },
  { label: 'Variabel Data', value: '1.793', icon: FileText },
  { label: 'Pemutakhiran', value: '2026', icon: Calendar },
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
            <Button
              className="!h-14 !border-pd-secondary-700 !text-pd-secondary-700"
              variant="outline"
              tone="accent"
              iconLeft={<BarChart3 size={16} aria-hidden="true" />}
            >
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
                className="flex h-[68px] w-full items-center gap-2.5 rounded-[12px] border border-border-subtle bg-surface/95 px-3.5 shadow-md backdrop-blur-sm sm:w-[220px]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <stat.icon size={18} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-xs text-ink">{stat.label}</p>
                  <p className="truncate text-xl font-bold text-text-main">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
