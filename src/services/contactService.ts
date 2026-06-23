/*
  Contact form — API logic (kept SEPARATE from the UI component).
  The UI (TalkToVisaGuy.tsx) only calls submitContactForm(); it knows
  nothing about endpoints, fetch, or response shapes. Backend ka URL
  .env (VITE_API_URL) se aata hai.
*/

export interface ContactFormPayload {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  interest: string;
  ielts: string;
  message?: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  errors?: Partial<Record<keyof ContactFormPayload, string>>;
}

const API_BASE_URL =
  (import.meta.env.VITE_API_URL as string | undefined)?.replace(/\/$/, "") ??
  "http://localhost:5000";

/** POST the contact form to the backend. Throws Error(message) on failure. */
export async function submitContactForm(
  payload: ContactFormPayload,
): Promise<ContactResponse> {
  let res: Response;

  try {
    res = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    // network / server down
    throw new Error(
      "Unable to reach the server. Please check your connection and try again.",
    );
  }

  let data: Partial<ContactResponse> = {};
  try {
    data = (await res.json()) as Partial<ContactResponse>;
  } catch {
    // non-JSON response — ignore, fall back to status check
  }

  if (!res.ok || data.success === false) {
    throw new Error(
      data.message || "Something went wrong. Please try again later.",
    );
  }

  return {
    success: true,
    message: data.message || "Your message has been sent successfully.",
  };
}
