import { Megaphone, BookOpen, FileText } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { InformationCard } from '@/components/data-display/InformationCard';
import { HelpCenterCard } from '@/components/data-display/HelpCenterCard';

export function InformationAndHelp() {
  return (
    <Section tone="page" padding="compact" id="informasi">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <InformationCard
          icon={Megaphone}
          title="Pengumuman"
          items={[
            'Pemutakhiran Data Prodeskel Tahun 2026 Telah Dibuka',
            'Bimbingan Teknis Pengelola Data Desa/Kelurahan Tahun 2026',
            'Jadwal Rekonsiliasi Data Semester II Tahun 2026',
          ]}
        />
        <InformationCard
          icon={BookOpen}
          title="Publikasi Terbaru"
          items={[
            'Profil Desa dan Kelurahan Indonesia 2026',
            'Statistik Potensi Desa 2026',
            'Indeks Desa Membangun 2026',
          ]}
        />
        <InformationCard
          icon={FileText}
          title="Panduan Penggunaan"
          items={['Panduan Pengelola Data', 'Panduan Pengisian Variabel', 'Video Tutorial Penggunaan Sistem']}
        />
        <HelpCenterCard phone="+62 21 3456 7890" email="helpdesk.prodeskel@kemendagri.go.id" hours="Senin–Jumat, 08.00–16.00 WIB" />
      </div>
    </Section>
  );
}
