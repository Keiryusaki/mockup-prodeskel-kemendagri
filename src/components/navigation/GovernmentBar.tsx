import Image from 'next/image';
import { HelpCircle, Accessibility } from 'lucide-react';
import { Icon } from '@/ui';
import { PageContainer } from '@/components/layout/PageContainer';
import { BahasaMenu } from './BahasaMenu';
import kemendagriLogo from '@/assets/logos/kemendagri-logo.webp';

const utilityLinkClass =
  'inline-flex items-center gap-1.5 font-medium text-white/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pd-secondary-400 rounded-sm';

const Separator = () => <span className="h-3 w-px shrink-0 bg-white/20" aria-hidden="true" />;

export function GovernmentBar() {
  return (
    <div className="bg-pd-primary-950 text-white">
      <PageContainer className="flex flex-col gap-1 py-2 text-xs sm:h-10 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-0 xl:!max-w-none xl:!px-4 2xl:!px-6">
        <div className="flex items-center gap-2.5 leading-tight">
          <Image src={kemendagriLogo} alt="" aria-hidden="true" className="h-6 w-auto shrink-0" />
          <div>
            <p className="font-semibold">Kementerian Dalam Negeri Republik Indonesia</p>
            <p className="text-white/70">Direktorat Jenderal Bina Pemerintahan Desa</p>
          </div>
        </div>
        <nav aria-label="Tautan utilitas" className="flex items-center gap-4">
          <button type="button" className={utilityLinkClass}>
            <Icon icon={HelpCircle} size="xs" aria-hidden="true" />
            Bantuan
          </button>
          <Separator />
          <button type="button" className={utilityLinkClass}>
            <Icon icon={Accessibility} size="xs" aria-hidden="true" />
            Aksesibilitas
          </button>
          <Separator />
          <BahasaMenu />
        </nav>
      </PageContainer>
    </div>
  );
}
