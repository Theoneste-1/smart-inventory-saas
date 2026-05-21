import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "up" | "down" | "neutral";
  icon?: string;
}

export default function StatCard({ title, value, change, changeType = "up", icon }: StatCardProps) {
  const changeColor = changeType === "up" ? "text-[#006a61]" : changeType === "down" ? "text-[#ba1a1a]" : "text-[#444651]";
  const changeIcon = changeType === "up" ? "trending_up" : changeType === "down" ? "trending_down" : "trending_flat";

  return (
    <div className="bg-white border border-[#c5c5d3] p-4 flex flex-col justify-between card-hover">
      <div>
        <p className="text-[11px] font-semibold text-[#757682] uppercase tracking-wider mb-1">{title}</p>
        <h3 className="text-[30px] font-bold leading-[38px] tracking-[-0.02em] text-[#0b1c30]">{value}</h3>
      </div>
      {change && (
        <div className="flex items-center justify-between mt-4">
          <span className={`text-[12px] font-bold flex items-center ${changeColor}`}>
            <span className="material-symbols-outlined text-[12px] mr-1">{changeIcon}</span>
            {change}
          </span>
          {icon && (
            <span className="material-symbols-outlined text-[#444651] text-[20px]">{icon}</span>
          )}
        </div>
      )}
    </div>
  );
}
