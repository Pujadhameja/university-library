"use client";

import Image from "next/image";
import React, { useState } from "react";

import { Input } from "./ui/input";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="relative mt-10 flex min-h-14 w-full items-center rounded-xl bg-dark-300 px-4">
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
        placeholder="Thriller mistery"
        onChange={(e) => setSearch(e.target.value)}
        className="search-input w-full"
      />
    </div>
  );
};

export default Search;
