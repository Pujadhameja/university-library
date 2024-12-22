"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { adminSideBarLinks } from "@/constants";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="sticky left-0 top-0 flex h-dvh flex-col justify-between bg-white px-5 pb-5 pt-10">
      <div>
        <div className="flex flex-row items-center gap-2 border-b border-dashed border-primary-admin/20 pb-10 max-md:justify-center">
          <Image
            src="/icons/admin/logo.svg"
            height={37}
            width={37}
            alt="site-logo"
          />
          <h1 className="text-2xl font-semibold text-primary-admin max-md:hidden">
            BookWise
          </h1>
        </div>

        <div className="mt-10 flex flex-col gap-5">
          {adminSideBarLinks.map((link) => {
            const isSelected =
              (link.route !== "/admin" &&
                pathname.includes(link.route) &&
                link.route.length > 1) ||
              pathname === link.route;

            return (
              <Link key={link.route} href={link.route}>
                <div
                  className={` flex flex-row items-center ${isSelected && "bg-primary-admin shadow-sm"} w-full gap-2 rounded-lg px-5 py-3.5 max-md:justify-center `}
                >
                  <div className="relative size-5">
                    <Image
                      src={link.img}
                      alt="icon"
                      fill
                      className={`${isSelected ? "brightness-0 invert" : ""}  object-contain`}
                    />
                  </div>

                  <p
                    className={`text-base font-medium  ${isSelected ? "text-white" : "text-dark-200"} max-md:hidden`}
                  >
                    {link.text}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="border-light-600 my-8 flex w-full flex-row gap-2 rounded-full border px-6 py-2 shadow-sm max-md:px-2">
        <Image
          src="/icons/admin/logo.svg"
          alt="auth-user"
          width={48}
          height={48}
        />

        <div className="flex flex-col max-md:hidden">
          <p className="text-dark-200 text-lg font-semibold">Adrian Hajdin</p>
          <p className="text-light-100">adrian@jsmastery.pro</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
