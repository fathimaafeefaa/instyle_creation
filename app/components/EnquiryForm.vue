<template>
  <div class="bg-marble p-6 md:p-10 rounded-xl border border-border/30 shadow-lg max-w-lg mx-auto">
    <div class="mb-6">
      <h3 class="font-display text-2xl font-bold text-navy mb-2">Request a Consultation</h3>
      <p class="font-body text-sm text-ink/70">
        Discuss your interior fit-out or furnishing requirements with our Dubai design team.
      </p>
    </div>

    <!-- Simulated Success State -->
    <div 
      v-if="isSubmitted" 
      class="bg-emerald-600/10 border border-emerald-500/20 text-emerald-800 p-6 rounded-lg text-center space-y-3"
    >
      <svg class="size-10 text-emerald-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h4 class="font-display font-semibold text-lg">Thank You!</h4>
      <p class="font-body text-sm">
        Your enquiry has been received. One of our engineers will contact you within 24 hours.
      </p>
      <Button variant="outline" @click="resetForm" class="mt-2 text-xs">Send another message</Button>
    </div>

    <!-- Enquiry Form -->
    <form v-else @submit.prevent="handleSubmit" class="space-y-5">
      <!-- Full Name -->
      <div class="space-y-1.5">
        <Label for="name">Full Name *</Label>
        <Input 
          id="name" 
          v-model="form.name" 
          placeholder="e.g. Salim Al Mansoori" 
          required 
          class="bg-white/80"
        />
      </div>

      <!-- Contact Details -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="space-y-1.5">
          <Label for="phone">Phone Number *</Label>
          <Input 
            id="phone" 
            type="tel" 
            v-model="form.phone" 
            placeholder="e.g. +971 50 123 4567" 
            required 
            class="bg-white/80"
          />
        </div>
        <div class="space-y-1.5">
          <Label for="email">Email Address *</Label>
          <Input 
            id="email" 
            type="email" 
            v-model="form.email" 
            placeholder="e.g. salim@example.ae" 
            required 
            class="bg-white/80"
          />
        </div>
      </div>

      <!-- Service Selection -->
      <div class="space-y-1.5">
        <Label for="service">Select Service *</Label>
        <Select v-model="form.service" required>
          <SelectTrigger class="bg-white/80">
            <SelectValue placeholder="What service do you need?" />
          </SelectTrigger>
          <SelectContent class="bg-white">
            <SelectItem 
              v-for="service in companyData.services" 
              :key="service.slug" 
              :value="service.slug"
            >
              {{ service.title }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <!-- Message -->
      <div class="space-y-1.5">
        <Label for="message">Project Requirements / Details *</Label>
        <Textarea 
          id="message" 
          v-model="form.message" 
          placeholder="Briefly describe your fit-out space, timeline, and custom preferences..." 
          rows="4" 
          required 
          class="bg-white/80"
        />
      </div>

      <!-- Action Button -->
      <Button 
        type="submit" 
        :disabled="isSubmitting"
        class="w-full py-6 uppercase tracking-wider font-semibold text-xs"
      >
        <span v-if="isSubmitting">Submitting Enquiry...</span>
        <span v-else>Submit Consultation Request</span>
      </Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select'
import { companyData } from '@/data/company'

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const form = reactive({
  name: '',
  phone: '',
  email: '',
  service: '',
  message: ''
})

const handleSubmit = () => {
  isSubmitting.value = true
  // Simulate delay
  setTimeout(() => {
    isSubmitting.value = false
    isSubmitted.value = true
  }, 1000)
}

const resetForm = () => {
  form.name = ''
  form.phone = ''
  form.email = ''
  form.service = ''
  form.message = ''
  isSubmitted.value = false
}
</script>
