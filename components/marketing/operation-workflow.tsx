import React from "react";
import {
  ShoppingCart,
  Boxes,
  FileText,
  Truck,
  QrCode,
  CreditCard,
  LineChart,
  ArrowRight,
} from "lucide-react";

export function OperationWorkflow() {
  const steps = [
    {
      step: "01",
      title: "Agency / Client Indent",
      shortTitle: "Order",
      icon: ShoppingCart,
      desc: "Authorized agencies or bulk commercial clients place cylinder indents via portal or mobile app with requested delivery dates.",
    },
    {
      step: "02",
      title: "Instant Stock Verification",
      shortTitle: "Stock Check",
      icon: Boxes,
      desc: "Plant engine checks available filled cylinders at Godowns, verifies agency security credit limit, and locks inventory.",
    },
    {
      step: "03",
      title: "Automated GST Invoice",
      shortTitle: "GST Invoice",
      icon: FileText,
      desc: "System computes 5% (domestic) or 18% (commercial) GST with HSN 27111900, generates statutory E-Way bill, and updates ledger.",
    },
    {
      step: "04",
      title: "Dispatch & Trip Sheet",
      shortTitle: "Fleet Dispatch",
      icon: Truck,
      desc: "Order is assigned to a plant lorry (10T / 16T), gate pass is issued, and loading tare weights are digitally verified.",
    },
    {
      step: "05",
      title: "Cylinder Barcode Scanning",
      shortTitle: "Track Cylinder",
      icon: QrCode,
      desc: "Every cylinder barcode/QR is scanned at handover. Empty return serial numbers are audited to prevent cylinder loss.",
    },
    {
      step: "06",
      title: "Reconciliation & Payment",
      shortTitle: "Payment",
      icon: CreditCard,
      desc: "Driver collects signed delivery challan; payments (NEFT/RTGS, UPI or COD) are reconciled against agency credit balance.",
    },
    {
      step: "07",
      title: "Mass Balance & Analytics",
      shortTitle: "Plant Reports",
      icon: LineChart,
      desc: "Plant decanting mass balance, cylinder turnaround velocity, and distributor performance dashboards refresh in real-time.",
    },
  ];

  return (
    <section id="workflow" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950/70 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider">
            End-To-End Supply Chain Loop
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How LPGFlow powers the entire distribution workflow.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            A frictionless seven-step operational pipeline connecting plant filling lines directly to doorstep cylinder handovers.
          </p>
        </div>

        {/* Desktop Horizontal Stepper / Cards */}
        <div className="hidden lg:grid grid-cols-7 gap-3 relative">
          {/* Connector Line behind cards */}
          <div className="absolute top-10 left-6 right-6 h-0.5 bg-linear-to-r from-orange-500/40 via-amber-500/40 to-emerald-500/40 -z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative z-10 flex flex-col justify-between rounded-xl p-4 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-orange-500/50 shadow-xs hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-extrabold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-orange-600 dark:text-orange-400">
                      {step.step}
                    </span>
                    <div className="p-2 rounded-lg bg-orange-50 dark:bg-slate-800 text-orange-600 dark:text-orange-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                  <span>Step {step.step} of 07</span>
                  {idx < steps.length - 1 && <ArrowRight className="w-3 h-3 text-orange-500" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Vertical Stepper */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs"
              >
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                    {step.step}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="w-0.5 h-10 bg-slate-200 dark:bg-slate-800 mt-2" />
                  )}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-orange-500 shrink-0" />
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
