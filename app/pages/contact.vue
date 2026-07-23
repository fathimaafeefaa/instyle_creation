<script setup lang="ts">
/**
 * app/pages/contact.vue
 *
 * Contact page.
 * Displays contact details, embedded Google Map placeholder, and enquiry form with validation.
 */
import { ref } from 'vue'

const { t } = useI18n()

// Local SEO-focused metadata
useSeo({
  title: 'Contact Us — InStyle Creation Dubai',
  description: 'Get in touch with InStyle Creation in Dubai. Call us, WhatsApp us, or fill out our enquiry form for professional interior design & fit-out services.',
})

const PHONE_RAW = '+97142348373'
const PHONE_DISPLAY = '+971 4 234 8373'
const WHATSAPP_URL = 'https://wa.me/97142348373'
const EMAIL = 'info@instylecreation.ae'

// Form State
const form = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const errors = ref({
  name: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const submitSuccess = ref<string | null>(null)
const submitError = ref<string | null>(null)

const validate = () => {
  let valid = true
  errors.value = { name: '', email: '', message: '' }

  if (!form.value.name.trim()) {
    errors.value.name = 'Name is required.'
    valid = false
  }

  if (!form.value.email.trim()) {
    errors.value.email = 'Email is required.'
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.value.email = 'Please enter a valid email address.'
    valid = false
  }

  if (!form.value.message.trim()) {
    errors.value.message = 'Message is required.'
    valid = false
  }

  return valid
}

const handleSubmit = async () => {
  if (!validate()) return

  isSubmitting.value = true
  submitSuccess.value = null
  submitError.value = null

  try {
    const response = await $fetch<{ ok: boolean; message: string }>('/api/contact', {
      method: 'POST',
      body: form.value,
    })

    if (response.ok) {
      submitSuccess.value = response.message
      form.value = { name: '', email: '', phone: '', message: '' }
    }
  } catch (error: unknown) {
    const err = error as { statusMessage?: string; message?: string }
    submitError.value = err.statusMessage || err.message || 'An error occurred. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div>
    <!-- Hero Header -->
    <section class="bg-ink py-20 text-center text-white md:py-32">
      <div 
        v-motion="{
          initial: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 300 } }
        }"
        class="container-pad mx-auto max-w-4xl space-y-6"
      >
        <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl">
          {{ t('contact.title') }}
        </h1>
        <p class="text-lg text-white/80 md:text-xl">
          {{ t('contact.subtitle') }}
        </p>
      </div>
    </section>

    <!-- Content Grid -->
    <section class="section-py bg-surface-muted">
      <div class="container-pad mx-auto max-w-7xl">
        <div class="grid gap-12 lg:grid-cols-2 lg:items-start">
          
          <!-- Column 1: Details & Map -->
          <div class="space-y-8">
            <div class="space-y-6">
              <h2 class="font-heading text-2xl font-bold text-ink">
                {{ t('contact.info_title') }}
              </h2>
              
              <!-- Contact Cards -->
              <div class="grid gap-4 sm:grid-cols-2">
                <div class="rounded-xl border border-[--color-border] bg-white p-5 space-y-2">
                  <h3 class="text-xs font-semibold uppercase tracking-widest text-steel">
                    {{ t('contact.info_address') }}
                  </h3>
                  <p class="text-sm text-ink leading-relaxed">
                    Unit 504, Al Attar Business Center<br >
                    Sheikh Zayed Road, Al Barsha 1<br >
                    Dubai, UAE
                  </p>
                </div>
                
                <div class="rounded-xl border border-[--color-border] bg-white p-5 space-y-2">
                  <h3 class="text-xs font-semibold uppercase tracking-widest text-steel">
                    {{ t('contact.info_phone') }}
                  </h3>
                  <a :href="`tel:${PHONE_RAW}`" class="block text-sm text-ink font-medium hover:text-amber transition-colors">
                    {{ PHONE_DISPLAY }}
                  </a>
                </div>

                <div class="rounded-xl border border-[--color-border] bg-white p-5 space-y-2">
                  <h3 class="text-xs font-semibold uppercase tracking-widest text-steel">
                    {{ t('contact.info_whatsapp') }}
                  </h3>
                  <a :href="WHATSAPP_URL" target="_blank" rel="noopener noreferrer" class="block text-sm text-ink font-medium hover:text-amber transition-colors">
                    Chat on WhatsApp
                  </a>
                </div>

                <div class="rounded-xl border border-[--color-border] bg-white p-5 space-y-2">
                  <h3 class="text-xs font-semibold uppercase tracking-widest text-steel">
                    {{ t('contact.info_email') }}
                  </h3>
                  <a :href="`mailto:${EMAIL}`" class="block text-sm text-ink font-medium hover:text-amber transition-colors break-all">
                    {{ EMAIL }}
                  </a>
                </div>
              </div>
            </div>

            <!-- Map Iframe Container -->
            <div class="overflow-hidden rounded-xl border border-[--color-border] bg-white p-2">
              <!-- PLACEHOLDER MAP EMBED: Replace src below with the client's Google Maps embed URL when available -->
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.923491419794!2d55.20165037613589!3d25.104445835451996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bc06385cfcf%3A0xc3f58e1329a1b1a7!2sAl%20Attar%20Business%20Center!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                width="100%"
                height="300"
                style="border:0;"
                allowfullscreen="true"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="rounded-lg"
              />
            </div>
          </div>

          <!-- Column 2: Form -->
          <UiCard padding="lg" class="shadow-sm">
            <h2 class="mb-6 font-heading text-2xl font-bold text-ink">
              {{ t('contact.form_card_title') }}
            </h2>

            <form class="space-y-5" @submit.prevent="handleSubmit">
              <!-- Name -->
              <div>
                <label for="name" class="block text-xs font-semibold uppercase tracking-wider text-steel mb-2">
                  {{ t('contact.form_name') }} <span class="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  class="w-full rounded-md border border-[--color-border] bg-surface px-4 py-3 text-sm text-ink transition-all focus:border-amber focus:ring-1 focus:ring-amber focus:outline-hidden"
                  :class="{ 'border-red-500': errors.name }"
                >
                <span v-if="errors.name" class="mt-1 block text-xs text-red-500">{{ errors.name }}</span>
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-xs font-semibold uppercase tracking-wider text-steel mb-2">
                  {{ t('contact.form_email') }} <span class="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="w-full rounded-md border border-[--color-border] bg-surface px-4 py-3 text-sm text-ink transition-all focus:border-amber focus:ring-1 focus:ring-amber focus:outline-hidden"
                  :class="{ 'border-red-500': errors.email }"
                >
                <span v-if="errors.email" class="mt-1 block text-xs text-red-500">{{ errors.email }}</span>
              </div>

              <!-- Phone -->
              <div>
                <label for="phone" class="block text-xs font-semibold uppercase tracking-wider text-steel mb-2">
                  {{ t('contact.form_phone') }}
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  class="w-full rounded-md border border-[--color-border] bg-surface px-4 py-3 text-sm text-ink transition-all focus:border-amber focus:ring-1 focus:ring-amber focus:outline-hidden"
                >
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-xs font-semibold uppercase tracking-wider text-steel mb-2">
                  {{ t('contact.form_message') }} <span class="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  class="w-full rounded-md border border-[--color-border] bg-surface px-4 py-3 text-sm text-ink transition-all focus:border-amber focus:ring-1 focus:ring-amber focus:outline-hidden resize-none"
                  :class="{ 'border-red-500': errors.message }"
                />
                <span v-if="errors.message" class="mt-1 block text-xs text-red-500">{{ errors.message }}</span>
              </div>

              <!-- Submit button using Button.vue primitive -->
              <div class="pt-2">
                <UiButton
                  type="submit"
                  class="w-full"
                  :loading="isSubmitting"
                  variant="primary"
                >
                  {{ t('contact.form_submit') }}
                </UiButton>
              </div>

              <!-- Alerts -->
              <div v-if="submitSuccess" class="rounded-lg bg-green-50 p-4 border border-green-200">
                <p class="text-sm text-green-800 font-medium">
                  {{ submitSuccess }}
                </p>
              </div>

              <div v-if="submitError" class="rounded-lg bg-red-50 p-4 border border-red-200">
                <p class="text-sm text-red-800 font-medium">
                  {{ submitError }}
                </p>
              </div>
            </form>
          </UiCard>

        </div>
      </div>
    </section>
  </div>
</template>
