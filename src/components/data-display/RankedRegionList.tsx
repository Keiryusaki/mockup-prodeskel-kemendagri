export interface RankedRegionListItem {
  rank: number;
  name: string;
  value: number;
}

export interface RankedRegionListProps {
  title?: string;
  items: RankedRegionListItem[];
  className?: string;
}

export function RankedRegionList({ title, items, className }: RankedRegionListProps) {
  return (
    <div className={className}>
      {title ? <p className="text-xs font-semibold uppercase tracking-wide text-ink">{title}</p> : null}
      <ol className={`flex flex-col gap-3 ${title ? 'mt-3' : ''}`}>
        {items.map((item) => (
          <li key={item.rank} className="flex items-center gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
              {item.rank}
            </span>
            <span className="min-w-0 flex-1 truncate text-sm text-text-main">{item.name}</span>
            <span className="shrink-0 text-sm font-semibold text-text-main">{item.value.toString().replace('.', ',')}%</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
