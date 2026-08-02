import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Card, Text, Heading } from '@/ui';
import { withBasePath } from '@/lib/base-path';

export type DataCategoryTone = 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning';

export interface DataCategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  tone?: DataCategoryTone;
}

const TONE_CLASS: Record<DataCategoryTone, string> = {
  primary: 'bg-pd-primary-100 text-pd-primary-600',
  secondary: 'bg-pd-secondary-100 text-pd-secondary-700',
  accent: 'bg-pd-accent-100 text-pd-accent-600',
  info: 'bg-pd-primary-50 text-pd-info',
  success: 'bg-success/10 text-success',
  warning: 'bg-warning/10 text-warning',
};

export function DataCategoryCard({
  icon: IconComp,
  title,
  description,
  href = '/#data-utama',
  tone = 'primary',
}: DataCategoryCardProps) {
  return (
    <a
      href={withBasePath(href)}
      className="group block h-full rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pd-secondary-400"
      aria-label={`Lihat ${title}`}
    >
      <Card compact hoverable className="prodeskel-data-category-card h-full">
        <div className="flex items-center gap-2.5">
          <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${TONE_CLASS[tone]}`}>
            <IconComp size={18} aria-hidden="true" />
          </span>
          <Heading level="6" as="h3" className="!leading-5">
            {title}
          </Heading>
        </div>
        <Text variant="muted" size="sm" className="mt-2 flex-1 !text-xs !leading-5">
          {description}
        </Text>
        <span className="mt-auto inline-flex items-center gap-1 self-start pt-3 text-xs font-semibold text-primary group-hover:text-primary-hover">
          Lihat Data
          <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </Card>
    </a>
  );
}
