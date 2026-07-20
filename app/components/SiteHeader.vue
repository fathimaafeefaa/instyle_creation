<template>
  <header 
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b',
      isScrolled 
        ? 'bg-navy/95 backdrop-blur-md py-4 border-marble/10 shadow-lg' 
        : 'bg-transparent py-6 border-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
      <!-- Logo/Wordmark -->
      <a href="/" class="flex flex-col">
        <span class="font-display text-xl md:text-2xl font-black tracking-wider text-brass uppercase leading-none">
          {{ companyData.displayName }}
        </span>
        <span class="font-body text-[9px] tracking-[0.25em] text-marble/60 uppercase mt-0.5">
          Technical Works LLC
        </span>
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center gap-8 font-body text-xs uppercase tracking-widest text-marble/80">
        <a href="#home" class="hover:text-brass transition-colors py-2 font-medium">Home</a>
        <a href="#about" class="hover:text-brass transition-colors py-2 font-medium">About</a>
        <a href="#services" class="hover:text-brass transition-colors py-2 font-medium">Services</a>
        <a href="#projects" class="hover:text-brass transition-colors py-2 font-medium">Projects</a>
        <a href="#portfolio" class="hover:text-brass transition-colors py-2 font-medium">Portfolio</a>
        <a href="#contact" class="hover:text-brass transition-colors py-2 font-medium">Contact</a>
      </nav>

      <!-- CTA Buttons (Desktop) -->
      <div class="hidden lg:flex items-center gap-4">
        <!-- WhatsApp -->
        <a 
          :href="companyData.whatsapp.link" 
          target="_blank" 
          rel="noopener"
          class="flex items-center justify-center p-2 rounded-full bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-400 hover:text-emerald-300 transition-colors border border-emerald-500/20"
          title="Chat on WhatsApp"
        >
          <!-- WhatsApp Icon -->
          <svg class="size-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
        
        <!-- Call -->
        <Button as="a" :href="'tel:' + companyData.phone.tel" variant="outlineLight" class="text-xs h-9 tracking-wider">
          {{ companyData.phone.display }}
        </Button>
      </div>

      <!-- Mobile navigation menu trigger -->
      <div class="lg:hidden">
        <Sheet>
          <SheetTrigger as-child>
            <Button variant="ghost" size="icon" class="text-marble hover:bg-marble/10">
              <span class="sr-only">Open menu</span>
              <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" class="bg-navy border-l border-marble/10 text-marble p-6 flex flex-col justify-between w-[300px]">
            <div class="flex flex-col gap-8 mt-12">
              <div class="border-b border-marble/10 pb-4">
                <span class="font-display text-xl font-bold tracking-wider text-brass uppercase leading-none">
                  {{ companyData.displayName }}
                </span>
                <p class="font-body text-[8px] tracking-[0.25em] text-marble/60 uppercase mt-1">
                  Technical Works LLC
                </p>
              </div>
              <nav class="flex flex-col gap-6 font-body text-sm uppercase tracking-widest text-marble/80">
                <SheetClose as-child>
                  <a href="#home" class="hover:text-brass transition-colors py-2 font-medium">Home</a>
                </SheetClose>
                <SheetClose as-child>
                  <a href="#about" class="hover:text-brass transition-colors py-2 font-medium">About</a>
                </SheetClose>
                <SheetClose as-child>
                  <a href="#services" class="hover:text-brass transition-colors py-2 font-medium">Services</a>
                </SheetClose>
                <SheetClose as-child>
                  <a href="#projects" class="hover:text-brass transition-colors py-2 font-medium">Projects</a>
                </SheetClose>
                <SheetClose as-child>
                  <a href="#portfolio" class="hover:text-brass transition-colors py-2 font-medium">Portfolio</a>
                </SheetClose>
                <SheetClose as-child>
                  <a href="#contact" class="hover:text-brass transition-colors py-2 font-medium">Contact</a>
                </SheetClose>
              </nav>
            </div>
            
            <div class="flex flex-col gap-4 border-t border-marble/10 pt-6">
              <a 
                :href="companyData.whatsapp.link" 
                target="_blank" 
                rel="noopener"
                class="flex items-center justify-center gap-3 w-full py-3 rounded-md bg-emerald-600 text-white font-body text-xs font-semibold uppercase tracking-wider hover:bg-emerald-500 transition-colors"
              >
                <svg class="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
              <a 
                :href="'tel:' + companyData.phone.tel" 
                class="flex items-center justify-center gap-3 w-full py-3 rounded-md border border-marble/25 text-marble font-body text-xs font-semibold uppercase tracking-wider hover:bg-marble/10 transition-colors text-center"
              >
                Call: {{ companyData.phone.display }}
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Button } from '@/components/ui/button'
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet'
import { companyData } from '@/data/company'

const isScrolled = ref(false)

const handleScroll = () => {
  if (window.scrollY > 50) {
    isScrolled.value = true
  } else {
    isScrolled.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Run once initially
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
