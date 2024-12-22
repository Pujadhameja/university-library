import { auth } from "@/auth";
import Header from "@/components/Header";
import { redirect } from "next/navigation";

async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (!session) redirect("/sign-in");

  return (
    <main className="flex-1 flex flex-col md:px-16 xs:px-10 px-5  bg-pattern bg-cover bg-top min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Header />

        <div className="mt-20 pb-20">{children}</div>
      </div>
    </main>
  );
}

export default Layout;
