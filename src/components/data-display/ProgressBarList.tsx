import type { ReactNode } from 'react';
import { ProgressBar, type ProgressTone } from '@/ui';

export interface ProgressBarListItem {
  label: string;
  value: number;
  icon?: ReactNode;
}

export interface ProgressBarListProps {
  items: ProgressBarListItem[];
  /** Defaults to accenting the first row (e.g. the current top performer) and primary for the rest. */
  toneForIndex?: (index: number) => ProgressTone;
  /** Row matching this label gets a teal dot + semibold name — never a background pill (keeps row height fixed). */
  highlightLabel?: string | null;
  className?: string;
}

const defaultTone = (index: number): ProgressTone => (index === 0 ? 'accent' : 'primary');

export function ProgressBarList({ items, toneForIndex = defaultTone, highlightLabel, className }: ProgressBarListProps) {
  return (
    <ul className={`flex flex-col gap-1 ${className ?? ''}`.trim()}>
      {items.map((item, i) => {
        const isHighlighted = highlightLabel != null && item.label === highlightLabel;
        return (
          <li
            key={item.label}
            className="grid h-9 grid-cols-[150px_minmax(0,1fr)_58px] items-center gap-x-3"
          >
            <span className="flex min-w-0 items-center gap-1.5" title={item.label}>
              {item.icon ? (
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-surface p-0.5 ${
                    isHighlighted ? 'ring-2 ring-pd-secondary-400' : ''
                  }`}
                >
                  {item.icon}
                </span>
              ) : isHighlighted ? (
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-pd-secondary-500" aria-hidden="true" />
              ) : null}
              <span className={`truncate text-[13px] ${isHighlighted ? 'font-semibold text-text-main' : 'text-text-main'}`}>
                {item.label}
              </span>
            </span>
            <ProgressBar
              value={item.value}
              tone={toneForIndex(i)}
              size="md"
              label={item.label}
              className="!bg-pd-neutral-100"
            />
            <span className="text-right text-[13px] font-semibold text-text-main">
              {item.value.toString().replace('.', ',')}%
            </span>
          </li>
        );
      })}
    </ul>
  );
}
