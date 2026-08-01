import type { LucideIcon } from 'lucide-react';
import { Card, Heading } from '@/ui';

export interface InformationCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  href?: string;
}

export function InformationCard({ icon: IconComp, title, items, href = '#' }: InformationCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex items-center gap-2.5">
        <IconComp size={18} className="shrink-0 text-primary" aria-hidden="true" />
        <Heading level="5" as="h3">
          {title}
        </Heading>
      </div>
      <ul className="mt-3 flex flex-1 flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-ink">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <a
        href={href}
        className="mt-4 inline-flex items-center gap-1 rounded-sm text-sm font-semibold text-primary hover:text-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pd-secondary-400"
      >
        Lihat Semua
        <span aria-hidden="true">→</span>
      </a>
    </Card>
  );
}
