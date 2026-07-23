<script setup lang="ts">
/**
 * app/components/sections/StatsBand.vue
 *
 * A horizontal band of key statistics / social proof numbers.
 * Numbers come from app/data/stats.ts to keep a single source of truth.
 */
import { stats } from '~/data/stats'

const { t } = useI18n()
</script>

<template>
  <section
    id="stats"
    aria-label="Company statistics"
    class="section-py bg-[--color-brand-950] text-white"
  >
    <div
      v-motion="{
        initial: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 300 } }
      }"
      class="container-pad mx-auto max-w-7xl"
    >
      <dl class="grid grid-cols-2 gap-8 md:grid-cols-4">
        <div
          v-for="stat in stats"
          :key="stat.id"
          class="flex flex-col items-center gap-1 text-center"
        >
          <dt class="text-4xl font-bold tracking-tight text-[--color-brand-300] md:text-5xl">
            {{ stat.value }}
          </dt>
          <dd class="text-sm font-medium text-white/70">
            {{ t(`stats.${stat.id}`) }}
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>
