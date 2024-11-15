"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { sideBarLinks } from "@/constants/user";
import logo from "@/public/assets/icons/logo.svg";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className="bg-gradient-vertical sticky left-0 top-0 z-40 flex h-dvh min-w-fit  flex-col items-center justify-between max-sm:fixed lg:max-w-[150px]">
      <div className="pt-10">
        <Link href="/">
          <Image src={logo} width={40} height={40} alt="site-logo" />
        </Link>
      </div>
      <div className="flex w-full flex-col gap-12 ">
        {sideBarLinks.map((link) => {
          const isSelected =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <div key={link.route} className="flex w-full lg:mx-12">
              <Link href={link.route}>
                <Image
                  src={isSelected ? link.selectedImg : link.img}
                  width={40}
                  height={40}
                  alt="icon"
                />
              </Link>
              {isSelected && (
                <div className="relative bottom-1/2 left-[10%] h-[200%] w-1 bg-user-primary lg:left-[50px]" />
              )}
            </div>
          );
        })}
      </div>
      <div className="pb-10">
        <button onClick={() => {}}>
          <Image
            src="/assets/icons/user/logout.svg"
            alt="logout"
            width={40}
            height={40}
          />
        </button>
      </div>
    </section>
  );
};

export default Sidebar;
