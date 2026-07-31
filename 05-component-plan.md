# 05 — Component Plan

## Gunakan dari NaraUI pada tahap proposal

Primitive:

- Button
- IconButton
- Card
- Input
- Badge
- Dropdown
- Tooltip
- Divider

Gunakan melalui adapter `src/ui/index.ts`.

## Komponen landing yang harus dibuat

### Navigation

- `GovernmentBar`
- `MainHeader`
- `NavigationMenu`
- `MobileNavigationDrawer`

### Layout

- `PageContainer`
- `Section`
- `SectionHeader`
- `TwoColumnLayout`

### Data display

- `StatCard`
- `ChartPanel`
- `ProgressBarList`
- `RankedRegionList`
- `ClassificationCard`
- `DataCategoryCard`
- `ActivityFeed`
- `ActivityFeedItem`
- `InformationCard`

### Prodeskel domain

- `HeroSection`
- `RegionSearch`
- `RegionalMapPanel`
- `NationalOverview`
- `ProgressSummary`
- `DataCategoryGrid`
- `ClassificationOverview`
- `ProdeskelActivityFeed`
- `HelpCenterCard`
- `GovernmentFooter`

## State minimum

Primitive dan komponen interaktif minimal mendukung:

- default;
- hover;
- focus-visible;
- active;
- disabled;
- loading bila relevan;
- empty state untuk panel data;
- error state ringan untuk pencarian atau data gagal dimuat.

## Komponen fase setelah tender

- `ApplicationShell`
- `Sidebar`
- `AdministrativeBreadcrumb`
- `RegionSelector`
- `DataPeriodSelector`
- `AdvancedDataTable`
- `AdvancedFilter`
- `LongFormSection`
- `FormTableOfContents`
- `CompletionIndicator`
- `ValidationSummary`
- `FileUpload`
- `BulkActionBar`
- `ConfirmationDialog`

## Catatan

Komponen landing tidak boleh terlalu terikat pada struktur halaman. Contoh:

- `StatCard` harus bisa dipakai ulang di dashboard internal.
- `ChartPanel` harus bisa membungkus berbagai chart.
- `ActivityFeed` harus bisa dipakai untuk aktivitas publik maupun audit internal.
- `DataCategoryCard` dapat menjadi shortcut modul setelah login.
