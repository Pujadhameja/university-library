"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/assets/icons/logo.svg";
import { sideBarLinks } from "@/constants/user";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className="bg-gradient-vertical sticky left-0 top-0 flex h-screen w-fit min-w-[150px] flex-col items-center justify-between lg:w-[150px]">
      <div className="pt-10">
        <Link href="/">
          <Image src={logo} width={40} height={40} alt="site-logo" />
        </Link>
      </div>
      <div className="flex w-full flex-col ">
        {sideBarLinks.map((link) => {
          const isSelected =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <div key={link.route} className="m-12 flex w-full">
              <Link href={link.route}>
                <Image
                  src={isSelected ? link.selectedImg : link.img}
                  width={40}
                  height={40}
                  alt="icon"
                />
              </Link>
              {isSelected && (
                <div className="relative bottom-1/2 left-[58px] h-[200%] w-1 bg-user-primary" />
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
