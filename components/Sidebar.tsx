"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { sideBarLinks } from "@/constants";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="gradient-vertical xs:sticky fixed left-0 xs:top-0 max-xs:bottom-0 max-xs:right-0 z-40 flex xs:h-dvh h-11 xs:flex-col flex-row items-center justify-between py-10 max-xs:px-5 w-36 shadow-xl max-xs:w-full max-xs:rounded-t-3xl">
      <Link href="/" className="max-xs:hidden">
        <Image src="/icons/logo.svg" width={40} height={40} alt="site-logo" />
      </Link>

      <div className="flex w-full xs:flex-col xs:items-center flex-row gap-3">
        {sideBarLinks.map((link) => {
          const isSelected =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              key={link.route}
              href={link.route}
              className="flex w-full justify-center items-center relative xs:py-6"
            >
              <div className="relative xs:size-10 size-7">
                <Image
                  src={isSelected ? link.selectedImg : link.img}
                  fill
                  alt="icon"
                  className="object-contain"
                />
              </div>
              {isSelected && (
                <div className="absolute right-0 top-0 bottom-0 h-auto w-1 max-xs:hidden bg-primary rounded-xl" />
              )}
            </Link>
          );
        })}
      </div>

      <button
        onClick={() => signOut({ callbackUrl: "/sign-in" })}
        className="max-xs:hidden"
      >
        <Image src="/icons/logout.svg" alt="logout" width={40} height={40} />
      </button>
    </section>
  );
};

export default Sidebar;
