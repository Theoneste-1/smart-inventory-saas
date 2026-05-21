"use client";

import DashboardShell from "@/components/layout/DashboardShell";

const salesData = [
  { id: "ORD-8821", product: "Pro Laptop v3", category: "Electronics", qty: 12, revenue: "$14,388", date: "Oct 28, 2023", status: "Completed", statusClass: "bg-[#86f2e4] text-[#006f66]" },
  { id: "ORD-8820", product: "SonicWave Studio", category: "Electronics", qty: 5, revenue: "$995", date: "Oct 27, 2023", status: "Completed", statusClass: "bg-[#86f2e4] text-[#006f66]" },
  { id: "ORD-8819", product: "Neon Pulse Runner", category: "Athletic Gear", qty: 30, revenue: "$3,600", date: "Oct 27, 2023", status: "Processing", statusClass: "bg-[#dce9ff] text-[#00236f]" },
  { id: "ORD-8818", product: "Desk Zen Organizer", category: "Office", qty: 8, revenue: "$200", date: "Oct 26, 2023", status: "Completed", statusClass: "bg-[#86f2e4] text-[#006f66]" },
  { id: "ORD-8817", product: "Precision Chrono", category: "Accessories", qty: 3, revenue: "$600", date: "Oct 26, 2023", status: "Refunded", statusClass: "bg-[#ffdad6] text-[#93000a]" },
  { id: "ORD-8816", product: "Cloud Server G5", category: "Infrastructure", qty: 2, revenue: "$18,400", date: "Oct 25, 2023", status: "Completed", statusClass: "bg-[#86f2e4] text-[#006f66]" },
];

const kpis = [
  { label: "Total Revenue", value: "$2.4M", change: "+12.5%", icon: "payments", color: "text-[#006a61]" },
  { label: "Orders This Month", value: "1,284", change: "+8.2%", icon: "shopping_cart", color: "text-[#006a61]" },
  { label: "Avg Order Value", value: "$1,870", change: "+4.1%", icon: "trending_up", color: "text-[#006a61]" },
  { label: "Return Rate", value: "2.3%", change: "-0.4%", icon: "assignment_return", color: "text-[#006a61]" },
];

export default function SalesPage() {
  return (
    <DashboardShell>
      <div className="p-8 max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-[24px] font-semibold leading-8 tracking-[-0.01em] text-[#0b1c30]">Sales Overview</h1>
            <p className="text-[14px] text-[#444651]">Track orders, revenue, and sales performance.</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-white border border-[#c5c5d3] text-[#00236f] font-bold px-6 py-2 rounded transition-all hover:bg-[#eff4ff] flex items-center gap-2 text-[14px]">
              <span className="material-symbols-outlined text-[18px]">download</span>
              Export
            </button>
            <button className="bg-[#00236f] text-white font-bold px-6 py-2 rounded transition-all hover:opacity-90 flex items-center gap-2 shadow-sm text-[14px]">
              <span className="material-symbols-outlined text-[18px]">add</span>
              New Order
            </button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {kpis.map((k) => (
            <div key={k.label} className="bg-white border border-[#c5c5d3] p-4 card-hover">
              <div className="flex justify-between items-start mb-3">
                <p className="text-[11px] font-semibold text-[#757682] uppercase tracking-wider">{k.label}</p>
                <span className="material-symbols-outlined text-[#444651] text-[20px]">{k.icon}</span>
              </div>
              <h3 className="text-[30px] font-bold leading-[38px] tracking-[-0.02em] text-[#0b1c30]">{k.value}</h3>
              <span className={`text-[12px] font-bold flex items-center mt-2 ${k.color}`}>
                <span className="material-symbols-outlined text-[12px] mr-1">trending_up</span>
                {k.change}
              </span>
            </div>
          ))}
        </div>

        {/* Sales Chart */}
        <div className="bg-white border border-[#c5c5d3] rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[18px] font-semibold text-[#0b1c30]">Revenue Trend</h3>
            <select className="bg-[#eff4ff] border-none text-[12px] font-semibold px-3 py-1.5 rounded-lg outline-none cursor-pointer text-[#0b1c30]">
              <option>Last 30 Days</option>
              <option>Last Quarter</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-[200px] w-full relative border-l border-b border-[#c5c5d3]"
            style={{ backgroundImage: "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="salesGrad" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#00236f", stopOpacity: 0.15 }} />
                  <stop offset="100%" style={{ stopColor: "#00236f", stopOpacity: 0 }} />
                </linearGradient>
              </defs>
              <path d="M0,180 Q80,160 160,150 T320,100 T480,80 T640,60 T800,40 V200 H0 Z" fill="url(#salesGrad)" />
              <path d="M0,180 Q80,160 160,150 T320,100 T480,80 T640,60 T800,40" fill="none" stroke="#00236f" strokeWidth="2.5" />
            </svg>
            <div className="absolute bottom-[-22px] w-full flex justify-between px-2 text-[11px] font-semibold text-[#757682]">
              {["Oct 1","Oct 7","Oct 14","Oct 21","Oct 28"].map(d => <span key={d}>{d}</span>)}
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white border border-[#c5c5d3] rounded-lg">
          <div className="p-6 border-b border-[#c5c5d3] flex justify-between items-center">
            <h3 className="text-[18px] font-semibold text-[#0b1c30]">Recent Orders</h3>
            <button className="text-[#00236f] text-[12px] font-bold hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#eff4ff] border-b border-[#c5c5d3]">
                  {["Order ID","Product","Category","Qty","Revenue","Date","Status"].map(h => (
                    <th key={h} className="px-6 py-2 text-[11px] font-semibold text-[#444651] uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#c5c5d3]">
                {salesData.map((row) => (
                  <tr key={row.id} className="hover:bg-[#eff4ff] transition-colors">
                    <td className="px-6 py-4 text-[14px] font-medium text-[#00236f]">{row.id}</td>
                    <td className="px-6 py-4 text-[14px] font-medium text-[#0b1c30]">{row.product}</td>
                    <td className="px-6 py-4 text-[14px] text-[#444651]">{row.category}</td>
                    <td className="px-6 py-4 text-[14px] text-[#0b1c30]">{row.qty}</td>
                    <td className="px-6 py-4 text-[14px] font-bold text-[#0b1c30]">{row.revenue}</td>
                    <td className="px-6 py-4 text-[14px] text-[#444651]">{row.date}</td>
                    <td className="px-6 py-4">
                      <span className={`${row.statusClass} px-2 py-0.5 rounded text-[11px] font-bold`}>{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-[#c5c5d3] flex justify-between items-center">
            <span className="text-[12px] font-medium text-[#444651]">Showing 1-6 of 1,284 orders</span>
            <div className="flex gap-2">
              <button disabled className="px-2 py-1 border border-[#c5c5d3] rounded hover:bg-[#e5eeff] disabled:opacity-30">
                <span className="material-symbols-outlined text-[18px]">chevron_left</span>
              </button>
              <button className="px-2 py-1 border border-[#c5c5d3] rounded hover:bg-[#e5eeff]">
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
