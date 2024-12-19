import Sidebar from "@/components/Sidebar";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-row">
      <Sidebar />

      <div className="flex-1 flex flex-col px-16 py-24 gradient-horizontal">
        <div className="max-w-7xl mx-auto">{children}</div>
      </div>
    </main>
  );
}

export default Layout;
