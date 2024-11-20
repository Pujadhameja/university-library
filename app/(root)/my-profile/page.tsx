import Image from "next/image";
import Link from "next/link";
import React from "react";

import Book from "@/components/Book";
import { mockBooks } from "@/constants";

const Page = () => {
  return (
    <section>
      <h1 className="text-7xl font-semibold text-light-900">Hello, User</h1>
      <div className="pt-20">
        <h2 className="section-header">Your Borrowed Books</h2>
        <div className="books-container">
          {mockBooks.map((book, index) => (
            <div
              key={index}
              className="flex w-[243px] flex-col justify-between"
            >
              <div className="flex justify-center">
                <Link href={`/book/${index}`}>
                  <Book color={book.color} cover={book.cover} size="medium" />
                </Link>
              </div>
              <div>
                <p className="text-lg text-light-900">
                  {book.title} - By {book.author}
                </p>
                <p>{book.genre}</p>
              </div>
              <div className="flex flex-row gap-2 pt-2">
                <Image
                  src="/assets/icons/user/calendar.svg"
                  alt="calendar"
                  width={18}
                  height={18}
                />
                <p>11 days left to due</p>
              </div>
              <div className="pt-2">
                <button className="bg-gradient-secondary inline-flex h-[40px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-md px-6 py-2">
                  <p className="font-bebas-neue text-xl text-user-primary">
                    Download Receipt
                  </p>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
