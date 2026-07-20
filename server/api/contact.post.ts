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

interface ContactPayload {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactPayload>(event)

  // Basic server-side validation
  if (!body?.name?.trim()) {
    throw createError({ statusCode: 400, statusMessage: 'name is required' })
  }
  if (!body?.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    throw createError({ statusCode: 400, statusMessage: 'valid email is required' })
  }
  if (!body?.message?.trim()) {
    throw createError({ statusCode: 400, statusMessage: 'message is required' })
  }

  // ── Stub: replace with actual email/CRM integration ──────────────────
  console.warn('[contact] form submission received (stub)', {
    name: body.name,
    email: body.email,
    subject: body.subject,
  })
  // ─────────────────────────────────────────────────────────────────────

  return { ok: true, message: 'Message received. We will be in touch shortly.' }
})
