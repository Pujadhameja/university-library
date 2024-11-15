import React from "react";

import Sidebar from "@/components/user/nav/Sidebar";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex">
      <Sidebar />
      <div className="bg-gradient-horizontal mx-auto min-h-screen w-full">
        {children}
      </div>
    </main>
  );
}

export default Layout;
