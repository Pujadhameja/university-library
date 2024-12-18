import Image from "next/image";

function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen max-h-screen flex-row text-light-200">
      <section className="flex-1 h-full gradient-horizontal px-5 py-10 overflow-y-auto hide-scrollbar my-auto">
        <div className="gradient-vertical p-10 max-w-xl rounded-lg flex flex-col gap-6 mx-auto">
          <div className="flex flex-row gap-2">
            <Image src="/icons/logo.svg" alt="logo" width={37} height={37} />
            <h1 className="text-2xl font-semibold text-primary">BookWise</h1>
          </div>

          <div>{children}</div>
        </div>
      </section>

      <Image
        src="/images/auth-illustration.png"
        alt="auth-illustration"
        height={1000}
        width={1000}
        className="max-w-[50%]"
      />
    </main>
  );
}

export default AuthLayout;
