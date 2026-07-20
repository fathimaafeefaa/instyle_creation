<script setup lang="ts">
/**
 * app/pages/index.vue
 *
 * ⚠️  TEMPORARY — visual verification scaffold only.
 * Remove all content inside <template> before the next development step.
 */
</script>

<template>
  <div class="min-h-screen bg-stone font-sans">

    <!-- ── 1. COLOUR SWATCHES ─────────────────────────────────── -->
    <section class="p-10 space-y-6">
      <h1 class="font-heading text-2xl text-ink mb-8">
        🎨 Design Token Verification
      </h1>
      <p class="font-sans text-sm text-steel mb-6">
        Each swatch uses the Tailwind utility name directly (bg-ink, bg-amber…).
        All should render as distinct colours.
      </p>

      <div class="flex flex-wrap gap-6">
        <!-- ink -->
        <div class="flex flex-col gap-2 items-center">
          <div class="size-20 rounded-xl bg-ink shadow-md" />
          <span class="font-sans text-xs font-medium text-steel">ink</span>
          <span class="font-sans text-[10px] text-steel">#16151A</span>
        </div>
        <!-- stone — add border so it's visible on white background -->
        <div class="flex flex-col gap-2 items-center">
          <div class="size-20 rounded-xl bg-stone border border-border shadow-md" />
          <span class="font-sans text-xs font-medium text-steel">stone</span>
          <span class="font-sans text-[10px] text-steel">#F6F4F0</span>
        </div>
        <!-- steel -->
        <div class="flex flex-col gap-2 items-center">
          <div class="size-20 rounded-xl bg-steel shadow-md" />
          <span class="font-sans text-xs font-medium text-steel">steel</span>
          <span class="font-sans text-[10px] text-steel">#9C9C94</span>
        </div>
        <!-- amber -->
        <div class="flex flex-col gap-2 items-center">
          <div class="size-20 rounded-xl bg-amber shadow-md" />
          <span class="font-sans text-xs font-medium text-steel">amber</span>
          <span class="font-sans text-[10px] text-steel">#E2812B</span>
        </div>
        <!-- amber-deep -->
        <div class="flex flex-col gap-2 items-center">
          <div class="size-20 rounded-xl bg-amber-deep shadow-md" />
          <span class="font-sans text-xs font-medium text-steel">amber-deep</span>
          <span class="font-sans text-[10px] text-steel">#A85A16</span>
        </div>
      </div>

      <!-- CSS var() cross-check row -->
      <div class="mt-8">
        <p class="font-sans text-xs text-steel uppercase tracking-wider mb-3">
          Cross-check — same colours via var(--color-*) CSS custom properties
        </p>
        <div class="flex flex-wrap gap-4">
          <div class="size-10 rounded-lg shadow" style="background: var(--color-ink);" title="var(--color-ink)" />
          <div class="size-10 rounded-lg shadow border border-border" style="background: var(--color-stone);" title="var(--color-stone)" />
          <div class="size-10 rounded-lg shadow" style="background: var(--color-steel);" title="var(--color-steel)" />
          <div class="size-10 rounded-lg shadow" style="background: var(--color-amber);" title="var(--color-amber)" />
          <div class="size-10 rounded-lg shadow" style="background: var(--color-amber-deep);" title="var(--color-amber-deep)" />
        </div>
      </div>
    </section>

    <hr class="border-border" />

    <!-- ── 2. TYPOGRAPHY ──────────────────────────────────────── -->
    <section class="p-10 space-y-6 bg-white">
      <h1 class="font-heading text-2xl text-ink mb-6">🔤 Typography Verification</h1>

      <!-- Fraunces -->
      <p class="font-heading text-5xl font-normal text-ink leading-tight">
        Fraunces 400 — Crafting Spaces
      </p>
      <p class="font-heading text-5xl font-medium text-ink leading-tight">
        Fraunces 500 — Crafting Spaces
      </p>
      <p class="font-heading text-5xl font-normal italic text-ink leading-tight">
        Fraunces 400 Italic — Crafting Spaces
      </p>
      <p class="font-heading text-5xl font-medium italic text-ink leading-tight">
        Fraunces 500 Italic — Crafting Spaces
      </p>

      <!-- Inter -->
      <p class="font-sans text-base font-normal text-ink mt-6">
        Inter 400 — Interior design & fit-out solutions across the UAE.
      </p>
      <p class="font-sans text-base font-medium text-ink">
        Inter 500 — Interior design & fit-out solutions across the UAE.
      </p>

      <!-- Eyebrow style -->
      <p class="font-sans text-xs font-medium uppercase tracking-[0.18em] text-steel mt-4">
        STEEL EYEBROW — Our Services
      </p>
    </section>

    <hr class="border-border" />

    <!-- ── 3. SECTION HEADING ─────────────────────────────────── -->
    <section class="p-10 space-y-16 bg-stone">
      <h1 class="font-heading text-2xl text-ink mb-4">📐 SectionHeading Component</h1>

      <div class="max-w-2xl">
        <p class="font-sans text-[10px] text-steel uppercase tracking-widest mb-4">align="start" (default)</p>
        <UiSectionHeading
          eyebrow="Our Services"
          title="What We Create"
          subtitle="Bespoke interior design and fit-out solutions tailored to your vision."
        />
      </div>

      <div>
        <p class="font-sans text-[10px] text-steel uppercase tracking-widest mb-4">align="center"</p>
        <UiSectionHeading
          eyebrow="Our Work"
          title="Spaces That Inspire"
          subtitle="From residential villas to five-star hospitality."
          align="center"
        />
      </div>

      <div class="max-w-2xl">
        <p class="font-sans text-[10px] text-steel uppercase tracking-widest mb-4">title only, h3</p>
        <UiSectionHeading title="Projects" :level="3" />
      </div>

      <div class="rounded-xl bg-ink p-10">
        <p class="font-sans text-[10px] text-white/40 uppercase tracking-widest mb-6">dark=true</p>
        <UiSectionHeading
          eyebrow="Trusted By"
          title="Clients Who Rely on Us"
          subtitle="From residential villas to five-star hospitality projects."
          dark
        />
      </div>
    </section>

    <hr class="border-border" />

    <!-- ── 4. BUTTON ──────────────────────────────────────────── -->
    <section class="p-10 space-y-10 bg-white">
      <h1 class="font-heading text-2xl text-ink mb-4">🔘 Button Component</h1>

      <!-- Primary -->
      <div class="space-y-3">
        <p class="font-sans text-[10px] text-steel uppercase tracking-widest">variant="primary"</p>
        <div class="flex flex-wrap items-center gap-4">
          <UiButton size="sm">Primary sm</UiButton>
          <UiButton size="md">Primary md</UiButton>
          <UiButton size="md" :loading="true">Loading…</UiButton>
          <UiButton size="md" :disabled="true">Disabled</UiButton>
        </div>
      </div>

      <!-- Ghost -->
      <div class="space-y-3">
        <p class="font-sans text-[10px] text-steel uppercase tracking-widest">variant="ghost"</p>
        <div class="flex flex-wrap items-center gap-4">
          <UiButton variant="ghost" size="sm">Ghost sm</UiButton>
          <UiButton variant="ghost" size="md">Ghost md</UiButton>
          <UiButton variant="ghost" size="md" :loading="true">Loading…</UiButton>
          <UiButton variant="ghost" size="md" :disabled="true">Disabled</UiButton>
        </div>
      </div>

      <!-- On dark bg -->
      <div class="rounded-xl bg-ink p-8 space-y-4">
        <p class="font-sans text-[10px] text-white/40 uppercase tracking-widest">On dark background</p>
        <div class="flex flex-wrap items-center gap-4">
          <UiButton variant="primary" size="md">Primary on Dark</UiButton>
          <UiButton variant="ghost" size="md">Ghost on Dark</UiButton>
        </div>
      </div>

      <!-- Polymorphic -->
      <div class="space-y-3">
        <p class="font-sans text-[10px] text-steel uppercase tracking-widest">as="a" (anchor)</p>
        <div class="flex flex-wrap items-center gap-4">
          <UiButton as="a" href="#" size="md">Anchor Primary</UiButton>
          <UiButton as="a" href="#" variant="ghost" size="md">Anchor Ghost</UiButton>
        </div>
      </div>
    </section>

  </div>
</template>
