import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  /**
   * Nuxt 4 compatibility
   */
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-07-20',

  /**
   * TypeScript — strict mode is enforced via tsconfig.json
   */
  typescript: {
    strict: true,
    typeCheck: false, // run manually via `pnpm typecheck`
  },

  /**
   * Tailwind CSS v4 — official Vite plugin (CSS-first, no tailwind.config.js needed)
   */
  vite: {
    plugins: [tailwindcss()],
  },

  /**
   * Global CSS entrypoint
   */
  css: ['~/assets/css/main.css'],

  /**
   * Nuxt modules — order matters: SEO first, then i18n
   */
  modules: [
    '@nuxt/fonts',
    '@nuxtjs/seo',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/eslint',
    '@vueuse/motion/nuxt',
  ],

  /**
   * @nuxt/fonts — self-hosted via Google Fonts proxy with font-display: swap.
   * Fraunces: serif heading font (weights 400, 500; includes italic).
   * Inter:    sans body font (weights 400, 500).
   * Tajawal:  Arabic body font (weights 400, 500).
   */
  fonts: {
    families: [
      {
        name: 'Fraunces',
        provider: 'google',
        weights: [400, 500],
        styles: ['normal', 'italic'],
        display: 'swap',
        subsets: ['latin'],
      },
      {
        name: 'Inter',
        provider: 'google',
        weights: [400, 500],
        styles: ['normal'],
        display: 'swap',
        subsets: ['latin', 'latin-ext'],
      },
      {
        name: 'Tajawal',
        provider: 'google',
        weights: [400, 500],
        styles: ['normal'],
        display: 'swap',
        subsets: ['arabic'],
      },
    ],
  },

  /**
   * @nuxtjs/seo — site-wide SEO defaults
   */
  site: {
    url: 'https://instyle-creation.com',
    name: 'InStyle Creation',
    description:
      'Premium interior design & fit-out solutions — residential, commercial, and hospitality.',
    defaultLocale: 'en',
    indexable: true,
  },

  /**
   * @nuxtjs/i18n — en (default) + ar (RTL)
   */
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        language: 'en-US',
        file: 'en.json',
        dir: 'ltr',
      },
      {
        code: 'ar',
        name: 'العربية',
        language: 'ar-AE',
        file: 'ar.json',
        dir: 'rtl',
      },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: '../app/i18n/locales/',
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },

  /**
   * @nuxt/image — provider config (assets served locally for now)
   */
  image: {
    quality: 80,
    format: ['webp', 'avif', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    // Switch to 'cloudinary' / 'imgix' when a CDN is wired up
    provider: 'none',
  },

  /**
   * App-level head defaults (fonts are injected by @nuxt/fonts automatically)
   */
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  /**
   * Dev tools
   */
  devtools: { enabled: true },
})
