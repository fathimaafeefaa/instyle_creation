<script setup lang="ts">
/**
 * app/components/sections/ClientLogos.vue
 *
 * Strip of client logos.
 * Uses placeholder image paths named by client slug.
 */
import { clients } from '~/data/clients'

const { t } = useI18n()
</script>

<template>
  <section
    id="clients"
    aria-labelledby="clients-heading"
    class="section-py bg-white"
  >
    <div class="container-pad mx-auto max-w-7xl space-y-12">
      <UiSectionHeading
        id="clients-heading"
        :eyebrow="t('clients.eyebrow')"
        :title="t('clients.title')"
        align="center"
        v-motion="{
          initial: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 300 } }
        }"
      />

      <div 
        class="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        v-motion="{
          initial: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 300, delay: 100 } }
        }"
      >
        <div
          v-for="client in clients"
          :key="client.id"
          class="flex items-center justify-center opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
        >
          <NuxtImg
            :src="`/images/clients/${client.id}.png`"
            :alt="`${client.name} logo`"
            class="h-12 w-auto max-w-[120px] object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>
