<script setup lang="ts">
/**
 * app/layouts/default.vue
 *
 * Default layout — AppHeader + main slot + AppFooter.
 *
 * JSON-LD (LocalBusiness schema) is injected globally here so it appears
 * on every page that uses this layout. Geo coordinates are placeholder
 * 0,0 — replace with real values from Google Maps when ready.
 */

// ── LocalBusiness JSON-LD ────────────────────────────────────────────────────
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Instyle Creation Technical Works LLC',
        url: 'https://instyle-creation.com',
        telephone: '+97142348373',
        email: 'info@instylecreation.ae',
        image: 'https://instyle-creation.com/images/logo-placeholder.png',
        logo: 'https://instyle-creation.com/images/logo-placeholder.png',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Unit 504, Al Attar Business Center, Sheikh Zayed Road, Al Barsha 1',
          addressLocality: 'Dubai',
          addressCountry: 'AE',
        },
        geo: {
          '@type': 'GeoCoordinates',
          // ⚠️ TODO: replace 0, 0 with real coordinates from Google Maps
          latitude: 0,
          longitude: 0,
        },
        openingHours: 'Mo-Sa 09:00-18:00',
        priceRange: '$$',
        description:
          'Premium interior design & fit-out solutions for residential, commercial, and hospitality projects across the UAE.',
        sameAs: [
          'https://www.facebook.com/instylecreation',
          'https://www.instagram.com/instylecreation',
          'https://www.linkedin.com/company/instylecreation',
        ],
      }),
      key: 'local-business-ld',
    },
  ],
})
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppHeader />

    <!-- pt-16 compensates for the fixed header height (h-16) -->
    <main id="main-content" class="flex-1 pt-16" tabindex="-1">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
