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
      {title ? <p className="text-sm font-semibold text-text-main">{title}</p> : null}
      <ol className={`overflow-hidden rounded-md border border-border-subtle bg-surface ${title ? 'mt-2' : ''}`}>
        {items.map((item) => (
          <li
            key={item.rank}
            className="grid h-9 grid-cols-[20px_minmax(0,1fr)_auto] items-center gap-2 border-b border-border-subtle px-2.5 last:border-b-0"
          >
            <span className="text-center text-xs font-semibold text-primary">
              {item.rank}
            </span>
            <span className="min-w-0 truncate text-xs text-text-main">{item.name}</span>
            <span className="text-xs font-semibold text-text-main">{item.value.toString().replace('.', ',')}%</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
