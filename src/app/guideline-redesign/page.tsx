import type { Metadata } from 'next';
import { RedesignProposal } from '@/components/proposal/RedesignProposal';

export const metadata: Metadata = {
  title: 'Guideline Redesign Prodeskel — Proposal Interaktif',
  description: 'Presentasi interaktif rancangan modernisasi Portal Data Desa dan Kelurahan Prodeskel.',
};

export default function Page() {
  return <RedesignProposal />;
}
