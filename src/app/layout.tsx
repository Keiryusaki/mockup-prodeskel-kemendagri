import type { Metadata } from 'next';
import { themeNoFlashScript } from '@bynara-id/hooks/no-flash-script';
import { AppShell } from '@bynara-id/ui/app-shell';

// Nara base tokens first, then Prodeskel theme override, then Tailwind layers.
import '@bynara-id/tokens/css';
import '@/styles/themes/prodeskel.css';
import '@/styles/globals.css';

const title = 'Prodeskel — Profil Desa dan Kelurahan';
const description =
  'Data potensi, perkembangan, dan profil desa/kelurahan sebagai dasar perencanaan pembangunan yang tepat sasaran dan berkelanjutan.';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata: Metadata = {
  metadataBase: new URL('https://keiryusaki.github.io'),
  title,
  description,
  alternates: {
    canonical: `${basePath}/`,
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: `${basePath}/`,
    siteName: 'Prodeskel',
    title,
    description,
    images: [
      {
        url: `${basePath}/og.jpg`,
        width: 476,
        height: 250,
        alt: 'Prodeskel — Profil Desa dan Kelurahan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`${basePath}/og.jpg`],
  },
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
