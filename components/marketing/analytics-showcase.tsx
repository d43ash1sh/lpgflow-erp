import React from "react";
import { TrendingUp, PieChart, Clock } from "lucide-react";

export function AnalyticsShowcase() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider">
            Operational Intelligence (Sample Layout)
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Data-driven insights to maximize plant bottling yield.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Identify bottleneck routes, monitor distributor recovery rates, and analyze domestic refill demand cycles.
          </p>
        </div>

        {/* 4 Analytics Widgets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Agency Sales & Indent Distribution */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Agency Sales Share (Sample)
                </h3>
                <span className="text-xs text-slate-500">Illustrative Volume Breakdown</span>
              </div>
              <PieChart className="w-4 h-4 text-orange-500" />
            </div>

            <div className="space-y-3 pt-2">
              {[
                { name: "Sample Agency 01 (North)", pct: 38, count: "3,450 cyl (Sample)", color: "bg-orange-600" },
                { name: "Sample Agency 02 (Central)", pct: 28, count: "2,540 cyl (Sample)", color: "bg-amber-500" },
                { name: "Sample Agency 03 (South)", pct: 22, count: "1,980 cyl (Sample)", color: "bg-sky-500" },
                { name: "Sample Commercial Hub", pct: 12, count: "1,120 cyl (Sample)", color: "bg-emerald-500" },
              ].map((ag, idx) => (
                <div key={idx} className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-700 dark:text-slate-300 font-medium truncate pr-2">
                      {ag.name}
                    </span>
                    <span className="font-mono text-slate-500 shrink-0">{ag.count} ({ag.pct}%)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div className={`h-full ${ag.color} rounded-full`} style={{ width: `${ag.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Cylinder Turnaround Cycle Velocity */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Turnaround Velocity (Sample)
                </h3>
                <span className="text-xs text-slate-500">Filled → Empty cycle (Sample)</span>
              </div>
              <Clock className="w-4 h-4 text-emerald-500" />
            </div>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-500 block">Avg. Domestic 14.2kg Cycle</span>
                  <span className="text-xl font-bold font-mono text-slate-900 dark:text-white">
                    18.4 Days
                  </span>
                </div>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/80 px-2.5 py-1 rounded-full">
                  -2.1 Days (Faster)
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-500 block">Avg. Commercial 19kg Cycle</span>
                  <span className="text-xl font-bold font-mono text-slate-900 dark:text-white">
                    6.2 Days
                  </span>
                </div>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/80 px-2.5 py-1 rounded-full">
                  Optimal Speed
                </span>
              </div>

              <p className="text-[11px] text-slate-400">
                Faster cycle velocity saves capital cost by keeping less dead inventory in circulation.
              </p>
            </div>
          </div>

          {/* Card 3: Payment & Credit Risk Ledger */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-4 md:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Agency Dues Aging
                </h3>
                <span className="text-xs text-slate-500">Credit Risk & Recovery</span>
              </div>
              <TrendingUp className="w-4 h-4 text-rose-500" />
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-xs">
                <span className="text-slate-600 dark:text-slate-400">0 – 7 Days (Current)</span>
                <span className="font-mono font-bold text-emerald-600">₹3,42,800 (71%)</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-xs">
                <span className="text-slate-600 dark:text-slate-400">8 – 15 Days</span>
                <span className="font-mono font-bold text-amber-600">₹94,200 (19%)</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-xs">
                <span className="text-slate-600 dark:text-slate-400">&gt; 15 Days (Action Required)</span>
                <span className="font-mono font-bold text-rose-600">₹48,200 (10%)</span>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Total Outstanding</span>
                <span className="font-mono font-bold text-slate-900 dark:text-white">₹4,85,200</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
