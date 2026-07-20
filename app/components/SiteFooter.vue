<template>
  <footer class="w-full bg-navy text-marble/85 border-t border-marble/10 pt-16 pb-8 px-6 md:px-12">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
      
      <!-- Brand & Blurb -->
      <div class="space-y-6">
        <a href="/" class="flex flex-col">
          <span class="font-display text-2xl font-black tracking-wider text-brass uppercase leading-none">
            {{ companyData.displayName }}
          </span>
          <span class="font-body text-[9px] tracking-[0.25em] text-marble/60 uppercase mt-0.5">
            Technical Works LLC
          </span>
        </a>
        <p class="font-body text-sm leading-relaxed text-marble/70">
          Delivering premium turnkey interior fit-out, custom soft furnishings, and high-precision technical works across the United Arab Emirates for over two decades.
        </p>
        <!-- Social Icons -->
        <div class="flex gap-4">
          <a :href="companyData.socials.facebook" target="_blank" rel="noopener" class="text-marble/60 hover:text-brass transition-colors">
            <svg class="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.885.352-1 1-1h2V2h-3c-2.5 0-3 1.5-3 3.5V8z"/></svg>
          </a>
          <a :href="companyData.socials.instagram" target="_blank" rel="noopener" class="text-marble/60 hover:text-brass transition-colors">
            <svg class="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a :href="companyData.socials.linkedin" target="_blank" rel="noopener" class="text-marble/60 hover:text-brass transition-colors">
            <svg class="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="space-y-6">
        <h4 class="font-display text-sm font-semibold tracking-wider text-brass uppercase">Quick Links</h4>
        <ul class="font-body text-sm space-y-3">
          <li><a href="#home" class="hover:text-brass transition-colors">Home</a></li>
          <li><a href="#about" class="hover:text-brass transition-colors">About Us</a></li>
          <li><a href="#services" class="hover:text-brass transition-colors">Our Services</a></li>
          <li><a href="#projects" class="hover:text-brass transition-colors">Projects</a></li>
          <li><a href="#portfolio" class="hover:text-brass transition-colors">Portfolio</a></li>
          <li><a href="#contact" class="hover:text-brass transition-colors">Contact Us</a></li>
        </ul>
      </div>

      <!-- Contact Info (Dubai Primary) -->
      <div class="space-y-6 lg:col-span-2">
        <h4 class="font-display text-sm font-semibold tracking-wider text-brass uppercase">Primary UAE HQ & Showroom</h4>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="space-y-3 font-body text-sm">
            <p class="font-bold text-marble">Dubai, United Arab Emirates</p>
            <p class="text-marble/70 leading-relaxed">{{ dubaiLocation.address }}</p>
            <div class="pt-2 space-y-1">
              <p class="flex items-center gap-2">
                <span class="text-brass">T:</span>
                <a :href="'tel:' + companyData.phone.tel" class="hover:text-brass transition-colors">{{ companyData.phone.display }}</a>
              </p>
              <p class="flex items-center gap-2">
                <span class="text-brass">W:</span>
                <a :href="companyData.whatsapp.link" target="_blank" rel="noopener" class="hover:text-brass transition-colors">{{ companyData.whatsapp.display }}</a>
              </p>
              <p class="flex items-center gap-2">
                <span class="text-brass">E:</span>
                <a :href="'mailto:' + companyData.email" class="hover:text-brass transition-colors">{{ companyData.email }}</a>
              </p>
            </div>
            
            <!-- Other locations secondary list -->
            <div class="pt-4 border-t border-marble/10">
              <p class="font-bold text-brass text-xs uppercase tracking-wider mb-2">Other Locations</p>
              <ul class="text-xs space-y-2 text-marble/60">
                <li v-for="loc in otherLocations" :key="loc.name">
                  <span class="font-semibold text-marble/85">{{ loc.name }}</span> — {{ loc.address }}
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Embedded Map -->
          <div class="w-full h-48 rounded-md overflow-hidden border border-marble/10">
            <iframe 
              :src="companyData.googleMapsEmbedUrl" 
              width="100%" 
              height="100%" 
              style="border:0;" 
              allowfullscreen="true" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      
    </div>

    <!-- Copyright -->
    <div class="max-w-7xl mx-auto border-t border-marble/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
      <p class="font-body text-xs text-marble/50">
        &copy; {{ new Date().getFullYear() }} {{ companyData.legalName }}. All rights reserved.
      </p>
      <p class="font-body text-xs text-marble/40">
        Dubai-first turnkey solutions and soft furnishing consultancy.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { companyData } from '@/data/company'

const dubaiLocation = computed(() => {
  return companyData.locations.find(loc => loc.name.startsWith('Dubai')) || companyData.locations[0]
})

const otherLocations = computed(() => {
  return companyData.locations.filter(loc => !loc.name.startsWith('Dubai'))
})
</script>
