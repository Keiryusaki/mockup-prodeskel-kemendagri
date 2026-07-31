import { Input, Icon, Search } from '@/ui';

export interface RegionSearchProps {
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function RegionSearch({ className, placeholder = 'Cari provinsi atau kabupaten...', value, onChange }: RegionSearchProps) {
  return (
    <Input
      className={className}
      leadingIcon={<Icon icon={Search} size="sm" aria-hidden="true" />}
      placeholder={placeholder}
      aria-label={placeholder}
      value={value}
      onChange={onChange ? (e) => onChange(e.target.value) : undefined}
      clearable={Boolean(onChange)}
      onClear={onChange ? () => onChange('') : undefined}
    />
  );
}
