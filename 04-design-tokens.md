# 04 — Design Tokens

Nilai berikut merupakan starting point. Sesuaikan kembali setelah logo dan referensi resmi dimasukkan.

## Color roles

```css
:root[data-theme="prodeskel"] {
  --color-primary-50: #eef5ff;
  --color-primary-100: #d9e9ff;
  --color-primary-200: #bcd7ff;
  --color-primary-300: #8ebcff;
  --color-primary-400: #5796f5;
  --color-primary-500: #2f73db;
  --color-primary-600: #1659bb;
  --color-primary-700: #114791;
  --color-primary-800: #123d76;
  --color-primary-900: #102f58;
  --color-primary-950: #081c37;

  --color-secondary-50: #ecfeff;
  --color-secondary-100: #cffafe;
  --color-secondary-200: #a5f3fc;
  --color-secondary-300: #67e8f9;
  --color-secondary-400: #22d3ee;
  --color-secondary-500: #06b6d4;
  --color-secondary-600: #0891b2;
  --color-secondary-700: #0e7490;
  --color-secondary-800: #155e75;
  --color-secondary-900: #164e63;

  --color-accent-50: #fffbeb;
  --color-accent-100: #fef3c7;
  --color-accent-200: #fde68a;
  --color-accent-300: #fcd34d;
  --color-accent-400: #fbbf24;
  --color-accent-500: #f59e0b;
  --color-accent-600: #d97706;
  --color-accent-700: #b45309;

  --color-neutral-0: #ffffff;
  --color-neutral-50: #f8fafc;
  --color-neutral-100: #f1f5f9;
  --color-neutral-200: #e2e8f0;
  --color-neutral-300: #cbd5e1;
  --color-neutral-500: #64748b;
  --color-neutral-700: #334155;
  --color-neutral-900: #0f172a;

  --color-success: #16a34a;
  --color-warning: #d97706;
  --color-error: #dc2626;
  --color-info: #0284c7;
}
```

## Semantic tokens

```css
:root[data-theme="prodeskel"] {
  --color-bg-page: var(--color-neutral-50);
  --color-bg-surface: var(--color-neutral-0);
  --color-bg-subtle: var(--color-neutral-100);

  --color-text-primary: var(--color-primary-950);
  --color-text-secondary: var(--color-neutral-700);
  --color-text-muted: var(--color-neutral-500);

  --color-border: var(--color-neutral-200);
  --color-border-strong: var(--color-neutral-300);

  --color-action-primary: var(--color-primary-600);
  --color-action-primary-hover: var(--color-primary-700);
  --color-action-secondary: var(--color-secondary-700);
  --color-focus-ring: var(--color-secondary-400);
}
```

## Typography

Gunakan font sans-serif yang bersih dan mudah dibaca. Prioritas:

1. Geist / Inter / Public Sans;
2. fallback system UI.

Rekomendasi scale:

```text
Display: 48/56, 700
H1: 40/48, 700
H2: 30/38, 700
H3: 22/30, 650
Body large: 18/28, 400
Body: 16/24, 400
Body small: 14/20, 400
Caption: 12/18, 500
```

## Radius

```css
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 14px;
--radius-xl: 18px;
```

## Shadow

```css
--shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.05);
--shadow-md: 0 8px 24px rgba(15, 23, 42, 0.08);
```

Gunakan shadow secara terbatas. Prioritaskan border.

## Spacing

Gunakan skala 4 px:

```text
4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96
```

## Container

```css
--container-max: 1280px;
--container-padding-desktop: 32px;
--container-padding-tablet: 24px;
--container-padding-mobile: 16px;
```
