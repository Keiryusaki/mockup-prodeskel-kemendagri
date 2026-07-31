import { GovernmentBar } from '@/components/navigation/GovernmentBar';
import { MainHeader } from '@/components/navigation/MainHeader';
import { GovernmentFooter } from '@/components/layout/GovernmentFooter';
import { HeroSection } from '@/components/prodeskel/HeroSection';
import { NationalOverview } from '@/components/prodeskel/NationalOverview';
import { RegionalExploration } from '@/components/prodeskel/RegionalExploration';
import { DataCategoryGrid } from '@/components/prodeskel/DataCategoryGrid';
import { ClassificationAndActivity } from '@/components/prodeskel/ClassificationAndActivity';
import { InformationAndHelp } from '@/components/prodeskel/InformationAndHelp';

export function LandingPage() {
  return (
    <>
      <GovernmentBar />
      <MainHeader />
      <main id="beranda">
        <HeroSection />
        <NationalOverview />
        <RegionalExploration />
        <DataCategoryGrid />
        <ClassificationAndActivity />
        <InformationAndHelp />
      </main>
      <GovernmentFooter />
    </>
  );
}
