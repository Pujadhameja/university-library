import Image from "next/image";
import Link from "next/link";
import React from "react";

import Book from "@/components/Book";
import { mockBorrowRequests, mockBooks } from "@/constants";

const Dashbaord = () => {
  // const mockBorrowRequests = [];

  return (
    <div className="mt-8 flex w-full flex-col">
      {/* Stat cards in this div should possibly be extracted to a component */}
      <div className="flex flex-row items-center gap-8">
        <div className="w-full rounded-xl bg-white p-4">
          <p className="font-semibold text-light-100">
            Borrowed Books <span className="text-orange-500">▾ 2</span>
          </p>
          <p className="pt-4 text-4xl font-bold text-dark-800">145</p>
        </div>
        <div className="w-full rounded-xl bg-white p-4">
          <p className="font-semibold text-light-100">
            Total Users <span className="text-green-700">▴ 4</span>
          </p>
          <p className="rounded-xl pt-4 text-4xl font-bold text-dark-800">
            317
          </p>
        </div>
        <div className="w-full bg-white p-4">
          <p className="font-semibold text-light-100">
            Total Books <span className="text-green-700">▴ 2</span>
          </p>
          <p className="pt-4 text-4xl font-bold text-dark-800">163</p>
        </div>
      </div>
      <div className="mt-8 flex flex-row gap-4">
        <div className="flex max-w-[50%] flex-col gap-6">
          {/* Book Requests */}
          <div className="w-full rounded-lg bg-white p-4">
            <div className="flex flex-row justify-between">
              <p className="text-2xl font-semibold">Borrow Requests</p>
              <Link
                href="/dashboard/book-requests"
                className="rounded-lg bg-light-700 p-2 font-semibold text-dashboard-primary"
              >
                View All
              </Link>
            </div>
            <div className="mt-2 flex flex-col gap-2">
              {mockBorrowRequests.length > 0 ? (
                <>
                  {mockBorrowRequests.map((request, index) => (
                    <div
                      key={index}
                      className="flex flex-row justify-between gap-4 rounded-lg bg-light-700 p-3"
                    >
                      <div className="flex flex-row gap-4">
                        <Book
                          color={request.book.color}
                          cover={request.book.cover}
                          size="small"
                        />
                        <div className="flex flex-col justify-between">
                          <p className="text-lg font-semibold">
                            {request.book.title}
                          </p>
                          <p className="text-slate-500">
                            By {request.book.author} • {request.book.genre}
                          </p>
                          <div className=" flex flex-row items-center gap-3 text-sm">
                            <div className="flex flex-row items-center gap-1">
                              <Image
                                src="/assets/images/dashboard/useravatar.png"
                                alt="avatar"
                                width={18}
                                height={18}
                                className="size-[18px]"
                              />
                              <p>{request.user.name}</p>
                            </div>
                            <div className="flex flex-row gap-1">
                              <Image
                                src="/assets/icons/dashboard/calendar.svg"
                                alt="calendar"
                                width={16}
                                height={16}
                              />
                              <p>{request.requestDate}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="size-fit cursor-pointer rounded-lg bg-white p-2 shadow-sm">
                        <Image
                          src="/assets/icons/dashboard/eye.svg"
                          alt="eye"
                          height={20}
                          width={20}
                        />
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div className="flex w-full flex-col items-center gap-4 p-6 text-center">
                  <Image
                    src="/assets/images/dashboard/no-book-requests.png"
                    width={193}
                    height={144}
                    alt="no-book-requests"
                  />
                  <p className="text-lg font-semibold">
                    No Pending Book Requests
                  </p>
                  <p className="text-slate-500">
                    There are no borrow book requests awaiting your review at
                    this time.
                  </p>
                </div>
              )}
            </div>
          </div>
          {/* Account Requests */}
          <div className="w-full rounded-lg bg-white p-4">
            <div className="flex flex-row justify-between">
              <p className="text-2xl font-semibold">Account Requests</p>
              <Link
                href="/dashboard/account-requests"
                className="rounded-lg bg-light-700 p-2 font-semibold text-dashboard-primary"
              >
                View All
              </Link>
            </div>
            {mockBorrowRequests.length > 0 ? (
              <div className="mt-2 grid grid-cols-3 gap-2">
                {mockBorrowRequests.map((request, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center rounded-lg bg-light-700 px-4 py-2"
                  >
                    <Image
                      src="/assets/images/dashboard/useravatar.png"
                      height={48}
                      width={48}
                      alt="avatar"
                    />
                    <p className="mt-4 text-lg font-semibold">
                      {request.user.name}
                    </p>
                    <p className="text-slate-500">{request.user.email}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-2 flex w-full flex-col items-center gap-4 p-6 text-center">
                <Image
                  src="/assets/images/dashboard/no-account-requests.png"
                  width={193}
                  height={144}
                  alt="no-book-requests"
                />
                <p className="text-lg font-semibold">
                  No Pending Account Requests
                </p>
                <p className="text-slate-500">
                  There are currently no account requests awaiting approval.
                </p>
              </div>
            )}
          </div>
        </div>
        {/* Recently Addedd Books */}
        <div className="relative max-h-[700px] w-full max-w-[50%] overflow-hidden rounded-lg bg-white p-4">
          {/* hide effect from the design - we could make the max-h in the div above dependent on viewport size for example, not sure how to handle it */}
          {mockBooks.length > 5 && (
            <div className="bg-gradient-hide absolute bottom-0 z-50 min-h-[70px] w-full" />
          )}
          <div className="flex flex-row justify-between">
            <p className="text-2xl font-semibold">Recently Added Books</p>
            <Link
              href="/dashboard/books"
              className="rounded-lg bg-light-700 p-2 font-semibold text-dashboard-primary"
            >
              View All
            </Link>
          </div>
          <div className="mt-4 flex  w-full flex-col">
            <Link
              href="/dashboard/books/add"
              className="flex flex-row items-center gap-4 rounded-lg bg-light-700 p-4"
            >
              <div className="rounded-full bg-white p-4 shadow-sm">
                <Image
                  src="/assets/icons/dashboard/plus.svg"
                  alt="plus"
                  height={18}
                  width={18}
                />
              </div>
              <p className="text-xl font-semibold">Add New Book</p>
            </Link>
            <div className="mt-10 flex flex-col gap-4">
              {mockBooks.map((book, index) => (
                <div className="flex flex-row gap-4" key={index}>
                  <Book color={book.color} cover={book.cover} size="small" />
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold">{book.title}</p>
                    <p className="text-slate-500">
                      By {book.author} • {book.genre}
                    </p>
                    <div className=" flex flex-row items-center gap-3 text-sm">
                      <div className="flex flex-row gap-1">
                        <Image
                          src="/assets/icons/dashboard/calendar.svg"
                          alt="calendar"
                          width={16}
                          height={16}
                        />
                        <p>12/11/2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-hide"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;
