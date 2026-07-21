<script setup lang="ts">
/**
 * app/pages/index.vue
 *
 * Homepage.
 * Assembles various sections from app/components/sections.
 */
import Hero from '~/components/sections/Hero.vue'
import StatsBand from '~/components/sections/StatsBand.vue'
import ServicesPreview from '~/components/sections/ServicesPreview.vue'
import ClientLogos from '~/components/sections/ClientLogos.vue'
import Testimonials from '~/components/sections/Testimonials.vue'
import ContactCTA from '~/components/sections/ContactCTA.vue'

// Set page-specific SEO metadata
useSeo({
  title: 'Home',
  description: 'Premium interior design and fit-out solutions for residential, commercial, and hospitality projects across the UAE.',
})
</script>

<template>
  <div>
    <Hero />
    <StatsBand />
    <ServicesPreview />
    <ClientLogos />
    <Testimonials />
    <ContactCTA />
  </div>
</template>
