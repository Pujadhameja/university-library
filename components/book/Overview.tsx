"use client";

import Image from "next/image";

import BookCover from "./Cover";
import { Button } from "../ui/button";

const BookOverview = ({
  title,
  author,
  narrator,
  genre,
  length,
  rating,
  description,
  color,
  cover,
}: Book) => {
  return (
    <section className="flex flex-row gap-8 max-xl:flex-col-reverse items-center">
      <div className="flex-1 flex flex-col gap-5">
        <h1 className="text-7xl font-semibold text-white">{title}</h1>

        <div>
          <div className="mt-7 flex flex-row gap-4 text-xl text-light-100">
            <p>
              By <span className="text-light-200 font-semibold">{author}</span>
            </p>
            <p>
              Read by{" "}
              <span className="text-light-200 font-semibold">{narrator}</span>
            </p>
          </div>

          <p className="text-light-100 mt-1">
            Category: <span className="text-primary ml-2">{genre}</span>
          </p>
        </div>

        <div className="flex flex-row gap-4 text-light-100 text-xl">
          <div className="flex flex-row gap-1">
            <Image src="/icons/star.svg" alt="star" width={22} height={22} />
            <p>{rating}</p>
          </div>

          <div className="flex flex-row gap-1">
            <Image src="/icons/clock.svg" alt="clock" width={22} height={22} />
            <p>{length}</p>
          </div>
        </div>

        <p className="text-justify text-light-100 text-xl mt-2">
          {description}
        </p>

        <Button className="text-dark-800 bg-primary min-h-14 hover:bg-primary/90 max-md:w-full mt-4">
          <Image src="/icons/book.svg" alt="book" width={20} height={20} />
          <p className="font-bebas-neue text-xl text-dark-800">
            Borrow Book Request
          </p>
        </Button>
      </div>

      <div className="relative flex-1 flex justify-center">
        <div className="relative">
          <BookCover
            variant="wide"
            className="z-10"
            coverColor={color}
            coverImage={cover}
          />

          <div className="absolute top-10 left-16 opacity-40 rotate-12">
            <BookCover variant="wide" coverColor={color} coverImage={cover} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookOverview;
