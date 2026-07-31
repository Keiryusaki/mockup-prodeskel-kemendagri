import { Home, Sprout, BarChart3, Users, Briefcase, Wrench } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { DataCategoryCard } from '@/components/data-display/DataCategoryCard';

const CATEGORIES = [
  { icon: Home, title: 'Data Dasar Keluarga', description: 'Data keluarga, anggota keluarga, dan karakteristik dasar keluarga.' },
  { icon: Sprout, title: 'Potensi Desa/Kelurahan', description: 'Data potensi sumber daya alam, manusia, sosial budaya, dan kelembagaan.' },
  { icon: BarChart3, title: 'Tingkat Perkembangan', description: 'Indeks dan klasifikasi tingkat perkembangan desa/kelurahan.' },
  { icon: Users, title: 'Kependudukan', description: 'Data penduduk, kelahiran, kematian, mobilitas, dan kependudukan lainnya.' },
  { icon: Briefcase, title: 'Ekonomi & BUMDes', description: 'Data ekonomi desa/kelurahan, usaha, BUMDes, dan ketenagakerjaan.' },
  { icon: Wrench, title: 'Sarana & Prasarana', description: 'Data sarana prasarana, layanan dasar, dan infrastruktur wilayah.' },
];

export function DataCategoryGrid() {
  return (
    <Section tone="page" id="data-utama">
      <SectionHeader title="Data Utama Prodeskel" description="Enam kategori data inti yang menyusun profil setiap desa dan kelurahan." />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((cat) => (
          <DataCategoryCard key={cat.title} {...cat} />
        ))}
      </div>
    </Section>
  );
}
