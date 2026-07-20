<template>
  <section 
    id="home"
    class="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden pt-24"
  >
    <!-- Background Image with Dark Overlay -->
    <div class="absolute inset-0 z-0">
      <img 
        :src="'/images/showroom-hero.png'" 
        alt="Instyle Creation Dubai Showroom"
        class="w-full h-full object-cover object-center opacity-30 transform scale-105"
        ref="bgImage"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-20 text-center text-marble">
      <div ref="heroContent" class="space-y-8 opacity-0">
        <!-- Eyebrow -->
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brass/30 bg-brass/5 text-brass">
          <span class="size-2 rounded-full bg-brass animate-pulse"></span>
          <span class="font-body text-xs font-semibold uppercase tracking-widest">Dubai, UAE — Est. 2004</span>
        </div>

        <!-- Headline -->
        <h1 class="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight max-w-4xl mx-auto">
          Interiors that feel like <span class="text-brass italic">home</span>, built to last.
        </h1>

        <!-- Subheading -->
        <p class="font-body text-base sm:text-lg md:text-xl text-marble/85 max-w-2xl mx-auto leading-relaxed">
          Premium turnkey interior fit-outs and custom soft furnishings across the UAE. Backed by a {{ companyData.yearsLegacy }} legacy of high-precision joinery, decoration, and MEP technical works.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button 
            as="a" 
            :href="companyData.whatsapp.link" 
            target="_blank" 
            rel="noopener"
            class="w-full sm:w-auto px-8 py-6 text-sm uppercase tracking-wider font-semibold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-3 shadow-lg shadow-emerald-950/20"
          >
            <!-- Whatsapp Icon -->
            <svg class="size-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Discuss Fit-out Projects
          </Button>
          <Button 
            as="a" 
            :href="'tel:' + companyData.phone.tel" 
            variant="outlineLight" 
            class="w-full sm:w-auto px-8 py-6 text-sm uppercase tracking-wider font-semibold"
          >
            Call: {{ companyData.phone.display }}
          </Button>
        </div>
      </div>
    </div>

    <!-- Vertical Slat Divider Decoration -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
      <div class="slat-divider"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { Button } from '@/components/ui/button'
import { companyData } from '@/data/company'

const heroContent = ref<HTMLElement | null>(null)
const bgImage = ref<HTMLElement | null>(null)

onMounted(() => {
  if (import.meta.client) {
    // Parallax background scale
    gsap.to(bgImage.value, {
      scale: 1,
      opacity: 0.45,
      duration: 2.5,
      ease: 'power2.out'
    })

    // Content fade/slide up
    gsap.to(heroContent.value, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      delay: 0.3,
      ease: 'power3.out'
    })
  }
})
</script>
