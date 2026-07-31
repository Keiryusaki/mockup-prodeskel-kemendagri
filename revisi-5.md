## Rebuild Ringkasan Progres Nasional

Revisi sebelumnya belum mengubah struktur utama chart. Jangan hanya
mengurangi padding atau tinggi card. Ubah layout setiap province menjadi
horizontal single-row bar chart seperti reference.

### Province progress row

Current structure yang harus dihapus:

Province name + percentage
Progress bar di baris berikutnya

Ganti menjadi satu row:

[Province name] [Horizontal progress bar] [Percentage]

Gunakan:

- grid-template-columns: 116px minmax(0, 1fr) 56px
- column gap: 12px
- row height: 30–32px
- gap antarrow: 4–6px
- font size: 13px
- percentage aligned right
- progress track height: 8–9px
- track background: neutral-100 atau blue-gray sangat muda
- progress fill: primary blue
- first ranking fill: teal
- full rounded corners

Jangan gunakan navy gelap sebagai remaining progress track.

### Selected province

Jangan gunakan background pill pada seluruh province row.

Gunakan salah satu:

- teal dot sebelum nama;
- semibold province name;
- thin left indicator.

Selection tidak boleh mengubah tinggi row.

### Panel sizing

- Remove fixed height dan min-height yang besar.
- Target card height sekitar 430–480px.
- Card padding: 18–20px.
- Heading: 20–22px.
- Subtitle: 13px.
- Filter controls height: 34–36px.

### Internal layout

Gunakan:

grid-template-columns: minmax(0, 1fr) 250px;
gap: 20px;

Kolom kiri untuk chart provinsi.
Kolom kanan untuk ranking kabupaten/kota.

### Kabupaten/Kota ranking

- Compact bordered rows.
- Row height: 38–40px.
- Grid columns: 26px minmax(0, 1fr) auto.
- Gap antarrow: 6px.
- CTA langsung 10–12px setelah list.
- Jangan gunakan margin-top: auto.

### Header filters

Gunakan:

[2026] [10 Provinsi Tertinggi]

Opsi dropdown:

- 10 Provinsi Tertinggi
- 10 Provinsi Terendah
- Semua Provinsi

### Expected visual density

Sepuluh province rows harus muat dalam sekitar 320–340px tinggi.
Seluruh panel harus terlihat seperti compact analytics card, bukan
vertical progress list.