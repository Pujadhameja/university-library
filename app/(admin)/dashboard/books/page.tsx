import Image from "next/image";
import Link from "next/link";
import React from "react";

import Book from "@/components/Book";
import { mockBooks } from "@/constants";

const Books = () => {
  return (
    <div className="mt-8 w-full rounded-lg bg-white p-4">
      <div className="flex flex-row justify-between px-4">
        <p className="text-xl font-semibold">All Books</p>
        <button className="flex  flex-row items-center gap-2 rounded-lg border px-4 py-2 font-semibold text-dark-400">
          <p>A-Z</p>
          <Image
            src="/assets/icons/dashboard/arrow-swap.svg"
            width={16}
            height={16}
            alt="swap"
          />
        </button>
      </div>
      <div className=" mt-8 w-full px-4">
        <table className="w-full">
          {/* header */}
          <thead>
            <tr className="grid w-full grid-cols-7 flex-row items-start rounded-sm  bg-light-700 p-4 font-normal text-dark-400">
              <th className="table-header col-span-3">Book Title</th>
              <th className="table-header">Author</th>
              <th className="table-header">Genre</th>
              <th className="table-header">Date Created</th>
              <th className="table-header">Action</th>
            </tr>
          </thead>
          {/* table body */}
          <tbody className="divide-y divide-light-700 p-4">
            {mockBooks.map((book, index) => (
              <tr key={index} className="grid grid-cols-7 p-2">
                <td className="col-span-3 flex flex-row items-center gap-2">
                  <Link href={`/dashboard/books/${index}`}>
                    <Book size="small" color={book.color} cover={book.cover} />
                  </Link>
                  <p className="table-text">{book.title}</p>
                </td>
                <td className="table-row">
                  <p className="table-text">{book.author}</p>
                </td>
                <td className="table-row">
                  <p className="table-text">{book.genre}</p>
                </td>
                <td className="table-row">
                  <p className="table-text">{book.createdAt}</p>
                </td>
                <td className="table-row">
                  <Image
                    src="/assets/icons/dashboard/edit-2.svg"
                    height={20}
                    width={20}
                    alt="link"
                  />
                  <Image
                    src="/assets/icons/dashboard/trash.svg"
                    height={20}
                    width={20}
                    alt="link"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Books;
