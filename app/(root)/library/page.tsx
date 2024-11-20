import Link from "next/link";
import React from "react";

import Book from "@/components/Book";
import { mockBooks } from "@/constants";

const Page = () => {
  return (
    <section>
      <h2 className="section-header">All Library Books</h2>
      <div className="books-container">
        {mockBooks.map((book, index) => (
          <div key={index} className="flex w-[160px] flex-col justify-between">
            <Link href={`/book/${index}`}>
              <Book color={book.color} cover={book.cover} size="medium" />
            </Link>
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
