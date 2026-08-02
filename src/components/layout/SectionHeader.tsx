import type { ReactNode } from 'react';
import { Heading, Text, type HeadingLevel } from '@/ui';

export interface SectionHeaderProps {
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
  headingLevel?: HeadingLevel;
}

export function SectionHeader({ title, description, action, className, headingLevel = '2' }: SectionHeaderProps) {
  return (
    <div className={`mb-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between ${className ?? ''}`.trim()}>
      <div>
        <Heading level={headingLevel} as="h2">
          {title}
        </Heading>
        {description ? (
          <Text variant="muted" size="sm" className="mt-1 max-w-2xl">
            {description}
          </Text>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
