import { Building2, Users, Calendar } from 'lucide-react';
import { Button, Heading, Text, Icon, ArrowRight, Database } from '@/ui';
import { PageContainer } from '@/components/layout/PageContainer';
import { IndonesiaNetworkVisual } from './IndonesiaNetworkVisual';

const FLOATING_STATS = [
  { label: 'Desa/Kelurahan', value: '83.961', icon: Building2 },
  { label: 'Penduduk Terdata', value: '238,7 Juta', icon: Users },
  { label: 'Variabel Data', value: '1.793', icon: Database },
  { label: 'Pemutakhiran', value: '2026', icon: Calendar },
] as const;

export function HeroSection() {
  return (
    <div className="border-b border-border-subtle bg-app">
      <PageContainer className="grid grid-cols-1 items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-16">
        <div>
          <Heading level="display" as="h1" className="max-w-xl">
            Data Desa dan Kelurahan Indonesia
          </Heading>
          <Text variant="muted" size="lg" className="mt-4 max-w-lg">
            Data potensi, perkembangan, dan profil desa/kelurahan sebagai dasar perencanaan pembangunan yang tepat
            sasaran dan berkelanjutan.
          </Text>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" iconRight={<Icon icon={ArrowRight} size="sm" aria-hidden="true" />}>
              Jelajahi Data
            </Button>
            <Button size="lg" variant="outline">
              Lihat Progres
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-border-subtle bg-surface p-4 shadow-md">
            <IndonesiaNetworkVisual className="h-auto w-full" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:absolute sm:right-4 sm:top-4 sm:mt-0 sm:w-44 sm:grid-cols-1 sm:gap-2.5">
            {FLOATING_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-2.5 rounded-lg border border-border-subtle bg-surface px-3 py-2.5 shadow-md"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon icon={stat.icon} size="sm" aria-hidden="true" />
                </span>
                <div className="min-w-0 leading-tight">
                  <p className="truncate text-sm font-bold text-text-main">{stat.value}</p>
                  <p className="truncate text-xs text-ink">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
