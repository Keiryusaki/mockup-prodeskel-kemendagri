import type { DatasetFilters, OptionalColumn, PopulationRow } from './population.types';

export const DEFAULT_FILTERS: DatasetFilters = {
  year: '2026',
  province: '',
  regency: '',
  district: '',
  village: '',
  status: '',
  source: '',
  minPopulation: '',
  maxPopulation: '',
  minHouseholds: '',
  maxHouseholds: '',
  updatedAfter: '',
  updatedBefore: '',
};

export const DEFAULT_COLUMNS: OptionalColumn[] = [
  'province',
  'regency',
  'population',
  'male',
  'female',
  'households',
  'period',
  'status',
];

export const COLUMN_LABELS: Record<OptionalColumn, string> = {
  province: 'Provinsi',
  regency: 'Kabupaten/Kota',
  district: 'Kecamatan',
  population: 'Jumlah Penduduk',
  male: 'Laki-laki',
  female: 'Perempuan',
  households: 'Kepala Keluarga',
  period: 'Periode Data',
  status: 'Status',
  updatedAt: 'Terakhir Diperbarui',
  source: 'Sumber Data',
};

export const populationRows: PopulationRow[] = [
  { id: 1, village: 'Desa Sukamaju', district: 'Cileunyi', regency: 'Kabupaten Bandung', province: 'Jawa Barat', population: 12845, male: 6472, female: 6373, households: 3284, period: 2026, status: 'Terverifikasi', updatedAt: '30 Juli 2026', updatedAtValue: '2026-07-30', source: 'Pemutakhiran Wilayah' },
  { id: 2, village: 'Kelurahan Melati', district: 'Sukmajaya', regency: 'Kota Depok', province: 'Jawa Barat', population: 21432, male: 10782, female: 10650, households: 5640, period: 2026, status: 'Terverifikasi', updatedAt: '30 Juli 2026', updatedAtValue: '2026-07-30', source: 'Pemutakhiran Wilayah' },
  { id: 3, village: 'Desa Sumber Rejeki', district: 'Jatisrono', regency: 'Kabupaten Wonogiri', province: 'Jawa Tengah', population: 8674, male: 4315, female: 4359, households: 2218, period: 2026, status: 'Dalam Validasi', updatedAt: '29 Juli 2026', updatedAtValue: '2026-07-29', source: 'Input Desa' },
  { id: 4, village: 'Kelurahan Tegalrejo', district: 'Tegalrejo', regency: 'Kota Yogyakarta', province: 'DI Yogyakarta', population: 11892, male: 5844, female: 6048, households: 3095, period: 2026, status: 'Terverifikasi', updatedAt: '31 Juli 2026', updatedAtValue: '2026-07-31', source: 'Pemutakhiran Wilayah' },
  { id: 5, village: 'Desa Purnama', district: 'Tabanan', regency: 'Kabupaten Tabanan', province: 'Bali', population: 7436, male: 3710, female: 3726, households: 1987, period: 2026, status: 'Terverifikasi', updatedAt: '31 Juli 2026', updatedAtValue: '2026-07-31', source: 'Input Desa' },
  { id: 6, village: 'Kelurahan Sungai Pinang', district: 'Sungai Pinang', regency: 'Kota Samarinda', province: 'Kalimantan Timur', population: 17654, male: 8940, female: 8714, households: 4458, period: 2026, status: 'Dalam Validasi', updatedAt: '29 Juli 2026', updatedAtValue: '2026-07-29', source: 'Input Kelurahan' },
  { id: 7, village: 'Desa Bonto Maju', district: 'Bontonompo', regency: 'Kabupaten Gowa', province: 'Sulawesi Selatan', population: 9281, male: 4632, female: 4649, households: 2401, period: 2026, status: 'Perlu Perbaikan', updatedAt: '28 Juli 2026', updatedAtValue: '2026-07-28', source: 'Validasi Kabupaten' },
  { id: 8, village: 'Kelurahan Kuta', district: 'Kuta', regency: 'Kabupaten Badung', province: 'Bali', population: 15432, male: 7920, female: 7512, households: 4128, period: 2026, status: 'Terverifikasi', updatedAt: '31 Juli 2026', updatedAtValue: '2026-07-31', source: 'Pemutakhiran Wilayah' },
  { id: 9, village: 'Desa Harapan Jaya', district: 'Bekasi Utara', regency: 'Kota Bekasi', province: 'Jawa Barat', population: 18973, male: 9556, female: 9417, households: 5024, period: 2026, status: 'Dalam Validasi', updatedAt: '30 Juli 2026', updatedAtValue: '2026-07-30', source: 'Input Desa' },
  { id: 10, village: 'Kelurahan Sukarame', district: 'Sukarame', regency: 'Kota Bandar Lampung', province: 'Lampung', population: 14620, male: 7318, female: 7302, households: 3862, period: 2026, status: 'Perlu Perbaikan', updatedAt: '28 Juli 2026', updatedAtValue: '2026-07-28', source: 'Validasi Kota' },
  { id: 11, village: 'Desa Lubuk Sari', district: 'Lubuk Alung', regency: 'Kabupaten Padang Pariaman', province: 'Sumatera Barat', population: 8015, male: 3977, female: 4038, households: 2094, period: 2026, status: 'Terverifikasi', updatedAt: '28 Juli 2026', updatedAtValue: '2026-07-28', source: 'Pemutakhiran Wilayah' },
  { id: 12, village: 'Kelurahan Cempaka Putih', district: 'Cempaka Putih', regency: 'Kota Jakarta Pusat', province: 'DKI Jakarta', population: 23109, male: 11532, female: 11577, households: 6320, period: 2026, status: 'Terverifikasi', updatedAt: '30 Juli 2026', updatedAtValue: '2026-07-30', source: 'Pemutakhiran Wilayah' },
];

export const populationDatasetConfig = {
  eyebrow: 'Data Prodeskel',
  title: 'Data Kependudukan Desa dan Kelurahan',
  description: 'Ringkasan data penduduk berdasarkan wilayah, jenis kelamin, kepala keluarga, dan periode pendataan.',
  updatedAt: 'Diperbarui 31 Juli 2026',
};

export const formatNumber = (value: number) => new Intl.NumberFormat('id-ID').format(value);
