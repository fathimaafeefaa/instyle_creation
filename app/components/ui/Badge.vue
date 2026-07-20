<script setup lang="ts">
/**
 * app/components/ui/Badge.vue
 *
 * Inline label / tag chip for categories, status indicators, etc.
 *
 * Props:
 *   - variant: 'default' | 'brand' | 'success' | 'warning' | 'neutral'
 *   - size:    'sm' | 'md'
 *   - dot:     show a leading status dot
 */

interface Props {
  variant?: 'default' | 'brand' | 'success' | 'warning' | 'neutral'
  size?: 'sm' | 'md'
  dot?: boolean
}

const { variant = 'default', size = 'sm', dot = false } = defineProps<Props>()

const variantClasses: Record<string, string> = {
  default: 'bg-[--color-surface-muted] text-[--color-text-muted] border border-[--color-border]',
  brand:   'bg-[--color-brand-50] text-[--color-brand-700] border border-[--color-brand-200]',
  success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  warning: 'bg-amber-50 text-amber-700 border border-amber-200',
  neutral: 'bg-zinc-100 text-zinc-600 border border-zinc-200',
}

const dotColorMap: Record<string, string> = {
  default: 'bg-[--color-text-muted]',
  brand:   'bg-[--color-brand-500]',
  success: 'bg-emerald-500',
  warning: 'bg-amber-500',
  neutral: 'bg-zinc-400',
}

const sizeClasses: Record<string, string> = {
  sm: 'px-2 py-0.5 text-xs font-medium',
  md: 'px-3 py-1 text-sm font-medium',
}
</script>

<template>
  <span
    :class="[
      'inline-flex items-center gap-1.5 rounded-full',
      variantClasses[variant],
      sizeClasses[size],
    ]"
  >
    <span
      v-if="dot"
      :class="['size-1.5 rounded-full flex-shrink-0', dotColorMap[variant]]"
      aria-hidden="true"
    />
    <slot />
  </span>
</template>
