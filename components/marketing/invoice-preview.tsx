import React from "react";
import { MOCK_INVOICES } from "@/lib/mock-data/erp-data";
import { Receipt, FileCheck2, Building } from "lucide-react";

export function InvoicePreview() {
  const inv = MOCK_INVOICES[0];

  return (
    <section id="billing" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950/70 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider">
              Statutory Billing Engine (Sample)
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Configurable GST invoicing for domestic & commercial LPG.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              LPG taxation requires proper category segregation: e.g. 5% domestic refill rates
              versus 18% commercial supply (Sample configurable tax slabs). LPGFlow automates HSN classification,
              CGST/SGST apportionment, and statutory E-Way bill reconciliation.
            </p>

            <div className="space-y-3 text-xs text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <Receipt className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Configurable HSN codes (Sample HSN 27111900)</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <FileCheck2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>E-Way bill threshold calculation & JSON export format ready</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <Building className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Inter-state IGST vs Intra-state CGST/SGST auto-selection</span>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic Enterprise GST Tax Invoice Card */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
              {/* Invoice Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-orange-600 uppercase">
                      TAX INVOICE (DEMO PREVIEW)
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded font-mono bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-400 font-semibold">
                      PAID (SAMPLE)
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-mono text-slate-900 dark:text-white mt-1">
                    {inv.invoiceNumber}
                  </h3>
                  <span className="text-xs text-slate-500">Date: {inv.invoiceDate} • Due: {inv.dueDate}</span>
                </div>

                <div className="text-right sm:text-right text-xs text-slate-500">
                  <span className="font-semibold text-slate-800 dark:text-slate-200 block">
                    Bottling Facility (Demo Facility)
                  </span>
                  <span>GSTIN: 27SAMPLE0000A1Z5</span>
                  <span className="block text-[11px] text-slate-400">IRN: (Sample Demo Placeholder)</span>
                </div>
              </div>

              {/* Recipient Details */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                    Billed To (Authorized Agency)
                  </span>
                  <div className="font-bold text-slate-900 dark:text-white">{inv.recipientName}</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">GSTIN: {inv.recipientGstin}</div>
                  <div className="text-slate-500 text-[11px] truncate">{inv.recipientAddress}</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                    Supply Particulars
                  </span>
                  <div className="font-medium text-slate-800 dark:text-slate-200">
                    Place of Supply: {inv.placeOfSupply}
                  </div>
                  <div className="text-slate-500 text-[11px] mt-0.5">Order Ref: {inv.orderNumber}</div>
                  <div className="text-slate-500 text-[11px]">Reverse Charge: No</div>
                </div>
              </div>

              {/* Invoice Item Table */}
              <div className="border border-slate-200/80 dark:border-slate-800 rounded-xl overflow-x-auto text-xs">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 dark:bg-slate-800/70 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-semibold uppercase text-[10px]">
                    <tr>
                      <th className="px-3 py-2.5">Item Description</th>
                      <th className="px-3 py-2.5">HSN</th>
                      <th className="px-3 py-2.5 text-right">Qty</th>
                      <th className="px-3 py-2.5 text-right">Rate</th>
                      <th className="px-3 py-2.5 text-right">Taxable</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-mono text-[11px]">
                    <tr>
                      <td className="px-3 py-3 font-sans font-medium text-slate-900 dark:text-white">
                        LPG 14.2 KG Domestic Refill Cylinders (Sample Spec)
                      </td>
                      <td className="px-3 py-3 text-slate-500">{inv.hsnCode}</td>
                      <td className="px-3 py-3 text-right">{inv.quantity}</td>
                      <td className="px-3 py-3 text-right">₹{inv.unitPrice.toFixed(2)}</td>
                      <td className="px-3 py-3 text-right font-semibold">
                        ₹{inv.taxableAmount.toLocaleString()}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Totals & Tax Calculation Breakdown */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pt-2 text-xs">
                <div className="text-[11px] text-slate-400 space-y-1">
                  <p>Certified that particulars given above are sample illustrative calculations.</p>
                  <p className="font-mono text-emerald-600">Sample E-Invoice Format Ready (Preview)</p>
                </div>

                <div className="w-full sm:w-64 space-y-1.5 font-mono text-xs">
                  <div className="flex justify-between text-slate-500">
                    <span>Taxable Value:</span>
                    <span>₹{inv.taxableAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>CGST @ {inv.cgstRate}%:</span>
                    <span>₹{inv.cgstAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>SGST @ {inv.sgstRate}%:</span>
                    <span>₹{inv.sgstAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-slate-200 dark:border-slate-800 text-sm font-bold text-slate-900 dark:text-white">
                    <span>Invoice Total:</span>
                    <span>₹{inv.grandTotal.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
