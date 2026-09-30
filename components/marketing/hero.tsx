"use client";

import React from "react";
import Link from "next/link";
import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Boxes,
  Truck,
  FileCheck2,
  Activity,
  Layers,
  Sparkles,
} from "lucide-react";
import { BRAND } from "@/lib/config/brand";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/80 dark:border-slate-800 bg-linear-to-b from-slate-50 via-white to-slate-50/50 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950">
      {/* Background Subtle Industrial Grid Effect */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#EA580C 1px, transparent 1px), radial-gradient(#0F172A 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          backgroundPosition: "0 0, 12px 12px",
        }}
      />

      {/* Subtle Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-semibold">
              <span className="flex h-2 w-2 rounded-full bg-orange-600 animate-pulse" />
              <span>{BRAND.badge}</span>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <span className="text-slate-600 dark:text-slate-300 font-normal">
                Next-Gen Bottling & Dispatch
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl/tight font-extrabold tracking-tight text-slate-900 dark:text-white">
              One Central Platform.{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-600 via-amber-600 to-orange-500">
                Complete Control
              </span>{" "}
              Over Your LPG Distribution.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Centralize inventory, agency orders, barcode cylinder tracking, trip
              dispatch, GST e-invoicing and customer refills in one unified industrial
              operating system.
            </p>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto lg:mx-0 text-left text-xs sm:text-sm text-slate-700 dark:text-slate-300 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Empty Cylinder Leakage</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Automated GST & E-Way Bills</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Agency Indent & Ledger</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Real-Time Godown Stocks</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <WhatsAppButton
                context="hero"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-700/20"
              >
                Talk to Us on WhatsApp
              </WhatsAppButton>

              <Link
                href="/demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 font-semibold text-base transition-colors shadow-sm"
              >
                <span>Explore Interactive Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Live Trust Line */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-3 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Audit-Ready RBAC
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Boxes className="w-4 h-4 text-orange-500" />
                Multi-Godown Support
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-sky-500" />
                Instant Plant Dispatch
              </span>
            </div>
          </div>

          {/* Right Visual Column: Original LPG Logistics & ERP Command Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Decorative Card Wrapper */}
              <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-4 sm:p-6 shadow-2xl relative overflow-hidden">
                {/* Visual Header / Terminal Status */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                      LPGFlow Plant Ops Terminal • Main Bottling Godown
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span>SYSTEM ONLINE</span>
                  </div>
                </div>

                {/* Top Metrics Row */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3 py-4">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                      <span>Filled Stock</span>
                      <Boxes className="w-3.5 h-3.5 text-orange-500" />
                    </div>
                    <div className="text-lg sm:text-xl font-bold font-mono text-slate-900 dark:text-white mt-1">
                      4,820 <span className="text-[10px] font-normal text-slate-400">cyl</span>
                    </div>
                    <span className="text-[10px] text-emerald-600 font-medium">96% of capacity</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                      <span>Empty Returns</span>
                      <Layers className="w-3.5 h-3.5 text-sky-500" />
                    </div>
                    <div className="text-lg sm:text-xl font-bold font-mono text-slate-900 dark:text-white mt-1">
                      1,940 <span className="text-[10px] font-normal text-slate-400">cyl</span>
                    </div>
                    <span className="text-[10px] text-slate-500">Refill queue active</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                      <span>Today Sales</span>
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                    </div>
                    <div className="text-lg sm:text-xl font-bold font-mono text-slate-900 dark:text-white mt-1">
                      ₹8.42L
                    </div>
                    <span className="text-[10px] text-emerald-600 font-medium">+14.2% vs yesterday</span>
                  </div>
                </div>

                {/* Central Visual: Interactive Cylinder Dispatch & Telemetry Track */}
                <div className="p-4 rounded-xl bg-slate-900 text-white space-y-3 shadow-inner relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-orange-400 font-medium">
                      <Truck className="w-4 h-4" />
                      <span>Live Fleet Trip: TRIP-DEMO-01</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-orange-500/20 text-orange-300 border border-orange-500/30">
                      DISPATCHED • 350 Cylinders (Sample)
                    </span>
                  </div>

                  {/* Route Progress Vector */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                      <span>Bottling Plant Godown</span>
                      <span className="text-amber-400 font-bold">In-Transit (Gate 3)</span>
                      <span>Sample Agency A</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden relative">
                      <div className="h-full bg-linear-to-r from-orange-500 to-amber-400 rounded-full w-2/3 relative">
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white animate-ping" />
                      </div>
                    </div>
                  </div>

                  {/* Mini Data Chips */}
                  <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] text-slate-300">
                    <div className="flex items-center justify-between p-2 rounded bg-slate-800/80">
                      <span className="text-slate-400">Truck:</span>
                      <span className="font-mono text-white">VEHICLE-DEMO-01</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-slate-800/80">
                      <span className="text-slate-400">Tare Verif:</span>
                      <span className="font-mono text-emerald-400">Sample Validated</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Recent Operational Log */}
                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <span>Recent Operational Activity (Demo)</span>
                    <span className="text-[11px] font-mono text-slate-400">Auto-refresh: 5s</span>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300">
                      <div className="flex items-center gap-2 truncate">
                        <FileCheck2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">Sample Invoice INV/DEMO/01042 generated</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 shrink-0">Just now</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300">
                      <div className="flex items-center gap-2 truncate">
                        <Boxes className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                        <span className="truncate">Bulk Indent: Sample Agency B (140 Cyl)</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 shrink-0">4m ago</span>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-3 -right-3 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs font-medium shadow-xl border border-slate-700">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Illustrative Plant Telemetry (Demo Preview)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
