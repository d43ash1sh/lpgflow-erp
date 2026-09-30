"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MOCK_DASHBOARD_STATS,
  MOCK_ORDERS,
  MOCK_GODOWNS,
  MOCK_DELIVERIES,
} from "@/lib/mock-data/erp-data";
import {
  Truck,
  TrendingUp,
  AlertTriangle,
  FileCheck2,
  Clock,
  ArrowRight,
  ShieldAlert,
  ChevronRight,
  PackageCheck,
  RefreshCw,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

export function DashboardPreview() {
  const [activeTab, setActiveTab] = useState<"overview" | "orders" | "stock" | "trips">("overview");
  const stats = MOCK_DASHBOARD_STATS;
  const recentOrders = MOCK_ORDERS;
  const godowns = MOCK_GODOWNS;

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Interactive Operations Preview</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Real-time plant control room, built into your browser.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Test drive the live terminal interface. Switch between operational tabs to inspect order queues,
              inventory balance, and dispatch schedules.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              Status: <span className="text-emerald-500 font-bold">ONLINE</span>
            </span>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white shadow-xs transition-colors"
            >
              <span>Open Full Demo Screen</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Dashboard Preview Shell */}
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/80 shadow-xl overflow-hidden">
          {/* Top Control Bar with Tabs */}
          <div className="bg-slate-900 text-white px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <span className="text-xs font-mono font-medium text-slate-400">
                LPGFlow Console // v1.2-preview
              </span>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center bg-slate-800/90 rounded-lg p-1 text-xs">
              <button
                onClick={() => setActiveTab("overview")}
                className={cn(
                  "px-3 py-1.5 rounded-md font-medium transition-all",
                  activeTab === "overview"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-slate-400 hover:text-white"
                )}
              >
                Overview KPI
              </button>
              <button
                onClick={() => setActiveTab("orders")}
                className={cn(
                  "px-3 py-1.5 rounded-md font-medium transition-all",
                  activeTab === "orders"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-slate-400 hover:text-white"
                )}
              >
                Today&apos;s Orders ({recentOrders.length})
              </button>
              <button
                onClick={() => setActiveTab("stock")}
                className={cn(
                  "px-3 py-1.5 rounded-md font-medium transition-all",
                  activeTab === "stock"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-slate-400 hover:text-white"
                )}
              >
                Godown Stocks
              </button>
              <button
                onClick={() => setActiveTab("trips")}
                className={cn(
                  "px-3 py-1.5 rounded-md font-medium transition-all",
                  activeTab === "trips"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-slate-400 hover:text-white"
                )}
              >
                Fleet Trips
              </button>
            </div>
          </div>

          {/* Interactive Tab Body */}
          <div className="p-4 sm:p-6 lg:p-8 space-y-6">
            {/* 6 Core Stat Cards (Always Visible for Context) */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                  Today&apos;s Orders
                </span>
                <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900 dark:text-white mt-1">
                  {stats.todayOrdersCount}
                </div>
                <div className="text-[10px] text-emerald-600 font-medium flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+{stats.todayOrdersChangePct}% vs avg</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                  Pending Dispatch
                </span>
                <div className="text-xl sm:text-2xl font-bold font-mono text-amber-600 dark:text-amber-400 mt-1">
                  {stats.pendingDeliveriesCount}
                </div>
                <div className="text-[10px] text-slate-500 flex items-center gap-1 mt-1">
                  <Clock className="w-3 h-3" />
                  <span>3 trucks loading</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                  Filled Cylinders
                </span>
                <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900 dark:text-white mt-1">
                  {stats.filledStockTotal.toLocaleString()}
                </div>
                <div className="text-[10px] text-emerald-600 font-medium flex items-center gap-1 mt-1">
                  <PackageCheck className="w-3 h-3" />
                  <span>Tare verified</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                  Empty Cylinders
                </span>
                <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900 dark:text-white mt-1">
                  {stats.emptyStockTotal.toLocaleString()}
                </div>
                <div className="text-[10px] text-sky-600 font-medium flex items-center gap-1 mt-1">
                  <RefreshCw className="w-3 h-3" />
                  <span>Decanting queue</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                  Outstanding Dues
                </span>
                <div className="text-xl sm:text-2xl font-bold font-mono text-rose-600 dark:text-rose-400 mt-1">
                  {stats.outstandingDuesFormatted}
                </div>
                <div className="text-[10px] text-slate-500 flex items-center gap-1 mt-1">
                  <span>Across 4 agencies</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                  Monthly Sales
                </span>
                <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900 dark:text-white mt-1">
                  {stats.monthlySalesFormatted}
                </div>
                <div className="text-[10px] text-emerald-600 font-medium flex items-center gap-1 mt-1">
                  <span>GST inclusive</span>
                </div>
              </div>
            </div>

            {/* TAB CONTENT: 1. OVERVIEW */}
            {activeTab === "overview" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: Plant Mass-Balance & Bottling Yield (Visual Chart) */}
                <div className="lg:col-span-8 p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                        LPG Bottling & Dispatch Throughput
                      </h3>
                      <p className="text-xs text-slate-500">
                        Daily domestic vs commercial cylinders filled and dispatched
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-600" />
                        <span className="text-slate-600 dark:text-slate-400">14.2kg Domestic</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                        <span className="text-slate-600 dark:text-slate-400">19kg Commercial</span>
                      </div>
                    </div>
                  </div>

                  {/* Clean SVG Performance Visual Graph */}
                  <div className="h-44 w-full pt-2">
                    <svg viewBox="0 0 600 160" className="w-full h-full overflow-visible">
                      {/* Grid Lines */}
                      <line x1="0" y1="20" x2="600" y2="20" stroke="#94A3B8" strokeOpacity="0.15" />
                      <line x1="0" y1="60" x2="600" y2="60" stroke="#94A3B8" strokeOpacity="0.15" />
                      <line x1="0" y1="100" x2="600" y2="100" stroke="#94A3B8" strokeOpacity="0.15" />
                      <line x1="0" y1="140" x2="600" y2="140" stroke="#94A3B8" strokeOpacity="0.15" />

                      {/* Bar groups for Mon - Sat */}
                      {[
                        { day: "Mon", dom: 620, com: 180, x: 40 },
                        { day: "Tue", dom: 740, com: 220, x: 130 },
                        { day: "Wed", dom: 680, com: 210, x: 220 },
                        { day: "Thu", dom: 810, com: 260, x: 310 },
                        { day: "Fri", dom: 890, com: 310, x: 400 },
                        { day: "Sat (Today)", dom: 940, com: 340, x: 490 },
                      ].map((item, idx) => {
                        // calculate bar height: scale factor approx 0.1
                        const domH = item.dom * 0.1;
                        const comH = item.com * 0.1;
                        return (
                          <g key={idx}>
                            {/* Domestic Bar */}
                            <rect
                              x={item.x}
                              y={140 - domH}
                              width="22"
                              height={domH}
                              rx="3"
                              fill="#EA580C"
                            />
                            {/* Commercial Bar */}
                            <rect
                              x={item.x + 26}
                              y={140 - comH}
                              width="22"
                              height={comH}
                              rx="3"
                              fill="#F59E0B"
                            />
                            <text
                              x={item.x + 24}
                              y="156"
                              textAnchor="middle"
                              className="text-[10px] fill-slate-400 font-sans"
                            >
                              {item.day}
                            </text>
                          </g>
                        );
                      })}
                    </svg>
                  </div>

                  {/* Summary Bar Below Graph */}
                  <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Today Yield</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">1,280 Cylinders</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Decanting Mass</span>
                      <span className="font-bold text-emerald-600">99.82% Accuracy</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Avg Dispatch Time</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">24 mins / truck</span>
                    </div>
                  </div>
                </div>

                {/* Right: Low-Stock & Safety Alerts */}
                <div className="lg:col-span-4 space-y-4">
                  {/* Alert Box */}
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-xs">
                      <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                      <span>Low Stock Alert: 47.5kg Industrial</span>
                    </div>
                    <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
                      Godown-01 has only 340 filled 47.5kg units remaining. Expected demand for commercial clients is 420 units by evening.
                    </p>
                    <div className="pt-1">
                      <Link
                        href="/demo?tab=inventory"
                        className="text-xs font-semibold text-amber-700 dark:text-amber-300 hover:underline inline-flex items-center gap-1"
                      >
                        <span>Schedule Bottling Batch</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Live Activity Feed */}
                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                        Operational Activity
                      </h4>
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>

                    <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                      <div className="flex items-start gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                        <Truck className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-slate-900 dark:text-white">
                            Truck MH-12-RN-4819 reached Stop 1
                          </p>
                          <span className="text-[10px] text-slate-400">10 mins ago • 300 Cylinders</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                        <FileCheck2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-slate-900 dark:text-white">
                            Payment ₹1.42L reconciled for North Valley
                          </p>
                          <span className="text-[10px] text-slate-400">28 mins ago • Bank Ref NEFT-9912</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <ShieldAlert className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-slate-900 dark:text-white">
                            12 Cylinders flagged for Hydro-Test
                          </p>
                          <span className="text-[10px] text-slate-400">1 hr ago • 5-Year Expiry Reached</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: 2. ORDERS QUEUE */}
            {activeTab === "orders" && (
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200/90 dark:border-slate-800 overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700/80 text-slate-500 uppercase tracking-wider font-semibold">
                    <tr>
                      <th className="px-4 py-3">Order Number</th>
                      <th className="px-4 py-3">Agency / Customer</th>
                      <th className="px-4 py-3">Type & Quantity</th>
                      <th className="px-4 py-3">Grand Total</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Assigned Truck</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {recentOrders.map((ord) => (
                      <tr key={ord.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40">
                        <td className="px-4 py-3 font-mono font-medium text-slate-900 dark:text-white">
                          {ord.orderNumber}
                        </td>
                        <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-200">
                          {ord.entityName}
                        </td>
                        <td className="px-4 py-3">
                          {ord.items.map((it, i) => (
                            <span key={i} className="inline-block mr-2 font-mono">
                              {it.quantity}x {it.cylinderType}
                            </span>
                          ))}
                        </td>
                        <td className="px-4 py-3 font-mono font-bold text-slate-900 dark:text-white">
                          ₹{ord.grandTotal.toLocaleString()}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={cn(
                              "px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider",
                              ord.status === "DELIVERED" && "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-400",
                              ord.status === "IN_TRANSIT" && "bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-400",
                              ord.status === "ALLOCATED" && "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-400"
                            )}
                          >
                            {ord.status.replace("_", " ")}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-slate-500 font-mono text-[11px]">
                          {ord.deliveryVehicle || "Pending Assignment"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* TAB CONTENT: 3. GODOWN STOCKS */}
            {activeTab === "stock" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {godowns.map((gd) => (
                  <div
                    key={gd.id}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {gd.name}
                        </h4>
                        <span className="text-xs text-slate-500 font-mono">{gd.code} • {gd.location}</span>
                      </div>
                      <span className="text-xs font-semibold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        Max Cap: {gd.capacityMax}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-slate-600 dark:text-slate-400">14.2kg Domestic Stock</span>
                          <span className="font-mono font-bold text-slate-900 dark:text-white">
                            {gd.currentFilledStock["14.2kg"]} Filled / {gd.currentEmptyStock["14.2kg"]} Empty
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden flex">
                          <div className="bg-orange-600 h-full w-[70%]" />
                          <div className="bg-sky-500 h-full w-[25%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-slate-600 dark:text-slate-400">19kg Commercial Stock</span>
                          <span className="font-mono font-bold text-slate-900 dark:text-white">
                            {gd.currentFilledStock["19kg"]} Filled / {gd.currentEmptyStock["19kg"]} Empty
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden flex">
                          <div className="bg-amber-500 h-full w-[65%]" />
                          <div className="bg-sky-500 h-full w-[30%]" />
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 text-xs text-slate-500 flex items-center justify-between">
                      <span>Supervisor: {gd.supervisorName}</span>
                      <span className="font-mono">{gd.supervisorPhone}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB CONTENT: 4. FLEET TRIPS */}
            {activeTab === "trips" && (
              <div className="space-y-4">
                {MOCK_DELIVERIES.map((trip) => (
                  <div
                    key={trip.id}
                    className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-orange-600">{trip.tripNumber}</span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                          {trip.vehicleNumber}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-400">
                          {trip.status}
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                        {trip.routeTitle}
                      </h4>
                      <p className="text-xs text-slate-500">
                        Driver: {trip.driverName} ({trip.driverPhone}) • Stops: {trip.completedStops}/{trip.stopsCount} Complete
                      </p>
                    </div>

                    <div className="text-right">
                      <div className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">
                        Loaded: 350 Filled Cylinders
                      </div>
                      <span className="text-[11px] text-slate-400">Started: {trip.startTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
