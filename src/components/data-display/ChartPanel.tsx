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
 *
 * Uses `flush` + its own padding wrapper (not Card's default `.nara-card__body`
 * padding, which is 16/20px) to hit the ~20-24px panel padding the compact
 * portal spacing calls for.
 */
export function ChartPanel({ title, description, action, children, className }: ChartPanelProps) {
  return (
    <Card flush className={`flex h-full flex-col ${className ?? ''}`.trim()}>
      <div className="flex h-full flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Heading level="4" as="h3">
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
        <div className="mt-4 flex flex-1 flex-col">{children}</div>
      </div>
    </Card>
  );
}
