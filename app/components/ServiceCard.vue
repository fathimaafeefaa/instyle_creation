<template>
  <Card class="bg-marble border-border/30 hover:border-brass/45 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
    <CardHeader class="space-y-3">
      <!-- Icon Stub / Decoration -->
      <div class="size-10 rounded-md bg-brass/10 text-brass flex items-center justify-center font-display font-semibold text-lg group-hover:bg-brass group-hover:text-marble transition-colors duration-300">
        {{ service.title.charAt(0) }}
      </div>
      <CardTitle class="font-display text-xl text-navy group-hover:text-brass transition-colors duration-200">
        {{ service.title }}
      </CardTitle>
    </CardHeader>
    
    <CardContent class="flex-grow">
      <p class="font-body text-sm text-ink/75 leading-relaxed">
        {{ service.summary }}
      </p>
    </CardContent>
    
    <CardFooter class="pt-2">
      <!-- NuxtLink will be used when we have details pages, for now a styled anchor link -->
      <a 
        :href="'/services/' + service.slug" 
        class="font-body text-xs font-semibold uppercase tracking-widest text-brass group-hover:text-navy flex items-center gap-1 transition-colors duration-200"
      >
        Explore Service
        <svg class="size-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card'

defineProps<{
  service: {
    slug: string
    title: string
    summary: string
  }
}>()
</script>
