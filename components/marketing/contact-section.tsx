"use client";

import React, { useState } from "react";
import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button";
import { BRAND } from "@/lib/config/brand";
import { getWhatsAppUrl } from "@/lib/utils/whatsapp";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    businessName: "",
    requirement: "plant_erp",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.phone.trim()) {
      setErrorMsg("Please provide your name and contact phone number.");
      return;
    }
    setErrorMsg("");
    setSubmitted(true);
  };

  const handleWhatsAppDirectSubmit = () => {
    const text = `Hello LPGFlow Team, I submitted an inquiry from the website:%0A*Name:* ${encodeURIComponent(
      formState.name || "N/A"
    )}%0A*Phone:* ${encodeURIComponent(
      formState.phone || "N/A"
    )}%0A*Business/Agency:* ${encodeURIComponent(
      formState.businessName || "N/A"
    )}%0A*Requirement:* ${encodeURIComponent(
      formState.requirement
    )}%0A*Details:* ${encodeURIComponent(formState.message || "Requesting details")}`;

    const url = getWhatsAppUrl("contact_form", decodeURIComponent(text));
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* WhatsApp Conversion Highlight Banner */}
        <div className="rounded-3xl bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-8 sm:p-12 mb-16 shadow-xl border border-slate-700/80 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              Immediate Operations Consultation
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Ready to eliminate cylinder losses and automate your LPG plant?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Connect directly with our engineering and operations specialists on WhatsApp.
              We can walk you through cylinder serialization, tare audits, and agency ledger setup.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <WhatsAppButton
                context="demo"
                variant="primary"
                size="lg"
                className="font-bold shadow-lg"
              >
                Start Conversation on WhatsApp
              </WhatsAppButton>

              <span className="text-xs text-slate-400">
                Average reply time: under 15 minutes during operating hours
              </span>
            </div>
          </div>
        </div>

        {/* Contact & Enquiry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Channels & Operational Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                Direct Communication
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
                Speak directly with the team.
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                Whether you operate an independent bottling plant, a multi-outlet gas agency network, or an industrial cylinder manifold, we are ready to assist.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                <Clock className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Business Hours</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">{BRAND.operatingHours}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Direct Phone</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-mono mt-0.5">{BRAND.phoneDisplay}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                <Mail className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Email Address</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-mono mt-0.5">{BRAND.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                <MapPin className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Operational Hub</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">{BRAND.plantLocation}</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                Safety Reference: For emergency gas leaks, please call the official national emergency toll-free number <strong>1906</strong> immediately.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form with WhatsApp Fallback */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
              <div className="mb-6">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  Schedule an LPG ERP Assessment
                </h4>
                <p className="text-xs text-slate-500">
                  Fill in your details below for a customized operational walkthrough.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-base font-bold text-slate-900 dark:text-white">
                      Enquiry Registered
                    </h5>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-md mx-auto">
                      Thank you, {formState.name}. We have logged your request. For the fastest response, you can immediately send these details to our team on WhatsApp.
                    </p>
                  </div>

                  <button
                    onClick={handleWhatsAppDirectSubmit}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors"
                  >
                    <span>Send details to WhatsApp Now</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-400 text-xs border border-rose-200 dark:border-rose-900">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Ramesh Patel"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Plant / Agency / Business Name
                      </label>
                      <input
                        type="text"
                        value={formState.businessName}
                        onChange={(e) =>
                          setFormState({ ...formState, businessName: e.target.value })
                        }
                        placeholder="e.g. Patel Gas Agency"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Primary Requirement
                      </label>
                      <select
                        value={formState.requirement}
                        onChange={(e) =>
                          setFormState({ ...formState, requirement: e.target.value })
                        }
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <option value="plant_erp">Full Bottling Plant ERP</option>
                        <option value="agency_management">Agency & Distributor Management</option>
                        <option value="cylinder_tracking">Cylinder Barcode & Tare Verification</option>
                        <option value="commercial_supply">Commercial Manifold & Bulk Supply</option>
                        <option value="custom_integration">Existing System Migration</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Message / Operational Scope
                    </label>
                    <textarea
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Share your current daily cylinder volume, number of godowns, or existing challenges..."
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Submit Enquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirectSubmit}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-emerald-600/40 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Send directly via WhatsApp</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center pt-2">
                    Phase 0 Demo Mode: Form data will connect to PostgreSQL & SMS gateway in Phase 1.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
