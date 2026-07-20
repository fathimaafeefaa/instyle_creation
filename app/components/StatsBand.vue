<template>
  <section class="bg-navy-dark border-y border-marble/5 py-12 px-6 md:px-12 relative z-10 text-marble">
    <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
      <!-- Products Stat -->
      <div class="flex flex-col items-center justify-center text-center space-y-1">
        <span 
          ref="productsEl" 
          class="text-4xl md:text-5xl font-display font-bold text-brass"
        >0</span>
        <span class="font-body text-xs md:text-sm uppercase tracking-widest text-marble/60">Products Offered</span>
      </div>

      <!-- Projects Stat -->
      <div class="flex flex-col items-center justify-center text-center space-y-1">
        <span 
          ref="projectsEl" 
          class="text-4xl md:text-5xl font-display font-bold text-brass"
        >0</span>
        <span class="font-body text-xs md:text-sm uppercase tracking-widest text-marble/60">Projects Completed</span>
      </div>

      <!-- Employees Stat -->
      <div class="flex flex-col items-center justify-center text-center space-y-1">
        <span 
          ref="employeesEl" 
          class="text-4xl md:text-5xl font-display font-bold text-brass"
        >0</span>
        <span class="font-body text-xs md:text-sm uppercase tracking-widest text-marble/60">Expert Craftspeople</span>
      </div>

      <!-- Followers Stat -->
      <div class="flex flex-col items-center justify-center text-center space-y-1">
        <span 
          ref="followersEl" 
          class="text-4xl md:text-5xl font-display font-bold text-brass"
        >0</span>
        <span class="font-body text-xs md:text-sm uppercase tracking-widest text-marble/60">Happy Followers</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCountUp } from '@/composables/useCountUp'

const productsEl = ref<HTMLElement | null>(null)
const projectsEl = ref<HTMLElement | null>(null)
const employeesEl = ref<HTMLElement | null>(null)
const followersEl = ref<HTMLElement | null>(null)

const { initCountUp } = useCountUp()

onMounted(() => {
  if (productsEl.value) {
    initCountUp(productsEl.value, { end: 20, duration: 1.5, suffix: '+' })
  }
  if (projectsEl.value) {
    initCountUp(projectsEl.value, { end: 50, duration: 1.5, suffix: '+' })
  }
  if (employeesEl.value) {
    initCountUp(employeesEl.value, { end: 40, duration: 1.5, suffix: '+' })
  }
  if (followersEl.value) {
    initCountUp(followersEl.value, { end: 100, duration: 1.5, suffix: '+' })
  }
})
</script>
