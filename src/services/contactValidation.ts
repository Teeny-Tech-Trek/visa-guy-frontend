/*
  Contact form — client-side validation (logic, separate from UI).
  Mirrors the backend validator so users get instant feedback before
  a network round-trip. Backend always re-validates (never trust client).
*/

import type { ContactFormPayload } from "./contactService";

export type ContactErrors = Partial<Record<keyof ContactFormPayload, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d+\-\s()]{7,15}$/;

export function validateContactForm(payload: ContactFormPayload): ContactErrors {
  const errors: ContactErrors = {};

  if (!payload.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!payload.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!PHONE_RE.test(payload.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!payload.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(payload.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!payload.city.trim()) {
    errors.city = "City is required.";
  }

  if ((payload.message ?? "").length > 500) {
    errors.message = "Message must be under 500 characters.";
  }

  return errors;
}
