"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { sorts } from "@/constants";

const Sort = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSort = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", value);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Select onValueChange={handleSort}>
      <SelectTrigger className="w-40 h-10 px-4 bg-dark-300 text-light-100 border-dark-100">
        <SelectValue placeholder="Sort By" />
      </SelectTrigger>

      <SelectContent className="bg-dark-300 text-light-100 border-dark-100">
        {sorts.map((sort) => (
          <SelectItem
            key={sort.value}
            value={sort.value}
            className="focus:bg-dark-600 focus:text-light-100"
          >
            {sort.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Sort;
