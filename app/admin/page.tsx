import Image from "next/image";

import BookCover from "@/components/BookCover";
import { Button } from "@/components/ui/button";
import StatCard from "@/components/admin/StatCard";
import BookStripe from "@/components/admin/BookStripe";
import Link from "next/link";

const UserCard = () => (
  <div className="bg-light-300 py-4 px-3 flex justify-center items-center flex-col rounded-xl">
    <div className="relative size-12 rounded-full">
      <Image
        src="/images/auth-illustration.png"
        alt="auth-illustration"
        fill
        className="rounded-full object-cover"
      />
    </div>
    <p className="font-medium text-dark-400 mt-3">Marc Atenson</p>
    <p className="text-light-500 text-sm">marcnine@gmai.com</p>
  </div>
);

const Page = () => {
  return (
    <>
      <section className="flex flex-wrap min-w-fit gap-5">
        <StatCard
          label="Borrowed Books"
          count={125}
          changeAmount={2}
          isStatIncrease={false}
        />
        <StatCard
          label="Total Users"
          count={317}
          changeAmount={4}
          isStatIncrease
        />
        <StatCard
          label="Total Books"
          count={163}
          changeAmount={2}
          isStatIncrease
        />
      </section>

      <div className="mt-5 flex gap-5">
        <div className="flex-1 flex flex-col gap-5">
          <section className="bg-white p-4 rounded-xl">
            <div className="flex justify-between">
              <h3 className="font-semibold text-dark-400  text-xl">
                Borrow Requests
              </h3>

              <Button className="bg-light-300 rounded-md text-primary-admin font-semibold hover:bg-light-300/80 shadow-none">
                View All
              </Button>
            </div>

            <div className="mt-7 space-y-3">
              <BookStripe />
              <BookStripe />
              <BookStripe />
              <BookStripe />
            </div>
          </section>

          <section className="bg-white p-4 rounded-xl">
            <div className="flex justify-between gap-3 items-center">
              <h3 className="font-semibold text-dark-400  text-xl">
                Account Requests
              </h3>

              <Button className="bg-light-300 rounded-md text-primary-admin font-semibold hover:bg-light-300/80 shadow-none">
                View All
              </Button>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
            </div>
          </section>
        </div>

        <section className="flex-1 bg-white p-4 rounded-xl">
          <div className="flex justify-between">
            <h3 className="font-semibold text-dark-400  text-xl">
              Recently Added Books
            </h3>

            <Button className="bg-light-300 rounded-md text-primary-admin font-semibold hover:bg-light-300/80 shadow-none">
              View All
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
            <BookStripe />
            <BookStripe />
            <BookStripe />
            <BookStripe />
            <BookStripe />
            <BookStripe />
            <BookStripe />
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
