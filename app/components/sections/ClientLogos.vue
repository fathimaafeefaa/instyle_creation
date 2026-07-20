<script setup lang="ts">
/**
 * app/components/sections/ClientLogos.vue
 *
 * Horizontal scroll-able logo strip.
 * Client data comes from app/data/clients.ts — single source of truth.
 */
import { clients } from '~/data/clients'

const { t } = useI18n()
</script>

<template>
  <section
    id="clients"
    aria-labelledby="clients-heading"
    class="section-py bg-[--color-surface-muted]"
  >
    <div class="container-pad mx-auto max-w-7xl space-y-10">
      <UiSectionHeading
        id="clients-heading"
        :eyebrow="t('clients.eyebrow')"
        :title="t('clients.title')"
        align="center"
      />

      <!-- Logo grid — NuxtImage logos added in next step -->
      <div
        class="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        role="list"
        :aria-label="t('clients.aria_label')"
      >
        <div
          v-for="client in clients"
          :key="client.id"
          role="listitem"
          class="flex h-10 w-32 items-center justify-center grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 opacity-60"
          :title="client.name"
        >
          <!-- TODO: <NuxtImg :src="client.logo" :alt="client.name" /> -->
          <span class="text-sm font-semibold text-[--color-text-muted]">{{ client.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
