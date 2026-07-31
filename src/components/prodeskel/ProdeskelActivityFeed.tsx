import { ChartPanel } from '@/components/data-display/ChartPanel';
import { ActivityFeed, type ActivityFeedItemData } from '@/components/data-display/ActivityFeed';

const ACTIVITIES: ActivityFeedItemData[] = [
  {
    actor: 'Pemerintah Kabupaten Banyumas',
    description: 'Pemutakhiran data potensi desa telah dilakukan.',
    time: '31 Juli 2026, 14.32 WIB',
    badge: 'Pemutakhiran',
    tone: 'primary',
  },
  {
    actor: 'Pemerintah Kota Makassar',
    description: 'Validasi data sarana prasarana kelurahan selesai.',
    time: '31 Juli 2026, 11.08 WIB',
    badge: 'Validasi',
    tone: 'success',
  },
  {
    actor: 'Pemerintah Kabupaten Lombok Utara',
    description: 'Input data ekonomi dan BUMDes periode 2026.',
    time: '31 Juli 2026, 09.45 WIB',
    badge: 'Input Data',
    tone: 'info',
  },
  {
    actor: 'Pemerintah Provinsi Kalimantan Timur',
    description: 'Rekapitulasi progres pendataan bulan Juli 2026.',
    time: '31 Juli 2026, 08.21 WIB',
    badge: 'Laporan',
    tone: 'warning',
  },
];

export function ProdeskelActivityFeed() {
  return (
    <ChartPanel
      title="Suara Prodeskel"
      description="Aktivitas terbaru dari daerah"
      action={
        <a
          href="#"
          className="shrink-0 rounded-sm text-sm font-semibold text-primary hover:text-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pd-secondary-400"
        >
          Lihat Semua
        </a>
      }
    >
      <ActivityFeed items={ACTIVITIES} className="flex-1" />
    </ChartPanel>
  );
}
