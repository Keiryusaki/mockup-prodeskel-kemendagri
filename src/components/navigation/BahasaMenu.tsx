'use client';

import { Check, Globe } from 'lucide-react';
import { useLang, ChevronDown, Dropdown, DropdownTrigger, DropdownPanel, DropdownItem } from '@/ui';

export function BahasaMenu() {
  const { lang, setLang } = useLang();

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-sm font-medium text-white/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pd-secondary-400"
        >
          <Globe size={14} aria-hidden="true" />
          Bahasa
          <ChevronDown size={13} aria-hidden="true" />
        </button>
      </DropdownTrigger>
      <DropdownPanel>
        <DropdownItem icon={lang === 'id' ? <Check size={14} /> : undefined} onClick={() => setLang('id')}>
          Indonesia
        </DropdownItem>
        <DropdownItem icon={lang === 'en' ? <Check size={14} /> : undefined} onClick={() => setLang('en')}>
          English
        </DropdownItem>
      </DropdownPanel>
    </Dropdown>
  );
}
