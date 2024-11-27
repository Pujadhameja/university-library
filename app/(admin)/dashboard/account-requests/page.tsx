import Image from "next/image";
import React from "react";

import { mockUsers } from "@/constants";

const AccountRequests = () => {
  return (
    <div className="mt-8 w-full rounded-lg bg-white p-4">
      <div className="flex flex-row justify-between px-4">
        <p className="text-xl font-semibold">Account Registration Requests</p>
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
            <tr className="grid w-full grid-cols-6 flex-row rounded-sm  bg-light-700 p-4 font-normal text-dark-400">
              <th className="table-header col-span-2">Name</th>
              <th className="table-header">Date joined</th>
              <th className="table-header">University ID No</th>
              <th className="table-header">University ID Card</th>
              <th className="table-header">Actions</th>
            </tr>
          </thead>
          {/* table body */}
          <tbody className="divide-y divide-light-700 p-4">
            {mockUsers.map((user) => (
              <tr key={user.universityID} className="grid grid-cols-6 p-2">
                <td className="col-span-2 flex flex-row items-center gap-2">
                  <Image
                    src="/assets/images/dashboard/useravatar.png"
                    width={40}
                    height={40}
                    alt="user"
                    className="size-[40px]"
                  />
                  <div className="flex flex-col">
                    <p className="table-text">{user.name}</p>
                    <p className="text-dark-100">{user.email}</p>
                  </div>
                </td>
                <td className="table-row">
                  <p className="table-text">{user.joinedAt}</p>
                </td>

                <td className="table-row">
                  <p className="table-text">{user.universityID}</p>
                </td>
                <td className="table-row">
                  <Image
                    src="/assets/icons/dashboard/eye-2.svg"
                    height={16}
                    width={16}
                    alt="id card"
                  />
                  <p className="text-sm font-semibold text-dashboard-link">
                    View ID Card
                  </p>
                </td>
                <td className="table-row">
                  <button className="button-approve">Approve Account</button>
                  <button>
                    <Image
                      src="/assets/icons/dashboard/close-circle.svg"
                      height={20}
                      width={20}
                      alt="deny"
                    />
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

export default AccountRequests;
