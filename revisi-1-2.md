## Revisi Navigation: Data Prodeskel Mega Menu

Ubah dropdown biasa `Data Prodeskel` menjadi compact mega menu.

### Trigger state

- Jangan gunakan background hitam atau navy gelap.
- Default state tetap transparan.
- Hover/open state:
  - background primary-50;
  - text primary-700;
  - border primary-100;
  - tanpa black outline;
  - tanpa heavy shadow;
  - caret berputar 180 derajat.
- Beranda aktif tetap menggunakan underline biru.

### Mega menu

- Desktop width sekitar 900–960px.
- Align terhadap main container, bukan hanya terhadap lebar trigger.
- Background putih.
- Border neutral lembut.
- Radius sekitar 12px.
- Padding 24–28px.
- Shadow lembut.
- Beri jarak sekitar 8px dari navigation bar.

Gunakan layout:

1. Panel intro di kiri.
2. Grid kategori 2 kolom di kanan.
3. Optional footer action di bagian bawah.

Panel intro:

- Eyebrow: `DATA PRODESKEL`
- Heading: `Jelajahi Data Desa dan Kelurahan`
- Description:
  `Akses data profil, potensi, kependudukan, dan tingkat
  perkembangan desa/kelurahan di seluruh Indonesia.`
- CTA: `Lihat Seluruh Data`

Kategori:

- Data Dasar Keluarga
- Potensi Desa/Kelurahan
- Tingkat Perkembangan
- Kependudukan
- Ekonomi & BUMDes
- Sarana & Prasarana

Setiap item memiliki:

- icon kecil;
- title;
- description maksimal dua baris;
- hover background primary-50;
- subtle arrow movement saat hover.

### Interaction

- Buka melalui hover dan click.
- Hover open delay sekitar 120ms.
- Close delay sekitar 180ms.
- Jangan menutup ketika pointer berpindah dari trigger menuju panel.
- Klik outside atau tekan Escape untuk menutup.
- Dukung keyboard navigation.
- Mobile menggunakan accordion navigation, bukan mega menu.