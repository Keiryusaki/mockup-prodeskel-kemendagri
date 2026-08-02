import type { TopbarNavItem } from '@/ui';
import { withBasePath } from '@/lib/base-path';

export const NAV_ITEMS: TopbarNavItem[] = [
  { label: 'Beranda', href: withBasePath('/#beranda') },
  {
    label: 'Data Prodeskel',
    href: withBasePath('/#data-utama'),
    children: [
      { label: 'Data Dasar Keluarga', href: withBasePath('/#data-utama') },
      { label: 'Potensi Desa/Kelurahan', href: withBasePath('/#data-utama') },
      { label: 'Tingkat Perkembangan', href: withBasePath('/#data-utama') },
      { label: 'Kependudukan', href: withBasePath('/data-prodeskel/kependudukan') },
      { label: 'Ekonomi & BUMDes', href: withBasePath('/#data-utama') },
      { label: 'Sarana & Prasarana', href: withBasePath('/#data-utama') },
    ],
  },
  { label: 'Progres', href: withBasePath('/#progres') },
  { label: 'Klasifikasi', href: withBasePath('/#klasifikasi') },
  { label: 'Publikasi', href: withBasePath('/#informasi') },
  { label: 'Galeri', href: withBasePath('/#galeri') },
  { label: 'Panduan', href: withBasePath('/#informasi') },
];
