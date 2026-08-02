export type PopulationStatus = 'Terverifikasi' | 'Dalam Validasi' | 'Perlu Perbaikan' | 'Draft';

export interface PopulationRow {
  id: number;
  village: string;
  district: string;
  regency: string;
  province: string;
  population: number;
  male: number;
  female: number;
  households: number;
  period: number;
  status: PopulationStatus;
  updatedAt: string;
  updatedAtValue: string;
  source: string;
}

export type SortKey =
  | 'village'
  | 'population'
  | 'male'
  | 'female'
  | 'households'
  | 'period'
  | 'updatedAt';

export type SortDirection = 'asc' | 'desc';

export type OptionalColumn =
  | 'province'
  | 'regency'
  | 'district'
  | 'population'
  | 'male'
  | 'female'
  | 'households'
  | 'period'
  | 'status'
  | 'updatedAt'
  | 'source';

export interface DatasetFilters {
  year: string;
  province: string;
  regency: string;
  district: string;
  village: string;
  status: string;
  source: string;
  minPopulation: string;
  maxPopulation: string;
  minHouseholds: string;
  maxHouseholds: string;
  updatedAfter: string;
  updatedBefore: string;
}
