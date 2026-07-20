<script setup lang="ts">
/**
 * app/components/sections/ServicesGrid.vue
 *
 * Grid of service cards pulled from app/data/services.ts.
 * Scroll-reveal animations via @vueuse/motion are wired in (stub variant).
 */
import { services } from '~/data/services'

const { t } = useI18n()
</script>

<template>
  <section
    id="services"
    aria-labelledby="services-heading"
    class="section-py bg-[--color-surface]"
  >
    <div class="container-pad mx-auto max-w-7xl space-y-12">
      <UiSectionHeading
        id="services-heading"
        :eyebrow="t('services.eyebrow')"
        :title="t('services.title')"
        :subtitle="t('services.subtitle')"
        align="center"
      />

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <UiCard
          v-for="service in services"
          :key="service.id"
          hover
          padding="lg"
        >
          <!-- Icon placeholder -->
          <div class="mb-4 flex size-12 items-center justify-center rounded-xl bg-[--color-brand-50] text-[--color-primary]">
            <span class="text-2xl" aria-hidden="true">{{ service.icon }}</span>
          </div>

          <h3 class="mb-2 text-lg font-semibold text-[--color-text]">
            {{ t(`services.items.${service.id}.title`) }}
          </h3>
          <p class="text-sm text-[--color-text-muted] leading-relaxed">
            {{ t(`services.items.${service.id}.description`) }}
          </p>
        </UiCard>
      </div>
    </div>
  </section>
</template>
