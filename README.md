# InStyle Creation — Project Architecture

> **Nuxt 4** · Tailwind CSS v4 · i18n (EN / AR RTL) · TypeScript Strict

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Directory Layout](#directory-layout)
3. [Module Configuration](#module-configuration)
4. [Data Layer (DRY Principle)](#data-layer)
5. [Internationalization & RTL](#internationalization--rtl)
6. [Components](#components)
7. [Composables](#composables)
8. [Server API](#server-api)
9. [Tooling (ESLint + Prettier)](#tooling)
10. [How to Add New Content](#how-to-add-new-content)
11. [Scripts](#scripts)

---

## Tech Stack

| Category | Package | Notes |
|---|---|---|
| Framework | `nuxt` ^4 | `app/` dir structure, `future.compatibilityVersion: 4` |
| CSS | `tailwindcss` ^4 + `@tailwindcss/vite` | CSS-first config via `@theme`, no `tailwind.config.js` |
| i18n | `@nuxtjs/i18n` ^9 | lazy-loaded JSON, `prefix_except_default` strategy |
| Images | `@nuxt/image` ^1 | `<NuxtImg>` / `<NuxtPicture>`, WebP/AVIF, CDN-ready |
| SEO | `@nuxtjs/seo` ^3 | Bundles robots, sitemap, schema-org, og-image |
| Motion | `@vueuse/motion` + `@vueuse/core` | Scroll-reveal, gesture utilities |
| TypeScript | strict mode | `noImplicitAny`, `strictNullChecks` |
| Linting | `@nuxt/eslint` + `prettier` | Flat ESLint config, pre-commit via `lint-staged` |

---

## Directory Layout

```
instyle-creation/
├── app/                          # All client-side code (Nuxt 4 app dir)
│   ├── assets/
│   │   └── css/
│   │       └── main.css          # Tailwind v4 entrypoint + @theme tokens
│   ├── components/
│   │   ├── ui/                   # Reusable primitives (no page logic)
│   │   │   ├── Button.vue
│   │   │   ├── Card.vue
│   │   │   ├── Badge.vue
│   │   │   └── SectionHeading.vue
│   │   └── sections/             # Page-section level components
│   │       ├── Hero.vue
│   │       ├── ServicesGrid.vue
│   │       ├── StatsBand.vue
│   │       ├── ClientLogos.vue
│   │       ├── Testimonials.vue
│   │       └── ContactCTA.vue
│   ├── composables/              # Shared reactive logic
│   │   ├── useSeo.ts
│   │   └── useContactForm.ts
│   ├── data/                     # ⭐ Single source of truth — typed TS files
│   │   ├── services.ts           # Service offerings + stats
│   │   ├── projects.ts           # Portfolio items
│   │   ├── clients.ts            # Client logos
│   │   └── testimonials.ts       # Client testimonials
│   ├── layouts/
│   │   └── default.vue           # Header slots + <slot/> + Footer
│   ├── locales/                  # i18n translation files
│   │   ├── en.json
│   │   └── ar.json
│   └── app.vue                   # Root — sets <html dir lang>
├── server/
│   └── api/
│       └── contact.post.ts       # Contact form endpoint (stub)
├── public/                       # Static files (favicon, robots override etc.)
├── nuxt.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── .prettierrc
└── package.json
```

---

## Module Configuration

### Tailwind CSS v4
Configured via the official `@tailwindcss/vite` plugin in `nuxt.config.ts`. All design tokens (colors, fonts, spacing) live in `app/assets/css/main.css` under `@theme {}`. No `tailwind.config.js` is needed.

### @nuxtjs/seo
Site-wide defaults are set via the `site {}` block in `nuxt.config.ts`:
```ts
site: {
  url: 'https://instyle-creation.com',
  name: 'InStyle Creation',
  description: '...',
  defaultLocale: 'en',
}
```
Robots and sitemap are automatically generated. Schema.org and OG image generation are available.

### @nuxt/image
Configured with WebP + AVIF output formats and a responsive screen breakpoint map. Provider is `'none'` (serves from `/public`). Switch to `'cloudinary'` or `'imgix'` in `nuxt.config.ts` when a CDN is ready.

---

## Data Layer

> **Rule: never hardcode content inline in components.**

All static content lives in `app/data/*.ts` as typed TypeScript exports. Section components import and iterate over these arrays.

| File | Exports | Used by |
|---|---|---|
| `services.ts` | `services[]`, `stats[]` | ServicesGrid, StatsBand |
| `projects.ts` | `projects[]` | (future) Projects page, portfolio grid |
| `clients.ts` | `clients[]` | ClientLogos |
| `testimonials.ts` | `testimonials[]` | Testimonials |

**To add a new service:**
1. Add an entry to `services` in `app/data/services.ts`
2. Add the translation keys `services.items.<id>.title` and `.description` in both `en.json` and `ar.json`
3. Done — ServicesGrid renders it automatically

---

## Internationalization & RTL

- **Default locale:** `en` (no URL prefix)
- **Arabic:** `/ar/...` prefix, `dir: 'rtl'`
- RTL is applied globally via `app.vue` → `useHead({ htmlAttrs: { dir, lang } })`
- Tailwind v4 logical properties (`ps-`, `pe-`, `ms-`, `me-`) auto-flip for RTL
- Arabic font (`Tajawal`) is loaded via Google Fonts and applied via `:lang(ar)` in CSS

**To add a new locale:**
1. Add a locale object to `i18n.locales` in `nuxt.config.ts`
2. Create `app/locales/<code>.json` with all keys
3. Set `dir: 'rtl'` if needed

---

## Components

### `app/components/ui/` — Primitives

These components have **no page context or business logic**. They accept props only.

| Component | Key Props |
|---|---|
| `Button` | `variant` (primary/secondary/ghost/outline), `size` (sm/md/lg), `loading`, `disabled` |
| `Card` | `hover`, `padding` (none/sm/md/lg), `rounded`, `bordered` |
| `Badge` | `variant` (default/brand/success/warning/neutral), `size`, `dot` |
| `SectionHeading` | `title`, `eyebrow`, `subtitle`, `align` (start/center/end), `level` (h2–h4) |

### `app/components/sections/` — Page Sections

Each section is a self-contained block that:
- Imports its data from `app/data/`
- Uses i18n for all user-visible copy
- Uses `ui/` primitives for rendering

---

## Composables

### `useSeo(options)`
```ts
useSeo({
  title: 'About Us',
  description: 'Learn about InStyle Creation',
  image: '/og/about.jpg',
  jsonLd: { '@type': 'Organization', ... },
})
```
Wraps `useSeoMeta` and `useHead`. Call at the top of each page's `<script setup>`.

### `useContactForm()`
```ts
const { form, errors, status, errorMessage, submit, reset } = useContactForm()
```
Returns reactive form state, client-side validation errors, submission status (`idle | submitting | success | error`), and async `submit()` / `reset()` methods.

---

## Server API

| Method | Path | Status |
|---|---|---|
| `POST` | `/api/contact` | ✅ stub — validates body, returns `{ ok: true }` |

Wire up email delivery (Resend, SendGrid) and optional CRM/DB writes in `server/api/contact.post.ts`.

---

## Tooling

### ESLint
Flat config (`eslint.config.mjs`) using `@nuxt/eslint`. Run:
```bash
pnpm lint          # check
pnpm lint:fix      # auto-fix
```

### Prettier
`.prettierrc` — single quotes, no semicolons, trailing commas, 100-char lines. Run:
```bash
pnpm format        # write
pnpm format:check  # check only
```

### Pre-commit
`lint-staged` is configured in `package.json`. Wire it up with Husky:
```bash
pnpm add -D husky
pnpm exec husky init
echo "pnpm exec lint-staged" > .husky/pre-commit
```

---

## How to Add New Content

### New Section Component
1. Create `app/components/sections/MySection.vue`
2. Import data from `app/data/` (or create a new data file)
3. Add i18n keys to `en.json` and `ar.json`
4. Import the section into the relevant page

### New Data Type
1. Define the TypeScript interface and array in `app/data/<topic>.ts`
2. Import in the component that needs it
3. No store or API call required for static content

### New Page
1. Create `app/pages/<route>.vue`
2. Call `useSeo()` at the top of `<script setup>`
3. Compose from `sections/` and `ui/` components

---

## Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build locally
pnpm lint         # ESLint check
pnpm lint:fix     # ESLint auto-fix
pnpm format       # Prettier format all files
pnpm typecheck    # TypeScript type check (nuxt typecheck)
pnpm prepare      # Generate Nuxt types (.nuxt/)
```
