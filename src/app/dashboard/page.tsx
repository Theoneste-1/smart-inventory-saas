"use client";

import React from "react";

const kpiCards = [
  { label: "Total Revenue", value: "$2.4M", change: "+12.5%", trend: "up", color: "text-[#006a61]", path: "M0,35 Q20,30 40,15 T100,5" },
  { label: "Total Orders", value: "14.2k", change: "+8.2%", trend: "up", color: "text-[#006a61]", path: "M0,30 Q25,25 50,20 T100,10" },
  { label: "Growth %", value: "24.8%", change: "+3.1%", trend: "up", color: "text-[#006a61]", path: "M0,35 L20,30 L40,32 L60,20 L80,15 L100,5" },
  { label: "Low Stock Items", value: "42", change: "Critical", trend: "warn", color: "text-[#ba1a1a]", path: "M0,5 L20,15 L40,10 L60,25 L80,30 L100,35" },
  { label: "Predicted 30D", value: "$310k", change: "AI Forecast", trend: "ai", color: "text-[#00236f]", path: "M0,30 Q30,25 60,15 T100,5" },
];

const alertRows = [
  { name: "UltraHD 4K Monitor X-200", sku: "EL-MN-2023", status: "Low Stock", statusClass: "bg-[#ffdad6] text-[#93000a]", stock: "5 Units", stockClass: "text-[#ba1a1a]", action: "shopping_cart_checkout" },
  { name: "ErgoPro Office Chair", sku: "HM-CH-991", status: "Low Stock", statusClass: "bg-[#ffdad6] text-[#93000a]", stock: "12 Units", stockClass: "text-[#ba1a1a]", action: "shopping_cart_checkout" },
  { name: "Wireless Noise-Cancelling Buds", sku: "EL-AU-552", status: "Optimizing", statusClass: "bg-[#86f2e4] text-[#006f66]", stock: "45 Units", stockClass: "text-[#0b1c30]", action: "analytics" },
];

const topProducts = [
  { name: "Pro Laptop v3", revenue: "$840k", pct: "90%" },
  { name: "Cloud Server G5", revenue: "$620k", pct: "75%" },
  { name: "Smart Hub X", revenue: "$410k", pct: "55%" },
  { name: "Base Tablet 10", revenue: "$290k", pct: "35%" },
];

