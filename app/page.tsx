import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/marketing/hero";
import { TrustStrip } from "@/components/marketing/trust-strip";
import { PlatformFeatures } from "@/components/marketing/platform-features";
import { DashboardPreview } from "@/components/marketing/dashboard-preview";
import { OperationWorkflow } from "@/components/marketing/operation-workflow";
import { UserRoles } from "@/components/marketing/user-roles";
import { CylinderLifecycle } from "@/components/marketing/cylinder-lifecycle";
import { DeliveryRouteMap } from "@/components/marketing/delivery-route-map";
import { InvoicePreview } from "@/components/marketing/invoice-preview";
import { AnalyticsShowcase } from "@/components/marketing/analytics-showcase";
import { SecuritySection } from "@/components/marketing/security-section";
import { ContactSection } from "@/components/marketing/contact-section";
import { FloatingWhatsApp } from "@/components/whatsapp/whatsapp-button";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 selection:bg-orange-500 selection:text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <PlatformFeatures />
        <DashboardPreview />
        <OperationWorkflow />
        <UserRoles />
        <CylinderLifecycle />
        <DeliveryRouteMap />
        <InvoicePreview />
        <AnalyticsShowcase />
        <SecuritySection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
