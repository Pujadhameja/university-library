import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

import BookCover from "./BookCover";
import { Button } from "./ui/button";

interface Props extends Book {
  isLoaned?: boolean;
}

const BookCard = ({
  id,
  title,
  category,
  coverColor,
  coverImage,
  isLoaned,
}: Props) => {
  return (
    <li className={cn(isLoaned && "xs:w-52 w-full")}>
      <Link
        href={`/books/${id}`}
        className={cn(isLoaned && "w-full flex flex-col items-center")}
      >
        <BookCover coverColor={coverColor} coverImage={coverImage} />

        <div className="mt-4 w-full xs:w-44">
          <p className="book-title">{title}</p>
          <p className="book-genre">{category}</p>
        </div>

        {isLoaned && (
          <div className="mt-7 w-full px-4">
            <div className="book-loaned">
              <Image
                src="/icons/calendar.svg"
                alt="calendar"
                width={18}
                height={18}
                className="object-contain"
              />

              <p className="text-light-100">11 days left to due</p>
            </div>

            <Button className="book-btn">Download receipt</Button>
          </div>
        )}
      </Link>
    </li>
  );
};

export default BookCard;
