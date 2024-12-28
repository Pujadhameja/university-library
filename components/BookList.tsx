import Link from "next/link";
import Image from "next/image";

import Sort from "./Sort";
import BookCover from "./BookCover";
import { Button } from "./ui/button";
import { BorrowedBook, NormalBook } from "./BookCard";

interface Props {
  title: string;
  books: Book[] | BorrowedBook[];
  isBorrowed?: boolean;
  containerClassName?: string;
  showSorts?: boolean;
  showNoResultBtn?: boolean;
}

const BookList = ({
  title,
  books,
  isBorrowed,
  containerClassName,
  showSorts = false,
  showNoResultBtn = false,
}: Props) => {
  return (
    <section className={containerClassName}>
      <div className="flex flex-row items-center justify-between">
        <h2 className="font-bebas-neue text-4xl text-light-100">{title}</h2>

        {showSorts && <Sort />}
      </div>

      <ul className="book-list">
        {books.length > 0 ? (
          books.map((item) =>
            !isBorrowed ? (
              <NormalBook key={item.id} {...(item as Book)} />
            ) : (
              <BorrowedBook key={item.id} {...(item as BorrowedBook)} />
            )
          )
        ) : (
          <div className="flex justify-center items-center flex-col text-center w-full">
            <Image
              src="/images/no-books.png"
              alt="no-books"
              width={200}
              height={200}
              className="object-contain"
            />

            <h4 className="text-white mt-6 font-semibold text-2xl">
              No Results Found
            </h4>
            <p className="text-light-100 w-[360px] mt-1">
              We couldn’t find any books matching your search. Try using
              different keywords or check for typos.
            </p>

            {showNoResultBtn && (
              <Button
                asChild
                className="bg-primary font-bebas-neue min-w-[360px] mt-6 text-dark-100 text-xl hover:bg-primary/90 min-h-12"
              >
                <Link href="/library">Clear Search</Link>
              </Button>
            )}
          </div>
        )}
      </ul>
    </section>
  );
};

export default BookList;
