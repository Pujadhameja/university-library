import React from "react";

import Sidebar from "@/components/dashboard/nav/Sidebar";
import TopNav from "@/components/dashboard/nav/TopNav";

function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex bg-light-700">
      <Sidebar />
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center text-dark-400">
        <TopNav />
        {children}
      </div>
    </main>
  );
}

export default AdminLayout;
