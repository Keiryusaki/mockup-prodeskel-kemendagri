import { ChartPanel } from '@/components/data-display/ChartPanel';
import { ClassificationCard } from '@/components/data-display/ClassificationCard';
import { TypologyDonut } from '@/components/data-display/TypologyDonut';

const CLASSIFICATIONS = [
  { label: 'Swadaya', percentage: 31.23, count: '26.187', color: 'rgb(var(--pd-primary-500))' },
  { label: 'Swakarya', percentage: 46.18, count: '38.739', color: 'rgb(var(--pd-secondary-500))' },
  { label: 'Swasembada', percentage: 22.59, count: '18.965', color: 'rgb(var(--pd-accent-500))' },
];

const TYPOLOGY = [
  { label: 'Perdesaan', percentage: 61.45, color: 'rgb(var(--pd-primary-600))' },
  { label: 'Perkotaan', percentage: 18.92, color: 'rgb(var(--pd-secondary-500))' },
  { label: 'Pesisir', percentage: 11.76, color: 'rgb(var(--pd-primary-300))' },
  { label: 'Transmigrasi', percentage: 4.87, color: 'rgb(var(--pd-accent-500))' },
  { label: 'Lainnya', percentage: 3.0, displayValue: '3,00', color: 'rgb(var(--pd-neutral-300))' },
];

export function ClassificationOverview() {
  return (
    <ChartPanel title="Klasifikasi Wilayah" description="Klasifikasi tingkat perkembangan desa/kelurahan">
      <div className="grid flex-1 grid-cols-2 gap-3 lg:grid-cols-[repeat(3,minmax(0,1fr))_1.45fr]">
        {CLASSIFICATIONS.map((c) => (
          <ClassificationCard key={c.label} {...c} />
        ))}
        <div className="flex flex-col items-center rounded-lg border border-border-subtle p-3 text-center">
          <p className="text-[13px] font-semibold text-text-main">Tipologi Desa/Kelurahan</p>
          <div className="mt-2.5 w-full">
            <TypologyDonut segments={TYPOLOGY} total="83.961" size={88} strokeWidth={12} responsiveHorizontal />
          </div>
        </div>
      </div>
    </ChartPanel>
  );
}
