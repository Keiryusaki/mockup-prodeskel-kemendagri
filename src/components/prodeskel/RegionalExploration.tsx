import { Section } from '@/components/layout/Section';
import { TwoColumnLayout } from '@/components/layout/TwoColumnLayout';
import { RegionalMapPanel } from './RegionalMapPanel';
import { ProgressSummary } from './ProgressSummary';

export function RegionalExploration() {
  return (
    <Section tone="subtle" id="progres">
      <TwoColumnLayout left={<RegionalMapPanel />} right={<ProgressSummary />} />
    </Section>
  );
}
