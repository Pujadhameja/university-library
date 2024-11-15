"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

import { Input } from "@/components/ui/input";

const Search = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [search, setSearch] = useState(query || "");

  useEffect(() => {
    const delayDebounceFunction = setTimeout(() => {
      if (search) {
        console.log("search", search);
        console.log("pathname", pathname);
        // router.push(newUrl, { scroll: false });
      }
    }, 500);
    return () => clearTimeout(delayDebounceFunction);
  }, [search, pathname, router, searchParams, query]);

  return (
    <div className="bg-gradient-input relative flex min-h-[60px] w-full max-w-[630px] grow items-center rounded-xl px-4">
      <Image
        src="/assets/icons/user/search-selected.svg"
        alt="search"
        width={21}
        height={21}
        className="cursor-pointer"
      />
      <Input
        type="text"
        value={search}
        placeholder="Thriller mistery"
        onChange={(e) => setSearch(e.target.value)}
        className=" min-w-full border-none font-bold text-light-900 placeholder:text-light-900 focus-visible:ring-0"
      />
    </div>
  );
};

export default Search;
