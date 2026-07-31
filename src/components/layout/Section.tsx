import type { HTMLAttributes, ReactNode } from 'react';
import { PageContainer } from './PageContainer';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  /** Skip the built-in PageContainer, e.g. for full-bleed backgrounds that contain their own container. */
  bare?: boolean;
  tone?: 'page' | 'surface' | 'subtle';
}

const TONE_CLASS: Record<NonNullable<SectionProps['tone']>, string> = {
  page: 'bg-app',
  surface: 'bg-surface',
  subtle: 'bg-subtle',
};

export function Section({ children, className, bare, tone = 'page', ...rest }: SectionProps) {
  return (
    <section className={`py-12 md:py-16 ${TONE_CLASS[tone]} ${className ?? ''}`.trim()} {...rest}>
      {bare ? children : <PageContainer>{children}</PageContainer>}
    </section>
  );
}
