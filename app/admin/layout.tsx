import Sidebar from "@/components/admin/Sidebar";
import { ReactNode } from "react";

const AdminLayout = async ({ children }: { children: ReactNode }) => (
  <main className="flex min-h-screen w-full flex-row">
    <Sidebar />

    <div className="bg-light-800 flex w-[calc(100%-264px)] flex-1 flex-col p-5 xs:p-10">
      {children}
    </div>
  </main>
);

export default AdminLayout;
