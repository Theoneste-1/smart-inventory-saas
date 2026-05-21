"use client";

import DashboardShell from "@/components/layout/DashboardShell";

const templates = [
  { icon: "bar_chart", iconBg: "bg-[#1e3a8a]/10", iconColor: "text-[#00236f]", badge: "POPULAR", badgeClass: "bg-[#dce9ff] text-[#00236f]", title: "Sales Summary", desc: "Aggregate revenue trends, top-selling categories, and regional performance benchmarks.", period: "Weekly / Monthly" },
  { icon: "inventory_2", iconBg: "bg-[#86f2e4]/20", iconColor: "text-[#006a61]", badge: null, badgeClass: "", title: "Inventory Audit", desc: "Deep dive into SKU health, stock turnover rates, and deadstock identification.", period: "Quarterly Audit" },
  { icon: "trending_up", iconBg: "bg-[#004a31]/10", iconColor: "text-[#00311f]", badge: "AI DRIVEN", badgeClass: "bg-[#27c38a]/10 text-[#27c38a]", title: "Forecast Accuracy", desc: "Evaluate predictive model performance against actual sales to refine demand planning.", period: "Model Training" },
];

const recentReports = [
  { icon: "article", name: "Q3 Inventory Audit_v2", size: "14.2 MB", status: "Complete", statusClass: "bg-[#86f2e4]/20 text-[#006f66] border border-[#006a61]/20", user: "A. Chen", date: "Oct 24, 2023", processing: false },
  { icon: "description", name: "Monthly Sales Recap_Oct23", size: "8.5 MB", status: "Complete", statusClass: "bg-[#86f2e4]/20 text-[#006f66] border border-[#006a61]/20", user: "S. Rodriguez", date: "Oct 22, 2023", processing: false },
  { icon: "monitoring", name: "Forecast Accuracy Matrix_v4", size: "21.0 MB", status: "Processing", statusClass: "bg-[#dce9ff] text-[#00236f] border border-[#c5c5d3]", user: "System Auto-Gen", date: "Oct 21, 2023", processing: true },
];

