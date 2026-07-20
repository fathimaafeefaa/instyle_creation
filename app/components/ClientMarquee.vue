<template>
  <div class="w-full overflow-hidden bg-marble-dark/30 py-8 relative">
    <!-- Gradient Overlays to fade edges -->
    <div class="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-marble/100 to-transparent z-10 pointer-events-none"></div>
    <div class="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-marble/100 to-transparent z-10 pointer-events-none"></div>

    <div class="flex">
      <!-- Double the list to support seamless infinite loop -->
      <div class="animate-marquee-slow flex items-center gap-12 whitespace-nowrap">
        <span 
          v-for="(client, idx) in doubleClients" 
          :key="idx"
          class="font-display text-lg sm:text-xl font-semibold tracking-wider text-navy/40 dark:text-marble/30 select-none hover:text-brass transition-colors duration-200"
        >
          {{ client }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { companyData } from '@/data/company'

const doubleClients = computed(() => {
  // Duplicate list to guarantee seamless transition
  return [...companyData.clients, ...companyData.clients]
})
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee-slow {
  animation: marquee 35s linear infinite;
}

.animate-marquee-slow:hover {
  animation-play-state: paused;
}
</style>
