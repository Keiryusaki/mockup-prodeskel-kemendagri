'use client';

import { useState } from 'react';
import { Section } from '@/components/layout/Section';
import { TwoColumnLayout } from '@/components/layout/TwoColumnLayout';
import { RegionalMapPanel } from './RegionalMapPanel';
import { ProgressSummary } from './ProgressSummary';

export function RegionalExploration() {
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);

  return (
    // Border-top transition is already covered by NationalOverview's own
    // border-b right above — adding another here would double the line.
    <Section tone="page" padding="compact" id="progres">
      <TwoColumnLayout
        ratio="44:56"
        gap="16px"
        className="2xl:grid-cols-2"
        left={<RegionalMapPanel selectedProvince={selectedProvince} onSelectProvince={setSelectedProvince} />}
        right={<ProgressSummary selectedProvince={selectedProvince} />}
      />
    </Section>
  );
}
