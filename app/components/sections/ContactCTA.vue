<script setup lang="ts">
/**
 * app/components/sections/ContactCTA.vue
 *
 * Full-width call-to-action band above the footer.
 * Links to /contact page (built in a later step).
 */
const { t } = useI18n()
</script>

<template>
  <section
    id="contact-cta"
    aria-labelledby="contact-cta-heading"
    class="section-py bg-gradient-to-br from-[--color-brand-500] to-[--color-brand-700] text-white"
  >
    <div class="container-pad mx-auto max-w-4xl text-center space-y-6">
      <UiSectionHeading
        id="contact-cta-heading"
        :title="t('cta.title')"
        :subtitle="t('cta.subtitle')"
        align="center"
      />

      <div class="flex flex-wrap justify-center gap-4">
        <UiButton
          size="lg"
          variant="secondary"
          as="NuxtLink"
          :to="localePath('/contact')"
        >
          {{ t('cta.button') }}
        </UiButton>
      </div>
    </div>
  </section>
</template>
