"use client";

import Image from "next/image";
import React, { useState } from "react";

import { Input } from "@/components/ui/input";

const Search = () => {
  const [search, setSearch] = useState("");

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
        className="user-input"
      />
    </div>
  );
};

export default Search;
