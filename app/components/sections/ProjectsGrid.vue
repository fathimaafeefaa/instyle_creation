<script setup lang="ts">
/**
 * app/components/sections/ProjectsGrid.vue
 *
 * Clean portfolio gallery of projects linking to /contact.
 */
import { projects } from '~/data/projects'

const localePath = useLocalePath()
</script>

<template>
  <section class="section-py bg-surface">
    <div class="container-pad mx-auto max-w-7xl space-y-12">
      <!-- Clean Grid Gallery -->
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="project in projects"
          :key="project.id"
          :to="localePath('/contact')"
          class="group block overflow-hidden rounded-xl border border-[--color-border] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[--color-brand-200]"
        >
          <!-- Image Container -->
          <div class="relative aspect-4/3 w-full overflow-hidden bg-stone">
            <img
              :src="project.image"
              :alt="project.title"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onerror="this.src='https://placehold.co/600x450/F6F4F0/9C9C94?text=Project+TBD'"
            >
            <!-- Category Badge overlay -->
            <span class="absolute top-4 left-4 rounded-sm bg-ink/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-xs">
              {{ project.category }}
            </span>
          </div>

          <!-- Project Metadata -->
          <div class="p-6">
            <h3 class="mb-2 text-lg font-bold text-ink font-heading group-hover:text-amber transition-colors">
              {{ project.title }}
            </h3>
            <p class="text-sm text-steel leading-relaxed">
              {{ project.description }}
            </p>
            <div class="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-amber">
              Enquire Project
              <svg class="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
