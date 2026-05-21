"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/dashboard", label: "Dashboard", icon: "dashboard" },
  { href: "/sales", label: "Sales", icon: "payments" },
  { href: "/inventory", label: "Inventory", icon: "inventory_2" },
  { href: "/products", label: "Products", icon: "shopping_bag" },
  { href: "/analytics", label: "Analytics", icon: "analytics" },
  { href: "/forecasts", label: "Forecasts", icon: "trending_up" },
  { href: "/insights", label: "Insights", icon: "lightbulb" },
  { href: "/reports", label: "Reports", icon: "description" },
];

const bottomLinks = [
  { href: "/upload", label: "Upload Data", icon: "upload_file" },
  { href: "/settings", label: "Settings", icon: "settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-[#ffffff] border-r border-[#c5c5d3] flex flex-col pt-20 pb-6 px-4 z-40">
      {/* Brand */}
      <div className="mb-8 px-2">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 bg-[#00236f] rounded flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-[18px]">auto_awesome</span>
          </div>
          <h2 className="text-[20px] font-bold leading-7 text-[#00236f]">Inventory AI</h2>
        </div>
        <p className="text-[12px] font-medium text-[#444651] pl-10">Predictive Engine</p>
      </div>

      {/* Main Nav */}
      <nav className="flex-1 flex flex-col gap-1">
        {navLinks.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-4 px-4 py-2 rounded-lg transition-all text-[12px] font-medium leading-4 ${
                isActive
                  ? "bg-[#dce9ff] text-[#00236f] font-bold"
                  : "text-[#444651] hover:bg-[#e5eeff]"
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Nav */}
      <div className="flex flex-col gap-1 pt-4 border-t border-[#c5c5d3]">
        {bottomLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-4 px-4 py-2 rounded-lg transition-all text-[12px] font-medium leading-4 ${
                isActive
                  ? "bg-[#dce9ff] text-[#00236f] font-bold"
                  : "text-[#444651] hover:bg-[#e5eeff]"
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
