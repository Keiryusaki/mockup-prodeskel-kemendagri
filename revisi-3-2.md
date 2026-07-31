## Revisi Dropdown dan Interaksi Peta

### Ranking dropdown

Dropdown saat ini masih menggunakan selected state gelap dari NaraUI.
Ubah menjadi light government theme.

Gunakan opsi:

- 10 Provinsi Tertinggi
- 10 Provinsi Terendah
- Semua Provinsi

Default:

`10 Provinsi Tertinggi`

Ketentuan visual:

- Dropdown background putih.
- Lebar minimum 220px.
- Selected item menggunakan primary-50 dan text primary-700.
- Tambahkan check icon pada item terpilih.
- Hover menggunakan neutral-50.
- Hilangkan navy/black selected background.
- Gunakan border neutral dan soft shadow.
- Trigger focus ring menggunakan primary dengan opacity rendah,
  jangan cyan terang.
- Tutup dropdown saat click outside atau Escape.

### Map interaction

Peta tidak boleh hanya dekoratif.

Tambahkan dummy interaction:

1. Hover province menampilkan tooltip.
2. Klik province menyimpan `selectedProvince`.
3. Province terpilih menggunakan highlight teal dan outline yang jelas.
4. Klik province lain mengganti selection.
5. Klik area kosong mereset selection.
6. Search wilayah memilih dan menyorot province yang sesuai.
7. CTA dan summary diperbarui berdasarkan selected province.

Initial state:

`Pilih wilayah pada peta untuk melihat ringkasan data.`

Button initial state disabled:

`Lihat Profil Wilayah`

Selected state example:

- Jawa Barat
- Capaian Pendataan: 84,12%
- 27 Kabupaten/Kota
- 627 Kecamatan
- 5.957 Desa/Kelurahan
- Diperbarui 30 Juli 2026

CTA:

`Lihat Profil Jawa Barat`

### Tooltip

Example:

Jawa Barat
Capaian Pendataan 84,12%
5.957 Desa/Kelurahan
Klik untuk melihat ringkasan

### Data status

Gunakan dummy data untuk kebutuhan proposal.
Tambahkan keterangan kecil di bawah section:

`Data yang ditampilkan merupakan data simulasi untuk kebutuhan mockup.`

### Ranking synchronization

Ketika province dipilih di peta:

- Tetap pertahankan daftar ranking nasional.
- Highlight bar province yang dipilih bila tersedia dalam daftar.
- Jangan mengubah fungsi panel kanan menjadi detail province.