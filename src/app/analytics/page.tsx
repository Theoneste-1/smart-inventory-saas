"use client";

import DashboardShell from "@/components/layout/DashboardShell";

const tableRows = [
  { category: "Enterprise Servers", velocity: "High", margin: "32.4%", status: "Optimal", statusClass: "bg-[#86f2e4] text-[#006f66]", revenue: "$420,500" },
  { category: "Mobile Workstations", velocity: "Medium", margin: "28.1%", status: "Low Stock", statusClass: "bg-[#ffdad6] text-[#93000a]", revenue: "$385,200" },
  { category: "Networking Gear", velocity: "High", margin: "19.5%", status: "Optimal", statusClass: "bg-[#86f2e4] text-[#006f66]", revenue: "$210,900" },
  { category: "Consumer Displays", velocity: "Low", margin: "14.2%", status: "Overstock", statusClass: "bg-blue-100 text-blue-800", revenue: "$98,400" },
];

export default function AnalyticsPage() {
  return (
    <DashboardShell>
      <div className="p-6 max-w-[1440px] mx-auto space-y-6">
        {/* Filter Bar */}
        <div className="bg-white border border-[#c5c5d3] p-4 flex flex-wrap items-center justify-between gap-4 rounded-lg sticky top-16 z-30 shadow-sm">
          <div className="flex items-center gap-6">
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold text-[#444651] uppercase">Date Range</label>
              <div className="flex items-center border border-[#c5c5d3] rounded px-2 py-1 bg-white cursor-pointer hover:border-[#00236f] transition-colors gap-2">
                <span className="text-[14px] text-[#0b1c30]">Oct 01 – Oct 31, 2023</span>
                <span className="material-symbols-outlined text-[#757682] text-[18px]">calendar_today</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold text-[#444651] uppercase">Branch</label>
              <select className="bg-white border border-[#c5c5d3] rounded py-1 px-2 text-[14px] outline-none focus:border-[#00236f]">
                <option>All Branches</option>
                <option>North Region Hub</option>
                <option>Downtown Logistics</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold text-[#444651] uppercase">Category</label>
              <select className="bg-white border border-[#c5c5d3] rounded py-1 px-2 text-[14px] outline-none focus:border-[#00236f]">
                <option>Electronics &amp; Tech</option>
                <option>Industrial Supplies</option>
                <option>Consumer Goods</option>
              </select>
            </div>
          </div>
          <button className="bg-[#00236f] text-white px-6 py-2 rounded-lg flex items-center gap-2 text-[12px] font-medium hover:opacity-90 transition-all">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Export PDF
          </button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Revenue Over Time */}
          <div className="col-span-12 lg:col-span-8 bg-white border border-[#c5c5d3] rounded-xl p-6 flex flex-col space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-[18px] font-semibold text-[#00236f]">Revenue Over Time</h3>
                <p className="text-[12px] font-medium text-[#444651]">Daily gross revenue across all branches</p>
              </div>
              <div className="text-right">
                <span className="text-[24px] font-semibold text-[#0b1c30]">$1,482,900.00</span>
                <div className="flex items-center justify-end gap-1 text-[#006a61] text-[12px] font-medium">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span>
                  +12.5% vs prev period
                </div>
              </div>
            </div>
            <div className="h-64 relative border-b border-l border-[#c5c5d3] rounded-bl-lg"
              style={{ backgroundImage: "radial-gradient(circle, #e2e8f0 1px, transparent 1px)", backgroundSize: "24px 24px" }}>
              <svg className="w-full h-full" viewBox="0 0 800 200">
                <defs>
                  <linearGradient id="revGrad" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#00236f", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#00236f", stopOpacity: 0 }} />
                  </linearGradient>
                </defs>
                <path d="M0,180 Q100,160 200,170 T400,100 T600,120 T800,40 V200 H0 Z" fill="url(#revGrad)" opacity="0.1" />
                <path d="M0,180 Q100,160 200,170 T400,100 T600,120 T800,40" fill="none" stroke="#00236f" strokeWidth="3" />
              </svg>
            </div>
            <div className="flex justify-between text-[#444651] text-[11px] font-semibold">
              {["OCT 01","OCT 07","OCT 14","OCT 21","OCT 28"].map(d => <span key={d}>{d}</span>)}
            </div>
          </div>

          {/* Monthly Comparison */}
          <div className="col-span-12 lg:col-span-4 bg-white border border-[#c5c5d3] rounded-xl p-6 flex flex-col space-y-4">
            <h3 className="text-[18px] font-semibold text-[#00236f]">Monthly Comparison</h3>
            <div className="flex-1 flex items-end justify-between gap-4 h-48 px-2">
              {[["AUG","60%","80%"],["SEP","40%","55%"],["OCT","70%","90%"]].map(([month, bud, act]) => (
                <div key={month} className="w-full flex flex-col items-center gap-1">
                  <div className="w-full flex gap-1 items-end" style={{ height: "160px" }}>
                    <div className="bg-[#1e3a8a] w-1/2 rounded-t opacity-30" style={{ height: bud }}></div>
                    <div className="bg-[#00236f] w-1/2 rounded-t" style={{ height: act }}></div>
                  </div>
                  <span className="text-[11px] font-semibold text-[#444651]">{month}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 pt-4 border-t border-[#c5c5d3]">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-[#1e3a8a] opacity-30 rounded-sm"></div>
                <span className="text-[11px] font-semibold text-[#444651]">Budgeted</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-[#00236f] rounded-sm"></div>
                <span className="text-[11px] font-semibold text-[#444651]">Actual</span>
              </div>
            </div>
          </div>

          {/* Inventory Turnover */}
          <div className="col-span-12 lg:col-span-6 bg-white border border-[#c5c5d3] rounded-xl p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-[18px] font-semibold text-[#00236f]">Inventory Turnover</h3>
              <div className="bg-[#e5eeff] rounded-full px-2 py-1 text-[11px] font-semibold text-[#006a61]">HEALTHY 4.2x</div>
            </div>
            <div className="h-48 relative overflow-hidden">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 500 150">
                <path d="M0,150 L0,100 C50,80 100,120 150,90 C200,60 250,80 300,50 C350,20 400,60 450,40 L500,60 L500,150 Z" fill="#86f2e4" opacity="0.4" />
                <path d="M0,100 C50,80 100,120 150,90 C200,60 250,80 300,50 C350,20 400,60 450,40 L500,60" fill="none" stroke="#006a61" strokeWidth="2" />
              </svg>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[["STOCK OUTS","24","text-[#ba1a1a]"],["AVG DWELL","18 Days","text-[#0b1c30]"],["ORDER FILL","98.4%","text-[#0b1c30]"]].map(([label, val, cls]) => (
                <div key={label} className="border-r border-[#c5c5d3] last:border-0">
                  <p className="text-[11px] font-semibold text-[#444651] uppercase">{label}</p>
                  <p className={`text-[20px] font-semibold ${cls}`}>{val}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sales Frequency Heatmap */}
          <div className="col-span-12 lg:col-span-6 bg-white border border-[#c5c5d3] rounded-xl p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-[18px] font-semibold text-[#00236f]">Sales Frequency</h3>
              <span className="text-[12px] font-medium text-[#444651]">Last 90 Days Heatmap</span>
            </div>
            <div className="flex flex-col gap-1">
              {[
                ["#e5eeff","#86f2e4","#006a61","#e5eeff","#86f2e4","#006a61","#006f66"],
                ["#86f2e4","#006f66","#006a61","#e5eeff","#86f2e4","#86f2e4","#006a61"],
                ["#e5eeff","#006a61","#006f66","#006f66","#006a61","#e5eeff","#86f2e4"],
                ["#86f2e4","#e5eeff","#006a61","#006f66","#006a61","#86f2e4","#006f66"],
              ].map((row, ri) => (
                <div key={ri} className="flex gap-1">
                  {row.map((color, ci) => (
                    <div key={ci} className="w-full aspect-square rounded-sm" style={{ backgroundColor: color }}></div>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-end gap-2 mt-2">
              <span className="text-[11px] font-semibold text-[#444651]">LESS</span>
              {["#e5eeff","#86f2e4","#006a61","#006f66"].map(c => (
                <div key={c} className="w-3 h-3 rounded-sm" style={{ backgroundColor: c }}></div>
              ))}
              <span className="text-[11px] font-semibold text-[#444651]">MORE</span>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-[#c5c5d3] rounded-xl overflow-hidden shadow-sm">
          <div className="p-4 bg-[#eff4ff] border-b border-[#c5c5d3] flex justify-between items-center">
            <h3 className="text-[20px] font-semibold text-[#0b1c30]">Top Performing Stock Categories</h3>
            <button className="text-[#00236f] text-[12px] font-bold hover:underline">View All</button>
          </div>
          <table className="w-full text-left text-[14px] border-collapse">
            <thead>
              <tr className="bg-[#e5eeff] text-[#444651] text-[11px] font-semibold uppercase">
                {["Category","SKU Velocity","Margin %","Stock Status","Revenue"].map((h, i) => (
                  <th key={h} className={`px-6 py-3 ${i === 4 ? "text-right" : ""}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#c5c5d3]">
              {tableRows.map((row) => (
                <tr key={row.category} className="hover:bg-[#f8f9ff] transition-colors">
                  <td className="px-6 py-4 font-medium text-[#0b1c30]">{row.category}</td>
                  <td className="px-6 py-4 text-[#444651]">{row.velocity}</td>
                  <td className="px-6 py-4 text-[#444651]">{row.margin}</td>
                  <td className="px-6 py-4">
                    <span className={`${row.statusClass} px-2 py-0.5 text-[11px] font-semibold rounded`}>{row.status}</span>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-[#0b1c30]">{row.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}
