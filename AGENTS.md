# AGENTS.md — Prodeskel Landing Redesign

## Peran agent

Bertindak sebagai senior frontend engineer dan UI implementation agent untuk membangun mockup landing page Prodeskel berdasarkan dokumen pada folder `docs/`.

## Sasaran

Bangun landing page desktop dan mobile yang:

- modern, resmi, terpercaya, dan berorientasi data;
- tetap nyaman untuk membaca informasi padat;
- menunjukkan bahwa Prodeskel adalah sistem aktif;
- siap dipresentasikan dalam proposal tender;
- menggunakan NaraUI sebagai fondasi teknis sementara.

## Aturan penting

1. Jangan melakukan rename package atau komponen NaraUI pada tahap proposal.
2. Jangan mengubah core NaraUI secara permanen jika dapat diselesaikan dengan theme override atau wrapper lokal.
3. Jangan menampilkan nama, logo, atau branding NaraUI pada antarmuka pengguna.
4. Semua warna, tipografi, radius, shadow, dan spacing harus berasal dari token.
5. Jangan hardcode warna hex di komponen halaman kecuali pada file token/theme.
6. Komponen bisnis baru harus menggunakan nama netral atau Prodeskel, misalnya:
   - `GovernmentBar`
   - `MainHeader`
   - `NationalOverview`
   - `RegionalMapPanel`
   - `ProgressSummary`
   - `DataCategoryCard`
   - `ActivityFeed`
   - `GovernmentFooter`
7. Gunakan semantic HTML dan perhatikan keyboard focus, contrast, dan responsive behavior.
8. Jangan membuat landing page seperti SaaS startup yang terlalu kosong atau terlalu banyak gradient.
9. Pertahankan information density, tetapi perbaiki hierarchy, grouping, dan scanability.
10. Gunakan data dummy realistis dari `docs/07-content-and-data.md`.

## Strategi penggunaan NaraUI

Gunakan komponen NaraUI untuk primitive berikut:

- Button
- Card
- Input
- Badge
- Dropdown
- Tooltip
- Divider
- IconButton

Buat adapter lokal agar halaman tidak mengimpor NaraUI langsung di banyak tempat.

Contoh:

```ts
// src/ui/index.ts
export {
  NaraButton as Button,
  NaraCard as Card,
  NaraInput as Input,
  NaraBadge as Badge,
} from '@bynara/ui'
```

Halaman kemudian menggunakan:

```ts
import { Button, Card, Input, Badge } from '@/ui'
```

## Urutan implementasi

1. Terapkan theme Prodeskel.
2. Bangun page shell dan container.
3. Bangun header dan hero.
4. Bangun overview statistics.
5. Bangun regional map dan progress summary.
6. Bangun data category cards.
7. Bangun classification dan activity feed.
8. Bangun information/help section dan footer.
9. Tambahkan responsive mobile.
10. Tambahkan hover, focus, loading, dan empty states minimal.

## Kriteria selesai

- Desktop landing lengkap.
- Mobile view utama tersedia.
- Tidak ada branding NaraUI yang terlihat.
- Warna dan tipografi konsisten dengan theme Prodeskel.
- Tidak ada overflow horizontal pada viewport mobile.
- Komponen landing terpisah dan reusable.
- Tampilan cukup matang untuk screenshot dan presentasi proposal.
