import { ArrowRight } from 'lucide-react';
import { Card, Heading } from '@/ui';
import { MaterialSymbol, type MaterialSymbolName } from '@/ui/MaterialSymbol';

export type InformationCardTone = 'primary' | 'secondary' | 'accent';

export interface InformationCardProps {
  symbol: MaterialSymbolName;
  title: string;
  items: string[];
  href?: string;
  tone?: InformationCardTone;
}

const TONE_CLASS: Record<InformationCardTone, string> = {
  primary: 'text-pd-primary-600',
  secondary: 'text-pd-secondary-600',
  accent: 'text-pd-accent-500',
};

export function InformationCard({ symbol, title, items, href = '#', tone = 'primary' }: InformationCardProps) {
  return (
    <Card compact className="prodeskel-information-card h-full">
      <div className="grid h-full grid-cols-[52px_minmax(0,1fr)] gap-3">
        <div className="flex justify-center pt-0.5">
          <MaterialSymbol name={symbol} className={`shrink-0 text-5xl ${TONE_CLASS[tone]}`} />
        </div>
        <div className="flex min-w-0 flex-col">
          <Heading level="6" as="h3">
            {title}
          </Heading>
          <ul className="mt-2.5 flex flex-1 flex-col gap-1.5">
            {items.map((item) => (
              <li key={item} className="flex gap-2 text-xs leading-5 text-ink">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={href}
            className="mt-auto inline-flex items-center gap-1 self-start rounded-sm pt-3 text-xs font-semibold text-primary hover:text-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pd-secondary-400"
          >
            Lihat Semua
            <ArrowRight size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </Card>
  );
}
