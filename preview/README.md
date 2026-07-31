# Fallback preview — Prodeskel landing mockup

Screenshot cadangan kalau demo langsung (`localhost`) bermasalah saat presentasi:

- `landing-desktop-1440.png` — full page, 1440px
- `landing-tablet-768.png` — full page, 768px
- `landing-mobile-390.png` — full page, 390px

## Menjalankan demo langsung

Belum ada URL demo publik — proyek masih jalan di dev server lokal saja. Untuk menjalankannya di mesin lain:

```bash
npm install
# .npmrc sudah mereferensikan ${GITHUB_TOKEN} untuk registry @bynara-id — set env var ini
# dengan classic PAT (scope read:packages) sebelum npm install.
npm run dev
```

Buka `http://localhost:3000` (atau port yang dipakai).

## Kalau butuh URL yang bisa diakses orang lain

Perlu deploy (mis. Vercel/Netlify) — ini langkah terpisah yang butuh keputusan/akun kamu sendiri,
belum dilakukan di sini. Kabari kalau mau lanjut ke situ.
