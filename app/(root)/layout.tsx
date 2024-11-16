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
      <div className="user-page-container">{children}</div>
    </main>
  );
}

export default Layout;
