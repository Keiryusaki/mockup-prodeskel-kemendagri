# Implementasi Halaman Detail Data Prodeskel

## 1. Tujuan

Buat satu halaman detail **Data Prodeskel** yang menampilkan dataset dalam bentuk tabel modern, padat, mudah dipindai, dan tetap nyaman untuk pekerjaan monitoring data dalam jumlah besar.

Halaman ini menjadi template utama yang nantinya dapat digunakan kembali untuk kategori:

- Data Dasar Keluarga
- Potensi Desa/Kelurahan
- Tingkat Perkembangan
- Kependudukan
- Ekonomi & BUMDes
- Sarana & Prasarana

Untuk tahap proposal, implementasikan contoh halaman:

> **Data Kependudukan Desa dan Kelurahan**

Fokus utama halaman ini adalah menunjukkan bahwa redesign Prodeskel tidak hanya mengubah landing page, tetapi juga meningkatkan pengalaman pengguna saat membaca, mencari, memfilter, mengekspor, dan membuka detail data.

---

## 2. Ketentuan Umum

- Gunakan NaraUI sebagai fondasi komponen.
- Tidak perlu melakukan rebrand source code atau rename komponen pada tahap proposal.
- Tidak boleh ada branding NaraUI yang terlihat di antarmuka.
- Gunakan theme, typography, warna, radius, shadow, dan spacing Prodeskel yang sudah diterapkan pada landing page.
- Jangan membuat halaman bergaya marketing atau terlalu banyak whitespace.
- Prioritaskan **information density, readability, hierarchy, dan scanability**.
- Gunakan data dummy untuk kebutuhan mockup.
- Tambahkan catatan kecil bahwa data merupakan simulasi.
- Pastikan halaman terlihat sebagai bagian dari sistem yang sama dengan landing page.

---

## 3. Route dan Navigasi

Gunakan route contoh:

```text
/data-prodeskel/kependudukan
```

Navigasi utama tetap menggunakan header publik Prodeskel.

Menu `Data Prodeskel` pada mega menu harus dapat mengarahkan ke halaman ini melalui item:

```text
Kependudukan
```

Pada halaman detail, gunakan breadcrumb:

```text
Beranda / Data Prodeskel / Kependudukan
```

---

## 4. Struktur Halaman

Susunan halaman dari atas ke bawah:

```text
Main Header
Breadcrumb
Data Page Header
Administrative Filter
Summary Metrics
Active Filter Chips
Data Table Toolbar
Main Data Table
Pagination
Region Detail Drawer
Simulation Note
```

Gunakan container yang sama dengan landing page agar alignment konsisten.

Rekomendasi lebar container:

```css
max-width: 1440px;
margin-inline: auto;
padding-inline: 24px;
```

Pada layar desktop besar, jangan membuat konten terlalu melebar hingga sulit dipindai.

---

# 5. Data Page Header

## Konten

Eyebrow:

```text
DATA PRODESKEL
```

Judul:

```text
Data Kependudukan Desa dan Kelurahan
```

Deskripsi:

```text
Ringkasan data penduduk berdasarkan wilayah, jenis kelamin,
kepala keluarga, dan periode pendataan.
```

Metadata:

```text
Diperbarui 31 Juli 2026
```

Aksi di sebelah kanan:

```text
[Bagikan] [Unduh Data]
```

## Unduh Data

Tombol `Unduh Data` membuka dropdown:

```text
Unduh CSV
Unduh XLSX
Unduh PDF
```

Gunakan light dropdown theme:

- background putih;
- border neutral;
- selected/hover state menggunakan primary-50;
- tanpa dark selected state dari NaraUI;
- soft shadow;
- radius sekitar 10px.

## Ukuran

```text
Page title        30–36px
Description       14–16px
Metadata          13px
Header padding    28–32px 0 20–24px
```

---

# 6. Administrative Filter

Buat filter utama dalam satu surface/card compact.

## Filter yang ditampilkan

```text
Tahun Data
Provinsi
Kabupaten/Kota
Kecamatan
Desa/Kelurahan
Status Data
```

Default:

```text
Tahun Data       2026
Provinsi         Semua Provinsi
Kabupaten/Kota   Semua Kabupaten/Kota
Kecamatan        Semua Kecamatan
Desa/Kelurahan   Semua Desa/Kelurahan
Status Data      Semua Status
```

Aksi:

```text
[Terapkan Filter] [Reset]
```

Tambahkan tombol:

```text
Filter Lanjutan
```

Filter lanjutan dapat membuka popover atau expandable area yang berisi:

