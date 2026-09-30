import React from "react";
import {
  ShieldCheck,
  HardHat,
  Store,
  UserCheck,
  Check,
} from "lucide-react";

export function UserRoles() {
  const roles = [
    {
      role: "Admin & Plant Owner",
      subtitle: "Executive Plant Governance",
      icon: ShieldCheck,
      color: "border-orange-500/30 bg-orange-500/5",
      badge: "Full Control",
      capabilities: [
        "Real-time bottling yield & decanting mass balance",
        "Agency credit ceilings & security deposit thresholds",
        "Consolidated GST e-invoicing & profit margins",
        "Role-based permission configuration & audit logs",
        "Statutory compliance & multi-godown oversight",
      ],
    },
    {
      role: "Operations & Godown Staff",
      subtitle: "Yard, Bottling & Dispatch Terminal",
      icon: HardHat,
      color: "border-sky-500/30 bg-sky-500/5",
      badge: "Plant Floor",
      capabilities: [
        "Inward decanted tanker check-in & gross weight audit",
        "Barcode/QR scanning at filling carousel & loading dock",
        "Lorry trip sheet generation & gate-pass authorization",
        "Empty cylinder receipt & defective segregation",
        "Hydro-testing quarantine & statutory re-testing flags",
      ],
    },
    {
      role: "Agency / Distributor Network",
      subtitle: "Authorized Channel Partner Portal",
      icon: Store,
      color: "border-emerald-500/30 bg-emerald-500/5",
      badge: "Distributor Portal",
      capabilities: [
        "Direct 14.2kg & 19kg truckload indent placement",
        "Live trip dispatch ETA & driver contact visibility",
        "Real-time agency ledger, payment credit & GST bills",
        "Empties return reconciliation & deposit tracking",
        "Retail delivery boys allocation & locality indents",
      ],
    },
    {
      role: "Commercial & Retail Consumers",
      subtitle: "Hotels, Cloud Kitchens & Domestic Refills",
      icon: UserCheck,
      color: "border-purple-500/30 bg-purple-500/5",
      badge: "Consumer App",
      capabilities: [
        "Seamless refill booking via WhatsApp & Web portal",
        "Digital doorstep delivery OTP verification",
        "Online UPI / Card payment & digital GST receipts",
        "Cylinder safety verification & tare check confirmation",
        "Emergency leakage reporting & consumer helpline link",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider">
            Multi-Tier Role Architecture
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tailored interfaces for every stakeholder in the LPG chain.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Each role accesses an optimized, secure workspace designed specifically for their operational responsibilities.
          </p>
        </div>

        {/* 4 User Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
                      <Icon className="w-5 h-5 text-orange-600" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {r.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-0.5">
                    {r.role}
                  </h3>
                  <span className="text-xs text-orange-600 dark:text-orange-400 font-medium block mb-4">
                    {r.subtitle}
                  </span>

                  <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
                    {r.capabilities.map((cap, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-medium text-slate-400">
                    Granular permission-controlled interface
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
