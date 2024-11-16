import React from "react";
import Image from "next/image";

function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-row min-h-screen text-light-200">
      <section className="bg-gradient-horizontal w-1/2 max-md:w-full justify-center items-center flex">
        <div className="bg-gradient-vertical rounded-lg flex flex-col p-8 max-w-[486px]">
          <div className="flex flex-row gap-2">
            <Image
              src="/assets/icons/logo.svg"
              alt="logo"
              width={37}
              height={37}
            />
            <h1 className="text-2xl text-user-primary font-semibold">
              BookWise
            </h1>
          </div>
          <div className="pt-4">{children}</div>
        </div>
      </section>
      <section className="bg-auth-user bg-cover bg-center bg-no-repeat w-1/2 max-md:hidden"></section>
    </main>
  );
}

export default AuthLayout;
