import type { HTMLAttributes, ReactNode } from 'react';
import { Container } from '@/ui';

export interface PageContainerProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

/**
 * `flush` hands padding control to us: Container's own responsive padding
 * (16/24px) doesn't reach the 32px desktop figure from 04-design-tokens.md,
 * and fighting its CSS specificity to bump it isn't worth it.
 */
export function PageContainer({ children, className, ...rest }: PageContainerProps) {
  return (
    <Container
      size="xl"
      flush
      className={`px-4 md:px-6 lg:px-8 ${className ?? ''}`.trim()}
      {...rest}
    >
      {children}
    </Container>
  );
}
