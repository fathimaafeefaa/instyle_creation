<script setup lang="ts">
/**
 * app/components/sections/ContactCTA.vue
 *
 * Closing call-to-action band with a dark background.
 * Usually placed just above the footer.
 */
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section
    v-motion="{
      initial: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 300 } }
    }"
    class="bg-ink py-20 text-center"
  >
    <div class="container-pad mx-auto max-w-4xl space-y-8">
      <h2 class="font-heading text-4xl text-white md:text-5xl">
        {{ t('contact_cta.title') }}
      </h2>
      <p class="text-lg text-white/70">
        {{ t('contact_cta.subtitle') }}
      </p>
      <div class="pt-4">
        <UiButton size="lg" as="NuxtLink" :to="localePath('/contact')">
          {{ t('contact_cta.button') }}
        </UiButton>
      </div>
    </div>
  </section>
</template>
