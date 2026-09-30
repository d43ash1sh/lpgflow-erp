import React from "react";
import {
  CheckCircle2,
  Shield,
  Navigation,
  FileCheck,
} from "lucide-react";

export function DeliveryRouteMap() {
  return (
    <section id="fleet" className="py-16 sm:py-24 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider">
            Lorry Fleet & Route Logistics
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Intelligent trip planning, payload tracking, and verified handovers.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Optimize cylinder delivery routes between your bottling plant, satellite godowns, and authorized
            distributors with complete digital chain-of-custody.
          </p>
        </div>

        {/* Fleet Route Console Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Vector Route & Topology Visual */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-950 p-6 text-white border border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-orange-500" />
                <span className="font-mono font-semibold text-slate-300">
                  DISPATCH CORRIDOR ROUTE: ROUTE-N-401
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                ACTIVE TRIP IN PROGRESS
              </span>
            </div>

            {/* Custom SVG Route Topo Map */}
            <div className="h-64 sm:h-72 w-full relative bg-slate-900/60 rounded-xl overflow-hidden border border-slate-800/80 flex items-center justify-center p-4">
              <svg viewBox="0 0 540 220" className="w-full h-full">
                {/* Background Roads Network */}
                <path
                  d="M 40 180 Q 150 160 220 110 T 380 90 T 500 50"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                {/* Active Dispatched Path */}
                <path
                  d="M 40 180 Q 150 160 220 110"
                  fill="none"
                  stroke="#EA580C"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

                {/* Node 1: Central Bottling Plant */}
                <circle cx="40" cy="180" r="14" fill="#0F172A" stroke="#EA580C" strokeWidth="3" />
                <circle cx="40" cy="180" r="5" fill="#EA580C" />
                <text x="40" y="210" textAnchor="middle" className="text-[10px] fill-slate-300 font-mono">
                  Main Bottling Plant (Start)
                </text>

                {/* Truck Marker (Current Position) */}
                <g transform="translate(220, 110)">
                  <circle cx="0" cy="0" r="16" fill="#EA580C" />
                  <circle cx="0" cy="0" r="22" fill="#EA580C" opacity="0.3" />
                  <path d="M -6 -5 L 6 -5 L 6 5 L -6 5 Z" fill="white" />
                </g>
                <text x="220" y="80" textAnchor="middle" className="text-[11px] fill-orange-400 font-bold font-mono">
                  VEHICLE-DEMO-01 (In Transit)
                </text>

                {/* Node 2: Sample Agency Hub */}
                <circle cx="380" cy="90" r="12" fill="#0F172A" stroke="#38BDF8" strokeWidth="2.5" />
                <circle cx="380" cy="90" r="4" fill="#38BDF8" />
                <text x="380" y="120" textAnchor="middle" className="text-[10px] fill-slate-400 font-mono">
                  Stop 1: Sample Agency A
                </text>

                {/* Node 3: Commercial Hub Cluster */}
                <circle cx="500" cy="50" r="12" fill="#0F172A" stroke="#10B981" strokeWidth="2.5" />
                <circle cx="500" cy="50" r="4" fill="#10B981" />
                <text x="480" y="32" textAnchor="middle" className="text-[10px] fill-slate-400 font-mono">
                  Stop 2: Sample Commercial Depot
                </text>
              </svg>
              <div className="absolute bottom-2 right-2 text-[10px] text-slate-500 font-mono">
                *Conceptual fleet route preview (Sample Data)
              </div>
            </div>

            {/* Trip Details Bar */}
            <div className="grid grid-cols-3 gap-3 pt-1 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">Assigned Driver</span>
                <span className="font-semibold text-slate-200">Driver 01 (Sample)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">Cylinder Payload</span>
                <span className="font-semibold text-orange-400 font-mono">350 Units (Sample Count)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">Gate Pass ID</span>
                <span className="font-semibold text-emerald-400 font-mono">GP-DEMO-001</span>
              </div>
            </div>
          </div>

          {/* Right Column: Handover & Delivery Verification Protocol */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-5">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Strict Dual-Challan Handover Protocol
              </h3>

              <div className="space-y-3 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      1:1 Empties Exchange Audit
                    </h4>
                    <p className="mt-0.5 leading-relaxed">
                      Ensures every filled cylinder dropped off requires a verified empty return or an authorized security debit note on the agency account.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                  <FileCheck className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      Digital Proof of Delivery (e-POD)
                    </h4>
                    <p className="mt-0.5 leading-relaxed">
                      Recipients sign digitally or verify via SMS / digital handover OTP, creating a verifiable delivery timestamp in the central ledger.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                  <Shield className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      Payload Weight Verification (Sample Rule)
                    </h4>
                    <p className="mt-0.5 leading-relaxed">
                      Assists dispatch operators in preventing lorry overloading past configurable fleet weight limits using tare + gas calculations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
