import type { ReactNode } from 'react';
import { Card, Heading, Text } from '@/ui';

export interface ChartPanelProps {
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  children?: ReactNode;
  className?: string;
}

/**
 * Generic panel shell (title + description + optional action + content) for
 * wrapping any chart or data visual — reused by the map, progress list,
 * classification rings, and activity feed so each doesn't repeat the same
 * header markup.
 */
export function ChartPanel({ title, description, action, children, className }: ChartPanelProps) {
  return (
    <Card className={`flex h-full flex-col ${className ?? ''}`.trim()}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <Heading level="3" as="h3">
            {title}
          </Heading>
          {description ? (
            <Text variant="muted" size="sm" className="mt-1">
              {description}
            </Text>
          ) : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
      <div className="mt-5 flex flex-1 flex-col">{children}</div>
    </Card>
  );
}
