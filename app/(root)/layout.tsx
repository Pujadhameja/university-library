import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex xs:flex-row flex-col">
      <Header />
      <Sidebar />

      <div className="flex-1 flex flex-col md:px-16 xs:px-10 px-5 xs:py-24 pt-10 pb-32 gradient-horizontal">
        <div className="max-w-7xl mx-auto">{children}</div>
      </div>
    </main>
  );
}

export default Layout;
