# 08 — Project Structure

Struktur yang disarankan:

```text
src/
├── assets/
│   ├── logos/
│   ├── icons/
│   └── illustrations/
│
├── styles/
│   ├── tokens/
│   │   ├── color.css
│   │   ├── typography.css
│   │   ├── spacing.css
│   │   └── semantic.css
│   ├── themes/
│   │   └── prodeskel.css
│   └── globals.css
│
├── ui/
│   └── index.ts
│
├── components/
│   ├── primitives/
│   ├── data-display/
│   ├── navigation/
│   ├── layout/
│   └── prodeskel/
│
├── patterns/
│   ├── public-portal/
│   └── internal-app/
│
└── pages/
    └── landing/
```

## Penjelasan

### `src/ui`

Adapter untuk primitive NaraUI. Halaman tidak boleh mengimpor NaraUI langsung dari banyak file.

### `src/components/primitives`

Wrapper atau komponen umum tingkat rendah bila dibutuhkan.

### `src/components/data-display`

Komponen seperti:

- StatCard
- ChartPanel
- ActivityFeed
- ClassificationCard

### `src/components/navigation`

Komponen seperti:

- GovernmentBar
- MainHeader
- NavigationMenu

### `src/components/layout`

Komponen seperti:

- PageContainer
- Section
- SectionHeader
- GovernmentFooter

### `src/components/prodeskel`

Komponen domain:

- HeroSection
- RegionalMapPanel
- ProgressSummary
- DataCategoryGrid
- NationalOverview

### `src/patterns/public-portal`

Susunan beberapa komponen untuk landing dan halaman publik lain.

### `src/patterns/internal-app`

Disiapkan untuk fase setelah tender, seperti application shell, form panjang, dashboard monitoring, dan data table.
