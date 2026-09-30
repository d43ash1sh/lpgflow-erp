import React from "react";
import { QrCode, ShieldCheck, Info } from "lucide-react";

export function CylinderLifecycle() {
  const lifecycle = [
    { step: "01", status: "Filled", desc: "Automated filling carousel tare & gross weight check" },
    { step: "02", status: "Dispatched", desc: "Gate pass issued and loaded onto 10T/16T truck" },
    { step: "03", status: "In-Transit", desc: "Monitored dispatch toward agency godown" },
    { step: "04", status: "Delivered", desc: "Handover logged with QR scan at recipient site" },
    { step: "05", status: "Returned", desc: "Customer empty collected with serial check" },
    { step: "06", status: "Inspection", desc: "Valve leak test, O-ring audit, tare verification" },
    { step: "07", status: "Refilled", desc: "Batch cleared for next filling cycle" },
  ];

  return (
    <section id="tracking" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950/70 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Steps */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider">
              Asset Protection & Traceability
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Individual cylinder tracking with smart QR and tare validation.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Cylinders represent over 60% of an LPG plant&apos;s capital asset base. LPGFlow eliminates
              empty cylinder unaccountability through digital serial tracking, statutory hydro-testing
              alarms, and weight verification.
            </p>

            {/* Stepper Cycle */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {lifecycle.slice(0, 6).map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs"
                >
                  <span className="font-mono text-xs font-bold text-orange-600 dark:text-orange-400 px-1.5 py-0.5 rounded bg-orange-50 dark:bg-slate-800">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                      {item.status}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2.5">
              <Info className="w-4 h-4 text-orange-500 shrink-0" />
              <span>
                Statutory PESO / IS:3196 compliant: records hydro-static stretch tests every 5 years automatically.
              </span>
            </div>
          </div>

          {/* Right Column: Digital Cylinder Asset Pass / Mock QR Inspection Card */}
          <div className="lg:col-span-6">
            <div className="max-w-md mx-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-orange-500/10 text-orange-600">
                    <QrCode className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400">Digital Asset Pass</span>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white font-mono">
                      CYL-IN-2024-88912
                    </h3>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-400 border border-emerald-500/20">
                  FILLED & SOUND
                </span>
              </div>

              {/* Mock QR Visual Box */}
              <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="w-32 h-32 p-2.5 rounded-xl bg-slate-900 flex items-center justify-center shadow-inner relative group">
                  {/* High contrast vector QR pattern */}
                  <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
                    <rect x="10" y="10" width="24" height="24" rx="2" />
                    <rect x="14" y="14" width="16" height="16" fill="#0F172A" />
                    <rect x="18" y="18" width="8" height="8" />

                    <rect x="66" y="10" width="24" height="24" rx="2" />
                    <rect x="70" y="14" width="16" height="16" fill="#0F172A" />
                    <rect x="74" y="18" width="8" height="8" />

                    <rect x="10" y="66" width="24" height="24" rx="2" />
                    <rect x="14" y="70" width="16" height="16" fill="#0F172A" />
                    <rect x="18" y="74" width="8" height="8" />

                    {/* Data matrix dots */}
                    <rect x="42" y="14" width="6" height="6" />
                    <rect x="52" y="14" width="6" height="6" />
                    <rect x="42" y="24" width="6" height="6" />
                    <rect x="52" y="28" width="6" height="6" />

                    <rect x="14" y="44" width="6" height="6" />
                    <rect x="24" y="48" width="6" height="6" />
                    <rect x="44" y="44" width="12" height="12" />
                    <rect x="64" y="44" width="6" height="6" />
                    <rect x="78" y="48" width="8" height="6" />

                    <rect x="44" y="66" width="6" height="6" />
                    <rect x="54" y="72" width="8" height="6" />
                    <rect x="70" y="66" width="6" height="10" />
                    <rect x="80" y="78" width="8" height="8" />
                  </svg>
                  <span className="absolute bottom-1 text-[8px] font-mono text-slate-400">
                    SCAN VERIFIED
                  </span>
                </div>

                <div className="space-y-2 text-xs w-full">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800">
                    <span className="text-slate-500">Cylinder Spec:</span>
                    <span className="font-bold text-slate-900 dark:text-white">14.2 KG Domestic</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800">
                    <span className="text-slate-500">Tare Weight (Stamped):</span>
                    <span className="font-mono font-bold text-slate-900 dark:text-white">15.28 KG</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800">
                    <span className="text-slate-500">Gross Weight Actual:</span>
                    <span className="font-mono font-bold text-emerald-600">29.48 KG (PASS)</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800">
                    <span className="text-slate-500">Next Hydro-Test:</span>
                    <span className="font-mono font-medium text-amber-600">March 2027</span>
                  </div>
                </div>
              </div>

              {/* Custody Footer */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Current Location: Godown 01, Bay 4
                </span>
                <span className="text-[11px] font-mono text-slate-400">Batch: B-9941</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
