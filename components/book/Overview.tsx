import Image from "next/image";

import BookCover from "./Cover";
import { Button } from "../ui/button";

const BookOverview = ({
  title,
  author,
  genre,
  rating,
  total_books,
  description,
  color,
  cover,
}: Book) => {
  return (
    <section className="flex flex-col-reverse items-center gap-12 sm:gap-32 xl:flex-row xl:gap-8">
      <div className="flex flex-1 flex-col gap-5">
        <h1 className="text-7xl font-semibold text-white">{title}</h1>

        <div className="mt-7 flex flex-row gap-4 text-xl text-light-100">
          <p>
            By <span className="font-semibold text-light-200">{author}</span>
          </p>

          <div className="flex flex-row gap-1">
            <Image src="/icons/star.svg" alt="star" width={22} height={22} />
            <p>{rating}</p>
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <p className="mt-1 text-xl text-light-100">
            Category: <span className="ml-2 text-primary">{genre}</span>
          </p>

          <p className="mt-1 text-xl text-light-100">
            Total: <span className="ml-2 text-primary">{total_books}</span>
          </p>
        </div>

        <p className="mt-2 text-justify text-xl text-light-100">
          {description}
        </p>

        <Button className="text-dark-800 mt-4 min-h-14 w-fit bg-primary hover:bg-primary/90 max-md:w-full">
          <Image src="/icons/book.svg" alt="book" width={20} height={20} />
          <p className="text-dark-800 font-bebas-neue text-xl">
            Borrow Book Request
          </p>
        </Button>
      </div>

      <div className="relative flex flex-1 justify-center">
        <div className="relative">
          <BookCover
            variant="wide"
            className="z-10"
            coverColor={color}
            coverImage={cover}
          />

          <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
            <BookCover variant="wide" coverColor={color} coverImage={cover} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookOverview;
