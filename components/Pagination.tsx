"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface Props {
  variant: "dark" | "light";
  hasNextPage?: boolean;
}

const Pagination = ({ variant, hasNextPage }: Props) => {
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
        className={cn(
          "min-h-10 font-semibold text-sm",
          variant === "dark"
            ? "bg-dark-300 hover:bg-dark-100"
            : "bg-light-300 text-dark-300 hover:bg-light-300/70"
        )}
        onClick={() => handlePageNavigation("previous")}
      >
        Previous
      </Button>

      <p
        className={cn(
          "text-sm inline-flex items-center font-semibold px-4 py-1.5 rounded-md text-center",
          variant === "dark"
            ? "bg-light-200 text-black"
            : "bg-primary-admin text-white"
        )}
      >
        {page}
      </p>

      <Button
        disabled={!hasNextPage}
        className={cn(
          "min-h-10 font-semibold text-sm",
          variant === "dark"
            ? "bg-dark-300 hover:bg-dark-100"
            : "bg-light-300 text-dark-300 hover:bg-light-300/70"
        )}
        onClick={() => handlePageNavigation("next")}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
