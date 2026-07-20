<script setup lang="ts">
/**
 * app/components/ui/LocaleSwitcher.vue
 *
 * Minimal text-based EN / AR locale toggle for the site header.
 *
 * Design intent:
 *   — Text-only, no flags or icons. Renders as two labels separated by a
 *     thin divider. The active locale is displayed in a muted colour;
 *     the inactive one is the clickable link.
 *   — In EN: shows "EN · AR" — clicking AR switches locale
 *   — In AR: shows "AR · EN" — clicking EN switches locale
 *
 * RTL notes:
 *   — gap-* and flex are direction-agnostic
 *   — The divider character "·" stays centred regardless of dir
 *   — No directional padding is applied; relies on parent container gap
 *
 * Accessibility:
 *   — Wraps the interactive locale in a <button> with aria-label from i18n
 *   — Announces the language being switched TO, not the current one
 */

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

// Ordered pair: [current, other] — always show current first
const currentLocale = computed(() =>
  locales.value.find((l) => l.code === locale.value),
)
const otherLocale = computed(() =>
  locales.value.find((l) => l.code !== locale.value),
)

// Labels derived from locale config `name` field
const currentLabel = computed(() => currentLocale.value?.code.toUpperCase() ?? '')
const otherLabel = computed(() => otherLocale.value?.code.toUpperCase() ?? '')

// The path to switch to the other locale
const switchPath = computed(() =>
  otherLocale.value ? switchLocalePath(otherLocale.value.code) : '/',
)

// aria-label: "Switch to Arabic" / "Switch to English"
const { t } = useI18n()
const switchAriaLabel = computed(() => t('locale.label'))
</script>

<template>
  <div
    class="flex items-center gap-2 font-sans text-sm font-medium select-none"
    :aria-label="switchAriaLabel"
    role="navigation"
  >
    <!-- Current locale — muted, not interactive -->
    <span class="text-steel" aria-current="true">
      {{ currentLabel }}
    </span>

    <!-- Divider -->
    <span class="text-steel/40 pointer-events-none" aria-hidden="true">·</span>

    <!-- Other locale — interactive link -->
    <NuxtLink
      :to="switchPath"
      class="text-ink transition-colors duration-[--duration-fast] hover:text-amber focus-visible:focus-ring rounded-sm"
      :aria-label="`${switchAriaLabel}: ${otherLabel}`"
    >
      {{ otherLabel }}
    </NuxtLink>
  </div>
</template>
