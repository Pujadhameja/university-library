"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { sideBarLinks } from "@/constants";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="gradient-vertical sticky left-0 top-0 z-40 flex h-dvh flex-col items-center justify-between py-10 w-36 shadow-xl">
      <Link href="/">
        <Image src="/icons/logo.svg" width={40} height={40} alt="site-logo" />
      </Link>

      <div className="flex w-full flex-col gap-3">
        {sideBarLinks.map((link) => {
          const isSelected =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              key={link.route}
              href={link.route}
              className="flex w-full justify-center relative py-6"
            >
              <Image
                src={isSelected ? link.selectedImg : link.img}
                width={40}
                height={40}
                alt="icon"
              />
              {isSelected && (
                <div className="absolute right-0 top-0 bottom-0 h-auto w-1 bg-primary rounded-xl" />
              )}
            </Link>
          );
        })}
      </div>

      <button onClick={() => {}}>
        <Image src="/icons/logout.svg" alt="logout" width={40} height={40} />
      </button>
    </section>
  );
};

export default Sidebar;
