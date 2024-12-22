"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { sideBarLinks } from "@/constants";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="gradient-vertical fixed left-0 z-40 flex h-11 w-36 flex-row items-center justify-between py-10 shadow-xl max-xs:bottom-0 max-xs:right-0 max-xs:w-full max-xs:rounded-t-3xl max-xs:px-5 xs:sticky xs:top-0 xs:h-dvh xs:flex-col">
      <Link href="/" className="max-xs:hidden">
        <Image src="/icons/logo.svg" width={40} height={40} alt="site-logo" />
      </Link>

      <div className="flex w-full flex-row gap-3 xs:flex-col xs:items-center">
        {sideBarLinks.map((link) => {
          const isSelected =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              key={link.route}
              href={link.route}
              className="relative flex w-full items-center justify-center xs:py-6"
            >
              <div className="relative size-7 xs:size-10">
                <Image
                  src={isSelected ? link.selectedImg : link.img}
                  fill
                  alt="icon"
                  className="object-contain"
                />
              </div>
              {isSelected && (
                <div className="absolute inset-y-0 right-0 h-auto w-1 rounded-xl bg-primary max-xs:hidden" />
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
