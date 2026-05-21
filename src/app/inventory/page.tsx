"use client";

import React, { useState } from "react";
import DashboardShell from "@/components/layout/DashboardShell";

const products = [
  { sku: "SKU-24891", name: "Neon Pulse Runner", category: "Athletic Gear", stock: 12, goal: 100, status: "Low Stock", statusClass: "bg-amber-100 text-amber-800", warehouse: "Central-A1", value: "$1,440.00", barColor: "bg-amber-500", barPct: "12%" },
  { sku: "SKU-11202", name: "SonicWave Studio", category: "Electronics", stock: 84, goal: 100, status: "Healthy", statusClass: "bg-green-100 text-green-800", warehouse: "East-B4", value: "$16,716.00", barColor: "bg-green-500", barPct: "84%" },
  { sku: "SKU-99014", name: "Desk Zen Organizer", category: "Office", stock: 142, goal: 100, status: "Overstock", statusClass: "bg-blue-100 text-blue-800", warehouse: "Central-A2", value: "$3,550.00", barColor: "bg-[#00236f]", barPct: "100%" },
  { sku: "SKU-33201", name: "Precision Chrono", category: "Accessories", stock: 65, goal: 100, status: "Healthy", statusClass: "bg-green-100 text-green-800", warehouse: "West-C1", value: "$13,000.00", barColor: "bg-green-500", barPct: "65%" },
  { sku: "SKU-44512", name: "CloudBook Pro 14", category: "Electronics", stock: 8, goal: 100, status: "Low Stock", statusClass: "bg-amber-100 text-amber-800", warehouse: "North-D3", value: "$9,600.00", barColor: "bg-amber-500", barPct: "8%" },
  { sku: "SKU-77830", name: "ErgoStand Deluxe", category: "Office", stock: 55, goal: 100, status: "Healthy", statusClass: "bg-green-100 text-green-800", warehouse: "Central-A1", value: "$2,750.00", barColor: "bg-green-500", barPct: "55%" },
];

