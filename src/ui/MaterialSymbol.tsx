export type MaterialSymbolName =
  | 'bar_chart'
  | 'article'
  | 'apps'
  | 'assignment'
  | 'campaign'
  | 'database'
  | 'description'
  | 'desktop_windows'
  | 'devices'
  | 'diamond'
  | 'explore'
  | 'format_list_bulleted'
  | 'handshake'
  | 'lightbulb'
  | 'layers'
  | 'menu_book'
  | 'near_me'
  | 'newspaper'
  | 'north_east'
  | 'person'
  | 'person_heart'
  | 'progress_activity'
  | 'public'
  | 'search'
  | 'shield'
  | 'support_agent'
  | 'table_chart'
  | 'palette'
  | 'visibility'
  | 'verified_user';

export interface MaterialSymbolProps {
  name: MaterialSymbolName;
  className?: string;
}

export function MaterialSymbol({ name, className }: MaterialSymbolProps) {
  return (
    <span className={`material-symbols-filled ${className ?? ''}`.trim()} aria-hidden="true">
      {name}
    </span>
  );
}