```text
Rentang Jumlah Penduduk
Rentang Kepala Keluarga
Tanggal Pemutakhiran
Sumber Data
```

## Perilaku

- Filter wilayah bersifat dependent.
- Kabupaten/Kota disabled sebelum provinsi dipilih.
- Kecamatan disabled sebelum Kabupaten/Kota dipilih.
- Desa/Kelurahan disabled sebelum Kecamatan dipilih.
- Reset mengembalikan semua filter ke default.
- Setelah filter diterapkan, tampilkan active filter chips.
- Gunakan data dummy; tidak perlu backend.

## Visual

- Jangan membuat setiap filter sebagai card terpisah.
- Gunakan satu compact filter panel.
- Input height sekitar 40–44px.
- Label sekitar 12–13px semibold.
- Gap antar-filter sekitar 12–16px.
- Desktop dapat menggunakan grid 6 kolom atau grid responsif.
- Mobile berubah menjadi 1 kolom.

---

# 7. Summary Metrics

Tampilkan empat metric card compact:

```text
Total Penduduk
238,7 Juta

Laki-laki
120,4 Juta

Perempuan
118,3 Juta

Wilayah Terdata
83.961
```

Ketentuan:

- Card height sekitar 96–108px.
- Padding sekitar 16–20px.
- Gunakan icon kecil dengan tinted background.
- Label kecil di atas.
- Angka besar di tengah.
- Caption opsional di bawah.
- Jangan menggunakan card terlalu tinggi.
- Gunakan format angka Indonesia.

Contoh caption:

```text
Data Tahun 2026
50,45% dari total
49,55% dari total
Desa/Kelurahan
```

---

# 8. Active Filter Chips

Jika ada filter aktif, tampilkan bar compact:

```text
Filter aktif:
[Jawa Barat ×]
[Kabupaten Bandung ×]
[Terverifikasi ×]

Hapus Semua
```

Ketentuan:

- Chip dapat dihapus satu per satu.
- `Hapus Semua` mereset filter aktif.
- Jangan tampilkan bar jika tidak ada filter aktif.
- Gunakan background primary-50 atau neutral-100.
- Tinggi chip sekitar 28–32px.

---

# 9. Data Table Toolbar

Toolbar berada tepat di atas tabel.

## Bagian kiri

Search field:

```text
Cari wilayah atau data...
```

Search mencakup:

- nama desa/kelurahan;
- kecamatan;
- kabupaten/kota;
- provinsi.

## Bagian kanan

Aksi:

```text
[Filter]
[Kelola Kolom]
[Urutkan]
[Ekspor]
[Density]
```

Informasi hasil:

```text
1.248 hasil
```

## Density

Sediakan pilihan:

```text
Compact
Comfortable
```

Default:

```text
Compact
```

Ukuran:

```text
Compact row height       40–42px
Comfortable row height   48px
```

## Kelola Kolom

Popover berisi checkbox:

```text
Wilayah
Provinsi
Kabupaten/Kota
Kecamatan
Jumlah Penduduk
Laki-laki
Perempuan
Kepala Keluarga
Periode Data
Status
Terakhir Diperbarui
```

Kolom `Wilayah` dan `Aksi` tidak dapat disembunyikan.

Tambahkan:

```text
Tampilkan Semua
Reset Kolom
```

---

# 10. Main Data Table

## Kolom Default

Gunakan struktur:

```text
Wilayah
Provinsi
Kabupaten/Kota
Jumlah Penduduk
Laki-laki
Perempuan
Kepala Keluarga
Periode
Status
Aksi
```

Kolom tambahan yang dapat diaktifkan:

```text
Kecamatan
Terakhir Diperbarui
Sumber Data
```

## Contoh Data Dummy

Gunakan minimal 12 baris data.

