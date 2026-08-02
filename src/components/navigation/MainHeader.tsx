'use client';

import { useState } from 'react';
import { LogIn } from 'lucide-react';
import { Topbar, Button, Input, IconButton, Icon, Search, Menu as MenuIcon, X } from '@/ui';
import { ProdeskelMark } from './ProdeskelMark';
import { MobileNavigationDrawer } from './MobileNavigationDrawer';
import { NAV_ITEMS } from './nav-items';
import { NavigationMenu } from './NavigationMenu';

export function MainHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <Topbar
        sticky
        contained
        maxWidth="var(--pd-container-max)"
        className="prodeskel-main-header border-b border-border-subtle bg-surface"
        brand={<ProdeskelMark />}
        actions={
          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <Input
                size="sm"
                leadingIcon={<Icon icon={Search} size="sm" aria-hidden="true" />}
                placeholder="Cari data, wilayah, publikasi..."
                aria-label="Cari data, wilayah, publikasi"
                className="w-64"
              />
            </div>
            {/* Wrapping div (not a className on Button) avoids fighting .nara-btn's own
                `display: inline-flex` at equal CSS specificity. */}
            <div className="hidden sm:block">
              <Button size="sm" iconLeft={<LogIn size={16} aria-hidden="true" />}>
                Masuk Sistem
              </Button>
            </div>
            <div className="lg:hidden">
              <IconButton
                icon={<Icon icon={mobileOpen ? X : MenuIcon} size="md" aria-hidden="true" />}
                aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
                variant="ghost"
                size="sm"
                onClick={() => setMobileOpen((o) => !o)}
              />
            </div>
          </div>
        }
      >
        <div className="hidden lg:block">
          <NavigationMenu items={NAV_ITEMS} />
        </div>
      </Topbar>
      <MobileNavigationDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} items={NAV_ITEMS} />
    </>
  );
}
