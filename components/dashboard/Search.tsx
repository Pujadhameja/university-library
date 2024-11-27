"use client";

import Image from "next/image";
import React, { useState } from "react";

import { Input } from "@/components/ui/input";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="relative flex min-h-[52px] w-full  grow items-center rounded-xl border border-gray-300 px-4 xl:min-w-[450px]">
      <Image
        src="/assets/icons/dashboard/search-normal.svg"
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
        className="w-full border-none shadow-none focus-visible:ring-0"
      />
    </div>
  );
};

export default Search;
