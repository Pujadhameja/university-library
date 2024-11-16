import React from "react";

import Book from "@/components/Book";
import { mockBooks } from "@/constants";

const Page = () => {
  return (
    <section>
      <h2 className="font-bebas-neue text-3xl">All Library Books</h2>
      <div className="flex grow flex-wrap gap-10 pt-8 max-sm:flex-col">
        {mockBooks.map((book, index) => (
          <div key={index} className="flex w-[160px] flex-col justify-between">
            <Book color={book.color} cover={book.cover} size="medium" />
            <p className="line-clamp-2 text-lg text-light-900">
              {book.title} - By {book.author}
            </p>
            <p>{book.genre}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
