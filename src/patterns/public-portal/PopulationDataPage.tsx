import { GovernmentFooter } from '@/components/layout/GovernmentFooter';
import { PopulationDataExplorer } from '@/components/data-explorer/PopulationDataExplorer';
import { GovernmentBar } from '@/components/navigation/GovernmentBar';
import { MainHeader } from '@/components/navigation/MainHeader';

export function PopulationDataPage() {
  return (
    <>
      <GovernmentBar />
      <MainHeader />
      <PopulationDataExplorer />
      <GovernmentFooter />
    </>
  );
}
