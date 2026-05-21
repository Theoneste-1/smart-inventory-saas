"use client";

import DashboardShell from "@/components/layout/DashboardShell";

const products = [
  { sku: "PRD-001", name: "Pro Laptop v3", category: "Electronics", price: "$1,199", stock: 84, rating: 4.8, status: "Active", statusClass: "bg-[#86f2e4] text-[#006f66]" },
  { sku: "PRD-002", name: "Cloud Server G5", category: "Infrastructure", price: "$9,200", stock: 12, rating: 4.9, status: "Active", statusClass: "bg-[#86f2e4] text-[#006f66]" },
  { sku: "PRD-003", name: "Smart Hub X", category: "Electronics", price: "$349", stock: 5, rating: 4.5, status: "Low Stock", statusClass: "bg-amber-100 text-amber-800" },
  { sku: "PRD-004", name: "Base Tablet 10", category: "Electronics", price: "$499", stock: 142, rating: 4.3, status: "Active", statusClass: "bg-[#86f2e4] text-[#006f66]" },
  { sku: "PRD-005", name: "SonicWave Studio", category: "Audio", price: "$199", stock: 67, rating: 4.7, status: "Active", statusClass: "bg-[#86f2e4] text-[#006f66]" },
  { sku: "PRD-006", name: "ErgoStand Deluxe", category: "Office", price: "$89", stock: 0, rating: 4.2, status: "Out of Stock", statusClass: "bg-[#ffdad6] text-[#93000a]" },
];

export default function ProductsPage() {
  return (
    <DashboardShell>
      <div className="p-8 max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-[24px] font-semibold leading-8 tracking-[-0.01em] text-[#0b1c30]">Products</h1>
            <p className="text-[14px] text-[#444651]">Manage your product catalog and pricing.</p>
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#757682] text-[18px]">search</span>
              <input type="text" placeholder="Search products..." className="pl-10 pr-4 py-2 border border-[#c5c5d3] rounded-lg bg-[#f8f9ff] text-[14px] focus:outline-none focus:border-[#00236f] w-64" />
            </div>
            <button className="flex items-center gap-1 px-4 py-2 bg-white border border-[#c5c5d3] rounded-lg text-[12px] font-medium hover:bg-[#e5eeff] transition-colors">
              <span className="material-symbols-outlined text-[18px]">filter_list</span>
              Filter
            </button>
            <button className="flex items-center gap-1 px-4 py-2 bg-[#00236f] text-white rounded-lg text-[12px] font-medium hover:opacity-90 transition-all">
              <span className="material-symbols-outlined text-[18px]">add</span>
              Add Product
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: "Total Products", value: "248", icon: "shopping_bag" },
            { label: "Active Listings", value: "231", icon: "check_circle" },
            { label: "Out of Stock", value: "17", icon: "warning" },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-[#c5c5d3] p-4 flex items-center gap-4">
              <div className="w-10 h-10 bg-[#e5eeff] rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-[#00236f] text-[20px]">{s.icon}</span>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[#757682] uppercase">{s.label}</p>
                <p className="text-[24px] font-bold text-[#0b1c30]">{s.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Products Table */}
        <div className="bg-white border border-[#c5c5d3] rounded-lg overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#eff4ff] border-b border-[#c5c5d3]">
                {["Product","SKU","Category","Price","Stock","Rating","Status","Actions"].map(h => (
                  <th key={h} className="px-6 py-2 text-[11px] font-semibold text-[#444651] uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#c5c5d3]">
              {products.map((p) => (
                <tr key={p.sku} className="hover:bg-[#eff4ff] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#e5eeff] rounded-lg border border-[#c5c5d3] flex items-center justify-center">
                        <span className="material-symbols-outlined text-[#00236f] text-[18px]">shopping_bag</span>
                      </div>
                      <span className="text-[14px] font-semibold text-[#0b1c30]">{p.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[14px] text-[#444651]">{p.sku}</td>
                  <td className="px-6 py-4 text-[14px] text-[#444651]">{p.category}</td>
                  <td className="px-6 py-4 text-[14px] font-bold text-[#0b1c30]">{p.price}</td>
                  <td className="px-6 py-4 text-[14px] text-[#0b1c30]">{p.stock}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-amber-400 text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="text-[14px] text-[#0b1c30]">{p.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`${p.statusClass} px-2 py-0.5 rounded text-[11px] font-bold`}>{p.status}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-1 hover:bg-[#e5eeff] rounded transition-colors" title="Edit">
                        <span className="material-symbols-outlined text-[#00236f] text-[18px]">edit</span>
                      </button>
                      <button className="p-1 hover:bg-[#ffdad6] rounded transition-colors" title="Delete">
                        <span className="material-symbols-outlined text-[#ba1a1a] text-[18px]">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-4 border-t border-[#c5c5d3] flex justify-between items-center">
            <span className="text-[12px] font-medium text-[#444651]">Showing 1-{products.length} of 248 products</span>
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
