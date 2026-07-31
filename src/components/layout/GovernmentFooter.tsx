import { MapPin, Phone, Mail, Youtube, Instagram, Facebook, Twitter } from 'lucide-react';
import { Footer, Icon } from '@/ui';
import { ProdeskelMark } from '@/components/navigation/ProdeskelMark';

const QUICK_LINKS = [
  { label: 'Tentang Prodeskel', href: '#' },
  { label: 'Kebijakan Privasi', href: '#' },
  { label: 'Syarat & Ketentuan', href: '#' },
  { label: 'Peta Situs', href: '#' },
];

const SOCIALS = [
  { label: 'YouTube', href: '#', icon: Youtube },
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'Facebook', href: '#', icon: Facebook },
  { label: 'X (Twitter)', href: '#', icon: Twitter },
];

/**
 * Local dark-navy scoping via inline CSS custom properties — the safe,
 * sanctioned way to re-theme a Nara primitive locally (AGENTS.md rule #2)
 * without fighting footer.css's specificity or touching the package.
 */
const darkScopeStyle = {
  '--bg-surface': 'var(--pd-primary-950)',
  '--text-main': '255 255 255',
  '--text-muted': '203 213 225',
  '--border-subtle': '30 58 95',
} as React.CSSProperties;

export function GovernmentFooter() {
  return (
    <Footer
      style={darkScopeStyle}
      copyright="© 2026 Kementerian Dalam Negeri Republik Indonesia"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
        <div className="max-w-xs">
          <ProdeskelMark inverted />
          <p className="mt-3 text-sm text-white/70">
            Portal data desa dan kelurahan tingkat nasional untuk perencanaan pembangunan yang tepat sasaran.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Kementerian Dalam Negeri RI</p>
          <p className="text-sm text-white/70">Direktorat Jenderal Bina Pemerintahan Desa</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <Icon icon={MapPin} size="sm" className="mt-0.5 shrink-0" aria-hidden="true" />
              <span>Jl. Medan Merdeka Utara No. 7, Jakarta Pusat 10110</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon icon={Phone} size="sm" className="shrink-0" aria-hidden="true" />
              <span>(021) 3456 7890</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon icon={Mail} size="sm" className="shrink-0" aria-hidden="true" />
              <span>info@kemendagri.go.id</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-white/60">Tautan Cepat</p>
          <ul className="mt-3 flex flex-col gap-2">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="rounded-sm text-sm text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pd-secondary-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-white/60">Ikuti Kami</p>
          <div className="mt-3 flex items-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pd-secondary-400"
              >
                <Icon icon={social.icon} size="sm" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Footer>
  );
}
