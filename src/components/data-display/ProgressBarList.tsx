import { ProgressBar, type ProgressTone } from '@/ui';

export interface ProgressBarListItem {
  label: string;
  value: number;
}

export interface ProgressBarListProps {
  items: ProgressBarListItem[];
  /** Defaults to accenting the first row (e.g. the current top performer) and primary for the rest. */
  toneForIndex?: (index: number) => ProgressTone;
  /** Row matching this label gets a highlighted background — e.g. a province picked on the map. */
  highlightLabel?: string | null;
  className?: string;
}

const defaultTone = (index: number): ProgressTone => (index === 0 ? 'accent' : 'primary');

export function ProgressBarList({ items, toneForIndex = defaultTone, highlightLabel, className }: ProgressBarListProps) {
  return (
    <ul className={`flex flex-col gap-3.5 ${className ?? ''}`.trim()}>
      {items.map((item, i) => {
        const isHighlighted = highlightLabel != null && item.label === highlightLabel;
        return (
          <li
            key={item.label}
            className={isHighlighted ? '-mx-2 rounded-lg bg-pd-primary-50 px-2 py-1.5' : undefined}
          >
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className={isHighlighted ? 'font-semibold text-pd-primary-700' : 'text-text-main'}>{item.label}</span>
              <span className="font-semibold text-text-main">{item.value.toString().replace('.', ',')}%</span>
            </div>
            <ProgressBar value={item.value} tone={toneForIndex(i)} size="sm" label={item.label} />
          </li>
        );
      })}
    </ul>
  );
}