export default function DashboardPage() {
  return (
    <div className="p-8 max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-[24px] font-semibold leading-8 tracking-[-0.01em] text-[#0b1c30]">Operations Dashboard</h1>
          <p className="text-[14px] text-[#444651]">Real-time inventory intelligence and forecasting.</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-white border border-[#c5c5d3] text-[#00236f] font-bold px-6 py-2 rounded transition-all hover:bg-[#eff4ff] flex items-center gap-2 text-[14px]">
            <span className="material-symbols-outlined text-[18px]">description</span>
            Generate Report
          </button>
          <button className="bg-[#00236f] text-white font-bold px-6 py-2 rounded transition-all hover:opacity-90 flex items-center gap-2 shadow-sm text-[14px]">
            <span className="material-symbols-outlined text-[18px]">upload_file</span>
            Upload New Data
          </button>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        {kpiCards.map((card) => (
          <div key={card.label} className="bg-white border border-[#c5c5d3] p-4 flex flex-col justify-between card-hover">
            <div>
              <p className="text-[11px] font-semibold text-[#757682] uppercase tracking-wider mb-1">{card.label}</p>
              <h3 className={`text-[30px] font-bold leading-[38px] tracking-[-0.02em] ${card.trend === "warn" ? "text-[#ba1a1a]" : card.trend === "ai" ? "text-[#00236f]" : "text-[#0b1c30]"}`}>
                {card.value}
              </h3>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className={`text-[12px] font-bold flex items-center ${card.color}`}>
                {card.trend === "up" && <span className="material-symbols-outlined text-[12px] mr-1">trending_up</span>}
                {card.trend === "warn" && <span className="material-symbols-outlined text-[12px] mr-1">warning</span>}
                {card.trend === "ai" && <span className="material-symbols-outlined text-[12px] mr-1">auto_graph</span>}
                {card.change}
              </span>
              <div className="h-8 w-16">
                <svg className="w-full h-full fill-none stroke-2" style={{ stroke: card.color.replace("text-[", "").replace("]", "") }} viewBox="0 0 100 40">
                  <path d={card.path} strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
        {/* Revenue Trend */}
        <div className="lg:col-span-8 bg-white border border-[#c5c5d3] rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[18px] font-semibold leading-[26px] text-[#0b1c30]">Revenue Trend vs. Forecast</h3>
            <div className="flex gap-3">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-[#00236f] rounded-full inline-block"></span>
                <span className="text-[11px] font-semibold text-[#444651]">Actual</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full inline-block border border-dashed border-[#757682]"></span>
                <span className="text-[11px] font-semibold text-[#444651]">Forecast</span>
              </div>
            </div>
          </div>
          <div className="h-[300px] w-full relative border-l border-b border-[#c5c5d3]"
            style={{ backgroundImage: "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <polyline fill="none" points="0,280 100,240 200,260 300,180 400,150 500,160 600,100" stroke="#00236f" strokeWidth="3" />
              <polyline fill="none" points="600,100 700,80 800,90 900,40" stroke="#757682" strokeDasharray="8,4" strokeWidth="2" />
              <circle cx="600" cy="100" fill="#00236f" r="4" />
            </svg>
            <div className="absolute bottom-[-24px] w-full flex justify-between px-4 text-[11px] font-semibold text-[#757682]">
              {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"].map(m => <span key={m}>{m}</span>)}
            </div>
          </div>
        </div>

        {/* Sales by Category */}
        <div className="lg:col-span-4 bg-white border border-[#c5c5d3] rounded-lg p-6">
          <h3 className="text-[18px] font-semibold leading-[26px] text-[#0b1c30] mb-6">Sales by Category</h3>
          <div className="flex flex-col items-center justify-center pb-8">
            <div className="relative w-48 h-48 mb-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" fill="transparent" r="15.915" stroke="#dce9ff" strokeWidth="4" />
                <circle cx="18" cy="18" fill="transparent" r="15.915" stroke="#00236f" strokeDasharray="45 100" strokeWidth="4" />
                <circle cx="18" cy="18" fill="transparent" r="15.915" stroke="#006a61" strokeDasharray="25 100" strokeDashoffset="-45" strokeWidth="4" />
                <circle cx="18" cy="18" fill="transparent" r="15.915" stroke="#4059aa" strokeDasharray="15 100" strokeDashoffset="-70" strokeWidth="4" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[20px] font-semibold">100%</span>
                <span className="text-[11px] font-semibold text-[#757682]">Total Share</span>
              </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-2">
              {[["#00236f","Electronics (45%)"],["#006a61","Home (25%)"],["#4059aa","Fashion (15%)"],["#dce9ff","Others (15%)"]].map(([color, label]) => (
                <div key={label} className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: color }}></span>
                  <span className="text-[12px] font-medium text-[#0b1c30]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Alerts Table */}
        <div className="lg:col-span-8 bg-white border border-[#c5c5d3] rounded-lg">
          <div className="p-6 border-b border-[#c5c5d3] flex justify-between items-center">
            <h3 className="text-[18px] font-semibold text-[#0b1c30]">Recent Alerts &amp; Critical Items</h3>
            <button className="text-[#00236f] text-[12px] font-bold hover:underline">View All Alerts</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#eff4ff] border-b border-[#c5c5d3]">
                  {["Product Name","SKU","Status","Stock Level","Action"].map((h, i) => (
                    <th key={h} className={`px-6 py-2 text-[11px] font-semibold text-[#444651] uppercase tracking-wider ${i >= 3 ? "text-right" : ""}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#c5c5d3]">
                {alertRows.map((row) => (
                  <tr key={row.sku} className="hover:bg-[#eff4ff] transition-colors">
                    <td className="px-6 py-4 text-[14px] font-medium text-[#0b1c30]">{row.name}</td>
                    <td className="px-6 py-4 text-[14px] text-[#444651]">{row.sku}</td>
                    <td className="px-6 py-4">
                      <span className={`${row.statusClass} px-2 py-0.5 rounded text-[11px] font-bold`}>{row.status}</span>
                    </td>
                    <td className={`px-6 py-4 text-[14px] text-right font-bold ${row.stockClass}`}>{row.stock}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-[#00236f] material-symbols-outlined hover:scale-110 transition-transform text-[20px]">{row.action}</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products */}
        <div className="lg:col-span-4 bg-white border border-[#c5c5d3] rounded-lg p-6">
          <h3 className="text-[18px] font-semibold text-[#0b1c30] mb-6">Top Products by Revenue</h3>
          <div className="space-y-6">
            {topProducts.map((p) => (
              <div key={p.name} className="space-y-1">
                <div className="flex justify-between text-[12px] font-medium">
                  <span className="font-bold text-[#0b1c30]">{p.name}</span>
                  <span className="text-[#444651]">{p.revenue}</span>
                </div>
                <div className="w-full bg-[#e5eeff] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#00236f] h-full rounded-full" style={{ width: p.pct }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-[#c5c5d3]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#86f2e4] rounded flex items-center justify-center text-[#006f66]">
                <span className="material-symbols-outlined text-[28px]">trending_up</span>
              </div>
              <div>
                <p className="text-[11px] font-bold text-[#006a61] uppercase">Productivity Insight</p>
                <p className="text-[14px] text-[#0b1c30]">Inventory velocity increased by 14% this week for top tier electronics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
