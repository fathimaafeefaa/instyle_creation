<template>
  <div class="min-h-screen bg-marble text-ink flex flex-col">
    <!-- Header -->
    <SiteHeader />

    <!-- Hero -->
    <HeroSection />

    <!-- Stats -->
    <StatsBand />

    <!-- About Section -->
    <section id="about" class="py-24 px-6 md:px-12 bg-marble">
      <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7 space-y-6 reveal">
          <div class="inline-flex items-center gap-2 text-brass">
            <span class="font-body text-xs font-semibold uppercase tracking-widest">About Our Legacy</span>
          </div>
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-tight">
            Delivering bespoke interiors, backed by <span class="italic text-brass">{{ companyData.yearsLegacy }}</span> of craftsmanship.
          </h2>
          <p class="font-body text-base text-ink/80 leading-relaxed">
            Instyle Creation Technical Works LLC is a premier turnkey fit-out and soft furnishing provider headquartered in Dubai, UAE. We specialize in transforming spaces through highly customized carpets, curtains, blinds, and wallpapers, combined with expert technical execution like false ceilings, partitions, and structural works.
          </p>
          <p class="font-body text-sm text-ink/70 leading-relaxed">
            Our reputation is built on delivering high-precision carpentry, flooring, MEP, and painting services designed for residential villas, luxury commercial offices, and retail venues across the GCC region.
          </p>
          <div class="pt-2">
            <Button as="a" href="#contact" variant="default" class="text-xs uppercase tracking-wider font-semibold">
              Partner With Us
            </Button>
          </div>
        </div>
        <div class="lg:col-span-5 reveal relative">
          <!-- Slat decor in background -->
          <div class="absolute -top-12 -left-6 opacity-30 select-none">
            <div class="slat-divider h-32"></div>
          </div>
          <div class="bg-navy text-marble p-8 sm:p-10 rounded-xl border border-marble/10 shadow-2xl relative space-y-6">
            <h3 class="font-display text-2xl font-semibold text-brass">The UAE Quality Benchmark</h3>
            <ul class="space-y-4 font-body text-sm text-marble/80">
              <li class="flex gap-3">
                <svg class="size-5 text-brass shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Fully certified by Dubai Municipality & Civil Defense standards</span>
              </li>
              <li class="flex gap-3">
                <svg class="size-5 text-brass shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Bespoke custom soft-furnishings fabricated in our local workshops</span>
              </li>
              <li class="flex gap-3">
                <svg class="size-5 text-brass shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>End-to-end technical works from design, MEP, through to decoration handover</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-24 px-6 md:px-12 bg-marble-dark/15 border-t border-border/20">
      <div class="max-w-7xl mx-auto space-y-16">
        <div class="text-center max-w-2xl mx-auto space-y-4 reveal">
          <span class="font-body text-xs font-semibold uppercase tracking-widest text-brass">Our Capabilities</span>
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy">Specialized Turnkey Services</h2>
          <p class="font-body text-sm text-ink/75">
            Discover our comprehensive suite of furnishing solutions and technical fit-out execution designed to meet the rigorous demands of UAE residences and businesses.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 reveal">
          <ServiceCard 
            v-for="service in companyData.services" 
            :key="service.slug" 
            :service="service"
          />
        </div>
      </div>
    </section>

    <!-- Portfolio & Clients Section -->
    <section id="portfolio" class="py-24 px-6 md:px-12 bg-marble">
      <div class="max-w-7xl mx-auto space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-4 reveal">
          <span class="font-body text-xs font-semibold uppercase tracking-widest text-brass">Bespoke Project Execution</span>
          <h2 class="font-display text-3xl sm:text-4xl font-bold text-navy">
            Providing Turnkey Solutions for <span class="text-brass italic">{{ companyData.stats.clients }} Clients</span> Across the GCC
          </h2>
          <p class="font-body text-sm text-ink/70">
            From premier luxury hospitality resorts and cultural landmarks like BAPS Hindu Mandir to commercial spaces for Careem and Carrefour, our engineering and decoration work sets the benchmark.
          </p>
        </div>

        <!-- Infinite Marquee -->
        <div class="reveal">
          <ClientMarquee />
        </div>
      </div>
    </section>

    <!-- Locations Section (Dubai-First) -->
    <section id="projects" class="py-24 px-6 md:px-12 bg-marble-dark/10 border-t border-b border-border/10">
      <div class="max-w-6xl mx-auto space-y-16">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-6 space-y-6 reveal">
            <span class="font-body text-xs font-semibold uppercase tracking-widest text-brass">Regional Presence</span>
            <h2 class="font-display text-3xl sm:text-4xl font-bold text-navy">Dubai HQ & Showroom Network</h2>
            <p class="font-body text-sm text-ink/75">
              While our operational headquarters, Jebel Ali workshop, and engineering resources reside in Dubai, UAE to service the entire country, we support showrooms and consultancy studios abroad.
            </p>

            <div class="space-y-6 pt-4">
              <div 
                v-for="loc in companyData.locations" 
                :key="loc.name" 
                class="border-l-2 border-brass/30 pl-4 space-y-1.5"
              >
                <h4 class="font-display font-bold text-navy text-base">{{ loc.name }}</h4>
                <p class="font-body text-xs text-brass uppercase font-semibold tracking-wider">{{ loc.role }}</p>
                <p class="font-body text-xs text-ink/70 leading-relaxed">{{ loc.address }}</p>
              </div>
            </div>
          </div>
          
          <div class="lg:col-span-6 reveal h-96 rounded-xl overflow-hidden shadow-2xl border border-border/30">
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
    </section>

    <!-- Contact & Enquiry Section -->
    <section id="contact" class="py-24 px-6 md:px-12 bg-marble">
      <div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6 reveal">
          <span class="font-body text-xs font-semibold uppercase tracking-widest text-brass">Get In Touch</span>
          <h2 class="font-display text-3xl sm:text-4xl font-bold text-navy">Ready to transform your space?</h2>
          <p class="font-body text-sm text-ink/75 leading-relaxed">
            Contact our interior fit-out project office in Dubai for consultations, estimates, or design advisory. Let us bring high-precision craftsmanship to your villa, corporate office, or commercial retail outlet.
          </p>

          <div class="space-y-4 pt-4 font-body text-sm">
            <div class="flex items-center gap-3">
              <div class="size-8 rounded-full bg-navy/5 flex items-center justify-center text-brass">
                <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <a :href="'tel:' + companyData.phone.tel" class="hover:text-brass transition-colors font-semibold text-navy">
                {{ companyData.phone.display }}
              </a>
            </div>
            
            <div class="flex items-center gap-3">
              <div class="size-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                <svg class="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <a :href="companyData.whatsapp.link" target="_blank" rel="noopener" class="hover:text-brass transition-colors font-semibold text-emerald-600">
                {{ companyData.whatsapp.display }} (WhatsApp)
              </a>
            </div>
            
            <div class="flex items-center gap-3">
              <div class="size-8 rounded-full bg-navy/5 flex items-center justify-center text-brass">
                <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <a :href="'mailto:' + companyData.email" class="hover:text-brass transition-colors font-semibold text-navy">
                {{ companyData.email }}
              </a>
            </div>
          </div>
        </div>

        <div class="reveal">
          <EnquiryForm />
        </div>
      </div>
    </section>

    <!-- Footer -->
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { companyData } from '@/data/company'
import { useReveal } from '@/composables/useReveal'
import SiteHeader from '@/components/SiteHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import StatsBand from '@/components/StatsBand.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import ClientMarquee from '@/components/ClientMarquee.vue'
import EnquiryForm from '@/components/EnquiryForm.vue'
import SiteFooter from '@/components/SiteFooter.vue'

const { observeAll } = useReveal()

onMounted(() => {
  // Trigger IntersectionObserver scroll animations
  observeAll()
})
</script>
