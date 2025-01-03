import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import UserCard from "@/components/admin/UserCard";
import StatCard from "@/components/admin/StatCard";
import BookStripe from "@/components/admin/BookStripe";

import { getUsers } from "@/lib/admin/actions/user";
import { getStatistics } from "@/lib/admin/actions/general";
import { getBooks, getBorrowRecords } from "@/lib/admin/actions/book";

const Page = async () => {
  const { data: stats } = await getStatistics();
  const { data: latestUsers } = await getUsers({
    sort: "newest",
    page: 1,
    limit: 6,
  });

  const { data: borrowRecords } = await getBorrowRecords({
    sort: "newest",
    page: 1,
    limit: 5,
  });

  const { data: recentBooks } = await getBooks({
    sort: "newest",
    page: 1,
    limit: 7,
  });

  return (
    <>
      <section className="flex flex-wrap min-w-fit gap-5">
        <StatCard
          label="Borrowed Books"
          count={stats?.borrowRecord.total!}
          changeAmount={stats?.borrowRecord.change!}
          isStatIncrease={stats?.borrowRecord.change! > 0}
        />
        <StatCard
          label="Total Users"
          count={stats?.user.total!}
          changeAmount={stats?.user.change!}
          isStatIncrease={stats?.user.change! > 0}
        />
        <StatCard
          label="Total Books"
          count={stats?.book.total!}
          changeAmount={stats?.book.change!}
          isStatIncrease={stats?.book.change! > 0}
        />
      </section>

      <div className="mt-5 flex gap-5">
        <div className="flex-1 flex flex-col gap-5">
          <section className="bg-white p-4 rounded-xl">
            <div className="flex justify-between">
              <h3 className="font-semibold text-dark-400  text-xl">
                Borrow Requests
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

          <section className="bg-white p-4 rounded-xl">
            <div className="flex justify-between gap-3 items-center">
              <h3 className="font-semibold text-dark-400  text-xl">
                Account Requests
              </h3>

              <Button
                asChild
                className="bg-light-300 rounded-md text-primary-admin font-semibold hover:bg-light-300/80 shadow-none"
              >
                <Link href="/admin/account-requests">View All</Link>
              </Button>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {latestUsers?.length! > 0 &&
                latestUsers?.map(({ user }) => (
                  <UserCard
                    key={user.id}
                    name={user.fullname}
                    email={user.email}
                  />
                ))}
            </div>
          </section>
        </div>

        <section className="flex-1 bg-white p-4 rounded-xl">
          <div className="flex justify-between">
            <h3 className="font-semibold text-dark-400  text-xl">
              Recently Added Books
            </h3>

            <Button
              asChild
              className="bg-light-300 rounded-md text-primary-admin font-semibold hover:bg-light-300/80 shadow-none"
            >
              <Link href="/admin/books">View All</Link>
            </Button>
          </div>

          <Link
            href="/admin/books/new"
            className="mt-7 mb-3 bg-light-300 py-4 px-3 flex flex-row items-center rounded-xl gap-4"
          >
            <div className="size-12 bg-white rounded-full flex justify-center items-center">
              <Image
                src="/icons/admin/plus.svg"
                width={18}
                height={18}
                alt="plus"
                className="object-contain"
              />
            </div>
            <p className="font-semibold text-lg text-dark-400">Add New Book</p>
          </Link>

          <div className="space-y-3">
            {recentBooks?.length! > 0 &&
              recentBooks?.map((book) => (
                <BookStripe key={book.id} book={book as Book} />
              ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
