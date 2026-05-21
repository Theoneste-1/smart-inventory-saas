"use client";

import React, { useState, useRef } from "react";
import DashboardShell from "@/components/layout/DashboardShell";

export default function UploadPage() {
  const [isDragOver, setIsDragOver] = useState(false);
  const [progress, setProgress] = useState(34);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => { e.preventDefault(); setIsDragOver(true); };
  const handleDragLeave = () => setIsDragOver(false);
  const handleDrop = (e: React.DragEvent) => { e.preventDefault(); setIsDragOver(false); };

  return (
    <DashboardShell>
      <div className="pt-8 px-8 pb-8">
        <div className="max-w-[1440px] mx-auto">
          <header className="mb-8">
            <h1 className="text-[30px] font-bold leading-[38px] tracking-[-0.02em] text-[#0b1c30] mb-1">Data Integration</h1>
            <p className="text-[16px] text-[#444651]">Import your logistics and warehouse data to update the AI predictive engine.</p>
          </header>

          <div className="grid grid-cols-12 gap-6 items-start">
            {/* Main: Drop Zone + Pipeline */}
            <div className="col-span-12 lg:col-span-8 space-y-6">
              {/* Drop Zone */}
              <div
                className={`bg-white border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center min-h-[400px] transition-all duration-300 cursor-pointer group ${isDragOver ? "border-[#00236f] bg-[#dce9ff]" : "border-[#c5c5d3] hover:border-[#00236f]"}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <input ref={fileInputRef} type="file" accept=".csv,.xlsx,.json" className="hidden" />
                <div className="w-20 h-20 bg-[#eff4ff] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-[#00236f] text-[48px]">cloud_upload</span>
                </div>
                <h2 className="text-[24px] font-semibold leading-8 tracking-[-0.01em] text-[#0b1c30] mb-2">Drag and drop your files here</h2>
                <p className="text-[#444651] mb-8 text-[14px]">or click to browse from your computer</p>
                <div className="flex gap-4" onClick={e => e.stopPropagation()}>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-[#00236f] text-white px-6 py-2 text-[12px] font-semibold rounded shadow-sm hover:opacity-90 transition-opacity"
                  >
                    Select CSV File
                  </button>
                  <button className="border border-[#c5c5d3] text-[#00236f] px-6 py-2 text-[12px] font-semibold rounded hover:bg-[#eff4ff] transition-colors">
                    Browse Cloud Storage
                  </button>
                </div>
                <p className="mt-8 text-[11px] font-semibold text-[#444651] uppercase tracking-wider">Accepted formats: .csv, .xlsx, .json</p>
              </div>

              {/* Pipeline Status */}
              <div className="bg-white border border-[#c5c5d3] rounded-xl p-6">
                <h3 className="text-[18px] font-semibold text-[#0b1c30] mb-6">Pipeline Status</h3>
                <div className="flex items-center justify-between relative px-8">
                  {/* Progress line */}
                  <div className="absolute top-[21px] left-0 right-0 h-1 bg-[#dce9ff] z-0 mx-8">
                    <div className="h-full bg-[#00236f] transition-all duration-700" style={{ width: `${progress}%` }}></div>
                  </div>
                  {/* Steps */}
                  {[
                    { num: 1, label: "Validation", active: true },
                    { num: 2, label: "Cleaning", active: false },
                    { num: 3, label: "Success", active: false },
                  ].map((step) => (
                    <div key={step.num} className="relative z-10 flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 border-[#f8f9ff] ${step.active ? "bg-[#00236f] text-white" : "bg-[#dce9ff] text-[#444651]"}`}>
                        {step.num}
                      </div>
                      <span className={`mt-2 text-[12px] font-medium ${step.active ? "text-[#00236f]" : "text-[#444651]"}`}>{step.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 bg-[#eff4ff] p-4 rounded-lg flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#00236f] animate-spin">sync</span>
                  <div className="flex-1">
                    <p className="text-[14px] font-medium text-[#0b1c30]">Analyzing file structure...</p>
                    <p className="text-[11px] font-semibold text-[#444651]">Verifying 12,403 data points across 8 categories.</p>
                  </div>
                  <span className="text-[12px] font-bold text-[#00236f]">{Math.round(progress)}%</span>
                </div>
              </div>
            </div>

            {/* Side Panel */}
            <aside className="col-span-12 lg:col-span-4 space-y-6">
              {/* Guidelines */}
              <div className="bg-white border border-[#c5c5d3] rounded-xl overflow-hidden">
                <div className="bg-[#eff4ff] p-4 border-b border-[#c5c5d3]">
                  <h3 className="text-[20px] font-semibold text-[#0b1c30]">File Guidelines</h3>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    { title: "Header Mapping", desc: "Ensure column headers match our standard schema (SKU, Qty, Warehouse_ID)." },
                    { title: "Data Encoding", desc: "Use UTF-8 encoding to prevent character distortion during processing." },
                    { title: "Size Limits", desc: "Maximum file size is 250MB for immediate processing." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <span className="material-symbols-outlined text-[#006a61] text-[20px]">check_circle</span>
                      <div>
                        <p className="text-[12px] font-medium text-[#0b1c30]">{item.title}</p>
                        <p className="text-[11px] font-semibold text-[#444651]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-6 bg-[#f8f9ff] border-t border-[#c5c5d3]">
                  <button className="w-full border border-[#c5c5d3] text-[#0b1c30] text-[12px] font-medium py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#e5eeff] transition-colors">
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    Download Sample Template
                  </button>
                </div>
              </div>

              {/* Context Card */}
              <div className="bg-[#1e3a8a] text-[#90a8ff] p-6 rounded-xl">
                <h4 className="text-[18px] font-semibold text-white mb-2">Why accurate data matters</h4>
                <p className="text-[14px] opacity-90 mb-4 text-white/80">Our predictive engine relies on historical precision to generate accurate inventory alerts. Clean data reduces stock-outs by up to 24%.</p>
                <a href="#" className="text-[12px] font-bold underline flex items-center gap-1 text-[#90a8ff]">
                  Learn about AI cleaning
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
