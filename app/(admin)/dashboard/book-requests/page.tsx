import Image from "next/image";
import Link from "next/link";
import React from "react";

import Book from "@/components/Book";
import { mockBorrowRequests } from "@/constants";

const BookRequests = () => {
  return (
    <div className="mt-8 w-full rounded-lg bg-white p-4">
      <div className="flex flex-row justify-between px-4">
        <p className="text-xl font-semibold">Borrow Book Requests</p>
        <button className="flex  flex-row items-center gap-2 rounded-lg border px-4 py-2 font-semibold text-dark-400">
          <p>Oldest to Recent</p>
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
            <tr className="grid w-full grid-cols-7 flex-row rounded-sm  bg-light-700 p-4 font-normal text-dark-400">
              <th className="table-header col-span-2">Book</th>
              <th className="table-header col-span-2">User Requested</th>
              <th className="table-header">Due date</th>
              <th className="table-header">Actions</th>
              <th className="table-header">Receipt</th>
            </tr>
          </thead>
          {/* table body */}
          <tbody className="divide-y divide-light-700 p-4">
            {mockBorrowRequests.map((request, index) => (
              <tr key={index} className="grid grid-cols-7 p-2">
                <td className="col-span-2 flex flex-row items-center gap-2">
                  <Link href={`/dashboard/books/${index}`}>
                    <Book
                      size="small"
                      color={request.book.color}
                      cover={request.book.cover}
                    />
                  </Link>
                  <p className="table-text">{request.book.title}</p>
                </td>
                <td className="col-span-2 flex flex-row items-center gap-2">
                  <Image
                    src="/assets/images/dashboard/useravatar.png"
                    width={40}
                    height={40}
                    alt="user"
                    className="size-[40px]"
                  />
                  <div className="flex flex-col">
                    <p className="table-text">{request.user.name}</p>
                    <p className="text-dark-100">{request.user.email}</p>
                  </div>
                </td>
                <td className="table-row">
                  <p className="table-text">{request.requestDate}</p>
                </td>

                <td className="table-row">
                  <div className="flex flex-row gap-2">
                    {request.approved ? (
                      <button
                        disabled={request.approved}
                        className="button-approve"
                      >
                        Approve
                      </button>
                    ) : (
                      <div className="flex flex-row gap-1">
                        <Image
                          src="/assets/icons/dashboard/tick-circle.svg"
                          height={16}
                          width={16}
                          alt="approve"
                        />
                        <p className="font-semibold text-dashboard-approve-800">
                          Approved
                        </p>
                      </div>
                    )}
                    <button
                      disabled={!request.approved}
                      className="disabled:opacity-20"
                    >
                      <Image
                        src="/assets/icons/dashboard/close-circle.svg"
                        height={20}
                        width={20}
                        alt="deny"
                      />
                    </button>
                  </div>
                </td>

                <td className="table-row">
                  <button
                    disabled={!request.approved}
                    className="flex flex-row items-center gap-2 rounded-lg bg-light-700 px-3 py-2 disabled:opacity-20"
                  >
                    <Image
                      src="/assets/icons/dashboard/receipt-text.svg"
                      height={16}
                      width={16}
                      alt="id card"
                    />
                    <p className="font-semibold text-dashboard-primary">
                      Generate
                    </p>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookRequests;
