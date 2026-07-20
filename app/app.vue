<script setup lang="ts">
/**
 * app/app.vue
 *
 * Root component. Applies the correct `dir` attribute on <html> whenever
 * the locale changes — enabling native RTL support for Arabic.
 */
import { computed } from 'vue'

const { locale, locales } = useI18n()

const currentLocale = computed(() =>
  locales.value.find((l) => l.code === locale.value),
)

const dir = computed(() => currentLocale.value?.dir ?? 'ltr')
const lang = computed(() => currentLocale.value?.language ?? locale.value)

useHead({
  htmlAttrs: {
    lang,
    dir,
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
