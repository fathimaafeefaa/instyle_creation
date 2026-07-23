<script setup lang="ts">
/**
 * app/components/sections/ServicesPreview.vue
 *
 * Preview grid of featured services on the homepage.
 * Pulls the first 6 entries from app/data/services.ts.
 */
import { services } from '~/data/services'

const { t } = useI18n()
const localePath = useLocalePath()

const featuredServices = computed(() => services.slice(0, 6))
</script>

<template>
  <section
    id="services"
    aria-labelledby="services-heading"
    class="section-py bg-[--color-surface]"
  >
    <div class="container-pad mx-auto max-w-7xl space-y-12">
      <div 
        v-motion="{
          initial: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 300 } }
        }"
        class="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      >
        <UiSectionHeading
          id="services-heading"
          :eyebrow="t('services.eyebrow')"
          :title="t('services.title')"
          :subtitle="t('services.subtitle')"
        />
        <UiButton variant="ghost" as="NuxtLink" :to="localePath('/services')">
          {{ t('services.view_all') }}
        </UiButton>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <UiCard
          v-for="(service, index) in featuredServices"
          :key="service.id"
          v-motion="{
            initial: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 300, delay: index * 50 } }
          }"
          hover
          padding="lg"
        >
          <!-- Icon placeholder -->
          <div class="mb-4 flex size-12 items-center justify-center rounded-xl bg-stone text-amber">
            <span class="text-2xl" aria-hidden="true">{{ service.icon }}</span>
          </div>

          <h3 class="mb-2 text-lg font-semibold text-ink">
            {{ t(`services.items.${service.id}.title`) }}
          </h3>
          <p class="text-sm text-steel leading-relaxed">
            {{ t(`services.items.${service.id}.description`) }}
          </p>
        </UiCard>
      </div>
    </div>
  </section>
</template>
