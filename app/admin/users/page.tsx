import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import config from "@/lib/config";
import Pagination from "@/components/Pagination";
import { getUsers } from "@/lib/admin/actions/user";

const Page = async ({ searchParams }: PageProps) => {
  const { query, sort, page } = await searchParams;

  const { data: allRecords, metadata } = await getUsers({
    query,
    sort,
    page,
  });

  return (
    <section className="w-full rounded-2xl bg-white p-7">
      <h2 className="text-xl font-semibold">All Users</h2>

      <div className="mt-7 w-full overflow-hidden">
        <Table className="overflow-hidden">
          <TableHeader>
            <TableRow className="h-14 border-none bg-light-300">
              <TableHead className="w-96">Name</TableHead>
              <TableHead>Date Joined</TableHead>
              <TableHead>Books Borrowed</TableHead>
              <TableHead>University ID No</TableHead>
              <TableHead>University ID Card</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {allRecords!?.length > 0 ? (
              allRecords!.map(({ user, totalBorrowedBooks }) => (
                <TableRow key={user.id} className="border-b-dark-100/5">
                  <TableCell className="text-sm font-medium text-dark-200">
                    {user.fullname}
                  </TableCell>
                  <TableCell className="text-sm font-medium text-dark-200">
                    {dayjs(user.createdAt).format("MMM DD, YYYY")}
                  </TableCell>
                  <TableCell className="text-sm font-medium text-dark-200">
                    {totalBorrowedBooks}
                  </TableCell>
                  <TableCell className="text-sm font-medium text-dark-200">
                    {user.universityId}
                  </TableCell>
                  <TableCell className="text-sm font-medium text-blue-100">
                    <div className="flex items-center gap-1.5">
                      <Link
                        href={`${config.env.imagekit.urlEndpoint}${user.universityCard}`}
                        target="_blank"
                      >
                        View ID Card
                      </Link>
                      <Image
                        src="/icons/admin/link.svg"
                        width={14}
                        height={14}
                        className="object-contain"
                        alt="delete"
                      />
                    </div>
                  </TableCell>
                  <TableCell className="flex justify-center">
                    <Image
                      src="/icons/admin/trash.svg"
                      width={20}
                      height={20}
                      className="object-contain"
                      alt="delete"
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center pt-10">
                  No records found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="mt-8">
        <Pagination variant="light" hasNextPage={metadata?.hasNextPage} />
      </div>
    </section>
  );
};

export default Page;
