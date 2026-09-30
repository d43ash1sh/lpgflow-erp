"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LPGFlowLogo } from "@/components/ui/logo";
import { BRAND } from "@/lib/config/brand";
import {
  ShieldCheck,
  Lock,
  Mail,
  ArrowRight,
  Info,
  CheckCircle2,
  HardHat,
  Store,
  UserCheck,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

type RoleOption = "ADMIN" | "STAFF" | "AGENCY" | "CUSTOMER";

export default function LoginPage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<RoleOption>("ADMIN");
  const [email, setEmail] = useState("owner@lpgflow.demo");
  const [password, setPassword] = useState("••••••••••••");
  const [rememberMe, setRememberMe] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const roleCredentials: Record<
    RoleOption,
    { email: string; label: string; icon: React.ComponentType<{ className?: string }> }
  > = {
    ADMIN: { email: "owner@lpgflow.demo", label: "Admin / Plant Owner", icon: ShieldCheck },
    STAFF: { email: "dispatch@lpgflow.demo", label: "Operations Staff", icon: HardHat },
    AGENCY: { email: "northvalley@lpgagencies.demo", label: "Agency Distributor", icon: Store },
    CUSTOMER: { email: "client01@commercialgas.demo", label: "Commercial Client", icon: UserCheck },
  };

  const handleRoleSelect = (role: RoleOption) => {
    setSelectedRole(role);
    setEmail(roleCredentials[role].email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Smooth transition to demo dashboard with the selected role
    setTimeout(() => {
      router.push(`/demo?role=${selectedRole.toLowerCase()}`);
    }, 600);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-white dark:bg-slate-950">
      {/* Left Column: Brand & Operational Visuals */}
      <div className="hidden lg:flex lg:col-span-5 bg-slate-950 text-white p-12 flex-col justify-between relative overflow-hidden border-r border-slate-800">
        {/* Abstract background gradient glow */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Logo */}
        <div className="relative z-10">
          <LPGFlowLogo variant="dark" size="lg" />
        </div>

        {/* Center Presentation Visual */}
        <div className="relative z-10 space-y-6 max-w-md">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider border border-orange-500/30">
            Industrial Operations Portal
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white leading-tight">
            Centralized terminal access for the downstream LPG ecosystem.
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Securely authenticate into your plant control terminal, distributor indent queue,
            or dispatch logbook with role-enforced access privileges.
          </p>

          <div className="space-y-3 pt-2 text-xs text-slate-300">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Multi-tier RBAC for Plant, Yard, and Agency Users</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Encrypted session tokens & tamper-evident audit logs</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Real-time sync with bottling carousels & weighbridges</span>
            </div>
          </div>
        </div>

        {/* Bottom Security Note */}
        <div className="relative z-10 pt-6 border-t border-slate-800/80 text-[11px] text-slate-500 flex items-center justify-between">
          <span>&copy; {new Date().getFullYear()} {BRAND.legalEntity}</span>
          <span className="font-mono text-emerald-500">TLS 1.3 ENCRYPTED</span>
        </div>
      </div>

      {/* Right Column: Premium Login Form Card */}
      <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-12 lg:p-16">
        {/* Mobile Header Logo */}
        <div className="flex items-center justify-between lg:hidden mb-8">
          <LPGFlowLogo size="md" />
          <Link
            href="/"
            className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900"
          >
            Back to Home
          </Link>
        </div>

        <div className="max-w-md w-full mx-auto my-auto space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Sign In to LPGFlow
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Select your role profile to access your designated operational dashboard.
            </p>
          </div>

          {/* Quick Demo Role Selector Pills */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
              Operational Role Persona:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(["ADMIN", "STAFF", "AGENCY", "CUSTOMER"] as RoleOption[]).map((r) => {
                const isSelected = selectedRole === r;
                const Icon = roleCredentials[r].icon;
                return (
                  <button
                    key={r}
                    type="button"
                    onClick={() => handleRoleSelect(r)}
                    className={cn(
                      "flex items-center gap-2 p-2.5 rounded-xl border text-xs font-medium transition-all text-left",
                      isSelected
                        ? "border-orange-500 bg-orange-50 dark:bg-orange-950/40 text-orange-900 dark:text-orange-200 shadow-2xs font-semibold"
                        : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900"
                    )}
                  >
                    <Icon className={cn("w-4 h-4", isSelected ? "text-orange-600" : "text-slate-400")} />
                    <span className="truncate">{roleCredentials[r].label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 pt-1">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 font-mono"
                  required
                />
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Password
                </label>
                <span className="text-[11px] text-orange-600 hover:underline cursor-pointer">
                  Forgot password?
                </span>
              </div>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 font-mono"
                  required
                />
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded text-orange-600 focus:ring-orange-500 w-3.5 h-3.5"
                />
                <span className="text-slate-600 dark:text-slate-400">Remember credentials</span>
              </label>

              <span className="text-[11px] text-slate-400">Demo auto-filled</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <span>{isSubmitting ? "Authenticating Session..." : `Sign In as ${roleCredentials[selectedRole].label}`}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Single-Sign On / Alternative */}
          <div className="space-y-3 pt-2">
            <div className="relative flex items-center justify-center">
              <div className="border-t border-slate-200 dark:border-slate-800 w-full" />
              <span className="bg-white dark:bg-slate-950 px-3 text-[11px] text-slate-400 uppercase font-semibold">
                Or
              </span>
            </div>

            <button
              type="button"
              disabled
              className="w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-400 text-xs font-medium flex items-center justify-center gap-2 cursor-not-allowed bg-slate-50 dark:bg-slate-900/50"
            >
              <span>Google SSO (Enterprise Workspace)</span>
              <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-500">
                Coming Soon
              </span>
            </button>
          </div>

          {/* Honest Demo Disclaimer Notice */}
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-500 space-y-1">
            <div className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300">
              <Info className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span>Phase 0 Frontend Demonstration Mode</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              No backend database call is made. Clicking Sign In enters the interactive demonstration portal
              pre-configured for your chosen role profile.
            </p>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="max-w-md w-full mx-auto text-center pt-8 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            &larr; Return to LPGFlow Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
