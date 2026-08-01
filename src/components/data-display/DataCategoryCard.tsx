import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Card, Text, Heading } from '@/ui';

export interface DataCategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

export function DataCategoryCard({ icon: IconComp, title, description, href = '#' }: DataCategoryCardProps) {
  return (
    <Card hoverable className="flex h-full flex-col">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
        <IconComp size={22} aria-hidden="true" />
      </span>
      <Heading level="5" as="h3" className="mt-4">
        {title}
      </Heading>
      <Text variant="muted" size="sm" className="mt-1.5 flex-1">
        {description}
      </Text>
      <a
        href={href}
        className="mt-4 inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold text-primary hover:text-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pd-secondary-400"
      >
        Lihat Data
        <ArrowRight size={15} aria-hidden="true" />
      </a>
    </Card>
  );
}
