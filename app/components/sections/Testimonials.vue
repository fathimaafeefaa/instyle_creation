<script setup lang="ts">
/**
 * app/components/sections/Testimonials.vue
 *
 * Testimonial carousel / grid.
 * Data comes from app/data/testimonials.ts — single source of truth.
 * @vueuse/core's useSwipe can be wired in for touch carousel (future step).
 */
import { testimonials } from '~/data/testimonials'

const { t } = useI18n()

// Simple active index for a step-through carousel (desktop shows grid)
const activeIndex = ref(0)
const next = () => activeIndex.value = (activeIndex.value + 1) % testimonials.length
const prev = () => activeIndex.value = (activeIndex.value - 1 + testimonials.length) % testimonials.length
</script>

<template>
  <section
    id="testimonials"
    aria-labelledby="testimonials-heading"
    class="section-py bg-[--color-surface]"
  >
    <div class="container-pad mx-auto max-w-7xl space-y-12">
      <UiSectionHeading
        id="testimonials-heading"
        :eyebrow="t('testimonials.eyebrow')"
        :title="t('testimonials.title')"
        :subtitle="t('testimonials.subtitle')"
        align="center"
      />

      <!-- Grid (md+) -->
      <div class="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
        <UiCard
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          padding="lg"
          hover
        >
          <!-- Stars -->
          <div class="mb-4 flex gap-1 text-[--color-brand-400]" aria-hidden="true">
            <span v-for="i in 5" :key="i">★</span>
          </div>

          <blockquote class="mb-6 text-sm leading-relaxed text-[--color-text-muted] italic">
            "{{ testimonial.quote }}"
          </blockquote>

          <footer class="flex items-center gap-3">
            <!-- TODO: <NuxtImg :src="testimonial.avatar" :alt="testimonial.author" /> -->
            <div class="size-10 rounded-full bg-[--color-brand-100] flex items-center justify-center text-[--color-brand-700] font-semibold text-sm">
              {{ testimonial.author[0] }}
            </div>
            <div>
              <p class="text-sm font-semibold text-[--color-text]">{{ testimonial.author }}</p>
              <p class="text-xs text-[--color-text-muted]">{{ testimonial.role }}, {{ testimonial.company }}</p>
            </div>
          </footer>
        </UiCard>
      </div>

      <!-- Mobile carousel -->
      <div class="md:hidden space-y-4">
        <UiCard padding="lg">
          <div class="mb-4 flex gap-1 text-[--color-brand-400]" aria-hidden="true">
            <span v-for="i in 5" :key="i">★</span>
          </div>
          <blockquote class="mb-6 text-sm leading-relaxed text-[--color-text-muted] italic">
            "{{ testimonials[activeIndex]?.quote }}"
          </blockquote>
          <footer class="flex items-center gap-3">
            <div class="size-10 rounded-full bg-[--color-brand-100] flex items-center justify-center text-[--color-brand-700] font-semibold text-sm">
              {{ testimonials[activeIndex]?.author[0] }}
            </div>
            <div>
              <p class="text-sm font-semibold">{{ testimonials[activeIndex]?.author }}</p>
              <p class="text-xs text-[--color-text-muted]">{{ testimonials[activeIndex]?.role }}, {{ testimonials[activeIndex]?.company }}</p>
            </div>
          </footer>
        </UiCard>

        <div class="flex items-center justify-center gap-4">
          <UiButton variant="ghost" size="sm" :aria-label="t('testimonials.prev')" @click="prev">‹</UiButton>
          <span class="text-sm text-[--color-text-muted]">{{ activeIndex + 1 }} / {{ testimonials.length }}</span>
          <UiButton variant="ghost" size="sm" :aria-label="t('testimonials.next')" @click="next">›</UiButton>
        </div>
      </div>
    </div>
  </section>
</template>
