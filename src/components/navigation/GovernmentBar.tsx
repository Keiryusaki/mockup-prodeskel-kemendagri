import { HelpCircle, Accessibility } from 'lucide-react';
import { Icon, LangToggle } from '@/ui';
import { PageContainer } from '@/components/layout/PageContainer';

const utilityLinkClass =
  'inline-flex items-center gap-1.5 font-medium text-white/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pd-secondary-400 rounded-sm';

export function GovernmentBar() {
  return (
    <div className="bg-pd-primary-950 text-white">
      <PageContainer className="flex flex-col gap-1 py-2 text-xs sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-0 sm:h-10">
        <div className="leading-tight">
          <p className="font-semibold">Kementerian Dalam Negeri Republik Indonesia</p>
          <p className="text-white/70">Direktorat Jenderal Bina Pemerintahan Desa</p>
        </div>
        <nav aria-label="Tautan utilitas" className="flex items-center gap-4">
          <button type="button" className={utilityLinkClass}>
            <Icon icon={HelpCircle} size="xs" aria-hidden="true" />
            Bantuan
          </button>
          <button type="button" className={utilityLinkClass}>
            <Icon icon={Accessibility} size="xs" aria-hidden="true" />
            Aksesibilitas
          </button>
          {/* Local CSS-var scoping (AGENTS.md rule #2) — .nara-lang-toggle__compact
              sets its own `color`/`border-color` from --text-main/--border-subtle,
              which read as dark-on-dark against this navy bar otherwise. */}
          <span style={{ '--text-main': '255 255 255', '--border-subtle': '148 180 214' } as React.CSSProperties}>
            <LangToggle compact />
          </span>
        </nav>
      </PageContainer>
    </div>
  );
}
