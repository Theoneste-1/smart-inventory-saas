import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-[#f8f9ff] min-h-screen">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <Navbar />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
