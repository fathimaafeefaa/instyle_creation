<script setup lang="ts">
/**
 * app/layouts/default.vue
 *
 * Default layout — sticky header + main content slot + footer.
 *
 * RTL audit:
 *   — container-pad uses px-* which is NOT logical. Fixed via the utility
 *     class definition in main.css using ps-/pe-.
 *   — Header inner div uses justify-between (direction-agnostic).
 *   — gap-* values are direction-agnostic.
 *   — No directional margins or paddings are applied inline here.
 *   — LocaleSwitcher renders in the actions slot and handles its own layout.
 *
 * Named slots:
 *   logo     — brand wordmark / link (default provided)
 *   nav      — primary navigation links
 *   actions  — locale switcher + optional CTA (default: LocaleSwitcher)
 *   footer   — footer content (default stub provided)
 */
const localePath = useLocalePath()
</script>

<template>
  <div class="layout-root flex min-h-screen flex-col">

    <!-- ── Header ──────────────────────────────────────────────── -->
    <header class="layout-header sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-sm">
      <div class="container-pad mx-auto flex h-16 max-w-7xl items-center justify-between">

        <!-- Logo: NuxtLink to localised home path -->
        <slot name="logo">
          <NuxtLink
            :to="localePath('/')"
            class="flex items-center gap-2 font-heading text-xl font-[500] text-ink hover:text-amber transition-colors duration-[--duration-fast]"
            :aria-label="'InStyle Creation — ' + $t('nav.home')"
          >
            InStyle Creation
          </NuxtLink>
        </slot>

        <!-- Main nav — hidden on mobile (mobile menu TBD) -->
        <nav
          class="hidden md:flex items-center gap-8"
          :aria-label="$t('nav.open_menu')"
        >
          <slot name="nav" />
        </nav>

        <!-- Actions: locale switcher + optional CTA -->
        <div class="flex items-center gap-4">
          <slot name="actions">
            <!-- Default: just the locale switcher -->
            <UiLocaleSwitcher />
          </slot>
        </div>

      </div>
    </header>

    <!-- ── Main content ───────────────────────────────────────── -->
    <main class="layout-main flex-1">
      <slot />
    </main>

    <!-- ── Footer ─────────────────────────────────────────────── -->
    <footer class="layout-footer border-t border-border bg-surface-muted">
      <div class="container-pad mx-auto max-w-7xl py-8">
        <slot name="footer">
          <!-- Stub — replaced with real Footer component in a later step -->
          <p class="text-center text-sm text-steel">
            © {{ new Date().getFullYear() }} InStyle Creation.
            {{ $t('footer.rights') }}
          </p>
        </slot>
      </div>
    </footer>

  </div>
</template>
