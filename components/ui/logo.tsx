import React from "react";
import Link from "next/link";
import { BRAND } from "@/lib/config/brand";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "auto";
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  href?: string;
}

export function LPGFlowLogoIcon({
  className = "w-8 h-8",
  accent = "#EA580C",
}: {
  className?: string;
  accent?: string;
}) {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="LPGFlow ERP Mark"
    >
      {/* Background container with subtle industrial radius */}
      <rect width="44" height="44" rx="10" fill="#0F172A" />

      {/* Outer flow circuit arcs representing telemetry and supply-chain loop */}
      <path
        d="M 8 22 C 8 13.5 14 8 22 8"
        stroke={accent}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="1 3"
      />
      <path
        d="M 36 22 C 36 30.5 30 36 22 36"
        stroke={accent}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* LPG Cylinder Body */}
      {/* Cylinder Valve Top Guard Collar */}
      <path
        d="M18 12 H26 V15 H18 Z"
        fill="#94A3B8"
        stroke="#475569"
        strokeWidth="1"
      />
      {/* Neck Valve */}
      <rect x="20.5" y="14" width="3" height="3" rx="0.5" fill="#F8FAFC" />

      {/* Main Cylinder Domed Tank */}
      <path
        d="M 16 19 C 16 16.5 28 16.5 28 19 V 29 C 28 31.5 16 31.5 16 29 Z"
        fill="url(#cylGradient)"
      />

      {/* Cylinder Foot Ring */}
      <path
        d="M 17 30 H 27 V 32 C 27 33 17 33 17 32 Z"
        fill="#334155"
      />

      {/* Central Flame / Energy Spark inside cylinder */}
      <path
        d="M 22 20.5 C 23.5 22.5 24.5 24 23.8 25.8 C 23.2 27.2 20.8 27.2 20.2 25.8 C 19.5 24 20.5 22.5 22 20.5 Z"
        fill="#F59E0B"
      />

      {/* Connected Digital Telemetry Nodes */}
      <circle cx="8" cy="22" r="2.2" fill={accent} />
      <circle cx="36" cy="22" r="2.2" fill="#10B981" />
      <circle cx="22" cy="8" r="2" fill="#38BDF8" />

      {/* Gradients */}
      <defs>
        <linearGradient id="cylGradient" x1="16" y1="17" x2="28" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EA580C" />
          <stop offset="0.6" stopColor="#C2410C" />
          <stop offset="1" stopColor="#9A3412" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LPGFlowLogo({
  className = "",
  variant = "auto",
  showText = true,
  size = "md",
  href = "/",
}: LogoProps) {
  const sizeClasses = {
    sm: "h-7 w-7",
    md: "h-9 w-9",
    lg: "h-11 w-11",
  };

  const titleSizes = {
    sm: "text-base font-bold",
    md: "text-lg font-bold tracking-tight",
    lg: "text-xl font-bold tracking-tight",
  };

  const textTheme =
    variant === "dark"
      ? "text-white"
      : variant === "light"
      ? "text-slate-900"
      : "text-slate-900 dark:text-white";

  const content = (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <LPGFlowLogoIcon className={sizeClasses[size]} />
      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span className={`${titleSizes[size]} ${textTheme}`}>
              {BRAND.shortName}
            </span>
            <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
              ERP
            </span>
          </div>
          <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 tracking-wider uppercase mt-0.5">
            LPG Plant & Dist.
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg">
        {content}
      </Link>
    );
  }

  return content;
}
