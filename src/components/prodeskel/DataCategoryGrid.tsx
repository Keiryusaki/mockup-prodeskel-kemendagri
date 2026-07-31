import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { DataCategoryCard } from '@/components/data-display/DataCategoryCard';
import { DATA_CATEGORIES } from './data-categories';

export function DataCategoryGrid() {
  return (
    <Section tone="page" id="data-utama">
      <SectionHeader title="Data Utama Prodeskel" description="Enam kategori data inti yang menyusun profil setiap desa dan kelurahan." />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {DATA_CATEGORIES.map((cat) => (
          <DataCategoryCard key={cat.title} {...cat} />
        ))}
      </div>
    </Section>
  );
}
