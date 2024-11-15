import React from "react";

import Sidebar from "@/components/user/nav/Sidebar";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-gradient-horizontal flex">
      <Sidebar />
      <div className="mx-auto min-h-screen w-full max-w-7xl">{children}</div>
    </main>
  );
}

export default Layout;
