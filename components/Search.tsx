"use client";

import Image from "next/image";
import { useDebounce } from "react-use";
import React, { useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

import { Input } from "./ui/input";

const Search = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("query") || "");

  useDebounce(
    () => {
      const params = new URLSearchParams(searchParams);
      if (search) {
        params.set("query", search);
      } else {
        params.delete("query");
      }
      router.push(`${pathname}?${params.toString()}`);
    },
    500,
    [search]
  );

  return (
    <div className="search">
      <Image
        src="/icons/search-fill.svg"
        alt="search"
        width={21}
        height={21}
        className="cursor-pointer"
      />

      <Input
        type="text"
        value={search}
        placeholder="Thriller mystery"
        onChange={(e) => setSearch(e.target.value)}
        className="search-input w-full"
      />
    </div>
  );
};

export default Search;
