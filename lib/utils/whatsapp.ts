import { BRAND } from "@/lib/config/brand";

export type WhatsAppContext =
  | "hero"
  | "demo"
  | "general"
  | "agency"
  | "cylinder_tracking"
  | "gst_billing"
  | "contact_form";

const PREFILLED_MESSAGES: Record<WhatsAppContext, string> = {
  hero: "Hello LPGFlow Team, I would like to learn more about the LPG Plant & Distribution ERP system and explore a live walkthrough.",
  demo: "Hello LPGFlow Team, I would like to request an in-depth enterprise demo of the LPG ERP platform for our plant/distributorship operations.",
  general: "Hello, I am reaching out to discuss your centralized LPG Gas Plant & Distribution ERP software.",
  agency: "Hello, we operate an LPG distribution agency network and are interested in the Agency Management & Order Dispatch modules.",
  cylinder_tracking: "Hello, I would like to know how the Barcode/QR Cylinder Tracking and tare weight verification modules work in LPGFlow ERP.",
  gst_billing: "Hello, I would like to see how the automated GST Invoicing, E-Way bills, and Agency Ledger reconciliation operate.",
  contact_form: "Hello LPGFlow Operations, I submitted an enquiry regarding the LPG ERP implementation and would like to connect on WhatsApp.",
};

/**
 * Clean phone number into international numeric format without +, - or spaces
 */
export function sanitizePhoneNumber(phone: string): string {
  return phone.replace(/[^0-9]/g, "");
}

/**
 * Generates a valid wa.me URL with pre-filled encoded text
 */
export function getWhatsAppUrl(
  context: WhatsAppContext = "general",
  customMessage?: string
): string {
  const rawNumber = BRAND.whatsappNumber || process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const sanitized = sanitizePhoneNumber(rawNumber);

  if (!sanitized) {
    if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
      console.warn(
        "[LPGFlow WhatsApp Warning] NEXT_PUBLIC_WHATSAPP_NUMBER is not set or invalid. Falling back to default demo number."
      );
    }
  }

  const targetNumber = sanitized || "919876543210";
  const message = customMessage || PREFILLED_MESSAGES[context] || PREFILLED_MESSAGES.general;
  const encoded = encodeURIComponent(message);

  return `https://wa.me/${targetNumber}?text=${encoded}`;
}
