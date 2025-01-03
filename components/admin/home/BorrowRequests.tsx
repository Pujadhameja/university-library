import Link from "next/link";

import BookStripe from "../BookStripe";
import { Button } from "@/components/ui/button";

import { getBorrowRecords } from "@/lib/admin/actions/book";

const BorrowRequests = async () => {
  const { data: borrowRecords } = await getBorrowRecords({
    sort: "newest",
    page: 1,
    limit: 5,
  });

  if (!borrowRecords) {
    throw new Error("Failed to fetch borrow records");
  }

  return (
    <section className="bg-white p-4 rounded-xl">
      <div className="flex justify-between">
        <h3 className="font-semibold text-dark-400  text-xl">
          Borrow Requestssss
        </h3>

        <Button
          asChild
          className="bg-light-300 rounded-md text-primary-admin font-semibold hover:bg-light-300/80 shadow-none"
        >
          <Link href="/admin/borrow-records">View All</Link>
        </Button>
      </div>

      <div className="mt-7 space-y-3">
        {borrowRecords?.length! > 0 &&
          borrowRecords?.map((book) => (
            <BookStripe key={book.id} book={book as BorrowedBook} />
          ))}
      </div>
    </section>
  );
};

export default BorrowRequests;
