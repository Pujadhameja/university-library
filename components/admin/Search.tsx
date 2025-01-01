"use client";

import Image from "next/image";
import { useDebounce } from "react-use";
import React, { useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

import { Input } from "../ui/input";

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
    <div className="flex border border-gray-100 min-h-14 items-center gap-1 rounded-md bg-light-600 px-4 lg:max-w-md w-full">
      <Image
        src="/icons/admin/search.svg"
        alt="search"
        width={21}
        height={21}
        className="cursor-pointer"
      />

      <Input
        type="text"
        value={search}
        placeholder="Search users, books by title, author, or genre."
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border-0 shadow-none bg-transparent outline-none focus:outline-none focus:ring-0 focus:border-0"
      />
    </div>
  );
};

export default Search;
