<script setup lang="ts">
/**
 * app/components/ui/Button.vue
 *
 * Brand button primitive — enforces amber discipline site-wide.
 *
 * Variants
 *   "primary"  Amber fill · white text.
 *              Use ONLY for the single most important action on a given screen.
 *   "ghost"    Transparent · ink-coloured border and text.
 *              Use for secondary actions, nav CTAs, or wherever primary would
 *              compete with another amber element in the same viewport.
 *
 * Sizes
 *   "sm"  compact inline button
 *   "md"  standard button (default)
 *
 * Props
 *   variant  'primary' | 'ghost'   (default: 'primary')
 *   size     'sm' | 'md'           (default: 'md')
 *   as       tag name or component  (default: 'button') — makes it polymorphic
 *            e.g. as="a", as="NuxtLink"
 *   disabled boolean
 *   loading  boolean — shows spinner, disables interaction
 *   type     HTMLButtonElement['type'] (default: 'button')
 */

interface Props {
  variant?: 'primary' | 'ghost'
  size?: 'sm' | 'md'
  as?: string
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const {
  variant = 'primary',
  size = 'md',
  as: tag = 'button',
  disabled = false,
  loading = false,
  type = 'button',
} = defineProps<Props>()

// ── Base styles shared by both variants ────────────────────────────────────
const base = [
  'inline-flex items-center justify-center gap-2',
  'font-sans font-[500] tracking-[0.01em]',
  'rounded-sm border transition-all',
  'select-none cursor-pointer',
  'focus-visible:focus-ring',
  'disabled:pointer-events-none disabled:opacity-40',
].join(' ')

// ── Variant-specific colours ────────────────────────────────────────────────
const variantClass: Record<string, string> = {
  primary: [
    'border-transparent',
    'bg-amber text-white',
    'hover:bg-amber-deep',
    'active:scale-[0.97]',
  ].join(' '),

  ghost: [
    'border-ink text-ink bg-transparent',
    'hover:bg-ink hover:text-white',
    'active:scale-[0.97]',
  ].join(' '),
}

// ── Size-specific padding / text ────────────────────────────────────────────
const sizeClass: Record<string, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
}

const classes = computed(() =>
  [
    base,
    variantClass[variant],
    sizeClass[size],
    (disabled || loading) && 'opacity-40 pointer-events-none',
  ]
    .filter(Boolean)
    .join(' '),
)
</script>

<template>
  <component
    :is="tag"
    :class="classes"
    :type="tag === 'button' ? type : undefined"
    :disabled="tag === 'button' ? disabled || loading : undefined"
    :aria-disabled="disabled || loading || undefined"
    :aria-busy="loading || undefined"
  >
    <!-- Loading spinner (16×16, matches current text colour) -->
    <span
      v-if="loading"
      class="size-4 shrink-0 animate-spin rounded-full border-2 border-current border-t-transparent"
      aria-hidden="true"
    />
    <slot />
  </component>
</template>
