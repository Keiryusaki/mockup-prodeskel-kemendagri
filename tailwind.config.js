/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@bynara-id/tailwind-preset')],
  content: [
    './src/**/*.{ts,tsx}',
    // wajib: biar class komponen Nara ikut ke-scan (package = compiled JS)
    './node_modules/@bynara-id/ui/**/*.{js,mjs}',
  ],
  theme: {
    extend: {
      colors: {
        pd: {
          primary: {
            50: 'rgb(var(--pd-primary-50) / <alpha-value>)',
            100: 'rgb(var(--pd-primary-100) / <alpha-value>)',
            200: 'rgb(var(--pd-primary-200) / <alpha-value>)',
            300: 'rgb(var(--pd-primary-300) / <alpha-value>)',
            400: 'rgb(var(--pd-primary-400) / <alpha-value>)',
            500: 'rgb(var(--pd-primary-500) / <alpha-value>)',
            600: 'rgb(var(--pd-primary-600) / <alpha-value>)',
            700: 'rgb(var(--pd-primary-700) / <alpha-value>)',
            800: 'rgb(var(--pd-primary-800) / <alpha-value>)',
            900: 'rgb(var(--pd-primary-900) / <alpha-value>)',
            950: 'rgb(var(--pd-primary-950) / <alpha-value>)',
          },
          secondary: {
            50: 'rgb(var(--pd-secondary-50) / <alpha-value>)',
            100: 'rgb(var(--pd-secondary-100) / <alpha-value>)',
            200: 'rgb(var(--pd-secondary-200) / <alpha-value>)',
            300: 'rgb(var(--pd-secondary-300) / <alpha-value>)',
            400: 'rgb(var(--pd-secondary-400) / <alpha-value>)',
            500: 'rgb(var(--pd-secondary-500) / <alpha-value>)',
            600: 'rgb(var(--pd-secondary-600) / <alpha-value>)',
            700: 'rgb(var(--pd-secondary-700) / <alpha-value>)',
            800: 'rgb(var(--pd-secondary-800) / <alpha-value>)',
            900: 'rgb(var(--pd-secondary-900) / <alpha-value>)',
          },
          accent: {
            50: 'rgb(var(--pd-accent-50) / <alpha-value>)',
            100: 'rgb(var(--pd-accent-100) / <alpha-value>)',
            200: 'rgb(var(--pd-accent-200) / <alpha-value>)',
            300: 'rgb(var(--pd-accent-300) / <alpha-value>)',
            400: 'rgb(var(--pd-accent-400) / <alpha-value>)',
            500: 'rgb(var(--pd-accent-500) / <alpha-value>)',
            600: 'rgb(var(--pd-accent-600) / <alpha-value>)',
            700: 'rgb(var(--pd-accent-700) / <alpha-value>)',
          },
          neutral: {
            0: 'rgb(var(--pd-neutral-0) / <alpha-value>)',
            50: 'rgb(var(--pd-neutral-50) / <alpha-value>)',
            100: 'rgb(var(--pd-neutral-100) / <alpha-value>)',
            200: 'rgb(var(--pd-neutral-200) / <alpha-value>)',
            300: 'rgb(var(--pd-neutral-300) / <alpha-value>)',
            500: 'rgb(var(--pd-neutral-500) / <alpha-value>)',
            700: 'rgb(var(--pd-neutral-700) / <alpha-value>)',
            900: 'rgb(var(--pd-neutral-900) / <alpha-value>)',
          },
          success: 'rgb(var(--pd-success) / <alpha-value>)',
          warning: 'rgb(var(--pd-warning) / <alpha-value>)',
          error: 'rgb(var(--pd-error) / <alpha-value>)',
          info: 'rgb(var(--pd-info) / <alpha-value>)',
        },
        // Small gaps not already covered by @bynara-id/tailwind-preset
        // (which already gives us bg-app, bg-surface, text-text-main,
        // text-text-muted, border-border-subtle, bg-primary, bg-secondary,
        // bg-accent, bg-info/success/warning/error).
        subtle: 'rgb(var(--bg-muted) / <alpha-value>)', // bg-subtle
        ink: 'rgb(var(--pd-text-secondary) / <alpha-value>)', // text-ink
        strong: 'rgb(var(--pd-border-strong) / <alpha-value>)', // border-strong
      },
      // Font is applied globally via `var(--font-sans)` on <body> in
      // globals.css, not through the `sans` utility, so it isn't overridden
      // here (avoids fighting the preset's own fontFamily.sans array).
      borderRadius: {
        sm: 'var(--pd-radius-sm)',
        md: 'var(--pd-radius-md)',
        lg: 'var(--pd-radius-lg)',
        xl: 'var(--pd-radius-xl)',
      },
      boxShadow: {
        sm: 'var(--pd-shadow-sm)',
        md: 'var(--pd-shadow-md)',
      },
      maxWidth: {
        container: 'var(--pd-container-max)',
      },
    },
  },
};
