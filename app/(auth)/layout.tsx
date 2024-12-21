import Image from "next/image";

function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex sm:flex-row flex-col-reverse text-light-100 relative">
      <section className="flex-1 h-full px-5 py-10 my-auto flex items-center min-h-screen bg-pattern bg-cover bg-top">
        <div className="gradient-vertical p-10 max-w-xl rounded-lg flex flex-col gap-6 mx-auto">
          <div className="flex flex-row gap-2">
            <Image src="/icons/logo.svg" alt="logo" width={37} height={37} />
            <h1 className="text-2xl font-semibold text-white">BookWise</h1>
          </div>

          <div>{children}</div>
        </div>
      </section>

      <section className="sm:flex-1 w-full h-40 sticky sm:h-screen sm:top-0">
        <Image
          src="/images/auth-illustration.png"
          alt="auth-illustration"
          height={1000}
          width={1000}
          className="object-cover size-full"
        />
      </section>
    </main>
  );
}

export default AuthLayout;
