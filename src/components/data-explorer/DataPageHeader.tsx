import { Download, Share2, ChevronDown } from 'lucide-react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownPanel,
  DropdownTrigger,
} from '@/ui';
import { populationDatasetConfig } from './population.data';

interface DataPageHeaderProps {
  onShare: () => void;
  onExport: (format: string) => void;
}

export function DataPageHeader({ onShare, onExport }: DataPageHeaderProps) {
  return (
    <header className="flex flex-col gap-5 py-7 lg:flex-row lg:items-end lg:justify-between lg:py-8">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
          {populationDatasetConfig.eyebrow}
        </p>
        <h1 className="mt-2 break-words text-3xl font-bold leading-tight text-text-main md:text-4xl">
          {populationDatasetConfig.title}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-ink md:text-base">
          {populationDatasetConfig.description}
        </p>
        <p className="mt-2 text-xs text-text-muted">{populationDatasetConfig.updatedAt}</p>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <Button size="sm" variant="outline" iconLeft={<Share2 size={15} aria-hidden="true" />} onClick={onShare}>
          Bagikan
        </Button>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button
              size="sm"
              iconLeft={<Download size={15} aria-hidden="true" />}
              iconRight={<ChevronDown size={14} aria-hidden="true" />}
            >
              Unduh Data
            </Button>
          </DropdownTrigger>
          <DropdownPanel className="min-w-[180px]">
            {['CSV', 'XLSX', 'PDF'].map((format) => (
              <DropdownItem key={format} onClick={() => onExport(format)}>
                Unduh {format}
              </DropdownItem>
            ))}
          </DropdownPanel>
        </Dropdown>
      </div>
    </header>
  );
}
