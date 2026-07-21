<script setup lang="ts">
/**
 * app/components/AppFooter.vue
 *
 * Site footer — business info, links, social icons, copyright.
 *
 * Social icon links use placeholder hrefs ("#") — swap to real URLs when ready.
 * Phone / WhatsApp / email are live links (tel: / wa.me / mailto:).
 *
 * Icons are inline SVG (Facebook, Instagram, LinkedIn) so there is no
 * runtime icon-library dependency. lucide-vue-next will be used for
 * other UI icons once the install is confirmed.
 *
 * RTL: all directional utilities use logical properties (ps-/pe-, ms-/me-)
 * so the footer mirrors correctly under dir="rtl".
 */

const { t } = useI18n()
const localePath = useLocalePath()

const currentYear = computed(() => new Date().getFullYear())

const copyright = computed(() =>
  t('footer.copyright').replace('{year}', String(currentYear.value)),
)

const navLinks = [
  { key: 'home', to: localePath('/') },
  { key: 'about', to: localePath('/about') },
  { key: 'services', to: localePath('/services') },
  { key: 'projects', to: localePath('/projects') },
  { key: 'contact', to: localePath('/contact') },
]

const PHONE_RAW = '+97142348373'
const PHONE_DISPLAY = '+971 4 234 8373'
const WHATSAPP_URL = 'https://wa.me/97142348373'
const EMAIL = 'info@instylecreation.ae'
</script>

<template>
  <footer
    id="site-footer"
    class="border-t border-[--color-border] bg-[--color-surface-muted]"
    aria-label="Site footer"
  >
    <div class="container-pad mx-auto max-w-7xl py-14 md:py-20">

      <!-- ── Top grid ────────────────────────────────────────────────── -->
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

        <!-- Column 1 — Brand + address -->
        <div class="flex flex-col gap-4">
          <!-- Logo / brand name -->
          <NuxtLink
            :to="localePath('/')"
            aria-label="Instyle Creation Technical Works — home"
          >
            <NuxtImg
              src="/images/logo-placeholder.png"
              alt="Instyle Creation Technical Works logo"
              height="36"
              width="144"
              class="h-9 w-auto object-contain"
            />
          </NuxtLink>

          <p class="text-sm leading-relaxed text-[--color-text-muted]">
            {{ t('footer.tagline') }}
          </p>

          <!-- Address -->
          <address class="not-italic text-sm leading-6 text-[--color-text-muted]">
            <span class="block">{{ t('footer.address_line1') }}</span>
            <span class="block">{{ t('footer.address_line2') }}</span>
            <span class="block font-medium text-ink">{{ t('footer.address_city') }}</span>
          </address>

          <!-- Other locations -->
          <p class="text-xs text-[--color-text-muted]">
            {{ t('footer.other_locations') }}
          </p>
        </div>

        <!-- Column 2 — Contact links -->
        <div class="flex flex-col gap-3">
          <p class="text-xs font-semibold uppercase tracking-widest text-steel">
            {{ t('footer.follow_us') }}
          </p>

          <!-- Phone -->
          <a
            :href="`tel:${PHONE_RAW}`"
            class="inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-[--color-primary]"
            :aria-label="`Call ${PHONE_DISPLAY}`"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 11 19.79 19.79 0 0 1 1 2.18 2 2 0 0 1 3 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
            {{ PHONE_DISPLAY }}
          </a>

          <!-- WhatsApp -->
          <a
            :href="WHATSAPP_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-[--color-primary]"
            aria-label="Chat on WhatsApp"
          >
            <!-- WhatsApp SVG icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            {{ t('footer.whatsapp') }}
          </a>

          <!-- Email -->
          <a
            :href="`mailto:${EMAIL}`"
            class="inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-[--color-primary]"
            :aria-label="`Email us at ${EMAIL}`"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            {{ EMAIL }}
          </a>

          <!-- Social icons -->
          <div class="mt-2 flex items-center gap-4">
            <a
              href="#"
              aria-label="Instyle Creation on Facebook"
              class="text-steel transition-colors hover:text-[--color-primary]"
            >
              <!-- Facebook -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instyle Creation on Instagram"
              class="text-steel transition-colors hover:text-[--color-primary]"
            >
              <!-- Instagram -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instyle Creation on LinkedIn"
              class="text-steel transition-colors hover:text-[--color-primary]"
            >
              <!-- LinkedIn -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Column 3 — Quick links -->
        <div class="flex flex-col gap-3">
          <p class="text-xs font-semibold uppercase tracking-widest text-steel">
            {{ t('footer.quick_links') }}
          </p>
          <nav aria-label="Footer navigation">
            <ul class="flex flex-col gap-2">
              <li v-for="link in navLinks" :key="link.key">
                <NuxtLink
                  :to="link.to"
                  class="text-sm text-ink transition-colors hover:text-[--color-primary]"
                  active-class="text-[--color-primary]"
                >
                  {{ t(`nav.${link.key}`) }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <!-- ── Bottom bar — divider + copyright ──────────────────────── -->
      <div class="mt-12 border-t border-[--color-border] pt-6">
        <p class="text-center text-xs text-[--color-text-muted]">
          {{ copyright }}
        </p>
      </div>

    </div>
  </footer>
</template>
