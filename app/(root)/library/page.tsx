import React from "react";

import Book from "@/components/Book";
import { mockBooks } from "@/constants";

const Page = () => {
  return (
    <div className="mx-auto w-full items-center px-16 pt-24 text-light-200">
      <div>
        <h2 className="font-bebas-neue text-3xl">All Library Books</h2>
        <div className="flex grow flex-wrap gap-10 pt-8 max-sm:flex-col">
          {mockBooks.map((book, index) => (
            <div
              key={index}
              className="flex w-[243px] flex-col justify-between"
            >
              <div className="flex justify-center">
                <Book color={book.color} cover={book.cover} size="medium" />
              </div>
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
