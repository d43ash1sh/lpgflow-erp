import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactSection } from "@/components/marketing/contact-section";
import { FloatingWhatsApp } from "@/components/whatsapp/whatsapp-button";

export const metadata = {
  title: "Contact LPG Operations & Sales | LPGFlow ERP",
  description:
    "Get in touch with the LPGFlow operations team. Connect directly on WhatsApp or submit an operational inquiry for your bottling plant or LPG distributorship.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <Header />
      <main className="flex-1">
        {/* Contact Page Header */}
        <section className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider block mb-2">
              Plant Inquiries & Support
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Connect with our LPG Engineering & Operations Team
            </h1>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
              We provide prompt consultations for bottling plant operators, independent gas distributors,
              and cylinder supply fleet managers.
            </p>
          </div>
        </section>

        {/* Contact Section Component */}
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
