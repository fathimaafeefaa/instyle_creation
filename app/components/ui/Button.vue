<script setup lang="ts">
/**
 * app/components/ui/Button.vue
 *
 * Brand button primitive — enforces amber discipline site-wide.
 *
 * RTL audit:
 *   px-* (horizontal padding) → replaced with ps-* / pe-* (logical)
 *     ps- = padding-inline-start → left in LTR, right in RTL
 *     pe- = padding-inline-end   → right in LTR, left in RTL
 *   gap-2 (flex gap) → direction-agnostic, no change needed
 *   rounded-sm → direction-agnostic, no change needed
 *
 * Variants:
 *   "primary"  Amber fill · white text. One per viewport max.
 *   "ghost"    Ink border + transparent. Secondary actions.
 *
 * Sizes:   "sm" | "md"  (default: "md")
 * Props:   variant, size, as (polymorphic tag), disabled, loading, type
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

// ── Base styles ─────────────────────────────────────────────────────────────
// gap-2: direction-agnostic spacing (flex-inline gap doesn't flip)
// No directional padding or margin here — pushed into sizeClass below.
const base = [
  'inline-flex items-center justify-center gap-2',
  'font-sans font-[500] tracking-[0.01em]',
  'rounded-sm border transition-all duration-[--duration-base]',
  'select-none cursor-pointer',
  'focus-visible:focus-ring',
  'disabled:pointer-events-none disabled:opacity-40',
].join(' ')

// ── Variant colours ──────────────────────────────────────────────────────────
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

// ── Sizes — using logical inline padding (ps-/pe-) for RTL correctness ───────
// ps- = padding-inline-start, pe- = padding-inline-end
// In LTR: ps- is left, pe- is right. In RTL: automatically flipped.
// py- (block padding) is direction-neutral, kept as-is.
const sizeClass: Record<string, string> = {
  sm: 'ps-4 pe-4 py-2 text-sm',
  md: 'ps-6 pe-6 py-3 text-sm',
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
    <!-- Loading spinner — border-t-transparent creates the gap regardless of dir -->
    <span
      v-if="loading"
      class="size-4 shrink-0 animate-spin rounded-full border-2 border-current border-t-transparent"
      aria-hidden="true"
    />
    <slot />
  </component>
</template>
