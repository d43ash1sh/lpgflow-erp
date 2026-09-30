import React from "react";
import Link from "next/link";
import {
  Boxes,
  Users2,
  ClipboardList,
  QrCode,
  Truck,
  Receipt,
  CreditCard,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

export function PlatformFeatures() {
  const features = [
    {
      icon: Boxes,
      title: "Godown & Yard Inventory",
      desc: "Live visibility across main plant godowns and transit hubs. Distinct segregation of filled stock, sound empties, defectives, and cylinders awaiting statutory hydro-testing.",
      tag: "Real-Time Stock",
      routeTab: "inventory",
    },
    {
      icon: Users2,
      title: "Agency Ledger & Indents",
      desc: "Comprehensive agency profiles with configurable credit ceilings, security deposits, cylinder circulation ratios, and digital order indents with real-time approvals.",
      tag: "Agency Network",
      routeTab: "agencies",
    },
    {
      icon: ClipboardList,
      title: "Automated Order Pipeline",
      desc: "Streamlined order workflows from placement to dispatch. Automated stock checks prevent overselling, and batch allocations optimize lorry loading times.",
      tag: "Operations",
      routeTab: "orders",
    },
    {
      icon: QrCode,
      title: "Cylinder Barcode & QR Tracking",
      desc: "Serial number traceability through the entire lifecycle: filling hall, loading dock, agency custody, customer return, tare verification, and 5-year re-test compliance.",
      tag: "Traceability",
      routeTab: "cylinders",
    },
    {
      icon: Truck,
      title: "Fleet Dispatch & Route Sheets",
      desc: "Assign 10-ton and 16-ton cylinder carriers, generate statutory gate passes, monitor delivery route stops, and record physical returns of empty cylinders.",
      tag: "Logistics",
      routeTab: "deliveries",
    },
    {
      icon: Receipt,
      title: "GST Invoicing & E-Way Bills",
      desc: "Purpose-built for LPG tax brackets: 5% GST on domestic refills vs 18% on commercial/industrial manifolds. Automated HSN 27111900 codes and CGST/SGST splitting.",
      tag: "Compliance",
      routeTab: "billing",
    },
    {
      icon: CreditCard,
      title: "Payment Reconciliation",
      desc: "Track bank transfers (NEFT/RTGS), cash-on-delivery collections, agency ledgers, and overdue aging reports with automated payment reminder notifications.",
      tag: "Financials",
      routeTab: "payments",
    },
    {
      icon: BarChart3,
      title: "Plant Yield & Bottling Analytics",
      desc: "Actionable executive reporting: daily decanting mass balance, cylinder turnaround cycle time, bottling line productivity, and distributor sales trends.",
      tag: "Intelligence",
      routeTab: "reports",
    },
  ];

  return (
    <section id="platform" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider">
            Industrial ERP Capabilities
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Everything your LPG operation needs, in one place.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Engineered specifically for the downstream gas industry. Say goodbye to fragmented
            spreadsheets, lost cylinders, and manual ledger disputes.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-orange-500/40 dark:hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-orange-50 dark:bg-slate-800 text-orange-600 dark:text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {feature.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <Link
                    href={`/demo?tab=${feature.routeTab}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-700"
                  >
                    <span>Inspect module in Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
