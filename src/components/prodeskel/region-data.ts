import type { StaticImageData } from 'next/image';
import diYogyakartaLogo from '@/assets/provinces/di-yogyakarta.webp';
import baliLogo from '@/assets/provinces/bali.webp';
import dkiJakartaLogo from '@/assets/provinces/dki-jakarta.webp';
import jawaTengahLogo from '@/assets/provinces/jawa-tengah.webp';
import jawaTimurLogo from '@/assets/provinces/jawa-timur.webp';
import kalimantanTimurLogo from '@/assets/provinces/kalimantan-timur.webp';
import sulawesiSelatanLogo from '@/assets/provinces/sulawesi-selatan.webp';
import jawaBaratLogo from '@/assets/provinces/jawa-barat.webp';
import sumateraBaratLogo from '@/assets/provinces/sumatera-barat.webp';
import lampungLogo from '@/assets/provinces/lampung.webp';

export interface ProvinceProgress {
  name: string;
  progress: number;
  logo: StaticImageData;
}

// Province marks sourced from BKPM Regional Investment's provWebp collection.
export const PROVINCE_PROGRESS: ProvinceProgress[] = [
  { name: 'DI Yogyakarta', progress: 98.72, logo: diYogyakartaLogo },
  { name: 'Bali', progress: 95.31, logo: baliLogo },
  { name: 'DKI Jakarta', progress: 93.18, logo: dkiJakartaLogo },
  { name: 'Jawa Tengah', progress: 90.45, logo: jawaTengahLogo },
  { name: 'Jawa Timur', progress: 88.21, logo: jawaTimurLogo },
  { name: 'Kalimantan Timur', progress: 87.03, logo: kalimantanTimurLogo },
  { name: 'Sulawesi Selatan', progress: 85.79, logo: sulawesiSelatanLogo },
  { name: 'Jawa Barat', progress: 84.12, logo: jawaBaratLogo },
  { name: 'Sumatera Barat', progress: 81.76, logo: sumateraBaratLogo },
  { name: 'Lampung', progress: 79.34, logo: lampungLogo },
];

export interface RegionRank {
  rank: number;
  name: string;
  progress: number;
}

export const TOP_REGENCIES: RegionRank[] = [
  { rank: 1, name: 'Kota Yogyakarta', progress: 100 },
  { rank: 2, name: 'Kota Surakarta', progress: 99.32 },
  { rank: 3, name: 'Kabupaten Badung', progress: 98.94 },
  { rank: 4, name: 'Kota Denpasar', progress: 98.61 },
  { rank: 5, name: 'Kabupaten Sleman', progress: 98.27 },
];
