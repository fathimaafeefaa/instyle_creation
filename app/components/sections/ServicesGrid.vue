<script setup lang="ts">
/**
 * app/components/sections/ServicesGrid.vue
 *
 * Grid of service cards pulled from app/data/services.ts.
 */
import { services } from '~/data/services'

interface Props {
  hideHeading?: boolean
}

const { hideHeading = false } = defineProps<Props>()

const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section
    id="services"
    aria-labelledby="services-heading"
    class="section-py bg-surface-muted"
  >
    <div class="container-pad mx-auto max-w-7xl space-y-12">
      <UiSectionHeading
        v-if="!hideHeading"
        id="services-heading"
        :eyebrow="t('services.eyebrow')"
        :title="t('services.title')"
        :subtitle="t('services.subtitle')"
        align="center"
      />

      <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <UiCard
          v-for="service in services"
          :key="service.id"
          hover
          padding="none"
          class="flex flex-col overflow-hidden h-full group"
        >
          <!-- Service Card Image Header -->
          <div class="relative aspect-video w-full overflow-hidden bg-stone border-b border-[--color-border]">
            <img
              :src="`/images/services/${service.id}.jpg`"
              :alt="t(`services.items.${service.id}.title`)"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onerror="this.src='https://placehold.co/600x400/F6F4F0/9C9C94?text=InStyle+Creation'"
            >
            <div class="absolute top-3 right-3 flex size-9 items-center justify-center rounded-xl bg-white/95 shadow-sm backdrop-blur-xs text-lg select-none">
              {{ service.icon }}
            </div>
          </div>

          <!-- Card content -->
          <div class="flex flex-1 flex-col p-6">
            <h3 class="mb-2 text-lg font-bold text-ink font-heading">
              {{ t(`services.items.${service.id}.title`) }}
            </h3>
            <p class="mb-6 flex-1 text-sm text-steel leading-relaxed">
              {{ t(`services.items.${service.id}.description`) }}
            </p>
            <div class="mt-auto">
              <NuxtLink
                :to="localePath('/contact')"
                class="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-amber hover:text-amber-deep transition-colors group-hover:underline"
              >
                {{ t('cta.contact_us') }}
                <svg class="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </UiCard>
      </div>
    </div>
  </section>
</template>
