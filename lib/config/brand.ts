/**
 * Brand Configuration Object
 * Global source of truth for branding, contact info, and company details.
 * Configured so any future client branding or credentials can be replaced here.
 */

export const BRAND = {
  name: "LPGFlow ERP",
  shortName: "LPGFlow",
  legalEntity: "LPGFlow Energy Technologies & Solutions",
  tagline: "Centralized Web-Based LPG Gas Plant & Distribution ERP",
  badge: "Enterprise LPG Operations Platform",
  shortDescription:
    "End-to-end plant automation: real-time cylinder tracking, automated godown inventory, agency ledger, smart fleet dispatch, and GST-ready billing.",
  fullDescription:
    "An industrial-grade enterprise ERP purpose-built for LPG bottling plants, private LPG distributors, auto-LPG stations, and authorized agency networks. Modernize your entire cylinder supply chain from bulk decanting to retail doorstep delivery.",

  // Contact & Channels (defaults fall back cleanly if env variables are empty)
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 98765 43210",
  phoneDisplay: "+91 98765 43210",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "operations@lpgflow.internal",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://lpgflow-erp.vercel.app",

  // Operational references
  emergencyHelpline: "1906",
  emergencyLabel: "National LPG Leakage & Safety Reference: 1906",
  operatingHours: "Monday – Saturday: 08:00 AM – 08:00 PM IST",
  plantLocation: "Phase II Industrial Logistics Corridor, Gas Infrastructure Zone",

  // Navigation Links
  nav: [
    { label: "Platform", href: "#platform" },
    { label: "Workflow", href: "#workflow" },
    { label: "Tracking", href: "#tracking" },
    { label: "Fleet & Routes", href: "#fleet" },
    { label: "GST Billing", href: "#billing" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};
