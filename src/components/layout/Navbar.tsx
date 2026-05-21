"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-[#f8f9ff] border-b border-[#c5c5d3] flex justify-between items-center px-6 z-50">
      {/* Left: Brand + Search */}
      <div className="flex items-center gap-6">
        <span className="text-[30px] font-bold leading-[38px] tracking-[-0.02em] text-[#00236f]">
          InventoryInsights
        </span>
        <div className="hidden md:flex items-center bg-[#eff4ff] px-4 py-1 rounded-lg border border-[#c5c5d3] gap-2">
          <span className="material-symbols-outlined text-[#757682] text-[20px]">search</span>
          <input
            type="text"
            placeholder="Search inventory..."
            className="bg-transparent border-none outline-none text-[14px] w-64 text-[#0b1c30] placeholder:text-[#757682]"
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1 px-4 py-1 rounded-lg hover:bg-[#e5eeff] transition-colors text-[#444651] text-[12px] font-medium">
          <span className="material-symbols-outlined text-[20px]">business_center</span>
          <span>Business Switcher</span>
        </button>
        <button className="p-1 rounded-full hover:bg-[#e5eeff] transition-colors text-[#444651] relative">
          <span className="material-symbols-outlined text-[20px]">notifications</span>
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#ba1a1a] rounded-full"></span>
        </button>
        <div className="w-8 h-8 rounded-full overflow-hidden border border-[#c5c5d3] bg-[#dce9ff] flex items-center justify-center">
          <span className="material-symbols-outlined text-[#00236f] text-[18px]">person</span>
        </div>
      </div>
    </header>
  );
}
