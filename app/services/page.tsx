import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp, WhatsAppButton } from "@/components/whatsapp/whatsapp-button";
import {
  Truck,
  QrCode,
  FileCheck2,
  Users,
  Building2,
  Flame,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "LPG Plant & Distribution Services | LPGFlow ERP",
  description:
    "Comprehensive enterprise services: bottling plant automation, cylinder asset tracking, agency network management, and commercial LPG supply chains.",
};

export default function ServicesPage() {
  const services = [
    {
      id: "bottling",
      icon: Flame,
      title: "Bottling & Decanting Operations",
      tagline: "High-Throughput Filling Line Automation",
      description:
        "Manage the complete decanting cycle from bulk road tanker receipt to multi-point electronic carousel filling. Track tare weight differences, gross weight validation, and mass balance losses with industrial sensor integration readiness.",
      features: [
        "Inward bulk road tanker weighbridge integration",
        "Automated tare & gross weight tolerance checks",
        "Leak test bath & valve pin inspection logging",
        "Daily decanting mass-balance reconciliation",
      ],
    },
    {
      id: "agencies",
      icon: Users,
      title: "Agency & Distributor Network",
      tagline: "Channel Partner Ledger & Indent Management",
      description:
        "Empower your authorized distributor network with a self-service portal. Manage security deposit ledgers, cylinder circulation quotas, rolling credit limits, and computerized order placement without manual phone coordination.",
      features: [
        "Automated indent placement with stock reservation",
        "Live financial ledger & payment reconciliation",
        "Empty cylinder holding ratio monitors",
        "Authorized distributor performance rankings",
      ],
    },
    {
      id: "cylinder-tracking",
      icon: QrCode,
      title: "Cylinder Lifecycle & Traceability",
      tagline: "End-to-End Asset Protection & Safety Compliance",
      description:
        "Every cylinder is mapped to a unique serial number and barcode/QR payload. Monitor filling dates, circulation days in the field, tare degradation, and receive automated alerts before statutory 5-year hydro-testing expiry.",
      features: [
        "Serial number & QR code scanning on mobile devices",
        "Periodic hydro-test & inspection reminder engine (Sample Rule)",
        "Defective cylinder quarantine & repair tracking",
        "Elimination of empty cylinder loss across agencies",
      ],
    },
    {
      id: "deliveries",
      icon: Truck,
      title: "Fleet Dispatch & Route Logistics",
      tagline: "Lorry Loading, Gate Passes & Digital Handover",
      description:
        "Streamline vehicle assignments for distribution lorries. Generate operational gate passes, plan multi-stop delivery routes, and enforce dual-signed electronic proof of delivery.",
      features: [
        "Truck capacity optimization (Illustrative 300 to 450+ cylinders)",
        "Automated operational gate-pass generation",
        "Driver assignment & route stop sequencing",
        "Mandatory 1:1 empty cylinder exchange confirmation",
      ],
    },
    {
      id: "commercial",
      icon: Building2,
      title: "Commercial & Bulk Manifold Supply",
      tagline: "Hotel, Industrial & Hospital Gas Management",
      description:
        "Dedicated workflows for commercial cylinders and industrial manifolds. Support recurring supply contracts, consumption-based billing, on-site manifold inspection checklists, and priority refill dispatch.",
      features: [
        "Dedicated commercial contract billing (Configurable GST)",
        "Industrial manifold battery management",
        "Scheduled automatic refill replenishment",
        "Priority commercial emergency dispatch",
      ],
    },
    {
      id: "billing",
      icon: FileCheck2,
      title: "GST Invoicing & Ledger Accounting",
      tagline: "Configurable HSN & Tax Processing Engine",
      description:
        "Handle category-specific tax structures. Configure rates for domestic consumer refills versus commercial/industrial accounts with E-Way bill threshold alerts and ledger integration.",
      features: [
        "Configurable multi-slab GST engine (Sample 5% & 18% Slabs)",
        "Automated E-Way bill threshold calculation",
        "Credit note & security deposit adjustments",
        "Comprehensive GSTR-1 and GSTR-3B export format readiness",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Enterprise Solutions
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Purpose-built capabilities for every phase of LPG operations.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
              Explore how LPGFlow ERP bridges filling lines, godown storage, distributor logistics,
              and customer refills into one seamless digital workflow.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <WhatsAppButton context="demo" variant="primary" size="md">
                Talk to an ERP Specialist
              </WhatsAppButton>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-semibold"
              >
                <span>Launch Interactive Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {services.map((svc, idx) => {
              const Icon = svc.icon;
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={svc.id}
                  id={svc.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`lg:col-span-6 space-y-4 ${!isEven ? "lg:order-2" : ""}`}>
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-600">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                        {svc.tagline}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                      {svc.title}
                    </h2>

                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {svc.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {svc.features.map((ft, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{ft}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex items-center gap-4">
                      <WhatsAppButton
                        context="general"
                        customMessage={`Hello LPGFlow Team, I want to inquire about your ${svc.title} solution.`}
                        variant="outline"
                        size="sm"
                      >
                        Inquire on WhatsApp
                      </WhatsAppButton>
                      <Link
                        href={`/demo?tab=${svc.id === "bottling" ? "inventory" : svc.id === "cylinder-tracking" ? "cylinders" : svc.id === "agencies" ? "agencies" : svc.id === "deliveries" ? "deliveries" : "billing"}`}
                        className="text-xs font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1"
                      >
                        <span>View Live Screen</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  <div className={`lg:col-span-6 ${!isEven ? "lg:order-1" : ""}`}>
                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                        <span className="text-xs font-mono font-medium text-slate-500">
                          MODULE SPECIFICATION // {svc.id.toUpperCase()}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 font-semibold">
                          VERIFIED
                        </span>
                      </div>
                      <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                        <p>
                          Engineered for seamless multi-terminal deployment across plant weighbridges,
                          filling carousels, and distributor back-offices.
                        </p>
                        <div className="p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-300">
                          &gt; Protocol: REST API / WebSocket Live Telemetry Ready<br />
                          &gt; Hardware: Bluetooth Barcode Scanners & Weighbridge Indicators<br />
                          &gt; Database: Relational PostgreSQL Schema
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
