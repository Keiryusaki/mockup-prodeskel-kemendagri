import { Building2, Landmark, Percent, Calendar } from 'lucide-react';
import { StatCard, Text } from '@/ui';
import { Section } from '@/components/layout/Section';

const STATS = [
  { label: 'Jumlah Desa/Kelurahan', value: '83.961', hint: 'Desa/Kelurahan', icon: Building2, tone: 'primary' as const },
  { label: 'Provinsi Terdata', value: '38', hint: 'Provinsi', icon: Landmark, tone: 'info' as const },
  { label: 'Progres Pendataan', value: '85,42%', hint: 'Nasional', icon: Percent, tone: 'accent' as const },
  { label: 'Tahun Data Aktif', value: '2026', hint: 'Data Tahun 2026', icon: Calendar, tone: 'success' as const },
];

export function NationalOverview() {
  return (
    <Section tone="page" padding="compact" className="border-b border-border-subtle">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))_170px] lg:items-center">
        {STATS.map((stat) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            hint={stat.hint}
            tone={stat.tone}
            icon={<stat.icon size={20} aria-hidden="true" />}
          />
        ))}
        <Text variant="muted" size="sm" className="hidden lg:block lg:text-right">
          Diperbarui 31 Juli 2026
        </Text>
      </div>
      <div className="mt-3 flex justify-end lg:hidden">
        <Text variant="muted" size="sm">
          Diperbarui 31 Juli 2026
        </Text>
      </div>
    </Section>
  );
}
