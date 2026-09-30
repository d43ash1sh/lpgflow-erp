"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { LPGFlowLogo } from "@/components/ui/logo";
import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button";
import {
  MOCK_DASHBOARD_STATS,
  MOCK_AGENCIES,
  MOCK_CYLINDERS,
  MOCK_ORDERS,
  MOCK_DELIVERIES,
  MOCK_INVOICES,
  MOCK_GODOWNS,
} from "@/lib/mock-data/erp-data";
import {
  LayoutDashboard,
  Users2,
  UserCheck,
  Boxes,
  ClipboardList,
  QrCode,
  Truck,
  Receipt,
  CreditCard,
  BarChart3,
  Shield,
  Settings,
  Menu,
  X,
  Search,
  Building,
  Info,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

type DemoModule =
  | "dashboard"
  | "agencies"
  | "customers"
  | "inventory"
  | "orders"
  | "cylinders"
  | "deliveries"
  | "billing"
  | "payments"
  | "reports"
  | "users"
  | "settings";

function DemoContent() {
  const searchParams = useSearchParams();
  const initialTab = (searchParams.get("tab") as DemoModule) || "dashboard";
  const [activeModule, setActiveModule] = useState<DemoModule>(initialTab);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const modulesList: {
    id: DemoModule;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    count?: number;
  }[] = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "agencies", label: "Agencies & Outlets", icon: Users2, count: MOCK_AGENCIES.length },
    { id: "customers", label: "Consumers", icon: UserCheck, count: 12 },
    { id: "inventory", label: "Godown Inventory", icon: Boxes, count: 2 },
    { id: "orders", label: "Orders & Indents", icon: ClipboardList, count: MOCK_ORDERS.length },
    { id: "cylinders", label: "Cylinder QR Tracking", icon: QrCode, count: MOCK_CYLINDERS.length },
    { id: "deliveries", label: "Fleet & Deliveries", icon: Truck, count: MOCK_DELIVERIES.length },
    { id: "billing", label: "GST Billing & E-Way", icon: Receipt, count: MOCK_INVOICES.length },
    { id: "payments", label: "Payments & Ledger", icon: CreditCard },
    { id: "reports", label: "Reports & Yield", icon: BarChart3 },
    { id: "users", label: "Staff & RBAC", icon: Shield },
    { id: "settings", label: "Plant Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen flex bg-slate-900 text-slate-100 antialiased font-sans">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-slate-800 bg-slate-950 p-4 shrink-0 justify-between">
        <div className="space-y-6">
          {/* Logo & Status */}
          <div className="px-2">
            <LPGFlowLogo variant="dark" size="md" href="/" />
            <div className="mt-3 flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px]">
              <span className="flex items-center gap-1.5 text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Demo Mode
              </span>
              <span className="text-[10px] font-mono text-orange-400 bg-orange-500/10 px-1.5 py-0.5 rounded border border-orange-500/20">
                Phase 0
              </span>
            </div>
          </div>

          {/* Module Navigation List */}
          <nav className="space-y-1">
            <span className="px-2.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Operations Navigation
            </span>
            <div className="pt-1.5 space-y-0.5">
              {modulesList.map((m) => {
                const Icon = m.icon;
                const isActive = activeModule === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setActiveModule(m.id)}
                    className={cn(
                      "w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all text-left",
                      isActive
                        ? "bg-orange-600 text-white shadow-xs font-semibold"
                        : "text-slate-400 hover:text-white hover:bg-slate-900"
                    )}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={cn("w-4 h-4", isActive ? "text-white" : "text-slate-400")} />
                      <span>{m.label}</span>
                    </div>
                    {m.count !== undefined && (
                      <span
                        className={cn(
                          "text-[10px] font-mono px-1.5 py-0.2 rounded",
                          isActive
                            ? "bg-orange-700 text-white"
                            : "bg-slate-800 text-slate-400"
                        )}
                      >
                        {m.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </nav>
        </div>

        {/* Sidebar Footer WhatsApp CTA */}
        <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-bold text-white">
            <Building className="w-4 h-4 text-orange-500" />
            <span>Plant Deployment?</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-snug">
            Need this system customized for your LPG bottling plant or agency network?
          </p>
          <WhatsAppButton
            context="demo"
            variant="primary"
            size="sm"
            className="w-full text-xs justify-center"
          >
            Chat with Engineer
          </WhatsAppButton>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Navbar */}
        <header className="sticky top-0 z-30 h-16 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md px-4 sm:px-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900"
              aria-label="Toggle navigation"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-base sm:text-lg font-bold text-white capitalize flex items-center gap-2">
              <span>{modulesList.find((m) => m.id === activeModule)?.label}</span>
              <span className="hidden sm:inline-block text-[11px] font-mono text-slate-500 font-normal">
                {"// Demo Data Environment"}
              </span>
            </h1>
          </div>

          {/* Quick Actions & Exit */}
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search orders, cylinders, agencies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-8 pr-3 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-orange-500 font-mono"
              />
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" />
            </div>

            <WhatsAppButton
              context="demo"
              variant="outline"
              size="sm"
              className="text-xs"
            >
              WhatsApp Support
            </WhatsAppButton>

            <Link
              href="/"
              className="text-xs px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300 hover:bg-slate-900 transition-colors"
            >
              Exit Demo
            </Link>
          </div>
        </header>

        {/* Mobile Navigation Drawer */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-40 bg-slate-950/95 p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <LPGFlowLogo variant="dark" size="sm" />
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1">
                {modulesList.map((m) => {
                  const Icon = m.icon;
                  const isActive = activeModule === m.id;
                  return (
                    <button
                      key={m.id}
                      onClick={() => {
                        setActiveModule(m.id);
                        setSidebarOpen(false);
                      }}
                      className={cn(
                        "w-full flex items-center justify-between p-3 rounded-xl text-sm font-medium text-left",
                        isActive
                          ? "bg-orange-600 text-white"
                          : "text-slate-400 hover:bg-slate-900"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4" />
                        <span>{m.label}</span>
                      </div>
                      {m.count !== undefined && (
                        <span className="text-xs font-mono">{m.count}</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <WhatsAppButton context="demo" variant="primary" size="md" className="w-full">
                Chat on WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        )}

        {/* View Port Router */}
        <main className="p-4 sm:p-8 space-y-6">
          {/* TAB 1: DASHBOARD */}
          {activeModule === "dashboard" && (
            <div className="space-y-6">
              {/* Top Banner Notice */}
              <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-200 text-xs flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>
                    Interactive Prototype: Data presented below represents realistic LPG plant operational flows.
                  </span>
                </div>
                <span className="font-mono text-[11px] text-orange-400">STATUS: HEALTHY</span>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[11px] text-slate-500 block">Today&apos;s Orders</span>
                  <div className="text-xl font-bold font-mono text-white mt-1">
                    {MOCK_DASHBOARD_STATS.todayOrdersCount}
                  </div>
                  <span className="text-[10px] text-emerald-400 font-medium">+14.2% vs avg</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[11px] text-slate-500 block">Pending Dispatch</span>
                  <div className="text-xl font-bold font-mono text-amber-400 mt-1">
                    {MOCK_DASHBOARD_STATS.pendingDeliveriesCount}
                  </div>
                  <span className="text-[10px] text-slate-400">In loading bay</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[11px] text-slate-500 block">Filled Cylinders</span>
                  <div className="text-xl font-bold font-mono text-white mt-1">
                    {MOCK_DASHBOARD_STATS.filledStockTotal.toLocaleString()}
                  </div>
                  <span className="text-[10px] text-emerald-400 font-medium">Sound stock</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[11px] text-slate-500 block">Empty Returns</span>
                  <div className="text-xl font-bold font-mono text-white mt-1">
                    {MOCK_DASHBOARD_STATS.emptyStockTotal.toLocaleString()}
                  </div>
                  <span className="text-[10px] text-sky-400 font-medium">Refill queue</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[11px] text-slate-500 block">Outstanding Dues</span>
                  <div className="text-xl font-bold font-mono text-rose-400 mt-1">
                    {MOCK_DASHBOARD_STATS.outstandingDuesFormatted}
                  </div>
                  <span className="text-[10px] text-slate-400">4 agencies</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[11px] text-slate-500 block">Monthly Sales</span>
                  <div className="text-xl font-bold font-mono text-white mt-1">
                    {MOCK_DASHBOARD_STATS.monthlySalesFormatted}
                  </div>
                  <span className="text-[10px] text-emerald-400 font-medium">GST inclusive</span>
                </div>
              </div>

              {/* Active Deliveries Quick Status */}
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Truck className="w-4 h-4 text-orange-500" />
                    <span>Active Delivery Dispatches</span>
                  </h3>
                  <button
                    onClick={() => setActiveModule("deliveries")}
                    className="text-xs text-orange-400 hover:underline"
                  >
                    View Fleet &rarr;
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {MOCK_DELIVERIES.map((del) => (
                    <div key={del.id} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-orange-400">{del.tripNumber}</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800">
                          {del.status}
                        </span>
                      </div>
                      <p className="font-semibold text-slate-200">{del.routeTitle}</p>
                      <div className="flex items-center justify-between text-slate-400 text-[11px]">
                        <span>Truck: {del.vehicleNumber}</span>
                        <span>Driver: {del.driverName}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Orders Table */}
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <ClipboardList className="w-4 h-4 text-orange-500" />
                    <span>Recent Agency Indents</span>
                  </h3>
                  <button
                    onClick={() => setActiveModule("orders")}
                    className="text-xs text-orange-400 hover:underline"
                  >
                    View All Orders &rarr;
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-900 text-slate-400 uppercase text-[10px] font-semibold">
                      <tr>
                        <th className="px-3 py-2">Order #</th>
                        <th className="px-3 py-2">Agency</th>
                        <th className="px-3 py-2">Quantity</th>
                        <th className="px-3 py-2">Total Amount</th>
                        <th className="px-3 py-2">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 font-mono text-[11px]">
                      {MOCK_ORDERS.map((ord) => (
                        <tr key={ord.id} className="hover:bg-slate-900/60">
                          <td className="px-3 py-2.5 font-bold text-orange-400">{ord.orderNumber}</td>
                          <td className="px-3 py-2.5 font-sans font-medium text-slate-200">{ord.entityName}</td>
                          <td className="px-3 py-2.5">{ord.totalQuantity} Cylinders</td>
                          <td className="px-3 py-2.5 font-bold text-white">₹{ord.grandTotal.toLocaleString()}</td>
                          <td className="px-3 py-2.5 font-sans">
                            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800 text-slate-300">
                              {ord.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: AGENCIES */}
          {activeModule === "agencies" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-white">Agency & Distributor Management</h2>
                  <p className="text-xs text-slate-400">
                    Directory of authorized LPG channel partners with real-time cylinder quotas and credit limits.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <WhatsAppButton context="agency" variant="primary" size="sm">
                    Inquire Onboarding
                  </WhatsAppButton>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {MOCK_AGENCIES.map((ag) => (
                  <div key={ag.id} className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-orange-400">{ag.code}</span>
                        <h3 className="text-sm font-bold text-white">{ag.name}</h3>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800">
                        {ag.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-slate-900">
                        <span className="text-[10px] text-slate-500 block">Credit Limit</span>
                        <span className="font-mono font-bold text-white">₹{ag.creditLimit.toLocaleString()}</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900">
                        <span className="text-[10px] text-slate-500 block">Current Outstanding</span>
                        <span className="font-mono font-bold text-rose-400">₹{ag.currentOutstanding.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="space-y-1 text-xs text-slate-400">
                      <p>Proprietor: <span className="text-slate-200">{ag.proprietor}</span> ({ag.phone})</p>
                      <p>Territory: <span className="text-slate-200">{ag.territory}</span></p>
                      <p className="font-mono text-[11px]">GSTIN: {ag.gstin}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                      <span className="text-slate-400">Cylinders in Custody:</span>
                      <span className="font-mono font-bold text-orange-400">
                        {ag.cylindersInCirculation["14.2kg"]} Dom / {ag.cylindersInCirculation["19kg"]} Com
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: CUSTOMERS */}
          {activeModule === "customers" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-white">Consumer Refill Accounts</h2>
                <p className="text-xs text-slate-400">
                  Domestic households and commercial kitchens connected to authorized agency zones.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-900 text-slate-400 uppercase text-[10px] font-semibold">
                      <tr>
                        <th className="px-3 py-2">Consumer #</th>
                        <th className="px-3 py-2">Customer Name</th>
                        <th className="px-3 py-2">Type</th>
                        <th className="px-3 py-2">Assigned Agency</th>
                        <th className="px-3 py-2">Phone</th>
                        <th className="px-3 py-2">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-xs">
                      {[
                        { num: "CX-88912", name: "Apex Multi-Cuisine Kitchens", type: "COMMERCIAL (19KG)", agency: "North Valley Gas", phone: "+91 98221 55661", status: "ACTIVE" },
                        { num: "CX-88913", name: "Grand Vista Banquet Hall", type: "COMMERCIAL (47.5KG)", agency: "Royal Flame Commercial", phone: "+91 98190 44332", status: "ACTIVE" },
                        { num: "CX-50124", name: "Sunita K. Sharma", type: "DOMESTIC (14.2KG)", agency: "Green Flame Energy", phone: "+91 98334 11223", status: "ACTIVE" },
                        { num: "CX-50125", name: "Vikram R. Nair", type: "DOMESTIC (14.2KG)", agency: "Metro LPG Express", phone: "+91 98450 77889", status: "ACTIVE" },
                      ].map((cx, idx) => (
                        <tr key={idx} className="hover:bg-slate-900/60 font-mono text-[11px]">
                          <td className="px-3 py-2.5 font-bold text-orange-400">{cx.num}</td>
                          <td className="px-3 py-2.5 font-sans font-medium text-slate-200">{cx.name}</td>
                          <td className="px-3 py-2.5 text-slate-300">{cx.type}</td>
                          <td className="px-3 py-2.5 font-sans text-slate-400">{cx.agency}</td>
                          <td className="px-3 py-2.5 text-slate-400">{cx.phone}</td>
                          <td className="px-3 py-2.5 font-sans">
                            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-950 text-emerald-400">
                              {cx.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: GODOWN INVENTORY */}
          {activeModule === "inventory" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-white">Plant Godown & Yard Inventory</h2>
                <p className="text-xs text-slate-400">
                  Real-time segregated physical stock counts across filling lines and distribution godowns.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {MOCK_GODOWNS.map((gd) => (
                  <div key={gd.id} className="rounded-xl border border-slate-800 bg-slate-950 p-6 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div>
                        <h3 className="text-sm font-bold text-white">{gd.name}</h3>
                        <span className="text-xs text-slate-500 font-mono">{gd.code}</span>
                      </div>
                      <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2 py-1 rounded">
                        Max Cap: {gd.capacityMax}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-300 font-medium">14.2 KG Domestic Refill Stock</span>
                          <span className="font-mono text-orange-400 font-bold">
                            {gd.currentFilledStock["14.2kg"]} Filled / {gd.currentEmptyStock["14.2kg"]} Empty
                          </span>
                        </div>
                        <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden flex">
                          <div className="bg-orange-600 h-full w-[72%]" />
                          <div className="bg-sky-500 h-full w-[24%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-300 font-medium">19.0 KG Commercial Stock</span>
                          <span className="font-mono text-amber-400 font-bold">
                            {gd.currentFilledStock["19kg"]} Filled / {gd.currentEmptyStock["19kg"]} Empty
                          </span>
                        </div>
                        <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden flex">
                          <div className="bg-amber-500 h-full w-[65%]" />
                          <div className="bg-sky-500 h-full w-[30%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-300 font-medium">47.5 KG Industrial Manifold Stock</span>
                          <span className="font-mono text-emerald-400 font-bold">
                            {gd.currentFilledStock["47.5kg"]} Filled / {gd.currentEmptyStock["47.5kg"]} Empty
                          </span>
                        </div>
                        <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden flex">
                          <div className="bg-emerald-600 h-full w-[60%]" />
                          <div className="bg-sky-500 h-full w-[25%]" />
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 flex justify-between">
                      <span>Supervisor: {gd.supervisorName}</span>
                      <span className="font-mono">{gd.supervisorPhone}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: ORDERS */}
          {activeModule === "orders" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-white">Order Pipeline & Indents</h2>
                  <p className="text-xs text-slate-400">
                    Track indents from booking to stock allocation, loading, and confirmed delivery.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-900 text-slate-400 uppercase text-[10px] font-semibold">
                    <tr>
                      <th className="px-3 py-2.5">Order Number</th>
                      <th className="px-3 py-2.5">Agency</th>
                      <th className="px-3 py-2.5">Order Date</th>
                      <th className="px-3 py-2.5">Items</th>
                      <th className="px-3 py-2.5">Grand Total</th>
                      <th className="px-3 py-2.5">Payment</th>
                      <th className="px-3 py-2.5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 font-mono text-[11px]">
                    {MOCK_ORDERS.map((ord) => (
                      <tr key={ord.id} className="hover:bg-slate-900/60">
                        <td className="px-3 py-3 font-bold text-orange-400">{ord.orderNumber}</td>
                        <td className="px-3 py-3 font-sans font-medium text-slate-200">{ord.entityName}</td>
                        <td className="px-3 py-3 text-slate-400">{ord.orderDate}</td>
                        <td className="px-3 py-3">
                          {ord.items.map((it, i) => (
                            <span key={i} className="inline-block mr-2 text-slate-300">
                              {it.quantity}x {it.cylinderType}
                            </span>
                          ))}
                        </td>
                        <td className="px-3 py-3 font-bold text-white">₹{ord.grandTotal.toLocaleString()}</td>
                        <td className="px-3 py-3 font-sans">
                          <span className={cn(
                            "px-2 py-0.5 rounded text-[10px] font-semibold",
                            ord.paymentStatus === "PAID" && "bg-emerald-950 text-emerald-400",
                            ord.paymentStatus === "PARTIAL" && "bg-amber-950 text-amber-400",
                            ord.paymentStatus === "PENDING" && "bg-rose-950 text-rose-400"
                          )}>
                            {ord.paymentStatus}
                          </span>
                        </td>
                        <td className="px-3 py-3 font-sans">
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800 text-slate-200">
                            {ord.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 6: CYLINDERS QR */}
          {activeModule === "cylinders" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-white">Serialized Cylinder Assets & Barcode/QR</h2>
                <p className="text-xs text-slate-400">
                  Individual cylinder tracking, tare audits, and statutory 5-year hydro-testing compliance.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {MOCK_CYLINDERS.map((cyl) => (
                  <div key={cyl.serialNumber} className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <QrCode className="w-5 h-5 text-orange-500" />
                        <div>
                          <span className="text-[10px] text-slate-500 block">Serial Number</span>
                          <span className="font-mono font-bold text-white">{cyl.serialNumber}</span>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800 text-orange-400 font-mono">
                        {cyl.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-xs pt-1">
                      <div className="p-2 rounded bg-slate-900">
                        <span className="text-[10px] text-slate-500 block">Type</span>
                        <span className="font-semibold text-slate-200">{cyl.cylinderType}</span>
                      </div>
                      <div className="p-2 rounded bg-slate-900">
                        <span className="text-[10px] text-slate-500 block">Tare Weight</span>
                        <span className="font-mono font-semibold text-slate-200">{cyl.tareWeightActual} KG</span>
                      </div>
                      <div className="p-2 rounded bg-slate-900">
                        <span className="text-[10px] text-slate-500 block">Next Test Due</span>
                        <span className="font-mono font-semibold text-amber-400">{cyl.nextTestDueDate}</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-400 font-mono pt-1">
                      QR Payload: <span className="text-slate-300">{cyl.qrPayload}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: DELIVERIES & FLEET */}
          {activeModule === "deliveries" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-white">Fleet Dispatch & Route Logistics</h2>
                <p className="text-xs text-slate-400">
                  Truck allocations, loading authorizations, trip sheets, and statutory road gate passes.
                </p>
              </div>

              <div className="space-y-4">
                {MOCK_DELIVERIES.map((trip) => (
                  <div key={trip.id} className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-orange-400 text-sm">{trip.tripNumber}</span>
                          <span className="text-slate-600">•</span>
                          <span className="font-mono font-bold text-white text-sm">{trip.vehicleNumber}</span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-950 text-emerald-400">
                            {trip.status}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 font-semibold mt-1">{trip.routeTitle}</p>
                      </div>

                      <div className="text-left sm:text-right text-xs">
                        <span className="text-slate-400 block">Driver: {trip.driverName}</span>
                        <span className="font-mono text-slate-300">{trip.driverPhone}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      <div className="p-2.5 rounded bg-slate-900">
                        <span className="text-[10px] text-slate-500 block">Filled 14.2kg Loaded</span>
                        <span className="font-mono font-bold text-white">{trip.cylindersLoaded.filled["14.2kg"]}</span>
                      </div>
                      <div className="p-2.5 rounded bg-slate-900">
                        <span className="text-[10px] text-slate-500 block">Filled 19kg Loaded</span>
                        <span className="font-mono font-bold text-white">{trip.cylindersLoaded.filled["19kg"]}</span>
                      </div>
                      <div className="p-2.5 rounded bg-slate-900">
                        <span className="text-[10px] text-slate-500 block">Route Stops</span>
                        <span className="font-mono font-bold text-slate-200">{trip.completedStops} of {trip.stopsCount} Complete</span>
                      </div>
                      <div className="p-2.5 rounded bg-slate-900">
                        <span className="text-[10px] text-slate-500 block">Trip Start</span>
                        <span className="font-mono font-bold text-slate-200">{trip.startTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 8: BILLING */}
          {activeModule === "billing" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-white">GST Invoicing & E-Way Tax Engine</h2>
                <p className="text-xs text-slate-400">
                  HSN 27111900 dual-tax computation, CGST/SGST apportionment, and verified electronic bills.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-900 text-slate-400 uppercase text-[10px] font-semibold">
                    <tr>
                      <th className="px-3 py-2.5">Invoice #</th>
                      <th className="px-3 py-2.5">Billed Entity</th>
                      <th className="px-3 py-2.5">Cylinder Spec</th>
                      <th className="px-3 py-2.5">Taxable</th>
                      <th className="px-3 py-2.5">GST Rate</th>
                      <th className="px-3 py-2.5">Total Amount</th>
                      <th className="px-3 py-2.5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 font-mono text-[11px]">
                    {MOCK_INVOICES.map((inv) => (
                      <tr key={inv.id} className="hover:bg-slate-900/60">
                        <td className="px-3 py-3 font-bold text-orange-400">{inv.invoiceNumber}</td>
                        <td className="px-3 py-3 font-sans font-medium text-slate-200">{inv.recipientName}</td>
                        <td className="px-3 py-3">{inv.quantity}x {inv.cylinderType}</td>
                        <td className="px-3 py-3 font-bold text-slate-300">₹{inv.taxableAmount.toLocaleString()}</td>
                        <td className="px-3 py-3 text-emerald-400 font-bold">{inv.cgstRate + inv.sgstRate}% GST</td>
                        <td className="px-3 py-3 font-bold text-white">₹{inv.grandTotal.toLocaleString()}</td>
                        <td className="px-3 py-3 font-sans">
                          <span className={cn(
                            "px-2 py-0.5 rounded text-[10px] font-semibold",
                            inv.status === "PAID" && "bg-emerald-950 text-emerald-400",
                            inv.status === "UNPAID" && "bg-rose-950 text-rose-400"
                          )}>
                            {inv.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 9: PAYMENTS */}
          {activeModule === "payments" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-white">Payment Collections & Ledger Audit</h2>
                <p className="text-xs text-slate-400">
                  Bank transfer matching, agency security deposit ledger, and overdue aging reports.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-xs text-slate-400 block">Total Outstanding Balance</span>
                  <div className="text-2xl font-bold font-mono text-rose-400 mt-1">₹4,85,200</div>
                  <span className="text-[10px] text-slate-500 mt-1 block">Across 4 distributor accounts</span>
                </div>

                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-xs text-slate-400 block">Reconciled Today</span>
                  <div className="text-2xl font-bold font-mono text-emerald-400 mt-1">₹5,18,800</div>
                  <span className="text-[10px] text-slate-500 mt-1 block">NEFT, RTGS & Verified Cash</span>
                </div>

                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-xs text-slate-400 block">Total Agency Security Held</span>
                  <div className="text-2xl font-bold font-mono text-white mt-1">₹23,00,000</div>
                  <span className="text-[10px] text-slate-500 mt-1 block">Against cylinder quotas</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 10: REPORTS */}
          {activeModule === "reports" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-white">Bottling Yield & Turnaround Analytics</h2>
                <p className="text-xs text-slate-400">
                  Mass balance loss calculations, line filling speeds, and distributor velocity.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                <h3 className="text-sm font-bold text-white">Daily Decanting Mass Balance Audit</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Inward Decanted Tankers (Sample)</span>
                    <span className="text-lg font-bold font-mono text-white mt-0.5 block">36,420 KG</span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Gross Cylinder Output (Sample)</span>
                    <span className="text-lg font-bold font-mono text-white mt-0.5 block">36,380 KG</span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Decanting Variance (Sample)</span>
                    <span className="text-lg font-bold font-mono text-emerald-400 mt-0.5 block">0.11% (Illustrative)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 11: USERS & RBAC */}
          {activeModule === "users" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-white">Staff Roster & Role Permissions</h2>
                <p className="text-xs text-slate-400">
                  Strict principle of least privilege controlling yard, weighing, and financial operations.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-900 text-slate-400 uppercase text-[10px] font-semibold">
                    <tr>
                      <th className="px-3 py-2.5">User</th>
                      <th className="px-3 py-2.5">Role</th>
                      <th className="px-3 py-2.5">Department</th>
                      <th className="px-3 py-2.5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 font-mono text-[11px]">
                    {[
                      { name: "Demo Admin User", email: "admin@sample-plant.demo", role: "ADMIN", dept: "Plant Executive", status: "ACTIVE" },
                      { name: "Demo Yard Supervisor", email: "yard@sample-plant.demo", role: "STAFF", dept: "Godown Yard", status: "ACTIVE" },
                      { name: "Demo Dispatch Driver", email: "driver@sample-plant.demo", role: "STAFF", dept: "Logistics Dispatch", status: "ACTIVE" },
                      { name: "Demo Agency Principal", email: "agency@sample-lpg.demo", role: "AGENCY", dept: "Channel Distributor", status: "ACTIVE" },
                    ].map((u, i) => (
                      <tr key={i} className="hover:bg-slate-900/60">
                        <td className="px-3 py-3 font-sans font-medium text-slate-200">
                          {u.name} <span className="block text-slate-500 font-mono text-[10px]">{u.email}</span>
                        </td>
                        <td className="px-3 py-3 font-bold text-orange-400">{u.role}</td>
                        <td className="px-3 py-3 font-sans text-slate-300">{u.dept}</td>
                        <td className="px-3 py-3 font-sans">
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-950 text-emerald-400">
                            {u.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 12: SETTINGS */}
          {activeModule === "settings" && (
            <div className="space-y-6 max-w-3xl">
              <div>
                <h2 className="text-lg font-bold text-white">Plant Parameters & Statutory Setup</h2>
                <p className="text-xs text-slate-400">
                  Global parameters for cylinder weights, safety thresholds, and tax rules.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-6 space-y-4 text-xs">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-300">Plant / Bottling Facility Name</label>
                  <input
                    type="text"
                    defaultValue="LPGFlow Central Bottling & Decanting Facility"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white font-mono"
                    readOnly
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-semibold text-slate-300">Domestic LPG GST Rate (%)</label>
                    <input
                      type="text"
                      defaultValue="5.0%"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white font-mono"
                      readOnly
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-semibold text-slate-300">Commercial LPG GST Rate (%)</label>
                    <input
                      type="text"
                      defaultValue="18.0%"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white font-mono"
                      readOnly
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-300">Periodic Cylinder Inspection Interval (Sample Rule)</label>
                  <input
                    type="text"
                    defaultValue="5 Years (Configurable Inspection / Re-Test Parameter)"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white font-mono"
                    readOnly
                  />
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default function DemoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">Loading LPGFlow Demo Console...</div>}>
      <DemoContent />
    </Suspense>
  );
}
