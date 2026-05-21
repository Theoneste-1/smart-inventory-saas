"use client";

import DashboardShell from "@/components/layout/DashboardShell";

const forecastCards = [
  {
    title: "Ultra-Lite Laptop Chassis",
    category: "Hardware Components",
    confidence: "98% Confidence",
    confClass: "bg-[#86f2e4] text-[#006f66]",
    predicted: "12,450 Units",
    gap: "-1,200 Units",
    gapClass: "text-[#ba1a1a]",
    trend: "trending_up",
    trendColor: "text-[#006a61]",
    trendVal: "+12.4%",
  },
  {
    title: "Retina Display Module",
    category: "Optics",
    confidence: "85% Confidence",
    confClass: "bg-[#e5eeff] text-[#444651]",
    predicted: "8,100 Units",
    gap: "Optimal",
    gapClass: "text-[#0b1c30]",
    trend: "trending_flat",
    trendColor: "text-[#444651]",
    trendVal: "0.0%",
  },
  {
    title: "Ergo-Type Switch V3",
    category: "Peripherals",
    confidence: "72% Confidence",
    confClass: "bg-[#ffdad6] text-[#93000a]",
    predicted: "45,200 Units",
    gap: "+5,000 Units",
    gapClass: "text-[#006a61]",
    trend: "trending_down",
    trendColor: "text-[#ba1a1a]",
    trendVal: "-4.2%",
  },
];

const chartBars = [
  { month: "Apr", height: "h-32", forecast: false },
  { month: "May", height: "h-40", forecast: false },
  { month: "Jun", height: "h-36", forecast: false },
  { month: "Jul (P)", height: "h-44", forecast: true },
  { month: "Aug", height: "h-52", forecast: true },
  { month: "Sep", height: "h-64", forecast: true },
];

export default function ForecastsPage() {
  return (
    <DashboardShell>
      <div className="p-8 max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[30px] font-bold leading-[38px] tracking-[-0.02em] text-[#0b1c30] mb-1">Sales Forecasts</h1>
          <p className="text-[16px] text-[#444651]">Quarterly predictive analysis based on historical trend data and market indicators.</p>
        </div>

        {/* Primary Chart */}
        <div className="bg-white border border-[#c5c5d3] rounded-lg p-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[18px] font-semibold text-[#0b1c30]">Revenue Projection: Q3 – Q4 2024</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                <span className="w-3 h-0.5 bg-[#00236f] inline-block"></span>
                <span className="text-[12px] font-medium text-[#444651]">Historical</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-0.5 border-t-2 border-dashed border-[#00236f] inline-block"></span>
                <span className="text-[12px] font-medium text-[#444651]">Forecast</span>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-between gap-2 border-b border-l border-[#c5c5d3] pb-4 pl-4" style={{ height: "300px" }}>
            {chartBars.map((bar) => (
              <div key={bar.month} className="flex-1 flex flex-col justify-end items-center gap-2">
                <div
                  className={`w-full relative ${bar.forecast ? "bg-[#1e3a8a]/20" : "bg-[#00236f]/20"} ${bar.height}`}
                >
                  <div className={`absolute top-0 left-0 right-0 border-t-2 ${bar.forecast ? "border-dashed border-[#00236f]" : "border-[#00236f]"}`}></div>
                </div>
                <span className={`text-center text-[11px] font-semibold ${bar.forecast ? "text-[#00236f]" : "text-[#444651]"}`}>{bar.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Forecast Cards */}
        <div className="mb-6">
          <h2 className="text-[20px] font-semibold text-[#0b1c30] mb-4">Top Product Demand Forecasts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {forecastCards.map((card) => (
              <div key={card.title} className="bg-white border border-[#c5c5d3] rounded-lg p-6 hover:border-[#00236f] transition-colors cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-[18px] font-semibold text-[#0b1c30]">{card.title}</h4>
                    <span className="text-[11px] font-semibold text-[#444651]">Category: {card.category}</span>
                  </div>
                  <span className={`${card.confClass} px-2 py-1 text-[11px] font-semibold rounded-lg`}>{card.confidence}</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-[#c5c5d3] pb-1">
                    <span className="text-[14px] text-[#444651]">Predicted Sales (30d)</span>
                    <span className="text-[18px] font-semibold text-[#00236f]">{card.predicted}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#c5c5d3] pb-1">
                    <span className="text-[14px] text-[#444651]">Inventory Gap</span>
                    <span className={`text-[18px] font-semibold ${card.gapClass}`}>{card.gap}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] font-semibold text-[#444651]">Trend Factor</span>
                    <div className={`flex items-center ${card.trendColor}`}>
                      <span className="material-symbols-outlined text-[16px]">{card.trend}</span>
                      <span className="text-[12px] font-medium ml-1">{card.trendVal}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#00236f] text-white rounded-lg p-8 flex flex-col justify-center">
            <h3 className="text-[20px] font-semibold mb-2">AI Recommendation</h3>
            <p className="text-[16px] mb-6 opacity-90">Based on the predicted surge in Ultra-Lite Chassis demand, we suggest increasing purchase orders by 15% before August 1st to avoid supply chain bottlenecks.</p>
            <button className="w-fit px-6 py-2 bg-white text-[#00236f] text-[18px] font-semibold rounded hover:opacity-90 transition-opacity">
              Automate Order Adjustment
            </button>
          </div>
          <div className="bg-[#eff4ff] border border-[#c5c5d3] rounded-lg p-8">
            <h3 className="text-[18px] font-semibold text-[#0b1c30] mb-4">Forecast Variables</h3>
            <ul className="space-y-2">
              {[
                { icon: "cloud", label: "Seasonal Adjustments", weight: "Weighting: High", color: "text-[#006a61]" },
                { icon: "campaign", label: "Marketing Campaign Influence", weight: "Weighting: Medium", color: "text-[#00236f]" },
                { icon: "history", label: "Historical Sales Patterns", weight: "Weighting: High", color: "text-[#006a61]" },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-4 p-3 bg-white border border-[#c5c5d3] rounded">
                  <span className={`material-symbols-outlined ${item.color}`}>{item.icon}</span>
                  <div>
                    <p className="text-[12px] font-medium text-[#0b1c30]">{item.label}</p>
                    <p className="text-[11px] font-semibold text-[#444651]">{item.weight}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
