/**
 * app/composables/useContactForm.ts
 *
 * Reactive contact form state + submission logic.
 * POSTs to /api/contact (server/api/contact.post.ts).
 *
 * Usage:
 *   const { form, errors, status, submit } = useContactForm()
 */

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export interface ContactFormErrors {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function useContactForm() {
  const form = reactive<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const errors = reactive<ContactFormErrors>({})
  const status = ref<FormStatus>('idle')
  const errorMessage = ref<string>('')

  function validate(): boolean {
    errors.name = undefined
    errors.email = undefined
    errors.phone = undefined
    errors.subject = undefined
    errors.message = undefined

    if (!form.name.trim()) errors.name = 'Name is required'
    if (!form.email.trim()) {
      errors.email = 'Email is required'
    } else if (!validateEmail(form.email)) {
      errors.email = 'Please enter a valid email address'
    }
    if (!form.message.trim()) errors.message = 'Message is required'

    return Object.keys(errors).length === 0
  }

  async function submit() {
    if (!validate()) return

    status.value = 'submitting'
    errorMessage.value = ''

    try {
      await $fetch('/api/contact', {
        method: 'POST',
        body: { ...form },
      })
      status.value = 'success'
      // Reset form after success
      Object.assign(form, { name: '', email: '', phone: '', subject: '', message: '' })
    } catch (err: unknown) {
      status.value = 'error'
      errorMessage.value =
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
    }
  }

  function reset() {
    Object.assign(form, { name: '', email: '', phone: '', subject: '', message: '' })
    errors.name = undefined
    errors.email = undefined
    errors.phone = undefined
    errors.subject = undefined
    errors.message = undefined
    status.value = 'idle'
    errorMessage.value = ''
  }

  return {
    form,
    errors,
    status: readonly(status),
    errorMessage: readonly(errorMessage),
    submit,
    reset,
  }
}
