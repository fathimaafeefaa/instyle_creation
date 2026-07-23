/**
 * server/api/contact.post.ts
 *
 * Contact form endpoint — stub implementation.
 * Accepts POST /api/contact and returns { ok: true }.
 *
 * TODO (next step): wire up email delivery via Resend / SendGrid,
 * add rate-limiting (e.g. via H3's event.context), and store
 * submissions to a DB if required.
 */

import { defineEventHandler, readBody, createError } from 'h3'
import { Resend } from 'resend'

interface ContactPayload {
  name: string
  email: string
  phone?: string
  message: string
}

// Scaffold Resend using the environment variable.
// PLACEHOLDER: Ensure you add RESEND_API_KEY to your .env file
const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactPayload>(event)

  // Basic server-side validation
  if (!body?.name?.trim()) {
    throw createError({ statusCode: 400, statusMessage: 'Name is required.' })
  }
  if (!body?.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    throw createError({ statusCode: 400, statusMessage: 'A valid email address is required.' })
  }
  if (!body?.message?.trim()) {
    throw createError({ statusCode: 400, statusMessage: 'Message content is required.' })
  }

  const phoneText = body.phone?.trim() ? `Phone: ${body.phone.trim()}` : 'Phone: Not provided'

  try {
    if (!resend) {
      console.warn('[Contact API] Resend API key is missing. Logging submission:', body)
      return { 
        ok: true, 
        message: 'Message mock-received successfully. (Resend API key missing from environment)' 
      }
    }

    const { error } = await resend.emails.send({
      from: 'InStyle Creation Contact <onboarding@resend.dev>', // Change to verified domain when ready
      to: 'info@instylecreation.ae',
      subject: `New Enquiry from ${body.name}`,
      text: `Name: ${body.name}\nEmail: ${body.email}\n${phoneText}\n\nMessage:\n${body.message}`,
    })

    if (error) {
      console.error('[Contact API] Resend error:', error)
      throw createError({ 
        statusCode: 500, 
        statusMessage: `Failed to send email: ${error.message}` 
      })
    }

    return { ok: true, message: 'Message received. We will be in touch shortly.' }
  } catch (err: unknown) {
    console.error('[Contact API] Exception:', err)
    const errorObject = err as { statusCode?: number; statusMessage?: string; message?: string }
    throw createError({ 
      statusCode: errorObject.statusCode || 500, 
      statusMessage: errorObject.statusMessage || errorObject.message || 'Internal Server Error' 
    })
  }
})
