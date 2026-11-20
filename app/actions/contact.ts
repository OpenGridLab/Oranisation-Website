'use server';

import nodemailer from 'nodemailer';
import { siteConfig } from '@/config/site';

export type ContactState = {
  success?: string;
  error?: string;
  fieldErrors?: { fullname?: string; email?: string; message?: string };
} | null;

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export async function sendMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot check: bots fill hidden fields, humans do not
  if (formData.get('website')) return { success: 'Message received. We will get back to you shortly!' };

  const fullname = String(formData.get('fullname') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  const fieldErrors: NonNullable<ContactState>['fieldErrors'] = {};
  if (fullname.length < 2) fieldErrors.fullname = 'Please enter your full name or organization.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fieldErrors.email = 'Please enter a valid email address.';
  if (message.length < 10) fieldErrors.message = 'Please provide a brief description (at least 10 characters).';
  if (Object.keys(fieldErrors).length) return { fieldErrors };

  const { NODEMAILER_HOST, NODEMAILER_PORT, NODEMAILER_USER, NODEMAILER_PASS, USER_MAILER, USER_TO } = process.env;
  const targetRecipient = USER_TO || siteConfig.contactEmail;

  if (!NODEMAILER_HOST || !NODEMAILER_USER || !NODEMAILER_PASS) {
    // If SMTP credentials aren't set in environment, guide the user to direct email
    return {
      error: `Form submission is temporarily using direct email. Please email us directly at ${siteConfig.contactEmail}.`,
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: NODEMAILER_HOST,
      port: Number(NODEMAILER_PORT) || 587,
      auth: { user: NODEMAILER_USER, pass: NODEMAILER_PASS },
    });

    await transporter.sendMail({
      from: USER_MAILER || `"${siteConfig.name} Contact" <${NODEMAILER_USER}>`,
      to: targetRecipient,
      replyTo: email,
      subject: `[OpenGridLabs Inquiry] Message from ${fullname.slice(0, 80)}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #111;">
          <h2 style="color: #0284c7;">New Message via OpenGridLabs</h2>
          <p><strong>From:</strong> ${escapeHtml(fullname)} &lt;${escapeHtml(email)}&gt;</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 16px 0;" />
          <p style="white-space: pre-line;">${escapeHtml(message)}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 16px 0;" />
          <small style="color: #666;">Sent from the official OpenGridLabs website.</small>
        </div>
      `,
    });

    return { success: 'Message transmitted successfully! Our team will get back to you soon.' };
  } catch {
    return { error: `Failed to send email. Please write directly to ${siteConfig.contactEmail}.` };
  }
}
