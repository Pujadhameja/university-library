import { like, or } from "drizzle-orm";

import Search from "@/components/Search";
import BookList from "@/components/BookList";

import { db } from "@/database/drizzle";
import { books } from "@/database/schema";
import Pagination from "@/components/Pagination";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  const conditions = query
    ? or(
        like(books.title, `%${query}%`),
        like(books.category, `%${query}%`),
        like(books.author, `%${query}%`)
      )
    : undefined;

  const allBooks = (await db.select().from(books).where(conditions)) as Book[];

  return (
    <>
      <section className="library">
        <p className="library-subtitle">Discover Your Next Great Read</p>

        <h2 className="library-title">
          Explore and Search for{" "}
          <span className="font-semibold text-primary">Any Book</span> In Our
          Library
        </h2>

        <Search />
      </section>

      <BookList
        title="All Library Books"
        books={allBooks}
        containerClassName="mt-16"
      />

      <div className="mt-12 border-t border-dark-300/50 pt-12">
        <Pagination />
      </div>
    </>
  );
};

export default Page;
