## Revisi Density Section Eksplorasi Data

Section saat ini memiliki terlalu banyak ruang kosong karena panel kiri
bertambah tinggi dan panel kanan menggunakan equal-height stretch.

### Root cause

- Selected region menggunakan card besar.
- CTA panel kiri menggunakan full-width button.
- Grid card menggunakan stretch height.
- CTA panel kanan menggunakan `margin-top: auto`.
- Progress rows terlalu tinggi.

### Section layout

- Target tinggi panel desktop sekitar 540–580px.
- Gunakan `align-items: start`, jangan membiarkan panel kanan mengikuti
  tinggi panel kiri secara tidak terkendali.
- Kedua panel boleh menggunakan explicit content layout yang seimbang.
- Gap antarcard tetap 16px.
- Padding card sekitar 20–22px.

### Panel kiri

Pertahankan:

- Judul
- Deskripsi
- Search
- Peta
- Legend
- Detail province terpilih

Namun ubah selected province card menjadi compact information strip
dengan tinggi maksimal sekitar 88–100px.

Contoh isi:

`Jawa Tengah`
`90,45% Capaian Pendataan`

`35 Kabupaten/Kota · 576 Kecamatan · 8.562 Desa/Kelurahan`

`Diperbarui 30 Juli 2026`
`Lihat Profil Wilayah →`

- Hapus full-width button `Lihat Profil Jawa Tengah`.
- Gunakan text button atau small button di dalam information strip.
- Badge status `Baik` bersifat opsional dan harus compact.
- Map height sekitar 250–270px.
- Legend height sekitar 32–36px.

### Panel kanan

- Jangan gunakan `margin-top: auto` pada CTA.
- CTA `Lihat Peringkat Lengkap` harus langsung berada 16px setelah
  ranking kabupaten/kota.
- Kurangi tinggi setiap province row menjadi sekitar 40–44px.
- Progress track height sekitar 5px.
- Margin antarprovince sekitar 10–12px.
- Gunakan internal grid:
  `grid-template-columns: minmax(0, 1fr) 250px`
- Gap internal sekitar 20px.

### Ranking kabupaten/kota

- Gunakan compact bordered rows.
- Tinggi row sekitar 40–42px.
- Padding sekitar 8px 10px.
- Gap antarrow sekitar 6px.
- Heading: `Kabupaten/Kota Teratas`.
- CTA langsung setelah list.

### Dropdown

- Default gunakan `10 Provinsi Tertinggi`.
- Opsi:
  - 10 Provinsi Tertinggi
  - 10 Provinsi Terendah
  - Semua Provinsi
- `Semua Provinsi` hanya digunakan jika seluruh data memang ditampilkan.

### Disclaimer

Pindahkan teks simulasi menjadi compact info note:

`ⓘ Data simulasi untuk kebutuhan visualisasi konsep.`

Letakkan di pojok kanan bawah section atau sebagai tooltip.
Jangan gunakan satu baris besar di luar card.