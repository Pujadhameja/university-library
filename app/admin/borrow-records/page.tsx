import dayjs from "dayjs";
import { desc, eq } from "drizzle-orm";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import BookCover from "@/components/BookCover";
import { Button } from "@/components/ui/button";

import { db } from "@/database/drizzle";
import { books, borrowRecords, users } from "@/database/schema";
import Pagination from "@/components/Pagination";
import { getBorrowRecords } from "@/lib/admin/actions/book";

const Page = async ({ searchParams }: PageProps) => {
  const { query, sort, page } = await searchParams;

  const { data: allRecords, metadata } = await getBorrowRecords({
    query,
    sort,
    page,
  });

  return (
    <section className="w-full rounded-2xl bg-white p-7">
      <h2 className="text-xl font-semibold">Borrow Book Requests</h2>

      <div className="mt-7 w-full overflow-hidden">
        <Table className="overflow-hidden">
          <TableHeader>
            <TableRow className="h-14 border-none bg-light-300">
              <TableHead className="w-96">Book Title</TableHead>
              <TableHead>User Requested</TableHead>
              <TableHead>Borrowed Date</TableHead>
              <TableHead>Return Date</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Receipt</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {allRecords!?.length > 0 ? (
              allRecords!.map((record) => (
                <TableRow key={record.id} className="border-b-dark-100/5">
                  <TableCell className="py-5 font-medium">
                    <div className="flex w-96 flex-row items-center gap-2 text-sm font-semibold text-dark-400">
                      <BookCover
                        variant="small"
                        coverImage={record.book.coverImage!}
                        coverColor={record.book.coverColor!}
                      />
                      <p className="flex-1">{record.book.title}</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm font-medium text-dark-200">
                    {record.user}
                  </TableCell>
                  <TableCell className="text-sm font-medium text-dark-200">
                    {dayjs(record.borrowDate).format("MMM DD, YYYY")}
                  </TableCell>
                  <TableCell className="text-sm font-medium text-dark-200">
                    {record.returnDate
                      ? dayjs(record.returnDate).format("MMM DD, YYYY")
                      : "---"}
                  </TableCell>
                  <TableCell className="text-sm font-medium text-dark-200">
                    {dayjs(record.dueDate).format("MMM DD, YYYY")}
                  </TableCell>
                  <TableCell>
                    <Button>Generate</Button>
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
