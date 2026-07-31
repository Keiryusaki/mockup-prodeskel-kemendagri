import type { HTMLAttributes, ReactNode } from 'react';
import { PageContainer } from './PageContainer';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  /** Skip the built-in PageContainer, e.g. for full-bleed backgrounds that contain their own container. */
  bare?: boolean;
  tone?: 'page' | 'surface' | 'subtle' | 'subtle-blue';
  /**
   * Vertical rhythm — `default` for standalone sections, `compact`/`flush-top`
   * for sections meant to read as one continuous run (e.g. overview + data
   * exploration) rather than separated SaaS-style blocks, `loose-40` for a
   * fixed 40px top/bottom budget.
   */
  padding?: 'default' | 'compact' | 'flush-top' | 'loose-40';
}

const TONE_CLASS: Record<NonNullable<SectionProps['tone']>, string> = {
  page: 'bg-app',
  surface: 'bg-surface',
  subtle: 'bg-subtle',
  'subtle-blue': 'bg-pd-primary-50/40',
};

const PADDING_CLASS: Record<NonNullable<SectionProps['padding']>, string> = {
  default: 'py-12 md:py-16',
  compact: 'pt-6 pb-7',
  'flush-top': 'pt-0 pb-10',
  'loose-40': 'py-10',
};

export function Section({ children, className, bare, tone = 'page', padding = 'default', ...rest }: SectionProps) {
  return (
    <section className={`${PADDING_CLASS[padding]} ${TONE_CLASS[tone]} ${className ?? ''}`.trim()} {...rest}>
      {bare ? children : <PageContainer>{children}</PageContainer>}
    </section>
  );
}
