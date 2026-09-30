"use client";

import React from "react";
import { getWhatsAppUrl, WhatsAppContext } from "@/lib/utils/whatsapp";
import { cn } from "@/lib/utils/cn";

export interface WhatsAppButtonProps {
  context?: WhatsAppContext;
  customMessage?: string;
  variant?: "primary" | "secondary" | "outline" | "compact" | "badge";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
  iconOnly?: boolean;
}

export function WhatsAppButton({
  context = "general",
  customMessage,
  variant = "primary",
  size = "md",
  className = "",
  children,
  iconOnly = false,
}: WhatsAppButtonProps) {
  const url = getWhatsAppUrl(context, customMessage);

  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 rounded-lg gap-1.5",
    md: "text-sm px-4 py-2.5 rounded-lg gap-2 shadow-sm",
    lg: "text-base px-6 py-3.5 rounded-xl gap-2.5 shadow-md",
  };

  const variantStyles = {
    primary:
      "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-700/20 focus-visible:ring-emerald-500",
    secondary:
      "bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/20 focus-visible:ring-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100",
    outline:
      "border border-emerald-600/40 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 focus-visible:ring-emerald-500",
    compact:
      "text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 px-2 py-1 rounded",
    badge:
      "text-xs bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 px-2.5 py-1 rounded-full",
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Connect with our LPG Operations team on WhatsApp"
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
    >
      {/* WhatsApp Official Style Icon */}
      <svg
        className={size === "sm" ? "w-3.5 h-3.5" : size === "lg" ? "w-5 h-5" : "w-4 h-4"}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.68C7.02 10.88 7.9 12.03 8.02 12.19C8.14 12.35 9.73 14.81 12.18 15.87C14.21 16.74 14.63 16.57 15.08 16.53C15.53 16.48 16.52 15.93 16.73 15.35C16.94 14.77 16.94 14.27 16.88 14.17C16.82 14.07 16.66 14.01 16.41 13.88C16.16 13.76 14.94 13.16 14.71 13.08C14.49 13 14.32 12.96 14.16 13.21C13.99 13.46 13.52 14.01 13.38 14.17C13.23 14.34 13.09 14.36 12.84 14.23C12.59 14.11 11.79 13.84 10.84 13C10.1 12.34 9.6 11.53 9.46 11.28C9.31 11.03 9.44 10.9 9.57 10.77C9.68 10.66 9.82 10.48 9.95 10.33C10.07 10.18 10.12 10.07 10.2 9.91C10.28 9.74 10.24 9.6 10.18 9.48C10.12 9.35 9.65 8.21 9.46 7.74C9.27 7.28 9.08 7.34 8.93 7.33C8.79 7.33 8.67 7.33 8.53 7.33Z" />
      </svg>
      {!iconOnly && <span>{children || "Talk on WhatsApp"}</span>}
    </a>
  );
}

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      <span className="hidden sm:inline-block mr-2 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Quick Plant Query? Chat on WhatsApp
      </span>
      <WhatsAppButton
        context="general"
        size="lg"
        variant="primary"
        className="w-14 h-14 !p-0 rounded-full shadow-2xl hover:scale-105 border-2 border-white/20"
        iconOnly
      />
    </div>
  );
}
