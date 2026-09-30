import React from "react";
import {
  ShieldCheck,
  Lock,
  FileSpreadsheet,
  Database,
  History,
  KeyRound,
  Info,
} from "lucide-react";

export function SecuritySection() {
  const securityFeatures = [
    {
      icon: ShieldCheck,
      title: "Granular Role-Based Access (RBAC)",
      desc: "Distinct privileges for Plant Owners, Godown Dispatchers, Filling Operators, and Agency Principals. Prevent unauthorized discounts or inventory overrides.",
    },
    {
      icon: Lock,
      title: "End-to-End SSL/TLS & HTTPS",
      desc: "All traffic between godown terminals, mobile apps, and central cloud servers is encrypted in transit using industry-standard TLS encryption.",
    },
    {
      icon: History,
      title: "Immutable Operational Audit Trails",
      desc: "Every cylinder tare check, trip gate pass, payment entry, and invoice modification is logged with user ID and timestamp for forensic audit readiness.",
    },
    {
      icon: Database,
      title: "Automated Offsite Database Backups",
      desc: "Daily automated database snapshots and point-in-time recovery ensure uninterrupted business continuity even during godown hardware failures.",
    },
    {
      icon: KeyRound,
      title: "Secure Session Management",
      desc: "Session timeouts, rate limiting on sensitive endpoints, and optional two-factor authentication (2FA) for administrative and financial approvals.",
    },
    {
      icon: FileSpreadsheet,
      title: "Secure Payment Gateway Processing",
      desc: "Engineered to integrate with tokenized, RBI-compliant payment aggregators (Razorpay / Cashfree) without storing raw customer banking credentials.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950/70 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider">
            Enterprise Infrastructure
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Security and operational integrity engineered from the foundation.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Designed for multi-stakeholder industrial operations with complete confidentiality, zero data contamination, and verified access control.
          </p>
        </div>

        {/* 6 Security Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-3"
              >
                <div className="p-3 w-fit rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
                  <Icon className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {sec.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {sec.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Honest Architecture Disclosure Callout */}
        <div className="mt-12 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 max-w-2xl mx-auto text-center text-xs text-slate-500 space-y-1">
          <div className="flex items-center justify-center gap-1.5 text-slate-700 dark:text-slate-300 font-semibold">
            <Info className="w-4 h-4 text-orange-500" />
            <span>Planned Enterprise Cloud Architecture</span>
          </div>
          <p>
            Security controls reflect our target production architecture using Supabase / PostgreSQL RBAC and TLS endpoints.
          </p>
        </div>
      </div>
    </section>
  );
}
