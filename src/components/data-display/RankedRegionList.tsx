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
      <ol className={`flex flex-col gap-1.5 ${title ? 'mt-3' : ''}`}>
        {items.map((item) => (
          <li
            key={item.rank}
            className="flex h-10 items-center gap-2.5 rounded-md border border-border-subtle px-2.5 py-2"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
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
