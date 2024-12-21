"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { navigationLinks } from "@/constants";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
        <Image src="/icons/logo.svg" width={40} height={40} alt="site-logo" />
      </Link>

      <ul className="flex flex-row gap-8">
        {navigationLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(
                "text-base cursor-pointer",
                pathname === link.href ? "text-light-200" : "text-light-100"
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
