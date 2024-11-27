"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { sideBarLinks } from "@/constants/dashboard";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="sticky left-0 top-0 flex h-dvh min-w-fit flex-col justify-between border bg-white px-4">
      <div className="divide-y-2 divide-dashed">
        <div className="flex flex-row items-center gap-2 py-6">
          <Image
            src="/assets/icons/dashboard/logo.svg"
            height={37}
            width={37}
            alt="site-logo"
          />
          <h1 className="text-3xl font-semibold text-dashboard-primary">
            BookWise
          </h1>
        </div>
        <div className="flex flex-col gap-2 pt-6">
          {sideBarLinks.map((link) => {
            const isSelected =
              (link.route !== "/dashboard" &&
                pathname.includes(link.route) &&
                link.route.length > 1) ||
              pathname === link.route;

            return (
              <Link key={link.route} href={link.route} className="">
                <div
                  className={`flex flex-row items-center ${isSelected && "bg-dashboard-primary shadow-sm"} w-full gap-2 rounded-md px-3 py-2`}
                >
                  <Image
                    src={isSelected ? link.selectedImg : link.img}
                    width={20}
                    height={20}
                    alt="icon"
                  />
                  <p
                    className={`text-xl font-semibold text-dark-200 ${isSelected && "text-white"}`}
                  >
                    {link.text}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="my-8 flex w-full flex-row gap-2 rounded-full border border-light-600 px-6 py-2 shadow-sm">
        <Image
          src="/assets/images/dashboard/admin.png"
          alt="auth-user"
          width={48}
          height={48}
          className="size-[48px] "
        />
        <div className="flex flex-col">
          <p className="text-lg font-semibold text-dark-200">Adrian Hajdin</p>
          <p className="text-light-200">adrian@jsmastery.pro</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
