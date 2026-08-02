import type { ReactNode } from 'react';
import { Timeline, TimelineItem, Badge, type TimelineTone } from '@/ui';

export interface ActivityFeedItemData {
  id?: string;
  actor: string;
  description: string;
  time: string;
  badge?: string;
  tone?: TimelineTone;
  icon?: ReactNode;
}

export interface ActivityFeedProps {
  items: ActivityFeedItemData[];
  className?: string;
}

/**
 * Generic activity/audit-log feed over Nara's Timeline — deliberately not
 * Prodeskel-specific so it can be reused for public activity (this landing
 * page) or an internal audit trail after the tender phase.
 */
export function ActivityFeed({ items, className }: ActivityFeedProps) {
  return (
    <Timeline className={className}>
      {items.map((item) => (
        <TimelineItem
          key={item.id ?? `${item.actor}-${item.time}`}
          tone={item.tone}
          icon={item.icon}
          title={
            <span className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-text-main">{item.actor}</span>
              {item.badge ? (
                <Badge tone={item.tone === 'neutral' ? 'secondary' : item.tone} variant="soft" size="sm">
                  {item.badge}
                </Badge>
              ) : null}
            </span>
          }
          time={item.time}
        >
          {item.description}
        </TimelineItem>
      ))}
    </Timeline>
  );
}
