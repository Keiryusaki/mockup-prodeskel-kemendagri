import { TopbarNav, type TopbarNavItem } from '@/ui';

export interface NavigationMenuProps {
  items: TopbarNavItem[];
  className?: string;
}

export function NavigationMenu({ items, className }: NavigationMenuProps) {
  return <TopbarNav items={items} className={className} />;
}