```ts
export const populationRows = [
  {
    id: 1,
    village: "Desa Sukamaju",
    district: "Cileunyi",
    regency: "Kabupaten Bandung",
    province: "Jawa Barat",
    population: 12845,
    male: 6472,
    female: 6373,
    households: 3284,
    period: 2026,
    status: "Terverifikasi",
    updatedAt: "30 Juli 2026",
    source: "Pemutakhiran Wilayah",
  },
  {
    id: 2,
    village: "Kelurahan Melati",
    district: "Sukmajaya",
    regency: "Kota Depok",
    province: "Jawa Barat",
    population: 21432,
    male: 10782,
    female: 10650,
    households: 5640,
    period: 2026,
    status: "Terverifikasi",
    updatedAt: "30 Juli 2026",
    source: "Pemutakhiran Wilayah",
  },
  {
    id: 3,
    village: "Desa Sumber Rejeki",
    district: "Jatisrono",
    regency: "Kabupaten Wonogiri",
    province: "Jawa Tengah",
    population: 8674,
    male: 4315,
    female: 4359,
    households: 2218,
    period: 2026,
    status: "Dalam Validasi",
    updatedAt: "29 Juli 2026",
    source: "Input Desa",
  },
  {
    id: 4,
    village: "Kelurahan Tegalrejo",
    district: "Tegalrejo",
    regency: "Kota Yogyakarta",
    province: "DI Yogyakarta",
    population: 11892,
    male: 5844,
    female: 6048,
    households: 3095,
    period: 2026,
    status: "Terverifikasi",
    updatedAt: "31 Juli 2026",
    source: "Pemutakhiran Wilayah",
  },
  {
    id: 5,
    village: "Desa Purnama",
    district: "Tabanan",
    regency: "Kabupaten Tabanan",
    province: "Bali",
    population: 7436,
    male: 3710,
    female: 3726,
    households: 1987,
    period: 2026,
    status: "Terverifikasi",
    updatedAt: "31 Juli 2026",
    source: "Input Desa",
  },
  {
    id: 6,
    village: "Kelurahan Sungai Pinang",
    district: "Sungai Pinang",
    regency: "Kota Samarinda",
    province: "Kalimantan Timur",
    population: 17654,
    male: 8940,
    female: 8714,
    households: 4458,
    period: 2026,
    status: "Dalam Validasi",
    updatedAt: "29 Juli 2026",
    source: "Input Kelurahan",
  },
  {
    id: 7,
    village: "Desa Bonto Maju",
    district: "Bontonompo",
    regency: "Kabupaten Gowa",
    province: "Sulawesi Selatan",
    population: 9281,
    male: 4632,
    female: 4649,
    households: 2401,
    period: 2026,
    status: "Perlu Perbaikan",
    updatedAt: "28 Juli 2026",
    source: "Validasi Kabupaten",
  },
  {
    id: 8,
    village: "Kelurahan Kuta",
    district: "Kuta",
    regency: "Kabupaten Badung",
    province: "Bali",
    population: 15432,
    male: 7920,
    female: 7512,
    households: 4128,
    period: 2026,
    status: "Terverifikasi",
    updatedAt: "31 Juli 2026",
    source: "Pemutakhiran Wilayah",
  },
  {
    id: 9,
    village: "Desa Harapan Jaya",
    district: "Bekasi Utara",
    regency: "Kota Bekasi",
    province: "Jawa Barat",
    population: 18973,
    male: 9556,
    female: 9417,
    households: 5024,
    period: 2026,
    status: "Dalam Validasi",
    updatedAt: "30 Juli 2026",
    source: "Input Desa",
  },
  {
    id: 10,
    village: "Kelurahan Sukarame",
    district: "Sukarame",
    regency: "Kota Bandar Lampung",
    province: "Lampung",
    population: 14620,
    male: 7318,
    female: 7302,
    households: 3862,
    period: 2026,
    status: "Perlu Perbaikan",
    updatedAt: "28 Juli 2026",
    source: "Validasi Kota",
  },
  {
    id: 11,
    village: "Desa Lubuk Sari",
    district: "Lubuk Alung",
    regency: "Kabupaten Padang Pariaman",
    province: "Sumatera Barat",
    population: 8015,
    male: 3977,
    female: 4038,
    households: 2094,
    period: 2026,
    status: "Terverifikasi",
    updatedAt: "28 Juli 2026",
    source: "Pemutakhiran Wilayah",
  },
  {
    id: 12,
    village: "Kelurahan Cempaka Putih",
    district: "Cempaka Putih",
    regency: "Kota Jakarta Pusat",
    province: "DKI Jakarta",
    population: 23109,
    male: 11532,
    female: 11577,
    households: 6320,
    period: 2026,
    status: "Terverifikasi",
    updatedAt: "30 Juli 2026",
    source: "Pemutakhiran Wilayah",
  },
];
```

## Format Sel

### Wilayah

Tampilkan:

```text
Desa Sukamaju
Kec. Cileunyi
```

Baris pertama semibold.
Baris kedua muted dan lebih kecil.

### Angka

- Rata kanan.
- Gunakan separator ribuan Indonesia.
- Contoh: `12.845`.
- Jangan menambahkan label berulang pada setiap cell.

### Status

Gunakan badge:

```text
Terverifikasi
Dalam Validasi
Perlu Perbaikan
Draft
```

Warna:

```text
Terverifikasi      success
Dalam Validasi     info
Perlu Perbaikan    warning/error-soft
Draft              neutral
```

