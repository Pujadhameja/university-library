"use client";

import Image from "next/image";
import React, { useState } from "react";

import { Button } from "./ui/button";
import BookCase from "./BookCase";

interface BookProps {
  book: {
    title: string;
    author: string;
    narrator: string;
    genre: string;
    length: string;
    rating: number;
    description: string;
    color: string;
    cover: string;
  };
}

const BookOverview = ({ book }: BookProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="flex flex-row gap-8 max-xl:flex-col-reverse max-sm:items-center">
      <div className="flex-1 flex flex-col gap-5">
        <h1 className="text-7xl font-semibold text-light-900">{book.title}</h1>

        <div className="mt-7 flex flex-row gap-4 text-light-200">
          <p>
            By <span className="text-primary">{book.author}</span>
          </p>
          <p>
            Read by <span className="text-primary">{book.narrator}</span>
          </p>
        </div>

        <p className="text-light-200">
          Category: <span className="text-primary ml-2">{book.genre}</span>
        </p>

        <div className="flex flex-row gap-4 text-light-200">
          <div className="flex flex-row gap-1">
            <Image src="/icons/star.svg" alt="star" width={22} height={22} />
            <p>{book.rating}</p>
          </div>

          <div className="flex flex-row gap-1">
            <Image src="/icons/clock.svg" alt="clock" width={22} height={22} />
            <p>{book.length}</p>
          </div>
        </div>

        <p className="text-justify text-light-200">{book.description}</p>

        <div className="flex flex-row gap-6 max-md:flex-col max-sm:items-center">
          <Button
            className="text-dark-800 bg-primary min-h-14 hover:bg-primary/90 max-md:w-full"
            onClick={() => {
              setIsDialogOpen(true);
            }}
          >
            <Image src="/icons/book.svg" alt="book" width={20} height={20} />
            <p className="font-bebas-neue text-xl text-dark-800">
              Borrow Book Request
            </p>
          </Button>

          <Button className="gradient-gray min-h-14 max-md:w-full">
            <Image src="/icons/heart.svg" alt="book" width={20} height={20} />
            <p className="font-bebas-neue text-xl text-primary">
              Add to wishlist
            </p>
          </Button>
        </div>
      </div>

      <div className="relative flex-1 flex justify-center">
        <BookCase width={286} height={394} />
      </div>
    </section>
  );
};

export default BookOverview;
