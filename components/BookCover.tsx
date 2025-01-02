import Image from "next/image";

import { cn } from "@/lib/utils";
import config from "@/lib/config";
import BookCoverSvg from "./BookCoverSvg";

type BookCoverVariant = "small" | "thin" | "medium" | "default" | "wide";

interface Props {
  coverUrl: string;
  className?: string;
  coverColor: string;
  variant?: BookCoverVariant;
}

const variantStyles: Record<BookCoverVariant, string> = {
  small: "book-cover_small",
  thin: "w-[55px] h-[76px]",
  medium: "book-cover_medium",
  default: "book-cover",
  wide: "book-cover_wide",
};

const BookCover = async ({
  className,
  variant = "default",
  coverColor = "#012B48",
  coverUrl = "https://placehold.co/400x600.png",
}: Props) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        variantStyles[variant],
        className
      )}
    >
      <BookCoverSvg coverColor={coverColor} />

      <div
        className="absolute z-10"
        style={{
          left: "12%",
          width: "87.5%",
          height: "88%",
        }}
      >
        <Image
          src={`${config.env.imagekit.urlEndpoint}/${coverUrl}`}
          alt="Book cover"
          fill
          className="rounded-sm object-fill"
        />
      </div>
    </div>
  );
};

export default BookCover;
