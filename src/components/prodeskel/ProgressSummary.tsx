import { Button, Icon, ChevronDown, Dropdown, DropdownTrigger, DropdownPanel, DropdownItem } from '@/ui';
import { ChartPanel } from '@/components/data-display/ChartPanel';
import { ProgressBarList } from '@/components/data-display/ProgressBarList';
import { RankedRegionList } from '@/components/data-display/RankedRegionList';
import { PROVINCE_PROGRESS, TOP_REGENCIES } from './region-data';

export function ProgressSummary() {
  return (
    <ChartPanel
      title="Ringkasan Progres Nasional"
      description="Progres pendataan berdasarkan provinsi"
      action={
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button variant="outline" size="sm" iconRight={<Icon icon={ChevronDown} size="xs" aria-hidden="true" />}>
              Top Provinsi
            </Button>
          </DropdownTrigger>
          <DropdownPanel>
            <DropdownItem>Top Provinsi</DropdownItem>
            <DropdownItem>Semua Provinsi</DropdownItem>
          </DropdownPanel>
        </Dropdown>
      }
    >
      <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-5">
        <ProgressBarList
          className="lg:col-span-3"
          items={PROVINCE_PROGRESS.map((r) => ({ label: r.name, value: r.progress }))}
        />
        <RankedRegionList
          title="Top Kabupaten/Kota"
          className="lg:col-span-2 lg:border-l lg:border-border-subtle lg:pl-6"
          items={TOP_REGENCIES.map((r) => ({ rank: r.rank, name: r.name, value: r.progress }))}
        />
      </div>

      <Button variant="outline" size="sm" className="mt-5 self-end">
        Lihat Selengkapnya
      </Button>
    </ChartPanel>
  );
}