export default function ReportsPage() {
  return (
    <DashboardShell>
      <div className="ml-0 pt-0 p-6 max-w-[1440px]">
        {/* Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-[36px] font-bold leading-[44px] tracking-[-0.02em] text-[#00236f]">Report Templates</h1>
            <p className="text-[16px] text-[#444651] mt-1">Generate on-demand intelligence for your operations.</p>
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#757682] text-[18px]">search</span>
              <input
                type="text"
                placeholder="Search templates..."
                className="pl-10 pr-4 py-2 border border-[#c5c5d3] rounded bg-[#f8f9ff] focus:outline-none focus:border-[#00236f] text-[14px] w-64"
              />
            </div>
            <button className="bg-[#00236f] text-white px-6 py-2 rounded text-[12px] font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined text-[18px]">add</span>
              CREATE NEW
            </button>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-12 gap-6 mb-8">
          {templates.map((t) => (
            <div key={t.title} className="col-span-12 md:col-span-4 bg-white border border-[#c5c5d3] hover:border-[#00236f] transition-all duration-300">
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-10 h-10 rounded ${t.iconBg} flex items-center justify-center`}>
                    <span className={`material-symbols-outlined ${t.iconColor} text-[20px]`}>{t.icon}</span>
                  </div>
                  {t.badge && (
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${t.badgeClass}`}>{t.badge}</span>
                  )}
                </div>
                <h3 className="text-[20px] font-semibold text-[#0b1c30] mb-1">{t.title}</h3>
                <p className="text-[14px] text-[#444651] flex-grow">{t.desc}</p>
                <div className="mt-6 pt-4 border-t border-[#c5c5d3] flex justify-between items-center">
                  <span className="text-[11px] font-semibold text-[#757682] uppercase tracking-wider">{t.period}</span>
                  <button className="text-[#00236f] text-[12px] font-medium hover:underline">Configure</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Reports Table */}
        <div className="bg-white border border-[#c5c5d3]">
          <div className="px-6 py-4 border-b border-[#c5c5d3] flex justify-between items-center bg-white">
            <h2 className="text-[18px] font-semibold text-[#0b1c30]">Recently Generated Reports</h2>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-2 py-1 border border-[#c5c5d3] rounded text-[12px] font-medium hover:bg-[#e5eeff] transition-colors">
                <span className="material-symbols-outlined text-[18px]">filter_list</span> Filter
              </button>
              <button className="flex items-center gap-2 px-2 py-1 border border-[#c5c5d3] rounded text-[12px] font-medium hover:bg-[#e5eeff] transition-colors">
                <span className="material-symbols-outlined text-[18px]">sort</span> Sort
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#eff4ff]">
                  {["REPORT NAME","STATUS","GENERATED BY","DATE","DOWNLOAD"].map((h, i) => (
                    <th key={h} className="px-6 py-2 text-[11px] font-semibold text-[#757682] border-b border-[#c5c5d3]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#c5c5d3]">
                {recentReports.map((r) => (
                  <tr key={r.name} className="hover:bg-[#f8f9ff] transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-[#757682] text-[20px]">{r.icon}</span>
                        <div>
                          <div className="text-[14px] font-semibold text-[#0b1c30]">{r.name}</div>
                          <div className="text-[11px] font-semibold text-[#757682]">{r.size}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {r.processing ? (
                        <span className={`${r.statusClass} px-2 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1 w-fit`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00236f] animate-pulse inline-block"></span>
                          {r.status}
                        </span>
                      ) : (
                        <span className={`${r.statusClass} px-2 py-1 rounded-full text-[11px] font-semibold`}>{r.status}</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#e5eeff] flex items-center justify-center text-[11px] font-bold text-[#00236f]">
                          {r.user === "System Auto-Gen" ? "AI" : r.user.charAt(0)}
                        </div>
                        <span className="text-[14px] text-[#0b1c30]">{r.user}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[14px] text-[#444651]">{r.date}</td>
                    <td className="px-6 py-4">
                      <div className={`flex justify-end gap-2 ${r.processing ? "opacity-30 cursor-not-allowed" : "opacity-60 group-hover:opacity-100"} transition-opacity`}>
                        <button disabled={r.processing} className="p-1 hover:bg-[#1e3a8a]/10 rounded transition-colors" title="Download PDF">
                          <span className="material-symbols-outlined text-[#00236f] text-[20px]">picture_as_pdf</span>
                        </button>
                        <button disabled={r.processing} className="p-1 hover:bg-[#86f2e4]/10 rounded transition-colors" title="Download Excel">
                          <span className="material-symbols-outlined text-[#006a61] text-[20px]">table_chart</span>
                        </button>
                        <button disabled={r.processing} className="p-1 hover:bg-[#dce9ff] rounded transition-colors" title="Download CSV">
                          <span className="material-symbols-outlined text-[#444651] text-[20px]">csv</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-[#c5c5d3] flex justify-between items-center bg-white">
            <span className="text-[12px] font-medium text-[#444651]">Showing 1 to 3 of 42 reports</span>
            <div className="flex gap-2">
              <button disabled className="p-1 border border-[#c5c5d3] rounded hover:bg-[#e5eeff] transition-colors disabled:opacity-30">
                <span className="material-symbols-outlined text-[20px]">chevron_left</span>
              </button>
              <button className="px-2 py-1 border border-[#00236f] bg-[#00236f] text-white rounded text-[12px] font-medium">1</button>
              <button className="px-2 py-1 border border-[#c5c5d3] rounded text-[12px] font-medium hover:bg-[#e5eeff] transition-colors">2</button>
              <button className="px-2 py-1 border border-[#c5c5d3] rounded text-[12px] font-medium hover:bg-[#e5eeff] transition-colors">3</button>
              <button className="p-1 border border-[#c5c5d3] rounded hover:bg-[#e5eeff] transition-colors">
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
