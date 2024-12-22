"use client";

import Image from "next/image";
import React, { useState } from "react";

import { Input } from "./ui/input";

const Search = () => {
  const [search, setSearch] = useState("");

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
        placeholder="Thriller mistery"
        onChange={(e) => setSearch(e.target.value)}
        className="search-input w-full"
      />
    </div>
  );
};

export default Search;
