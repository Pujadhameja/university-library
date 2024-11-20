import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { mockUsers } from "@/constants";

const Users = () => {
  return (
    <div className="mt-8 w-full rounded-lg bg-white p-4">
      <div className="flex flex-row justify-between">
        <p className="text-xl font-semibold">Borrow Requests</p>
        <Link
          href="/dashboard/book-requests"
          className="flex  flex-row gap-2 rounded-lg border px-4 py-2 font-semibold text-dark-400"
        >
          <p>A-Z</p>
          <Image
            src="/assets/icons/dashboard/arrow-swap.svg"
            width={16}
            height={16}
            alt="swap"
          />
        </Link>
      </div>
      <div className=" mt-8 w-full px-4">
        <table>
          {/* header */}
          <thead>
            <tr className="grid w-full grid-cols-7 flex-row items-start justify-start rounded-sm bg-light-700 p-4 text-start text-dark-400">
              <th className="col-span-2 text-start">Name</th>
              <th className="text-start">Date joined</th>
              <th className="text-start">Books Borrowed</th>
              <th className="text-start">University ID No</th>
              <th className="text-start">University ID Card</th>
              <th className="text-start">Action</th>
            </tr>
          </thead>
          {/* table body */}
          <tbody className="divide-y divide-light-700 p-4">
            {mockUsers.map((user) => (
              <tr key={user.universityID} className="grid grid-cols-7 p-2">
                <td className="col-span-2 flex flex-row items-center gap-2">
                  <Image
                    src="/assets/images/dashboard/useravatar.png"
                    width={40}
                    height={40}
                    alt="user"
                    className="size-[40px]"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-dark-400">{user.name}</p>
                    <p className="text-dark-100">{user.email}</p>
                  </div>
                </td>
                <td className="flex flex-row items-center gap-2">
                  <p className="text-sm font-semibold text-dark-400">
                    {user.joinedAt}
                  </p>
                </td>
                <td className="flex flex-row items-center gap-2">
                  <p className="text-sm font-semibold text-dark-400">
                    {user.booksBorrowed}
                  </p>
                </td>
                <td className="flex flex-row items-center gap-2">
                  <p className="text-sm font-semibold text-dark-400">
                    {user.universityID}
                  </p>
                </td>
                <td className="flex flex-row items-center gap-2">
                  <p className="text-sm font-semibold text-dashboard-link">
                    View ID Card
                  </p>
                  <Image
                    src="/assets/icons/dashboard/link.svg"
                    height={14}
                    width={14}
                    alt="link"
                  />
                </td>
                <td className="flex flex-row items-center gap-2">
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

export default Users;