Jangan gunakan warna terlalu mencolok.

### Aksi

Gunakan menu titik tiga:

```text
Lihat Detail
Buka Profil Lengkap
Unduh Data Wilayah
Salin Tautan
```

## Visual Table

- Gunakan sticky header.
- Header background neutral yang sangat lembut.
- Border horizontal lebih dominan daripada full grid.
- Hindari zebra stripe yang terlalu kuat.
- Row hover menggunakan primary-50 dengan opacity rendah.
- Header font sekitar 12–13px semibold.
- Body font sekitar 13–14px.
- Cell padding horizontal sekitar 12–16px.
- Kolom angka rata kanan.
- Kolom aksi sticky di kanan jika horizontal scroll.
- Kolom wilayah sticky di kiri jika memungkinkan.
- Jangan membuat row terlalu tinggi.
- Tabel harus terlihat padat dan profesional.

---

# 11. Sorting

Kolom sortable:

```text
Wilayah
Jumlah Penduduk
Laki-laki
Perempuan
Kepala Keluarga
Periode
Terakhir Diperbarui
```

State:

```text
Default
Ascending
Descending
```

Gunakan icon sort yang halus.

Saat sorting aktif, tampilkan indikator yang jelas pada header kolom.

---

# 12. Pagination

Gunakan footer tabel:

```text
Menampilkan 1–25 dari 1.248 data

Baris per halaman:
[25 ▾]

[←] [1] [2] [3] [...] [50] [→]
```

Default rows per page:

```text
25
```

Pilihan:

```text
10
25
50
100
```

Pagination harus compact dan tidak mengambil terlalu banyak tinggi.

---

# 13. Region Detail Drawer

Klik row atau menu `Lihat Detail` membuka drawer dari kanan.

Lebar desktop:

```text
440–520px
```

## Header Drawer

```text
Detail Wilayah

Desa Sukamaju
Kec. Cileunyi, Kabupaten Bandung
Jawa Barat
```

Status badge:

```text
Terverifikasi
```

Aksi:

```text
[Bagikan] [Tutup]
```

## Isi Drawer

### Ringkasan

```text
Jumlah Penduduk       12.845
Laki-laki               6.472
Perempuan               6.373
Kepala Keluarga         3.284
```

### Komposisi Penduduk

Gunakan satu chart compact:

- donut laki-laki vs perempuan; atau
- horizontal comparison bar.

Jangan gunakan chart besar.

### Metadata

```text
Periode Data           2026
Terakhir Diperbarui    30 Juli 2026
Sumber Data            Pemutakhiran Wilayah
Status                 Terverifikasi
```

### Aksi Bawah

```text
[Lihat Profil Lengkap]
```

Secondary action:

```text
[Unduh Data Wilayah]
```

## Perilaku Drawer

- Klik di luar menutup drawer.
- Tombol Escape menutup drawer.
- Scroll halaman utama tetap mempertahankan posisi tabel.
- Setelah drawer ditutup, focus kembali ke row yang sebelumnya dipilih.
- Mobile drawer berubah menjadi bottom sheet atau full-screen panel.

---

# 14. State Tambahan

## Loading

Gunakan skeleton row.

Jangan gunakan spinner besar di tengah tabel.

## Empty State

```text
Data tidak ditemukan

Belum ada data yang sesuai dengan filter atau kata kunci yang dipilih.

[Reset Filter]
```

## Error State

```text
Data belum dapat dimuat

Terjadi kendala saat memuat data. Silakan coba kembali.

[Coba Lagi]
```

## No Permission

Tidak wajib untuk proposal, tetapi siapkan struktur komponen agar dapat digunakan nanti.

---

# 15. Responsive Behaviour

## Desktop

- Filter dalam grid.
- Metric cards satu baris.
- Tabel full width.
- Drawer muncul dari kanan.

## Tablet

- Filter menjadi 2–3 kolom.
- Summary metrics menjadi 2 × 2.
- Toolbar dapat wrap.
- Tabel horizontal scroll.

## Mobile

- Breadcrumb dipersingkat.
- Page action dipindahkan ke overflow menu.
- Filter menjadi accordion atau drawer.
- Metrics menjadi horizontal scroll atau 2 kolom.
- Toolbar menjadi search + filter button.
- Tabel dapat berubah menjadi compact list/card representation.
- Drawer berubah menjadi full-screen detail.
- Jangan memaksakan seluruh kolom tabel tampil pada mobile.

---

# 16. Komponen yang Disarankan

Gunakan atau buat komponen berikut:

