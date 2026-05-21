"use client";

import DashboardShell from "@/components/layout/DashboardShell";

const insightCards = [
  { icon: "trending_up", tag: "High Impact", tagClass: "bg-amber-50 text-amber-700 border border-amber-200", title: "Demand for Product X is expected to rise by 20% next week.", body: "Correlated with upcoming regional weather shifts and social media trend uptick in Northeast segment.", category: "Logistics / Inventory" },
  { icon: "warning", tag: "Stability", tagClass: "bg-blue-50 text-blue-700 border border-blue-200", title: "Supplier 'Alpha Logistics' lead times have increased by 1.2 days.", body: "Affecting electronics category. Adjust reorder points by +24 hours to avoid stockouts in 3 nodes.", category: "Supply Chain" },
  { icon: "payments", tag: "Efficiency", tagClass: "bg-green-50 text-green-700 border border-green-200", title: "Bundle pricing opportunity detected for Home Office SKUs.", body: "Historical data suggests a 4.2% lift in conversion if Desk Lamps are bundled with ergonomic chairs.", category: "Sales Strategy" },
  { icon: "inventory", tag: "Critical", tagClass: "bg-amber-50 text-amber-700 border border-amber-200", title: "Expiring Stock Alert: Batch #492 in Branch C.", body: "340 units of perishable items reaching best-before in 5 days. Recommend 30% markdown to clear inventory.", category: "Inventory" },
  { icon: "history", tag: "Forecast", tagClass: "bg-slate-50 text-slate-700 border border-slate-200", title: "Q4 Storage capacity projected to exceed limits by 8%.", body: "Based on current incoming shipments. Secure temporary warehouse space in Zone 2 by end of month.", category: "Logistics" },
  { icon: "group", tag: "Customer Behavior", tagClass: "bg-purple-50 text-purple-700 border border-purple-200", title: "High return rate detected for 'UltraLight' Series.", body: "Model indicates a sizing discrepancy in recent manufacturing batch. Inspect QC data for Supplier G.", category: "Product Quality" },
];

export default function InsightsPage() {
  return (
    <DashboardShell>
      <div className="p-8 max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-[36px] font-bold leading-[44px] tracking-[-0.02em] text-[#0b1c30] mb-1">AI Insights</h2>
            <p className="text-[16px] text-[#444651]">Real-time intelligence based on historical sales and logistics patterns.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 border border-[#c5c5d3] bg-white text-[#00236f] font-bold rounded-lg hover:bg-[#eff4ff] transition-colors flex items-center gap-1 text-[14px]">
              <span className="material-symbols-outlined text-[18px]">filter_list</span>
              All Categories
            </button>
            <button className="px-4 py-2 bg-[#00236f] text-white font-bold rounded-lg hover:opacity-90 transition-all flex items-center gap-1 text-[14px]">
              <span className="material-symbols-outlined text-[18px]">refresh</span>
              Re-run Engine
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-5">
          {/* Model Confidence */}
          <div className="col-span-12 md:col-span-4 bg-white border border-[#c5c5d3] p-6 rounded-xl flex flex-col justify-between">
            <div>
              <h3 className="text-[11px] font-semibold text-[#444651] uppercase mb-4">Model Confidence</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-[36px] font-bold leading-[44px] tracking-[-0.02em] text-[#00236f]">94.2%</span>
                <span className="text-[12px] font-medium text-[#006f66] bg-[#86f2e4] px-1 rounded">+1.2%</span>
              </div>
            </div>
            <div className="mt-6">
              <div className="w-full bg-[#e5eeff] h-1 rounded-full overflow-hidden">
                <div className="bg-[#00236f] h-full" style={{ width: "94.2%" }}></div>
              </div>
              <p className="text-[12px] font-medium text-[#444651] mt-2 italic">High signal quality across 12 product categories.</p>
            </div>
          </div>

          {/* Priority Insight */}
          <div className="col-span-12 md:col-span-8 bg-white border border-[#c5c5d3] p-6 rounded-xl flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-1 mb-2">
                <span className="material-symbols-outlined text-[#006a61] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                <span className="text-[11px] font-semibold text-[#006a61] uppercase">Priority Action</span>
              </div>
              <h4 className="text-[20px] font-semibold text-[#0b1c30] mb-4">Stock optimization for Branch B could save $2,400 per month in logistics overhead.</h4>
              <p className="text-[14px] text-[#444651] mb-8">Excess buffer stocks in refrigerated units are exceeding current demand curve by 15%. Recommend a 2-day deferral for the next replenishment cycle.</p>
              <button className="px-4 py-2 bg-white border border-[#00236f] text-[#00236f] font-bold rounded-lg hover:bg-[#eff4ff] transition-all text-[14px]">
                Review Inventory Plan
              </button>
            </div>
            <div className="w-full md:w-48 bg-[#e5eeff] rounded-lg flex flex-col items-center justify-center p-4">
              <span className="text-[11px] font-semibold text-[#444651] mb-1">Potential Savings</span>
              <span className="text-[30px] font-bold text-[#006a61]">$2.4k</span>
              <span className="text-[12px] font-medium text-[#444651]">Monthly</span>
            </div>
          </div>

          {/* Insight Cards */}
          {insightCards.map((card) => (
            <div key={card.title} className="insight-card col-span-12 md:col-span-4 bg-white border border-[#c5c5d3] p-6 rounded-xl hover:border-[#00236f] transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div className="p-1 bg-[#e5eeff] rounded">
                  <span className="material-symbols-outlined text-[#00236f] text-[20px]">{card.icon}</span>
                </div>
                <span className={`text-[11px] font-semibold px-2 py-1 rounded ${card.tagClass}`}>{card.tag}</span>
              </div>
              <p className="text-[18px] font-semibold text-[#0b1c30] mb-2 leading-snug">{card.title}</p>
              <p className="text-[14px] text-[#444651] mb-6">{card.body}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[12px] font-medium text-[#444651]">{card.category}</span>
                <span className="material-symbols-outlined action-arrow text-[#00236f] text-[20px]">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-between py-4 border-t border-[#c5c5d3]">
          <p className="text-[12px] font-medium text-[#444651]">Showing 6 of 24 insights generated today.</p>
          <div className="flex gap-2">
            <button disabled className="p-1 border border-[#c5c5d3] rounded hover:bg-[#eff4ff] disabled:opacity-50">
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>
            <button className="p-1 border border-[#c5c5d3] rounded hover:bg-[#eff4ff]">
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
