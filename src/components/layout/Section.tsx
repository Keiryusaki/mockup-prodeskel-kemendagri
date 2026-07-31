import type { HTMLAttributes, ReactNode } from 'react';
import { PageContainer } from './PageContainer';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  /** Skip the built-in PageContainer, e.g. for full-bleed backgrounds that contain their own container. */
  bare?: boolean;
  tone?: 'page' | 'surface' | 'subtle';
  /**
   * Vertical rhythm — `default` for standalone sections, `compact`/`flush-top`
   * for sections meant to read as one continuous run (e.g. overview + data
   * exploration) rather than separated SaaS-style blocks.
   */
  padding?: 'default' | 'compact' | 'flush-top';
}

const TONE_CLASS: Record<NonNullable<SectionProps['tone']>, string> = {
  page: 'bg-app',
  surface: 'bg-surface',
  subtle: 'bg-subtle',
};

const PADDING_CLASS: Record<NonNullable<SectionProps['padding']>, string> = {
  default: 'py-12 md:py-16',
  compact: 'pt-6 pb-7',
  'flush-top': 'pt-0 pb-10',
};

export function Section({ children, className, bare, tone = 'page', padding = 'default', ...rest }: SectionProps) {
  return (
    <section className={`${PADDING_CLASS[padding]} ${TONE_CLASS[tone]} ${className ?? ''}`.trim()} {...rest}>
      {bare ? children : <PageContainer>{children}</PageContainer>}
    </section>
  );
}
