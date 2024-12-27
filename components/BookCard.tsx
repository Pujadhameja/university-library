import Link from "next/link";

import { cn } from "@/lib/utils";

import BookCover from "./BookCover";
import BookReceipt from "./BookReceipt";

const BookCard = <T extends Book | BorrowedBook>(
  props: T & { isBorrowed?: boolean }
) => {
  const { id, title, category, coverColor, coverImage, isBorrowed } = props;

  return (
    <li className={cn(isBorrowed && "xs:w-52 w-full")}>
      <Link
        href={`/books/${id}`}
        className={cn(isBorrowed && "w-full flex flex-col items-center")}
      >
        <BookCover coverColor={coverColor} coverImage={coverImage} />

        <div className="mt-4 w-full xs:w-44">
          <p className="book-title">{title}</p>
          <p className="book-genre">{category}</p>
        </div>

        {isBorrowed && <BookReceipt {...(props as BorrowedBook)} />}
      </Link>
    </li>
  );
};

export default BookCard;
