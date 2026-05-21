"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#f8f9ff]">
      <main className="w-full max-w-5xl bg-white rounded-xl overflow-hidden flex shadow-sm border border-[#e2e8f0]">

        {/* Left: Visual */}
        <section className="hidden md:flex md:w-1/2 bg-[#e5eeff] relative items-center justify-center p-8 overflow-hidden border-r border-[#c5c5d3]">
          <div className="z-10 text-center space-y-4">
            <div className="w-16 h-16 bg-[#00236f] rounded-lg flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-white text-[40px]">inventory_2</span>
            </div>
            <h2 className="text-[24px] font-semibold leading-8 tracking-[-0.01em] text-[#00236f]">InventoryInsights</h2>
            <p className="text-[14px] text-[#444651] max-w-xs mx-auto leading-5">
              Precise logistics management and real-time inventory tracking for modern enterprise scale operations.
            </p>
          </div>
          {/* Dot pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(0,35,111,0.06) 1px, transparent 0)", backgroundSize: "24px 24px" }}
          />
        </section>

        {/* Right: Form */}
        <section className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            {/* Mobile header */}
            <div className="md:hidden mb-8 text-center">
              <h1 className="text-[30px] font-bold text-[#00236f] mb-1">InventoryInsights</h1>
              <p className="text-[14px] text-[#444651]">Sign in to your dashboard</p>
            </div>

            <header className="mb-8 hidden md:block">
              <h1 className="text-[24px] font-semibold text-[#0b1c30] mb-1">Welcome back</h1>
              <p className="text-[14px] text-[#444651]">Enter your credentials to access your account</p>
            </header>

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email */}
              <div className="space-y-1">
                <label className="text-[12px] font-medium text-[#444651] block" htmlFor="email">
                  Email Address
                </label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#757682] text-[20px] group-focus-within:text-[#00236f] transition-colors">mail</span>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="w-full pl-11 pr-4 py-2 bg-[#f8f9ff] border border-[#c5c5d3] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#00236f]/10 focus:border-[#00236f] transition-all placeholder:text-[#757682]/60"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="text-[12px] font-medium text-[#444651]" htmlFor="password">Password</label>
                  <a href="#" className="text-[12px] font-medium text-[#00236f] hover:underline">Forgot password?</a>
                </div>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#757682] text-[20px] group-focus-within:text-[#00236f] transition-colors">lock</span>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    className="w-full pl-11 pr-11 py-2 bg-[#f8f9ff] border border-[#c5c5d3] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#00236f]/10 focus:border-[#00236f] transition-all placeholder:text-[#757682]/60"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#757682] hover:text-[#0b1c30] transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <div className="flex items-center gap-2">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 rounded border-[#c5c5d3] text-[#00236f] cursor-pointer"
                />
                <label htmlFor="remember" className="text-[14px] text-[#444651] cursor-pointer select-none">
                  Keep me signed in
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-[#00236f] text-white text-[18px] font-semibold leading-[26px] rounded-lg hover:bg-[#1e3a8a] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-70"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Sign In</span>
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </>
                )}
              </button>
            </form>

            {/* Footer */}
            <footer className="mt-8 pt-6 border-t border-[#c5c5d3] flex flex-col items-center gap-4">
              <p className="text-[14px] text-[#444651]">
                Don&apos;t have an account?{" "}
                <a href="#" className="text-[#00236f] font-bold hover:underline">Request Access</a>
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-[11px] font-semibold text-[#757682] hover:text-[#444651] transition-colors">Privacy Policy</a>
                <a href="#" className="text-[11px] font-semibold text-[#757682] hover:text-[#444651] transition-colors">Terms of Service</a>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
