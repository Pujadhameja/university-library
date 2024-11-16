import Image from "next/image";
import React from "react";

function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-row text-light-200">
      <section className="bg-gradient-horizontal flex w-1/2 items-center justify-center max-md:w-full">
        <div className="bg-gradient-vertical flex max-w-[486px] flex-col rounded-lg p-8">
          <div className="flex flex-row gap-2">
            <Image
              src="/assets/icons/logo.svg"
              alt="logo"
              width={37}
              height={37}
            />
            <h1 className="text-2xl font-semibold text-user-primary">
              BookWise
            </h1>
          </div>
          <div className="pt-4">{children}</div>
        </div>
      </section>
      <section className="w-1/2 bg-auth-user bg-cover bg-center bg-no-repeat max-md:hidden"></section>
    </main>
  );
}

export default AuthLayout;
