import type { Metadata } from 'next';
import { PopulationDataPage } from '@/patterns/public-portal/PopulationDataPage';

export const metadata: Metadata = {
  title: 'Data Kependudukan Desa dan Kelurahan — Prodeskel',
  description: 'Ringkasan data penduduk berdasarkan wilayah, jenis kelamin, kepala keluarga, dan periode pendataan.',
};

export default function Page() {
  return <PopulationDataPage />;
}
