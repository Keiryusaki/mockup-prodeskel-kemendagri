import { Section } from '@/components/layout/Section';
import { TwoColumnLayout } from '@/components/layout/TwoColumnLayout';
import { ClassificationOverview } from './ClassificationOverview';
import { ProdeskelActivityFeed } from './ProdeskelActivityFeed';

export function ClassificationAndActivity() {
  return (
    <Section tone="subtle" padding="compact" id="klasifikasi">
      <TwoColumnLayout left={<ClassificationOverview />} right={<ProdeskelActivityFeed />} />
    </Section>
  );
}
