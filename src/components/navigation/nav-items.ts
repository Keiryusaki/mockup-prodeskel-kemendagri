import type { TopbarNavItem } from '@/ui';

export const NAV_ITEMS: TopbarNavItem[] = [
  { label: 'Beranda', href: '#beranda', active: true },
  {
    label: 'Data Prodeskel',
    href: '#data-utama',
    children: [
      { label: 'Data Dasar Keluarga', href: '#data-utama' },
      { label: 'Potensi Desa/Kelurahan', href: '#data-utama' },
      { label: 'Tingkat Perkembangan', href: '#data-utama' },
      { label: 'Kependudukan', href: '#data-utama' },
      { label: 'Ekonomi & BUMDes', href: '#data-utama' },
      { label: 'Sarana & Prasarana', href: '#data-utama' },
    ],
  },
  { label: 'Progres', href: '#progres' },
  { label: 'Klasifikasi', href: '#klasifikasi' },
  { label: 'Publikasi', href: '#informasi' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Panduan', href: '#informasi' },
];
