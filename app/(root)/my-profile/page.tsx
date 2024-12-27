import Image from "next/image";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

import { auth } from "@/auth";
import config from "@/lib/config";

import Avatar from "@/components/Avatar";
import BookList from "@/components/BookList";

import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { getBorrowedBooks } from "@/lib/actions/book";

interface BorrowedBookProps {
  data: BorrowedBook[];
  success: boolean;
}

const Page = async () => {
  const session = await auth();
  if (!session?.user?.id) return;

  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.id, session?.user?.id))
    .limit(1);

  if (!user) redirect("/404");

  const { data: borrowedBooks, success } = (await getBorrowedBooks(
    session?.user?.id
  )) as BorrowedBookProps;

  return (
    <>
      <section className="flex flex-col gap-16 lg:flex-row">
        <div className="flex h-fit max-lg:items-center max-lg:justify-center lg:sticky lg:top-10">
          <div className="gradient-blue relative w-full rounded-[20px] border border-dark-600 p-5 sm:w-[512px]">
            <div className="absolute -top-10 left-1/2 z-10 h-28 w-20 -translate-x-1/2 rounded-b-full bg-dark-700 shadow-lg">
              <div className="absolute bottom-3.5 left-1/2 h-3 w-10 -translate-x-1/2 rounded-full bg-dark-800" />
            </div>

            <div>
              <Image
                src="/icons/verified.svg"
                alt="verified"
                width={50}
                height={50}
                className="absolute right-5 top-5"
              />
            </div>

            <div className="mt-20 flex flex-row items-center gap-3">
              <Avatar name={user.fullname} size="lg" />

              <div>
                <p className="text-2xl font-semibold text-white">
                  {user.fullname}
                </p>
                <p className="text-base text-light-100">{user.email}</p>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-lg text-light-100">University</p>
              <p className="text-2xl font-semibold text-white">
                JS Mastery Pro
              </p>
            </div>

            <div className="mt-10">
              <p className="text-lg text-light-100">Student ID</p>
              <p className="text-2xl font-semibold text-white">
                {user.universityId}
              </p>
            </div>

            <div className="relative mt-10 h-72 w-full">
              <Image
                src={`${config.env.imagekit.urlEndpoint}${user.universityCard}`}
                alt="university-card"
                fill
                className="size-full rounded-xl"
              />
            </div>

            <div className="mt-7 border-t border-dotted border-neutral-800 pt-5">
              <p className="text-center font-bebas-neue text-xs tracking-wider text-gray-400">
                Valid for {new Date().getFullYear()}-
                {new Date().getFullYear() + 1} Academic Year
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          {success &&
            (borrowedBooks.length > 0 ? (
              <BookList
                title="Borrowed Books"
                books={borrowedBooks}
                isBorrowed={true}
              />
            ) : (
              <p className="text-2xl text-light-100">
                You have not borrowed any book
              </p>
            ))}
        </div>
      </section>
    </>
  );
};

export default Page;
