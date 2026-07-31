import type { Metadata } from 'next';
import { themeNoFlashScript } from '@bynara-id/hooks/no-flash-script';
import { AppShell } from '@bynara-id/ui/app-shell';

// Nara base tokens first, then Prodeskel theme override, then Tailwind layers.
import '@bynara-id/tokens/css';
import '@/styles/themes/prodeskel.css';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Prodeskel — Profil Desa dan Kelurahan',
  description:
    'Data potensi, perkembangan, dan profil desa/kelurahan sebagai dasar perencanaan pembangunan yang tepat sasaran dan berkelanjutan.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeNoFlashScript }} />
      </head>
      <body suppressHydrationWarning>
        {/* Locked to light theme for the proposal stage — dark mode is not in scope yet. */}
        <AppShell defaultTheme="light" defaultLang="id">
          {children}
        </AppShell>
      </body>
    </html>
  );
}
