<script setup lang="ts">
/**
 * app/components/sections/Testimonials.vue
 *
 * Testimonials slider or grid.
 * Renders a placeholder warning badge so stakeholders don't mistake
 * lorem/placeholder text for live client quotes during review.
 */
import { testimonials } from '~/data/testimonials'

const { t } = useI18n()
</script>

<template>
  <section
    id="testimonials"
    aria-labelledby="testimonials-heading"
    class="section-py bg-stone"
  >
    <div class="container-pad mx-auto max-w-7xl space-y-12">
      <UiSectionHeading
        id="testimonials-heading"
        v-motion="{
          initial: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 300 } }
        }"
        :eyebrow="t('testimonials.eyebrow')"
        :title="t('testimonials.title')"
        align="center"
      />

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <UiCard
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.id"
          v-motion="{
            initial: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 300, delay: index * 50 } }
          }"
          padding="lg"
          class="relative flex flex-col justify-between"
        >
          <div class="space-y-6">
            <!-- Warning badge -->
            <UiBadge variant="warning" class="inline-block text-[10px] uppercase tracking-wider mb-2">
              {{ t('testimonials.placeholder_badge') }}
            </UiBadge>

            <!-- Rating stars -->
            <div class="flex gap-1 text-amber">
              <svg v-for="i in 5" :key="i" class="size-4" :class="i <= testimonial.rating ? 'fill-current' : 'text-gray-300 fill-current'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>

            <!-- Quote -->
            <blockquote class="text-base italic leading-relaxed text-ink/80">
              "{{ testimonial.quote }}"
            </blockquote>
          </div>

          <!-- Author details -->
          <div class="mt-8 flex items-center gap-4">
            <div class="size-12 overflow-hidden rounded-full bg-steel/20 shrink-0">
              <NuxtImg
                v-if="testimonial.avatar"
                :src="testimonial.avatar"
                :alt="testimonial.author"
                class="size-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <div class="font-semibold text-ink">{{ testimonial.author }}</div>
              <div class="text-xs text-steel">{{ testimonial.role }}, {{ testimonial.company }}</div>
            </div>
          </div>
        </UiCard>
      </div>
    </div>
  </section>
</template>
