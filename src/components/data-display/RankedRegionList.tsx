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
            className="grid h-10 grid-cols-[26px_minmax(0,1fr)_auto] items-center gap-2 rounded-md border border-border-subtle px-2.5"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
              {item.rank}
            </span>
            <span className="min-w-0 truncate text-[13px] text-text-main">{item.name}</span>
            <span className="text-[13px] font-semibold text-text-main">{item.value.toString().replace('.', ',')}%</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
