<script setup lang="ts">
/**
 * app/components/ui/LocaleSwitcher.vue
 *
 * Minimal text-based locale switcher (EN / AR).
 */
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <NuxtLink
    :to="switchLocalePath(locale === 'en' ? 'ar' : 'en')"
    class="text-sm font-medium tracking-wider text-[--color-text-muted] hover:text-[--color-primary] transition-colors"
    :aria-label="`Switch to ${locale === 'en' ? 'Arabic' : 'English'}`"
  >
    {{ locale === 'en' ? 'AR' : 'EN' }}
  </NuxtLink>
</template>
