'use client';

import { usePathname } from 'next/navigation';
import type { TopbarNavItem } from '@/ui';
import { DataProdeskelMegaMenu } from './DataProdeskelMegaMenu';

export interface NavigationMenuProps {
  items: TopbarNavItem[];
  className?: string;
}

/**
 * Bespoke nav rendering (not Nara's TopbarNav) — needed for the underline
 * active state, the primary-50 hover treatment, and the "Data Prodeskel"
 * mega menu, none of which fit TopbarNav's built-in pill-active / generic
 * multi-column mega dropdown.
 */
export function NavigationMenu({ items, className }: NavigationMenuProps) {
  const pathname = usePathname() ?? '/';

  return (
    <nav className={`flex items-center gap-1 ${className ?? ''}`.trim()}>
      {items.map((item) =>
        item.label === 'Data Prodeskel' ? (
          <DataProdeskelMegaMenu key={item.label} active={pathname.startsWith('/data-prodeskel')} />
        ) : (
          <a
            key={item.label}
            href={item.href}
            className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pd-secondary-400 ${
              (item.label === 'Beranda' && pathname === '/')
                ? "text-primary after:absolute after:bottom-0.5 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-primary after:content-['']"
                : 'text-text-muted hover:bg-pd-primary-50 hover:text-pd-primary-700'
            }`}
          >
            {item.label}
          </a>
        ),
      )}
    </nav>
  );
}
