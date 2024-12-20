import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface Props {
  isLoanedBook?: boolean;
  coverColor?: string;
  cover?: string;
}

const Book = ({
  isLoanedBook = false,
  coverColor = "#012B48",
  cover = "/images/origin.png",
}: Props) => {
  return (
    <li>
      <Link
        href="/books/1"
        className={cn(isLoanedBook && "w-52 flex flex-col items-center")}
      >
        <div className="relative w-60 h-80">
          <div
            className="absolute inset-0 rounded-[12px_10px_8px_20px] shadow-[1px_3px_20px_0px_rgba(0,0,0,0.1)] "
            style={{
              transformStyle: "preserve-3d",
              transform: "rotateY(-20deg)",
            }}
          >
            {/* Cover */}
            <div
              className="absolute inset-0 rounded-[12px_10px_8px_20px]"
              style={{
                backgroundColor: coverColor,
              }}
            >
              <div className="absolute left-8 top-0 right-0 bottom-8 rounded-r-[10px]">
                <Image
                  src={cover}
                  alt="Book cover"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            {/* Pages */}
            <div className="absolute bg-white bottom-1 right-0 h-8 w-[calc(100%-8px)] rounded-[20px_2px_2px_20px] shadow-[inset_2px_3px_0px_0px_rgba(0,0,0,0.1)]" />
          </div>
        </div>

        <div className={cn("mt-4", !isLoanedBook && "max-w-40")}>
          <p className="text-xl mt-2 font-semibold text-white line-clamp-2">
            Origin - By Dan Brown
          </p>
          <p className="text-light-200 mt-1 text-base italic line-clamp-1">
            Thriller / Mystery
          </p>
        </div>

        {isLoanedBook && (
          <div className="mt-3 w-full">
            <div className="flex flex-row gap-1 items-center">
              <Image
                src="/icons/calendar.svg"
                alt="calendar"
                width={18}
                height={18}
                className="object-contain"
              />

              <p className="text-bae text-light-200">11 days left to due</p>
            </div>

            <Button className="gradient-gray min-h-14 text-primary text-base font-bebas-neue w-full mt-3">
              Download receipt
            </Button>
          </div>
        )}
      </Link>
    </li>
  );
};

export default Book;
