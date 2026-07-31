## Revisi Section Eksplorasi Data Wilayah

Section peta dan ringkasan progres saat ini terlalu dekat dengan bagian
statistik nasional. Perbaiki spacing, hierarchy, dan kontennya.

### Section spacing

- Tambahkan jarak sekitar 40px dari bagian statistik menuju panel eksplorasi.
- Gunakan padding section:
  - top: 40px
  - bottom: 40px
- Pertahankan border-top yang tipis.
- Gunakan background neutral kebiruan yang sangat lembut.
- Jangan menggunakan min-height pada wrapper section.

### Layout

- Pertahankan rasio kolom desktop sekitar 44% dan 56%.
- Gap antarcard sekitar 16px.
- Kedua card harus memiliki tinggi yang sama.
- Padding card sekitar 22–24px.
- Radius sekitar 12px.

### Panel kiri

Judul:

`Jelajahi Data Wilayah`

Ubah description menjadi:

`Pilih wilayah pada peta atau cari nama daerah untuk melihat profil dan progres pendataannya.`

Ubah placeholder search menjadi:

`Cari nama wilayah...`

Ubah label legend menjadi:

`Capaian Pendataan 2026`

Susun label legend:

`0% — 50% — 100%`

Jangan tampilkan button aktif `Lihat Detail Wilayah` sebelum pengguna
memilih wilayah.

Gunakan initial disabled state:

`Pilih wilayah pada peta untuk melihat detail`

Setelah wilayah dipilih, ubah menjadi contoh:

`Lihat Profil Jawa Barat`

Alternatif yang lebih direkomendasikan: setelah map diklik, tampilkan
compact region summary card, kemudian CTA `Lihat Profil Wilayah`.

### Panel kanan

Judul:

`Ringkasan Progres Nasional`

Ubah description menjadi:

`Perbandingan capaian pendataan desa dan kelurahan berdasarkan provinsi.`

Ubah dropdown:

`Top Provinsi` → `10 Provinsi Tertinggi`

Tambahkan opsi:

- 10 Provinsi Tertinggi
- 10 Provinsi Terendah
- Semua Provinsi

Tambahkan filter tahun kecil:

`Tahun 2026`

Ubah progress track menjadi neutral-100 atau blue-gray yang sangat muda.
Jangan menggunakan navy gelap untuk bagian progress yang belum terisi.

Provinsi peringkat pertama dapat menggunakan teal.
Provinsi lainnya menggunakan primary blue.

Ubah heading:

`TOP KABUPATEN/KOTA` → `Kabupaten/Kota Teratas`

Ubah CTA:

`Lihat Selengkapnya` → `Lihat Peringkat Lengkap`

Tambahkan arrow icon pada CTA.

### Typography

- Card heading: 24px desktop.
- Description: 14px.
- Region names: 14px.
- Percentage: 14px semibold.
- Ranking heading jangan all caps.  