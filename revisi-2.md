## Revisi Spacing Overview dan Data Wilayah

Implementasi saat ini memiliki vertical spacing yang terlalu besar.
Tujuannya adalah membuat halaman terasa seperti portal data yang compact,
bukan landing SaaS dengan section-section tinggi.

### National overview

- Hapus fixed height dan min-height pada wrapper overview.
- Gunakan padding section sekitar 24px 0 28px.
- Susun desktop menggunakan:
  `grid-template-columns: repeat(4, minmax(0, 1fr)) 170px`
- Gap antaritem sekitar 16px.
- Tempatkan `Diperbarui 31 Juli 2026` sejajar di kanan stat cards,
  bukan pada baris tersendiri di atas.
- Align update information secara vertikal ke tengah.
- Stat card memiliki tinggi sekitar 100–108px.
- Gunakan padding card sekitar 18px 20px.
- Kurangi jarak internal antara label, value, dan caption.

### Spacing menuju section berikutnya

- Jarak dari stat cards menuju Data Wilayah maksimal 28–32px.
- Hapus margin atau padding vertikal 64px ke atas.
- Jangan gunakan section min-height.
- Gunakan content-driven height.

### Data exploration layout

- Gunakan rasio kolom desktop sekitar 44% untuk `Jelajahi Data Wilayah`
  dan 56% untuk `Ringkasan Progres Nasional`.
- Gap antarcard sekitar 16px.
- Padding panel sekitar 20–24px.
- Radius sekitar 12px.
- Heading panel sekitar 24px, bukan 32–36px.
- Description sekitar 14px.
- Jarak heading ke description 4px.
- Jarak description ke filter sekitar 16px.
- Pertahankan information density yang nyaman.

### Section background

- Gunakan background neutral yang sangat lembut.
- Gunakan border-top tipis sebagai transisi.
- Hindari blok whitespace besar antarsection.
- Data overview dan data exploration harus terasa sebagai satu rangkaian
  informasi yang berkelanjutan.