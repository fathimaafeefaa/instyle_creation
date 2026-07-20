<script setup lang="ts">
/**
 * app/components/sections/Hero.vue
 *
 * Full-viewport hero section.
 * Content is driven by i18n keys — no hardcoded strings.
 * Real imagery and animations are added in a subsequent step.
 */
const { t } = useI18n()
</script>

<template>
  <section
    id="hero"
    aria-labelledby="hero-heading"
    class="relative flex min-h-[90svh] items-center overflow-hidden bg-[--color-neutral-950]"
  >
    <!-- Background image slot — NuxtImage will go here -->
    <div class="absolute inset-0 z-0" aria-hidden="true">
      <!-- TODO: <NuxtImg> with optimised hero image -->
    </div>

    <!-- Overlay -->
    <div class="absolute inset-0 z-10 bg-gradient-to-br from-black/70 via-black/50 to-transparent" aria-hidden="true" />

    <!-- Content -->
    <div class="container-pad relative z-20 mx-auto max-w-7xl">
      <div class="max-w-3xl space-y-6">
        <UiSectionHeading
          id="hero-heading"
          :eyebrow="t('hero.eyebrow')"
          :title="t('hero.title')"
          :subtitle="t('hero.subtitle')"
        />

        <div class="flex flex-wrap gap-4">
          <UiButton size="lg" as="NuxtLink" :to="localePath('/contact')">
            {{ t('hero.cta_primary') }}
          </UiButton>
          <UiButton size="lg" variant="outline" as="NuxtLink" :to="localePath('/projects')">
            {{ t('hero.cta_secondary') }}
          </UiButton>
        </div>
      </div>
    </div>
  </section>
</template>
