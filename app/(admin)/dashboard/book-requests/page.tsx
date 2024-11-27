"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import Book from "@/components/Book";
import DashboardDialog from "@/components/dashboard/DashboardDialog";
import { mockBorrowRequests } from "@/constants";

const BookRequests = () => {
  const [dialog, setDialog] = useState({
    title: "Approve Account Request",
    description:
      "Approve the student’s account request and grant access. A confirmation email will be sent upon approval.",
    buttonText: "Approve & Send Confirmation",
    actionType: "accept",
    action: () => {},
    actionParam: "",
  });
  const [open, setOpen] = useState(false);

  const approve = (id: string) => {
    setOpen(true);
    setDialog({
      title: "Approve Book Request",
      description:
        "Approve the request to grant the student access to the book. A receipt with approval details and return date will be sent.",
      buttonText: "Approve & Send Receipt",
      actionType: "accept",
      action: () => {
        console.log("Approve book: " + id);
      },
      actionParam: id,
    });
  };

  const deny = (id: string) => {
    setOpen(true);
    setDialog({
      title: "Deny Book Request",
      description:
        "Denying this request will notify the student that the book is unavailable at the moment.",
      buttonText: "Deny & Notify Student",
      actionType: "deny",
      action: () => {
        console.log("Deny account: " + id);
      },
      actionParam: id,
    });
  };

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
                    {!request.approved ? (
                      <button
                        disabled={request.approved}
                        className="button-approve"
                        onClick={() => approve(index.toString())}
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
                      disabled={request.approved}
                      className="disabled:opacity-20"
                      onClick={() => deny(index.toString())}
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
      <DashboardDialog
        open={open}
        setOpen={setOpen}
        title={dialog.title}
        description={dialog.description}
        buttonText={dialog.buttonText}
        actionType={dialog.actionType}
        action={dialog.action}
        actionParam={dialog.actionParam}
      />
    </div>
  );
};

export default BookRequests;
