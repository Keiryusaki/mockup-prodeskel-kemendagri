'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { LogIn, ChevronDown } from 'lucide-react';
import { Button, Input, Icon, Search, Divider, type TopbarNavItem } from '@/ui';

export interface MobileNavigationDrawerProps {
  open: boolean;
  onClose: () => void;
  items: TopbarNavItem[];
}

export function MobileNavigationDrawer({ open, onClose, items }: MobileNavigationDrawerProps) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-modal lg:hidden">
      <button
        type="button"
        aria-label="Tutup menu"
        tabIndex={-1}
        className="absolute inset-0 bg-pd-neutral-900/40"
        onClick={onClose}
      />
      <nav
        aria-label="Navigasi utama (mobile)"
        className="relative max-h-[85vh] overflow-y-auto rounded-b-xl border-b border-border-subtle bg-surface p-4 shadow-lg"
      >
        <Input
          leadingIcon={<Icon icon={Search} size="sm" aria-hidden="true" />}
          placeholder="Cari data, wilayah, publikasi..."
          aria-label="Cari data, wilayah, publikasi"
          className="mb-4"
        />
        <ul className="flex flex-col">
          {items.map((item) => {
            const isExpanded = expanded === item.label;
            return (
              <li key={item.label}>
                {item.children ? (
                  <button
                    type="button"
                    onClick={() => setExpanded(isExpanded ? null : item.label)}
                    aria-expanded={isExpanded}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-text-main hover:bg-subtle"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-150 ${isExpanded ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    onClick={onClose}
                    className={`block rounded-md px-3 py-2.5 text-sm font-medium ${
                      item.label === 'Beranda' && pathname === '/' ? 'bg-primary/10 text-primary' : 'text-text-main hover:bg-subtle'
                    }`}
                  >
                    {item.label}
                  </a>
                )}
                {item.children && isExpanded ? (
                  <ul className="ml-3 flex flex-col border-l border-border-subtle pl-3">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          onClick={onClose}
                          className={`block rounded-md px-3 py-2 text-sm ${pathname === child.href ? 'bg-primary/10 font-semibold text-primary' : 'text-ink hover:bg-subtle'}`}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>
        <Divider className="my-4" />
        <Button iconLeft={<LogIn size={16} aria-hidden="true" />} fullWidth>
          Masuk Sistem
        </Button>
      </nav>
    </div>
  );
}
