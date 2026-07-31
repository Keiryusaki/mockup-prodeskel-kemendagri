export interface TypologySegment {
  label: string;
  percentage: number;
  color: string;
  /** Override for display (e.g. "3,00" to keep trailing zeros the source data specifies). */
  displayValue?: string;
}

export interface TypologyDonutProps {
  segments: TypologySegment[];
  total: string;
  size?: number;
  strokeWidth?: number;
}

/** Multi-segment donut built from stacked stroke-dasharray circles — no radial chart primitive in Nara. */
export function TypologyDonut({ segments, total, size = 96, strokeWidth = 14 }: TypologyDonutProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  let cumulative = 0;

  return (
    <div className="flex flex-col items-center">
      <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
          {segments.map((seg) => {
            const dash = (seg.percentage / 100) * circumference;
            const dashArray = `${dash} ${circumference - dash}`;
            const dashOffset = -((cumulative / 100) * circumference);
            cumulative += seg.percentage;
            return (
              <circle
                key={seg.label}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={seg.color}
                strokeWidth={strokeWidth}
                strokeDasharray={dashArray}
                strokeDashoffset={dashOffset}
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-sm font-bold text-text-main">{total}</span>
          <span className="text-[10px] text-ink">Total</span>
        </div>
      </div>
      <ul className="mt-3 flex w-full flex-col gap-1.5">
        {segments.map((seg) => (
          <li key={seg.label} className="flex items-center justify-between gap-2 text-xs">
            <span className="flex min-w-0 items-center gap-1.5 text-ink">
              <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: seg.color }} />
              <span className="truncate">{seg.label}</span>
            </span>
            <span className="shrink-0 font-medium text-text-main">{seg.displayValue ?? seg.percentage.toString().replace('.', ',')}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
