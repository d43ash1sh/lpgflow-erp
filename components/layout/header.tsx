"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LPGFlowLogo } from "@/components/ui/logo";
import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button";
import { Menu, X, ArrowRight, ShieldCheck, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Platform", href: "/#platform" },
    { label: "Workflow", href: "/#workflow" },
    { label: "Cylinder Tracking", href: "/#tracking" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b",
          scrolled
            ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-slate-200/80 dark:border-slate-800 shadow-xs"
            : "bg-white/70 dark:bg-slate-950/70 backdrop-blur-xs border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <LPGFlowLogo size="md" />
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-xs xl:text-sm font-medium px-3 py-2 rounded-md transition-colors",
                    isActive
                      ? "text-orange-600 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-900"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <WhatsAppButton
              context="hero"
              variant="outline"
              size="sm"
              className="text-xs"
            >
              Talk on WhatsApp
            </WhatsAppButton>

            <Link
              href="/login"
              className="text-xs font-semibold px-3 py-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900 transition-colors"
            >
              Login
            </Link>

            <Link
              href="/demo"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white shadow-xs transition-colors"
            >
              <span>Live Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <Link
              href="/demo"
              className="text-xs font-bold px-2.5 py-1.5 rounded-md bg-orange-600 text-white"
            >
              Demo
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg sm:hidden border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
              Operations & Navigation
            </p>
            <div className="flex flex-col space-y-2">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-base font-medium text-slate-800 dark:text-slate-100 border-b border-slate-100 dark:border-slate-900"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              ))}
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-base font-semibold text-slate-800 dark:text-slate-100 border-b border-slate-100 dark:border-slate-900"
              >
                <span>Portal Login</span>
                <span className="text-xs font-normal text-slate-500">Staff / Agency / Admin</span>
              </Link>
            </div>
          </div>

          <div className="pt-6 space-y-3">
            <WhatsAppButton
              context="hero"
              variant="primary"
              size="md"
              className="w-full text-sm py-3 justify-center"
            >
              Talk on WhatsApp
            </WhatsAppButton>

            <Link
              href="/demo"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-orange-600 text-white font-semibold text-sm shadow-sm"
            >
              <span>Explore Interactive Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="text-center pt-2">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Enterprise Plant Safety & Supply Chain Ready
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
