// Email configuration and utilities
// This would integrate with your preferred email service (Resend, SendGrid, etc.)

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  message: string
  newsletter: boolean
}

export interface BookingFormData {
  name: string
  email: string
  phone: string
  company?: string
  consultationType: string
  meetingType: string
  preferredDate: string
  preferredTime: string
  timezone: string
  message?: string
}

export async function sendContactEmail(data: ContactFormData) {
  // In a real implementation, you would use a service like Resend:
  //
  // import { Resend } from 'resend'
  // const resend = new Resend(process.env.RESEND_API_KEY)
  //
  // await resend.emails.send({
  //   from: 'noreply@sjbusinessconsulting.com',
  //   to: 'info@sjbusinessconsulting.com',
  //   subject: `New Contact Form Submission from ${data.name}`,
  //   html: generateContactEmailHTML(data)
  // })

  return { success: true }
}

export async function sendBookingEmail(data: BookingFormData) {
  // Similar implementation for booking confirmations
  return { success: true }
}

function generateContactEmailHTML(data: ContactFormData): string {
  return `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
    <p><strong>Company:</strong> ${data.company || "Not provided"}</p>
    <p><strong>Service Interest:</strong> ${data.service || "Not specified"}</p>
    <p><strong>Newsletter:</strong> ${data.newsletter ? "Yes" : "No"}</p>
    <p><strong>Message:</strong></p>
    <p>${data.message}</p>
  `
}

function generateBookingEmailHTML(data: BookingFormData): string {
  return `
    <h2>New Consultation Booking</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Company:</strong> ${data.company || "Not provided"}</p>
    <p><strong>Consultation Type:</strong> ${data.consultationType}</p>
    <p><strong>Meeting Type:</strong> ${data.meetingType}</p>
    <p><strong>Preferred Date:</strong> ${data.preferredDate}</p>
    <p><strong>Preferred Time:</strong> ${data.preferredTime} ${data.timezone}</p>
    <p><strong>Message:</strong></p>
    <p>${data.message || "No additional message"}</p>
  `
}
