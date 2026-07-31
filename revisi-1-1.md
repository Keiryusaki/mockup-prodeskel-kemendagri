## Revisi Header dan Hero Prodeskel

Implementasi saat ini masih terlalu menyerupai landing SaaS generik.
Sesuaikan komposisi agar lebih mendekati portal data pemerintahan
seperti reference mockup.

### Government bar

- Tambahkan logo Kemendagri kecil di sebelah kiri informasi instansi.
- Gunakan container yang sama dengan main navigation agar seluruh
  elemen sejajar secara vertikal.
- Ubah tombol `ID` menjadi menu `Bahasa` dengan icon dan caret.
- Gunakan separator tipis antarutility menu.
- Pertahankan background institutional navy.

### Main navigation

- Beranda aktif menggunakan teks biru dan underline, bukan pill background.
- Data Prodeskel saat hover/open menggunakan background primary-50,
  teks primary-800, tanpa black outline.
- Hilangkan focus ring hitam ganda.
- Gunakan dropdown shadow yang lebih lembut dan spacing lebih compact.
- Default screenshot landing harus dalam keadaan dropdown tertutup.

### Hero layout

- Batasi hero desktop menjadi sekitar 400–420px.
- Gunakan grid sekitar 38% untuk konten kiri dan 62% untuk visual kanan.
- Maksimum heading sekitar 64px dengan line-height 1.05.
- Pastikan heading selalu tersusun:

  Data Desa dan
  Kelurahan Indonesia

- Maksimum lebar paragraf sekitar 600px.

### Hero visual

- Hapus white rounded container besar pada sisi kanan.
- Hapus abstract network illustration.
- Render peta Indonesia berukuran besar langsung di atas hero background.
- Peta menggunakan gradasi institutional blue dan teal.
- Tambahkan glowing points di beberapa wilayah dan garis koneksi halus.
- Peta tidak perlu interaktif pada hero.
- Dapat menggunakan Indonesia GeoJSON dan ECharts dengan tooltip disabled.

### Hero statistic chips

- Tempatkan empat stat chips mengambang di sisi kanan peta.
- Jangan bungkus stat chips dalam satu parent card visual.
- Susunan teks: label kecil di atas, angka besar di bawah.
- Gunakan white surface, subtle border, soft shadow, radius sekitar 12px.
- Lebar sekitar 220px dan tinggi sekitar 68px.

### Hero background

Gunakan kombinasi gradient putih dan biru muda, radial glow di belakang
peta, serta contour/wave pattern dengan opacity rendah.

### CTA

- Primary: icon + `Jelajahi Data`.
- Secondary: chart icon + `Lihat Progres`.
- Tinggi sekitar 52–56px.
- Secondary menggunakan outline teal.

### First fold

Empat national overview cards harus langsung terlihat setelah hero pada
viewport desktop. Jangan biarkan hero memenuhi seluruh tinggi layar.