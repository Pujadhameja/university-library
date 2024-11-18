import React from "react";

import Sidebar from "@/components/dashboard/nav/Sidebar";

function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex bg-light-700">
      <Sidebar />
      <div className="mx-auto min-h-screen w-full max-w-7xl items-center px-16  pt-24 text-dark-400">
        {children}
      </div>
    </main>
  );
}

export default AdminLayout;
