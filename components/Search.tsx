"use client";

import Image from "next/image";
import React, { useState } from "react";

import { Input } from "./ui/input";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="gradient-input relative flex w-full items-center rounded-xl px-4 mt-10 min-h-14">
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
        className="w-full search-input"
      />
    </div>
  );
};

export default Search;
