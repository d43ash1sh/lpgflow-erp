import Link from "next/link";
import { LPGFlowLogo } from "@/components/ui/logo";
import { Home } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-6">
        <LPGFlowLogo variant="dark" size="lg" className="mx-auto justify-center" />

        <div className="space-y-2">
          <span className="font-mono text-xs text-orange-500 uppercase tracking-widest font-bold">
            ERROR 404 // NODE NOT FOUND
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight">
            Operational Route Unavailable
          </h1>
          <p className="text-xs text-slate-400 leading-relaxed">
            The requested terminal screen or dispatch record does not exist or has been relocated.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Terminal</span>
          </Link>

          <WhatsAppButton
            context="general"
            variant="outline"
            size="md"
            className="w-full sm:w-auto text-xs"
          >
            Contact Support
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
