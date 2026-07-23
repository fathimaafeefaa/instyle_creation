<script setup lang="ts">
/**
 * app/pages/about.vue
 *
 * About Us page.
 * Uses real brand facts for the intro, and explicitly flags generic
 * 'story' and 'vision' blocks with warning badges for client refinement.
 * Reuses existing StatsBand, ClientLogos, and Testimonials components.
 */
import StatsBand from '~/components/sections/StatsBand.vue'
import ClientLogos from '~/components/sections/ClientLogos.vue'
import Testimonials from '~/components/sections/Testimonials.vue'

const { t } = useI18n()

useSeo({
  title: 'About Us',
  description: 'Learn about Instyle Creation, a team of passionate designers and craftsmen with a 20+ year legacy across Dubai, Cochin, and Calicut.',
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
          {{ t('about.hero.title') }}
        </h1>
        <p class="text-lg text-white/80 md:text-xl">
          {{ t('about.hero.subtitle') }}
        </p>
      </div>
    </section>

    <!-- ── Intro & Facts ──────────────────────────────────────────────────── -->
    <section class="section-py bg-surface">
      <div class="container-pad mx-auto max-w-3xl space-y-16">
        
        <!-- Intro -->
        <div 
          v-motion="{
            initial: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 300 } }
          }"
        >
          <UiSectionHeading
            :title="t('about.intro.title')"
            :level="2"
            align="start"
          />
          <p class="mt-6 text-lg leading-relaxed text-ink/80">
            {{ t('about.intro.text') }}
          </p>
        </div>

        <div class="h-px w-full bg-[--color-border]" aria-hidden="true" />

        <!-- Our Story (Placeholder) -->
        <div 
          v-motion="{
            initial: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 300 } }
          }"
        >
          <UiSectionHeading
            :title="t('about.story.title')"
            :level="2"
            align="start"
          />
          <div class="mt-6 rounded-xl border border-amber/30 bg-amber/5 p-6">
            <UiBadge variant="warning" class="mb-4 inline-block text-[10px] uppercase tracking-wider">
              Requires Client Input
            </UiBadge>
            <p class="text-base italic leading-relaxed text-ink/70">
              {{ t('about.story.placeholder') }}
            </p>
          </div>
        </div>

        <div class="h-px w-full bg-[--color-border]" aria-hidden="true" />

        <!-- Our Vision (Placeholder) -->
        <div 
          v-motion="{
            initial: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 300 } }
          }"
        >
          <UiSectionHeading
            :title="t('about.vision.title')"
            :level="2"
            align="start"
          />
          <div class="mt-6 rounded-xl border border-amber/30 bg-amber/5 p-6">
            <UiBadge variant="warning" class="mb-4 inline-block text-[10px] uppercase tracking-wider">
              Requires Client Input
            </UiBadge>
            <p class="text-base italic leading-relaxed text-ink/70">
              {{ t('about.vision.placeholder') }}
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- ── Reused Sections ────────────────────────────────────────────────── -->
    <StatsBand />
    <ClientLogos />
    <Testimonials />
  </div>
</template>
