<script setup lang="ts">
/**
 * app/layouts/default.vue
 *
 * Default layout — header (logo + nav + locale switcher) + main slot + footer.
 * All content is intentionally left as structural stubs; real content
 * will be wired up via i18n keys and data files in subsequent steps.
 */
const localePath = useLocalePath()
</script>

<template>
  <div class="layout-root flex min-h-screen flex-col">
    <!-- ── Header ─────────────────────────────────────── -->
    <header class="layout-header sticky top-0 z-50 border-b border-[--color-border] bg-[--color-surface]/95 backdrop-blur-sm">
      <div class="container-pad mx-auto flex h-16 max-w-7xl items-center justify-between">
        <!-- Logo slot — override in specific pages if needed -->
        <slot name="logo">
          <NuxtLink :to="localePath('/')" class="flex items-center gap-2 font-semibold text-[--color-primary]">
            <span class="text-xl tracking-tight">InStyle Creation</span>
          </NuxtLink>
        </slot>

        <!-- Main navigation slot -->
        <nav class="hidden md:flex items-center gap-8" aria-label="Main navigation">
          <slot name="nav" />
        </nav>

        <!-- Actions slot (locale switcher, CTA button, mobile menu toggle) -->
        <div class="flex items-center gap-4">
          <slot name="actions" />
        </div>
      </div>
    </header>

    <!-- ── Main content ───────────────────────────────── -->
    <main class="layout-main flex-1">
      <slot />
    </main>

    <!-- ── Footer ─────────────────────────────────────── -->
    <footer class="layout-footer border-t border-[--color-border] bg-[--color-surface-muted]">
      <div class="container-pad mx-auto max-w-7xl section-py">
        <slot name="footer">
          <!-- Footer content stub — to be replaced with real components -->
          <p class="text-center text-sm text-[--color-text-muted]">
            © {{ new Date().getFullYear() }} InStyle Creation. All rights reserved.
          </p>
        </slot>
      </div>
    </footer>
  </div>
</template>
