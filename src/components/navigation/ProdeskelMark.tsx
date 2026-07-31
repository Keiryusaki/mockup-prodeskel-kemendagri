import Image from 'next/image';
import kemendagriLogo from '@/assets/logos/kemendagri-logo.webp';

export interface ProdeskelMarkProps {
  className?: string;
  /** Render on a dark background (footer) vs the light header. */
  inverted?: boolean;
}

/**
 * Official Kemendagri emblem + Prodeskel wordmark. Nara's own `Logo`
 * component is hardcoded to render "NaraUI" branding, so it can't be reused
 * here — this is fully bespoke.
 */
export function ProdeskelMark({ className, inverted = false }: ProdeskelMarkProps) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ''}`.trim()}>
      <Image src={kemendagriLogo} alt="Lambang Kementerian Dalam Negeri Republik Indonesia" className="h-11 w-auto shrink-0" priority />
      <div className="leading-tight">
        <p className={`text-lg font-bold tracking-tight ${inverted ? 'text-white' : 'text-text-main'}`}>
          PRODESKEL
        </p>
        <p className={`text-xs ${inverted ? 'text-white/70' : 'text-ink'}`}>Profil Desa dan Kelurahan</p>
      </div>
    </div>
  );
}
