import React from "react";
import Link from "next/link";
import { LPGFlowLogo } from "@/components/ui/logo";
import { BRAND } from "@/lib/config/brand";
import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button";
import { Phone, Mail, Clock, MapPin, AlertCircle, Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Upper Pre-Footer Callout */}
      <div className="border-b border-slate-900 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <h3 className="text-white text-base sm:text-lg font-semibold tracking-tight">
                Modernizing LPG Plant & Distribution Operations
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              From decanting to doorstep delivery: eliminate empty cylinder losses, accelerate GST billing, and maintain godown accuracy.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <WhatsAppButton
              context="demo"
              variant="primary"
              size="md"
              className="text-xs font-semibold px-4 py-2.5"
            >
              Discuss Plant Requirements
            </WhatsAppButton>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-colors"
            >
              Explore Live Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <LPGFlowLogo size="md" variant="dark" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-6">
              {BRAND.fullDescription}
            </p>
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/80 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-amber-400 font-medium">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Industry Reference Note</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                {BRAND.emergencyLabel}. LPGFlow ERP is an independent enterprise software platform for bottling plants and distributors.
              </p>
            </div>
          </div>

          {/* Platform Columns */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              ERP Modules
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/demo?tab=inventory" className="hover:text-white transition-colors">
                  Godown Inventory Engine
                </Link>
              </li>
              <li>
                <Link href="/demo?tab=cylinders" className="hover:text-white transition-colors">
                  Cylinder QR & Tare Weight
                </Link>
              </li>
              <li>
                <Link href="/demo?tab=agencies" className="hover:text-white transition-colors">
                  Agency Ledger & Indents
                </Link>
              </li>
              <li>
                <Link href="/demo?tab=deliveries" className="hover:text-white transition-colors">
                  Fleet Dispatch & Trip Sheets
                </Link>
              </li>
              <li>
                <Link href="/demo?tab=billing" className="hover:text-white transition-colors">
                  GST Invoicing & E-Way Bill
                </Link>
              </li>
              <li>
                <Link href="/demo?tab=reports" className="hover:text-white transition-colors">
                  Plant Bottling Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/services#bottling" className="hover:text-white transition-colors">
                  Bottling & Decanting Plants
                </Link>
              </li>
              <li>
                <Link href="/services#agencies" className="hover:text-white transition-colors">
                  Private LPG Distributorships
                </Link>
              </li>
              <li>
                <Link href="/services#commercial" className="hover:text-white transition-colors">
                  Commercial & Industrial Supply
                </Link>
              </li>
              <li>
                <Link href="/services#cylinder-tracking" className="hover:text-white transition-colors">
                  Empties Reconciliation
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition-colors">
                  Agency Partner Login
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition-colors">
                  Staff Dispatch Terminal
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Operations Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Operations & Inquiries
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                <span>{BRAND.operatingHours}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{BRAND.phoneDisplay}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span className="break-all">{BRAND.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                <span>{BRAND.plantLocation}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Compliance Strip */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-orange-500" />
            <span>
              &copy; {new Date().getFullYear()} {BRAND.legalEntity}. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Security Practices</span>
            <span className="hover:text-slate-400 cursor-pointer">Audit Readiness</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
