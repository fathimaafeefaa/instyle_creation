<script setup lang="ts">
/**
 * app/pages/services.vue
 *
 * Merged services + products directory.
 * Uses ServicesGrid to display offerings and applies local SEO keywords.
 */
import ServicesGrid from '~/components/sections/ServicesGrid.vue'
import ContactCTA from '~/components/sections/ContactCTA.vue'

const { t } = useI18n()

// Local SEO-focused metadata with natural phrasing
useSeo({
  title: 'Interior Design & Fit-Out Services in Dubai',
  description: 'Explore premium interior design, bespoke fit-out, glass and aluminium works, custom curtains, and turnkey technical solutions in Dubai and across the UAE.',
})
</script>

<template>
  <div>
    <!-- ── Services Hero ─────────────────────────────────────────────────── -->
    <section class="bg-ink py-20 text-center text-white md:py-32">
      <div 
        v-motion="{
          initial: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 300 } }
        }"
        class="container-pad mx-auto max-w-4xl space-y-6"
      >
        <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl">
          {{ t('services.title') }}
        </h1>
        <p class="text-lg text-white/80 md:text-xl">
          {{ t('services.subtitle') }}
        </p>
      </div>
    </section>

    <!-- ── Services & Products Grid ────────────────────────────────────── -->
    <ServicesGrid hide-heading />

    <!-- ── Contact Call to Action ───────────────────────────────────────── -->
    <ContactCTA />
  </div>
</template>
