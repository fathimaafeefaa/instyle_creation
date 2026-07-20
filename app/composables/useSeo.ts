/**
 * app/composables/useSeo.ts
 *
 * Thin wrapper around Nuxt's useSeoMeta + useHead.
 * Provides a single, consistent API for setting per-page SEO metadata.
 * @nuxtjs/seo's site config provides the base defaults; this composable
 * merges page-level overrides on top.
 *
 * Usage:
 *   useSeo({
 *     title: 'About Us',
 *     description: 'Learn about InStyle Creation',
 *     image: '/og/about.jpg',
 *   })
 */

export interface SeoOptions {
  /** Page title — appended with site name automatically by @nuxtjs/seo */
  title?: string
  description?: string
  /** Absolute URL or path to OG image */
  image?: string
  /** Canonical URL (auto-set by @nuxtjs/seo; override only if needed) */
  canonical?: string
  /** robots meta — defaults to 'index, follow' */
  robots?: string
  /** Structured data (JSON-LD) — pass a raw object */
  jsonLd?: Record<string, unknown>
}

export function useSeo(options: SeoOptions = {}) {
  const { title, description, image, robots = 'index, follow', jsonLd } = options

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage: image,
    twitterCard: image ? 'summary_large_image' : 'summary',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image,
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
