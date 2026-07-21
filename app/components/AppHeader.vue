<script setup lang="ts">
/**
 * app/components/AppHeader.vue
 *
 * Sticky site header.
 *
 * Behaviour
 * ──────────
 *   • Transparent with no border while at page top (sits over hero image).
 *   • Transitions to bg-stone + bottom border once the user scrolls past 80px.
 *   • Scroll state is shared via useScrolled() — no inline listener here.
 *
 * Slots
 * ─────
 *   None — fully self-contained. Nav links and contact CTA are rendered here.
 *
 * RTL
 * ───
 *   All directional utilities use logical properties (ps-/pe-, ms-/me-) so
 *   the layout mirrors automatically when dir="rtl" is set on <html>.
 */

const { t } = useI18n()
const localePath = useLocalePath()
const { scrolled } = useScrolled()

const PHONE_RAW = '+97142348373'
const PHONE_DISPLAY = '+971 4 234 8373'

const navLinks = computed(() => [
  { key: 'home', to: localePath('/') },
  { key: 'about', to: localePath('/about') },
  { key: 'services', to: localePath('/services') },
  { key: 'projects', to: localePath('/projects') },
  { key: 'contact', to: localePath('/contact') },
])
</script>

<template>
  <header
    id="site-header"
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="[
      scrolled
        ? 'bg-stone border-b border-[--color-border] shadow-sm'
        : 'bg-transparent border-b border-transparent',
    ]"
  >
    <div class="container-pad mx-auto flex h-16 max-w-7xl items-center justify-between gap-6">

      <!-- ── Logo ───────────────────────────────────────────────────── -->
      <NuxtLink
        :to="localePath('/')"
        class="shrink-0"
        aria-label="Instyle Creation Technical Works — home"
      >
        <NuxtImg
          src="/images/logo-placeholder.png"
          alt="Instyle Creation Technical Works logo"
          height="40"
          width="160"
          class="h-10 w-auto object-contain"
          loading="eager"
        />
      </NuxtLink>

      <!-- ── Desktop navigation ─────────────────────────────────────── -->
      <nav
        class="hidden items-center gap-7 md:flex"
        aria-label="Main navigation"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.key"
          :to="link.to"
          class="text-sm font-medium text-ink transition-colors hover:text-[--color-primary]"
          active-class="text-[--color-primary]"
        >
          {{ t(`nav.${link.key}`) }}
        </NuxtLink>
      </nav>

      <!-- ── Right-side actions ─────────────────────────────────────── -->
      <div class="flex items-center gap-3">
        <!-- Phone pill — amber, click-to-call -->
        <a
          :href="`tel:${PHONE_RAW}`"
          class="hidden items-center gap-1.5 rounded-full bg-amber px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-amber-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber sm:inline-flex"
          :aria-label="`Call us: ${PHONE_DISPLAY}`"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 11 19.79 19.79 0 0 1 1 2.18 2 2 0 0 1 3 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"
            />
          </svg>
          <span>{{ PHONE_DISPLAY }}</span>
        </a>

        <!-- Locale switcher -->
        <UiLocaleSwitcher />

        <!-- Mobile menu — placeholder button (wire up in a later prompt) -->
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-sm p-2 text-ink transition-colors hover:text-[--color-primary] md:hidden"
          aria-label="Open navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>
