'use client';

import { useState } from 'react';
import { Info } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { TwoColumnLayout } from '@/components/layout/TwoColumnLayout';
import { RegionalMapPanel } from './RegionalMapPanel';
import { ProgressSummary } from './ProgressSummary';

export function RegionalExploration() {
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);

  return (
    // Border-top transition is already covered by NationalOverview's own
    // border-b right above — adding another here would double the line.
    <Section tone="subtle-blue" padding="compact" id="progres">
      <TwoColumnLayout
        ratio="44:56"
        gap="16px"
        align="start"
        left={<RegionalMapPanel selectedProvince={selectedProvince} onSelectProvince={setSelectedProvince} />}
        right={<ProgressSummary selectedProvince={selectedProvince} />}
      />
      <div className="mt-3 flex justify-end">
        <p className="inline-flex items-center gap-1 text-xs text-ink">
          <Info size={12} aria-hidden="true" />
          Data simulasi untuk kebutuhan visualisasi konsep.
        </p>
      </div>
    </Section>
  );
}
