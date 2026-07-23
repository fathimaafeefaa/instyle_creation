<script setup lang="ts">
/**
 * app/pages/projects.vue
 *
 * Portfolio page.
 * Uses ProjectsGrid to display the curated list of works and applies project SEO metadata.
 */
import ProjectsGrid from '~/components/sections/ProjectsGrid.vue'
import ContactCTA from '~/components/sections/ContactCTA.vue'

const { t } = useI18n()

// SEO metadata with natural phrasing and relevant keywords
useSeo({
  title: 'Interior Design & Fit-Out Portfolio Dubai',
  description: 'View our curated portfolio of residential and commercial fit-out projects in Dubai and across the UAE, displaying exceptional design and master craftsmanship.',
})
</script>

<template>
  <div>
    <!-- ── Page Hero ──────────────────────────────────────────────────────── -->
    <section class="bg-ink py-20 text-center text-white md:py-32">
      <div 
        v-motion="{
          initial: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 300 } }
        }"
        class="container-pad mx-auto max-w-4xl space-y-6"
      >
        <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl">
          {{ t('projects.title') }}
        </h1>
        <p class="text-lg text-white/80 md:text-xl">
          {{ t('projects.subtitle') }}
        </p>
      </div>
    </section>

    <!-- ── Projects Grid Gallery ─────────────────────────────────────────── -->
    <ProjectsGrid />

    <!-- ── Reused CTA ─────────────────────────────────────────────────────── -->
    <ContactCTA />
  </div>
</template>
