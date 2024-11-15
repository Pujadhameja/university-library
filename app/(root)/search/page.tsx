import React from "react";

import Book from "@/components/Book";
import Search from "@/components/user/Search";
import { mockBooks } from "@/constants";

const Page = () => {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-6 px-16 pt-24 text-light-200">
      <h3 className=" font-semibold text-user-primary">FIND BOOKS TO BORROW</h3>
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-semibold text-light-900">
          Discover Your Next Read:
        </h2>
        <h2 className="text-4xl font-semibold text-light-900">
          Search for Any Book in Our Library
        </h2>
      </div>
      <Search />

      <div className="flex w-full flex-col pt-20">
        <h2 className="font-bebas-neue text-3xl">Search Result</h2>
        <div className="flex grow flex-wrap gap-10 pt-8 max-sm:flex-col">
          {mockBooks.map((book, index) => (
            <div
              key={index}
              className="flex w-[160px] flex-col justify-between"
            >
              <Book color={book.color} cover={book.cover} size="medium" />
              <p className="line-clamp-2 text-lg text-light-900">
                {book.title} - By {book.author}
              </p>
              <p className="">{book.genre}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
