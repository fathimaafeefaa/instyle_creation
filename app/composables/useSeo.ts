/**
 * app/composables/useSeo.ts
 *
 * Thin wrapper around Nuxt's useSeoMeta + useHead.
 * Provides a single, consistent API for setting per-page SEO metadata.
 *
 * Title template: "%s | Instyle Creation" is applied automatically —
 * pass only the page-specific part (e.g. "About Us").
 *
 * Usage:
 *   useSeo({
 *     title: 'About Us',
 *     description: 'Learn about Instyle Creation Technical Works.',
 *     ogImage: '/og/about.jpg',
 *   })
 */

const SITE_NAME = 'Instyle Creation'
const DEFAULT_DESCRIPTION =
  'Premium interior design & fit-out solutions for residential, commercial, and hospitality projects across the UAE.'
const DEFAULT_OG_IMAGE = '/images/og-placeholder.jpg'

export interface SeoOptions {
  /** Page-specific title — template "%s | Instyle Creation" is applied automatically. */
  title?: string
  description?: string
  /** Absolute URL or root-relative path to the OG image */
  ogImage?: string
  /** Canonical URL override (auto-set by @nuxtjs/seo; override only if needed) */
  canonical?: string
  /** robots meta — defaults to 'index, follow' */
  robots?: string
  /** Structured data (JSON-LD) — pass a raw object */
  jsonLd?: Record<string, unknown>
}

export function useSeo(options: SeoOptions = {}) {
  const {
    title,
    description = DEFAULT_DESCRIPTION,
    ogImage = DEFAULT_OG_IMAGE,
    robots = 'index, follow',
    jsonLd,
  } = options

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage,
    ogSiteName: SITE_NAME,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: ogImage,
    robots,
  })

  if (jsonLd) {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(jsonLd),
        },
      ],
    })
  }
}
