import type { ReactNode } from 'react';

export interface TwoColumnLayoutProps {
  left: ReactNode;
  right: ReactNode;
  /** Column split — defaults to an even 1:1 split. */
  ratio?: '1:1' | '3:2' | '2:3' | '44:56';
  /** Gap between columns — defaults to 24px. */
  gap?: '16px' | '24px';
  className?: string;
}

const RATIO_CLASS: Record<NonNullable<TwoColumnLayoutProps['ratio']>, string> = {
  '1:1': 'lg:grid-cols-2',
  '3:2': 'lg:grid-cols-5 [&>:first-child]:lg:col-span-3 [&>:last-child]:lg:col-span-2',
  '2:3': 'lg:grid-cols-5 [&>:first-child]:lg:col-span-2 [&>:last-child]:lg:col-span-3',
  '44:56': 'lg:grid-cols-[44%_56%]',
};

const GAP_CLASS: Record<NonNullable<TwoColumnLayoutProps['gap']>, string> = {
  '16px': 'gap-4',
  '24px': 'gap-6',
};

export function TwoColumnLayout({ left, right, ratio = '1:1', gap = '24px', className }: TwoColumnLayoutProps) {
  return (
    <div className={`grid grid-cols-1 ${GAP_CLASS[gap]} ${RATIO_CLASS[ratio]} ${className ?? ''}`.trim()}>
      {left}
      {right}
    </div>
  );
}
