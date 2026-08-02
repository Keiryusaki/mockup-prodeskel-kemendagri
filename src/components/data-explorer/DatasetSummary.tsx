import { Building2, User, UserRound, Users } from 'lucide-react';
import { Card } from '@/ui';

const metrics = [
  { label: 'Total Penduduk', value: '238,7 Juta', caption: 'Data Tahun 2026', icon: Users, iconClass: 'bg-pd-primary-50 text-pd-primary-600' },
  { label: 'Laki-laki', value: '120,4 Juta', caption: '50,45% dari total', icon: User, iconClass: 'bg-pd-secondary-50 text-pd-secondary-700' },
  { label: 'Perempuan', value: '118,3 Juta', caption: '49,55% dari total', icon: UserRound, iconClass: 'bg-pd-accent-50 text-pd-accent-600' },
  { label: 'Wilayah Terdata', value: '83.961', caption: 'Desa/Kelurahan', icon: Building2, iconClass: 'bg-success/10 text-pd-success' },
];

export function DatasetSummary() {
  return (
    <section aria-label="Ringkasan data kependudukan" className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card compact key={metric.label} className="min-w-0">
          <div className="flex min-h-[72px] items-center gap-3">
            <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${metric.iconClass}`}>
              <metric.icon size={21} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-ink">{metric.label}</p>
              <p className="mt-0.5 text-xl font-bold leading-tight text-text-main md:text-2xl">{metric.value}</p>
              <p className="mt-1 text-xs text-text-muted">{metric.caption}</p>
            </div>
          </div>
        </Card>
      ))}
    </section>
  );
}
