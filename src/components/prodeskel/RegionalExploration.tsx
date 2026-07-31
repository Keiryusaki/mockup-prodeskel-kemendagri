import { Section } from '@/components/layout/Section';
import { TwoColumnLayout } from '@/components/layout/TwoColumnLayout';
import { RegionalMapPanel } from './RegionalMapPanel';
import { ProgressSummary } from './ProgressSummary';

export function RegionalExploration() {
  return (
    // `flush-top`: the gap up to NationalOverview's stat cards should come
    // entirely from that section's own bottom padding (compact, ~28px) so the
    // two read as one continuous run rather than two separated blocks.
    <Section tone="subtle" padding="flush-top" id="progres">
      <TwoColumnLayout ratio="44:56" gap="16px" left={<RegionalMapPanel />} right={<ProgressSummary />} />
    </Section>
  );
}
