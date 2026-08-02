import { Home, Sprout, BarChart3, Users, Briefcase, Wrench, type LucideIcon } from 'lucide-react';
import type { DataCategoryTone } from '@/components/data-display/DataCategoryCard';

export interface DataCategory {
  icon: LucideIcon;
  title: string;
  description: string;
  tone: DataCategoryTone;
  href?: string;
}

export const DATA_CATEGORIES: DataCategory[] = [
  { icon: Home, title: 'Data Dasar Keluarga', description: 'Data keluarga, anggota keluarga, dan karakteristik dasar keluarga.', tone: 'primary' },
  { icon: Sprout, title: 'Potensi Desa/Kelurahan', description: 'Data potensi sumber daya alam, manusia, sosial budaya, dan kelembagaan.', tone: 'secondary' },
  { icon: BarChart3, title: 'Tingkat Perkembangan', description: 'Indeks dan klasifikasi tingkat perkembangan desa/kelurahan.', tone: 'accent' },
  { icon: Users, title: 'Kependudukan', description: 'Data penduduk, kelahiran, kematian, mobilitas, dan kependudukan lainnya.', tone: 'info', href: '/data-prodeskel/kependudukan' },
  { icon: Briefcase, title: 'Ekonomi & BUMDes', description: 'Data ekonomi desa/kelurahan, usaha, BUMDes, dan ketenagakerjaan.', tone: 'success' },
  { icon: Wrench, title: 'Sarana & Prasarana', description: 'Data sarana prasarana, layanan dasar, dan infrastruktur wilayah.', tone: 'warning' },
];
