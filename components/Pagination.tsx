"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

import { Button } from "./ui/button";

const Pagination = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page") || "1");

  const handlePageNavigation = (type: "next" | "previous") => {
    const params = new URLSearchParams(searchParams);
    const newPage = type === "next" ? page + 1 : Math.max(1, page - 1);

    params.set("page", newPage.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-row justify-end gap-3">
      <Button
        disabled={page === 1}
        className="bg-dark-300 hover:bg-dark-100 min-h-10"
        onClick={() => handlePageNavigation("previous")}
      >
        Previous
      </Button>
      <p className="bg-light-200 text-lg text-black font-semibold px-4 py-1.5 rounded-md text-center">
        {page}
      </p>
      <Button
        className="bg-dark-300 hover:bg-dark-100 min-h-10"
        onClick={() => handlePageNavigation("next")}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
