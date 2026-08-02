import { Section } from '@/components/layout/Section';
import { TwoColumnLayout } from '@/components/layout/TwoColumnLayout';
import { ClassificationOverview } from './ClassificationOverview';
import { ProdeskelActivityFeed } from './ProdeskelActivityFeed';

export function ClassificationAndActivity() {
  return (
    <Section tone="page" padding="compact" id="klasifikasi">
      <TwoColumnLayout ratio="3:2" gap="16px" left={<ClassificationOverview />} right={<ProdeskelActivityFeed />} />
    </Section>
  );
}
