<script setup lang="ts">
/**
 * app/components/ui/SectionHeading.vue
 *
 * Canonical section heading primitive used across every page section.
 * — Do NOT duplicate this markup elsewhere —
 *
 * Anatomy:
 *   [eyebrow]   optional · font-sans · steel · uppercase · wide tracking
 *   [title]     required  · font-heading (Fraunces) · ink
 *   [subtitle]  optional  · font-sans · steel · normal weight
 *
 * Props:
 *   title    string  — Main heading (rendered as h2 by default)
 *   eyebrow  string  — Short label above the title
 *   subtitle string  — Supporting copy below the title
 *   align    'start' | 'center' | 'end'  — text/flex alignment
 *   level    2 | 3 | 4  — semantic heading level (visual size stays the same)
 *   dark     boolean  — flip to light colours for dark-background sections
 */

interface Props {
  title: string
  eyebrow?: string
  subtitle?: string
  align?: 'start' | 'center' | 'end'
  level?: 2 | 3 | 4
  dark?: boolean
}

const {
  title,
  eyebrow = '',
  subtitle = '',
  align = 'start',
  level = 2,
  dark = false,
} = defineProps<Props>()

const tag = computed(() => `h${level}` as 'h2' | 'h3' | 'h4')

const alignClass: Record<string, string> = {
  start:  'items-start text-start',
  center: 'items-center text-center',
  end:    'items-end text-end',
}
</script>

<template>
  <div :class="['flex flex-col gap-3', alignClass[align]]">

    <!-- Eyebrow: small-caps label, steel-toned, spaced out -->
    <p
      v-if="eyebrow"
      :class="[
        'font-sans text-xs font-medium uppercase tracking-[0.18em]',
        dark ? 'text-white/50' : 'text-steel',
      ]"
    >
      {{ eyebrow }}
    </p>

    <!-- Main heading: Fraunces, ink -->
    <component
      :is="tag"
      :class="[
        'font-heading text-3xl font-[500] leading-[1.1] tracking-[-0.02em]',
        'md:text-4xl lg:text-5xl',
        dark ? 'text-white' : 'text-ink',
      ]"
    >
      {{ title }}
    </component>

    <!-- Subtitle: Inter, steel-toned, comfortable line-height -->
    <p
      v-if="subtitle"
      :class="[
        'font-sans max-w-xl text-base leading-relaxed',
        dark ? 'text-white/60' : 'text-steel',
      ]"
    >
      {{ subtitle }}
    </p>

  </div>
</template>
