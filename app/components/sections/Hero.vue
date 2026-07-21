<script setup lang="ts">
/**
 * app/components/sections/Hero.vue
 *
 * Full-bleed hero section with placeholder image and dark overlay.
 * Uses v-motion for subtle reveal.
 */
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section
    id="hero"
    aria-labelledby="hero-heading"
    class="relative flex min-h-[90svh] items-center overflow-hidden bg-ink"
  >
    <!-- Background image -->
    <div class="absolute inset-0 z-0" aria-hidden="true">
      <NuxtImg
        src="/images/hero-placeholder.jpg"
        alt="Instyle Creation interior showcase"
        class="h-full w-full object-cover object-center"
        loading="eager"
      />
    </div>

    <!-- Overlay -->
    <div class="absolute inset-0 z-10 bg-ink/70" aria-hidden="true" />

    <!-- Content -->
    <div class="container-pad relative z-20 mx-auto max-w-7xl">
      <div 
        class="max-w-3xl space-y-6"
        v-motion="{
          initial: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 300 } }
        }"
      >
        <h1 
          id="hero-heading" 
          class="font-heading text-5xl leading-tight text-white md:text-6xl lg:text-7xl"
        >
          {{ t('hero.title') }}
        </h1>
        <p class="text-lg text-white/80 md:text-xl">
          {{ t('hero.subtitle') }}
        </p>

        <div class="pt-4">
          <UiButton size="lg" as="NuxtLink" :to="localePath('/contact')">
            {{ t('hero.cta_primary') }}
          </UiButton>
        </div>
      </div>
    </div>
  </section>
</template>
