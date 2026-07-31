import type { ReactNode } from 'react';
import { Heading, Text } from '@/ui';

export interface SectionHeaderProps {
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function SectionHeader({ title, description, action, className }: SectionHeaderProps) {
  return (
    <div className={`mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-end md:justify-between ${className ?? ''}`.trim()}>
      <div>
        <Heading level="2" as="h2">
          {title}
        </Heading>
        {description ? (
          <Text variant="muted" className="mt-2 max-w-2xl">
            {description}
          </Text>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
