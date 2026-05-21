"use client";

import DashboardShell from "@/components/layout/DashboardShell";

export default function SettingsPage() {
  return (
    <DashboardShell>
      <div className="p-8 max-w-[1440px] mx-auto">
        <div className="mb-8">
          <h1 className="text-[24px] font-semibold leading-8 tracking-[-0.01em] text-[#0b1c30]">Settings</h1>
          <p className="text-[14px] text-[#444651]">Manage your account and application preferences.</p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Profile */}
          <div className="col-span-12 lg:col-span-8 bg-white border border-[#c5c5d3] rounded-xl p-6">
            <h2 className="text-[18px] font-semibold text-[#0b1c30] mb-6 pb-4 border-b border-[#c5c5d3]">Profile Settings</h2>
            <div className="space-y-6">
              {[
                { label: "Full Name", value: "John Doe", type: "text" },
                { label: "Email Address", value: "john.doe@company.com", type: "email" },
                { label: "Role", value: "Senior Manager", type: "text" },
                { label: "Business Unit", value: "Precision Enterprise", type: "text" },
              ].map((field) => (
                <div key={field.label} className="flex flex-col gap-1">
                  <label className="text-[12px] font-medium text-[#444651]">{field.label}</label>
                  <input
                    type={field.type}
                    defaultValue={field.value}
                    className="px-4 py-2 border border-[#c5c5d3] rounded-lg text-[14px] bg-[#f8f9ff] focus:outline-none focus:border-[#00236f] focus:ring-2 focus:ring-[#00236f]/10 transition-all"
                  />
                </div>
              ))}
              <div className="flex justify-end pt-4">
                <button className="bg-[#00236f] text-white px-6 py-2 rounded-lg text-[14px] font-semibold hover:opacity-90 transition-all">
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <div className="bg-white border border-[#c5c5d3] rounded-xl p-6">
              <h2 className="text-[18px] font-semibold text-[#0b1c30] mb-4">Notifications</h2>
              <div className="space-y-4">
                {[
                  { label: "Low stock alerts", enabled: true },
                  { label: "AI insight updates", enabled: true },
                  { label: "Report generation", enabled: false },
                  { label: "Weekly digest", enabled: true },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="text-[14px] text-[#0b1c30]">{item.label}</span>
                    <div className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${item.enabled ? "bg-[#00236f]" : "bg-[#c5c5d3]"}`}>
                      <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${item.enabled ? "translate-x-5" : "translate-x-0.5"}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1e3a8a] text-white rounded-xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-[#90a8ff] text-[20px]">workspace_premium</span>
                <span className="text-[11px] font-semibold text-[#90a8ff] uppercase">Pro Plan</span>
              </div>
              <p className="text-[14px] text-white/80 mb-4">Enhanced predictive accuracy and unlimited report generation active.</p>
              <button className="w-full border border-[#90a8ff] text-[#90a8ff] py-2 rounded-lg text-[12px] font-semibold hover:bg-white/10 transition-colors">
                Manage Subscription
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
