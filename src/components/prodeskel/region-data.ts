export interface ProvinceProgress {
  name: string;
  progress: number;
}

export const PROVINCE_PROGRESS: ProvinceProgress[] = [
  { name: 'DI Yogyakarta', progress: 98.72 },
  { name: 'Bali', progress: 95.31 },
  { name: 'DKI Jakarta', progress: 93.18 },
  { name: 'Jawa Tengah', progress: 90.45 },
  { name: 'Jawa Timur', progress: 88.21 },
  { name: 'Kalimantan Timur', progress: 87.03 },
  { name: 'Sulawesi Selatan', progress: 85.79 },
  { name: 'Jawa Barat', progress: 84.12 },
  { name: 'Sumatera Barat', progress: 81.76 },
  { name: 'Lampung', progress: 79.34 },
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
