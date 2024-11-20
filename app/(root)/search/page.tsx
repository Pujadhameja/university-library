import Link from "next/link";
import React from "react";

import Book from "@/components/Book";
import Search from "@/components/user/Search";
import { mockBooks } from "@/constants";

const Page = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-6">
        <h3 className=" font-semibold text-user-primary">
          FIND BOOKS TO BORROW
        </h3>
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-semibold text-light-900">
            Discover Your Next Read:
          </h2>
          <h2 className="text-4xl font-semibold text-light-900">
            Search for Any Book in Our Library
          </h2>
        </div>
        <Search />
      </div>

      <div className="flex w-full flex-col pt-20">
        <h2 className="section-header">Search Result</h2>
        <div className="books-container">
          {mockBooks.map((book, index) => (
            <div
              key={index}
              className="flex w-[160px] flex-col justify-between"
            >
              <Link href={`/book/${index}`}>
                <Book color={book.color} cover={book.cover} size="medium" />
              </Link>
              <p className="line-clamp-2 text-lg font-semibold text-light-900">
                {book.title} - By {book.author}
              </p>
              <p>{book.genre}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
