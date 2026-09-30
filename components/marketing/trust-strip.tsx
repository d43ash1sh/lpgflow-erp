import React from "react";
import {
  Layers,
  Boxes,
  Truck,
  FileSpreadsheet,
  ShieldCheck,
  QrCode,
} from "lucide-react";

export function TrustStrip() {
  const values = [
    {
      icon: Layers,
      title: "Centralized Operations",
      desc: "Plant, godown & agency sync",
    },
    {
      icon: Boxes,
      title: "Real-Time Inventory",
      desc: "Filled, empty & testing stock",
    },
    {
      icon: QrCode,
      title: "Cylinder Barcode/QR",
      desc: "Individual cylinder lifecycle",
    },
    {
      icon: Truck,
      title: "Dynamic Dispatch",
      desc: "Truck trip sheets & route plans",
    },
    {
      icon: FileSpreadsheet,
      title: "GST-Ready Billing",
      desc: "Instant HSN & e-invoicing",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise RBAC",
      desc: "Owner, staff & agency security",
    },
  ];

  return (
    <section className="border-b border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700/60"
              >
                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                    {item.desc}
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
