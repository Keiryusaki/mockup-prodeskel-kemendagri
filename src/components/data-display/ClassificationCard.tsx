import { ProgressRing } from './ProgressRing';

export interface ClassificationCardProps {
  label: string;
  percentage: number;
  count: string;
  color: string;
}

export function ClassificationCard({ label, percentage, count, color }: ClassificationCardProps) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-border-subtle p-4 text-center">
      <p className="text-sm font-semibold text-text-main">{label}</p>
      <div className="mt-3">
        <ProgressRing value={percentage} color={color}>
          <span className="text-lg font-bold text-text-main">{percentage.toString().replace('.', ',')}%</span>
        </ProgressRing>
      </div>
      <p className="mt-3 text-xs text-ink">{count} Desa/Kelurahan</p>
    </div>
  );
}
