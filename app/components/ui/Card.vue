<script setup lang="ts">
/**
 * app/components/ui/Card.vue
 *
 * Generic surface card. Composes other components inside via slots.
 *
 * Props:
 *   - hover: adds lift/shadow on hover
 *   - padding: 'none' | 'sm' | 'md' | 'lg'
 *   - rounded: 'md' | 'lg' | 'xl' | '2xl'
 *   - bordered: show border
 */

interface Props {
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
  rounded?: 'md' | 'lg' | 'xl' | '2xl'
  bordered?: boolean
}

const {
  hover = false,
  padding = 'md',
  rounded = 'xl',
  bordered = true,
} = defineProps<Props>()

const paddingMap: Record<string, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

const roundedMap: Record<string, string> = {
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
}

const classes = computed(() =>
  [
    'bg-[--color-surface]',
    roundedMap[rounded],
    paddingMap[padding],
    bordered && 'border border-[--color-border]',
    hover && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[--color-brand-200]',
  ]
    .filter(Boolean)
    .join(' '),
)
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