export default function InventoryPage() {
  const [selectedSku, setSelectedSku] = useState<string | null>(null);
  const selected = products.find(p => p.sku === selectedSku);

  return (
    <DashboardShell>
      <div className="p-6 flex flex-col h-full gap-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-[24px] font-semibold leading-8 tracking-[-0.01em] text-[#0b1c30]">Inventory Management</h2>
            <p className="text-[14px] text-[#444651]">Manage stock levels and track high-velocity SKUs.</p>
          </div>
          <div className="flex gap-4">
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

        {/* Table */}
        <div className="bg-white border border-[#c5c5d3] rounded-xl overflow-hidden flex flex-col flex-1">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#eff4ff] border-b border-[#c5c5d3]">
                <tr>
                  {["Product Name","SKU","Stock Level","Status","Warehouse","Value"].map(h => (
                    <th key={h} className="px-4 py-2 text-[11px] font-semibold text-[#444651] uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#c5c5d3]">
                {products.map((p) => (
                  <tr
                    key={p.sku}
                    className="hover:bg-[#eff4ff] transition-colors cursor-pointer"
                    onClick={() => setSelectedSku(selectedSku === p.sku ? null : p.sku)}
                  >
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-[#e5eeff] rounded-lg border border-[#c5c5d3] flex items-center justify-center">
                          <span className="material-symbols-outlined text-[#00236f] text-[20px]">inventory_2</span>
                        </div>
                        <div>
                          <p className="text-[16px] font-semibold text-[#0b1c30]">{p.name}</p>
                          <p className="text-[12px] text-[#444651]">{p.category}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-[14px] text-[#444651]">{p.sku}</td>
                    <td className="px-4 py-4 w-48">
                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between text-[10px] font-medium text-[#444651] uppercase">
                          <span>{p.stock} Units</span>
                          <span>Goal: {p.goal}</span>
                        </div>
                        <div className="w-full h-1.5 bg-[#dce9ff] rounded-full overflow-hidden">
                          <div className={`${p.barColor} h-full rounded-full`} style={{ width: p.barPct }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`${p.statusClass} px-2 py-0.5 text-[11px] font-bold rounded uppercase`}>{p.status}</span>
                    </td>
                    <td className="px-4 py-4 text-[14px] text-[#444651]">{p.warehouse}</td>
                    <td className="px-4 py-4 text-[16px] font-semibold text-[#00236f]">{p.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="border-t border-[#c5c5d3] p-4 flex justify-between items-center bg-white mt-auto">
            <span className="text-[12px] font-medium text-[#444651]">Showing 1-{products.length} of 42 products</span>
            <div className="flex gap-2">
              <button disabled className="px-2 py-1 border border-[#c5c5d3] rounded hover:bg-[#e5eeff] transition-colors disabled:opacity-30">
                <span className="material-symbols-outlined text-[18px]">chevron_left</span>
              </button>
              <button className="px-2 py-1 border border-[#c5c5d3] rounded hover:bg-[#e5eeff] transition-colors">
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Panel */}
      {selected && (
        <div className="fixed right-0 top-16 h-[calc(100%-64px)] w-96 bg-white border-l border-[#c5c5d3] z-50 flex flex-col shadow-lg">
          <div className="p-6 border-b border-[#c5c5d3] flex justify-between items-center">
            <h3 className="text-[20px] font-semibold text-[#00236f]">Product Details</h3>
            <button onClick={() => setSelectedSku(null)} className="text-[#444651] hover:bg-[#e5eeff] p-1 rounded-full transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="p-6 flex-1 overflow-y-auto flex flex-col gap-8">
            <div className="flex gap-6 items-start">
              <div className="w-24 h-24 bg-[#e5eeff] rounded-xl border border-[#c5c5d3] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#00236f] text-[48px]">inventory_2</span>
              </div>
              <div>
                <h4 className="text-[20px] font-semibold text-[#0b1c30] leading-tight">{selected.name}</h4>
                <p className="text-[14px] text-[#444651]">{selected.sku}</p>
                <span className={`inline-block mt-2 px-2 py-0.5 text-[10px] font-bold rounded uppercase ${selected.statusClass}`}>{selected.status}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-[#eff4ff] rounded-lg border border-[#c5c5d3]">
                <p className="text-[11px] font-semibold text-[#444651] uppercase mb-1">Current Stock</p>
                <p className="text-[30px] font-bold text-[#00236f]">{selected.stock}</p>
              </div>
              <div className="p-4 bg-[#eff4ff] rounded-lg border border-[#c5c5d3]">
                <p className="text-[11px] font-semibold text-[#444651] uppercase mb-1">Total Value</p>
                <p className="text-[30px] font-bold text-[#00236f]">{selected.value}</p>
              </div>
            </div>
            <div>
              <h5 className="text-[18px] font-semibold text-[#0b1c30] mb-4">Sales Velocity (30 Days)</h5>
              <div className="h-32 w-full flex items-end justify-between gap-1 px-2">
                {[30,50,45,70,40,85,100].map((h, i) => (
                  <div key={i} className="w-full bg-[#1e3a8a] rounded-t-sm" style={{ height: `${h}%`, opacity: 0.2 + (i * 0.12) }}></div>
                ))}
              </div>
              <div className="flex justify-between text-[11px] font-semibold text-[#444651] mt-1">
                <span>May 1</span><span>May 30</span>
              </div>
            </div>
            <div>
              <h5 className="text-[18px] font-semibold text-[#0b1c30] mb-3">Prediction Insight</h5>
              <div className="p-4 bg-[#86f2e4]/20 border border-[#006a61]/20 rounded-lg">
                <p className="text-[14px] text-[#006f66] italic">
                  &ldquo;Forecast suggests a 15% increase in demand next month. Recommend restock of 25 units by Friday.&rdquo;
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 border-t border-[#c5c5d3] flex gap-4">
            <button className="flex-1 py-2 bg-[#00236f] text-white text-[12px] font-medium rounded-lg hover:opacity-90 transition-all">Reorder Now</button>
            <button className="flex-1 py-2 border border-[#c5c5d3] text-[#0b1c30] text-[12px] font-medium rounded-lg hover:bg-[#e5eeff] transition-colors">Edit</button>
          </div>
        </div>
      )}
    </DashboardShell>
  );
}
