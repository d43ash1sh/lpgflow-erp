import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp, WhatsAppButton } from "@/components/whatsapp/whatsapp-button";
import {
  ShieldCheck,
  Flame,
  Boxes,
  Users2,
  CheckCircle2,
  ArrowRight,
  Cpu,
} from "lucide-react";

export const metadata = {
  title: "About Us | LPGFlow Enterprise Gas Plant ERP",
  description:
    "Learn about LPGFlow ERP: our mission to digitize downstream LPG bottling, cylinder traceability, statutory safety compliance, and distributor supply chains.",
};

export default function AboutPage() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Configurable Safety & Quality Rules",
      desc: "Designed to support customizable plant safety checklists, batch inspection rules, and periodic cylinder re-testing alerts according to operational client requirements (Illustrative Framework).",
    },
    {
      icon: Boxes,
      title: "Zero Empty Cylinder Leakage",
      desc: "LPG cylinders represent substantial capital investment. LPGFlow treats every cylinder as a serialized capital asset, tracking custody changes across lorry drivers, distributors, and delivery boys to eliminate loss.",
    },
    {
      icon: Users2,
      title: "Empowering Distributor Networks",
      desc: "Distributors are the lifeblood of LPG delivery. We eliminate friction with transparent digital ledgers, automatic indent reservations, real-time dispatch tracking, and verified online payments.",
    },
    {
      icon: Cpu,
      title: "Modern Engineering Architecture",
      desc: "Built on high-performance cloud technologies (Next.js, TypeScript, PostgreSQL) capable of handling millions of cylinder transactions with sub-second response times and rock-solid uptime.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <Header />
      <main className="flex-1">
        {/* About Hero */}
        <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Company Mission & Vision
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Digitizing the backbone of LPG energy distribution.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              LPGFlow ERP was conceived to solve the most pressing operational bottlenecks in the downstream
              gas sector: untracked cylinder inventories, paper challan discrepancies, manual GST reconciliation,
              and fragmented agency coordination.
            </p>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="py-16 sm:py-24 border-b border-slate-200/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                  The Downstream Challenge
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  From bulk decanting to doorstep delivery, every kilogram counts.
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  In traditional LPG bottling and agency operations, dispatchers rely on manual logbooks,
                  phone calls, and handwritten gate passes. This creates costly operational blind spots:
                  unverified empty cylinder returns, delivery truck delays, and dispute-prone manual ledgers.
                </p>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  LPGFlow replaces these manual points of failure with an integrated digital workflow.
                  From the moment bulk LPG tankers decant into your storage mounded bullets, through carousel
                  filling lines, lorry dispatch sheets, and agency delivery confirmations, your plant operates
                  with 100% precision.
                </p>

                <div className="pt-2 flex items-center gap-4">
                  <WhatsAppButton context="demo" variant="primary" size="md">
                    Schedule a Consultation
                  </WhatsAppButton>
                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-orange-600 flex items-center gap-1"
                  >
                    <span>Contact Operations</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-6">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Flame className="w-5 h-5 text-orange-500" />
                    <span>The LPGFlow Operational Standard</span>
                  </h3>
                  <div className="space-y-4 text-xs text-slate-300">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white">Precision Mass Balance:</strong> Reconcile bulk decanting weight against total filled cylinder output with automated variance alerts.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white">Full Chain-of-Custody:</strong> Digital gate passes and driver signatures bind custody from plant loading bay to agency receiving dock.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white">Dual-Tax Automation:</strong> Configurable GST calculation templates for domestic and commercial LPG categories (Configurable Sample Tax Slabs).
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Core Pillars Grid */}
        <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Core Principles Behind the Platform
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Engineered with enterprise rigor to withstand high-volume daily plant dispatches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pillars.map((pil, idx) => {
                const Icon = pil.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-3"
                  >
                    <div className="p-3 w-fit rounded-xl bg-orange-50 dark:bg-slate-800 text-orange-600 dark:text-orange-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {pil.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {pil.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
