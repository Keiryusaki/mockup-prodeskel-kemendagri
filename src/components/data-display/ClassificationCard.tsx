import { ProgressRing } from './ProgressRing';

export interface ClassificationCardProps {
  label: string;
  percentage: number;
  count: string;
  color: string;
}

export function ClassificationCard({ label, percentage, count, color }: ClassificationCardProps) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-border-subtle p-3 text-center">
      <p className="text-[13px] font-semibold text-text-main">{label}</p>
      <div className="mt-2.5">
        <ProgressRing value={percentage} color={color} size={88} strokeWidth={8}>
          <span className="text-base font-bold text-text-main">{percentage.toString().replace('.', ',')}%</span>
        </ProgressRing>
      </div>
      <p className="mt-2.5 text-[11px] text-ink">{count} Desa/Kelurahan</p>
    </div>
  );
}