```text
DataPageHeader
AdministrativeFilter
FilterSelect
AdvancedFilterPopover
DatasetSummaryCard
ActiveFilterChips
DataTableToolbar
TableSearch
ColumnManager
ExportMenu
TableDensityControl
RegionalDataTable
SortableHeader
StatusBadge
Pagination
RegionDetailDrawer
DatasetMetadata
SimulationNote
```

Komponen domain sebaiknya tidak menggunakan prefix Nara.

Primitive internal tetap boleh berasal dari NaraUI.

---

# 17. Struktur File

Gunakan struktur berikut atau sesuaikan dengan project yang sudah ada:

```text
src/
├── pages/
│   └── data-prodeskel/
│       └── population/
│           ├── index.vue
│           ├── population.config.ts
│           ├── population.data.ts
│           └── population.types.ts
│
├── components/
│   └── data-explorer/
│       ├── DataPageHeader.vue
│       ├── AdministrativeFilter.vue
│       ├── DatasetSummary.vue
│       ├── ActiveFilterChips.vue
│       ├── DataTableToolbar.vue
│       ├── RegionalDataTable.vue
│       ├── ColumnManager.vue
│       ├── ExportMenu.vue
│       ├── TableDensityControl.vue
│       ├── RegionDetailDrawer.vue
│       └── SimulationNote.vue
│
└── data/
    └── mock/
        └── population.ts
```

Buat halaman sebagai configurable pattern, bukan implementasi yang terlalu terikat pada satu dataset.

Contoh konfigurasi:

```ts
export const populationDatasetConfig = {
  title: "Data Kependudukan Desa dan Kelurahan",
  description:
    "Ringkasan data penduduk berdasarkan wilayah, jenis kelamin, kepala keluarga, dan periode pendataan.",
  columns: [],
  filters: [],
  metrics: [],
};
```

---

# 18. Interaction Minimum untuk Proposal

Semua interaksi berikut harus berfungsi dengan dummy state lokal:

1. Search memfilter row.
2. Filter provinsi memfilter row.
3. Filter status memfilter row.
4. Reset filter mengembalikan semua data.
5. Active filter chips dapat dihapus.
6. Sorting bekerja pada minimal tiga kolom.
7. Density switch mengubah tinggi row.
8. Column manager dapat show/hide kolom.
9. Dropdown ekspor dapat dibuka.
10. Klik row membuka detail drawer.
11. Drawer dapat ditutup dengan button, outside click, dan Escape.
12. Pagination dapat berpindah halaman.
13. Rows per page dapat diubah.
14. Empty state muncul jika filter tidak memiliki hasil.

Tidak perlu backend atau export file sebenarnya, tetapi action harus memberikan feedback seperti toast:

```text
File CSV sedang disiapkan.
```

---

# 19. Acceptance Criteria

Implementasi dianggap selesai apabila:

- Halaman visual konsisten dengan landing Prodeskel.
- Header dan mega menu tetap berfungsi.
- Breadcrumb dan page header jelas.
- Filter terlihat compact dan tidak memenuhi seluruh layar.
- Summary metrics tampil dalam first fold.
- Tabel terlihat padat, modern, dan mudah dipindai.
- Tidak ada dark dropdown state dari NaraUI.
- Search dan filter bekerja menggunakan dummy data.
- Sorting bekerja.
- Density switch bekerja.
- Column manager bekerja.
- Klik row membuka drawer.
- Drawer menampilkan detail yang relevan.
- Tabel dapat horizontal scroll pada layar sempit.
- Empty state tersedia.
- Loading skeleton tersedia.
- Tidak ada branding NaraUI yang terlihat.
- Tidak ada hardcoded warna di page-level component jika token tersedia.
- Ada catatan bahwa data adalah simulasi.

---

# 20. Catatan Simulasi

Letakkan catatan kecil dan tidak dominan:

```text
ⓘ Data yang ditampilkan merupakan data simulasi untuk kebutuhan visualisasi konsep.
```

Posisi yang disarankan:

- di bawah tabel;
- atau sebagai tooltip info pada page header.

Jangan membuat catatan mengambil satu section penuh.

---

# 21. Prioritas Implementasi

Kerjakan dengan urutan:

```text
1. Page shell dan breadcrumb
2. Data page header
3. Filter utama
4. Summary metrics
5. Toolbar tabel
6. Tabel dan dummy data
7. Search, filter, dan sorting
8. Pagination dan density
9. Detail drawer
10. Empty/loading state
11. Responsive
12. Final visual polish
```

Jangan menghabiskan waktu pada export asli atau backend.

Prioritas utama adalah kualitas visual, density, dan interaksi proposal.
