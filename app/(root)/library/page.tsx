import Search from "@/components/Search";
import BookList from "@/components/BookList";

import Pagination from "@/components/Pagination";
import { searchBooks } from "@/lib/actions/book";

interface PageProps {
  searchParams: Promise<{
    query?: string;
    sort?: string;
    page?: number;
  }>;
}

const Page = async ({ searchParams }: PageProps) => {
  const query = (await searchParams).query;
  const sort = (await searchParams).sort;
  const page = (await searchParams).page;

  const { data: allBooks } = await searchBooks({
    query,
    sort,
    page: page,
  });

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
        showSorts
      />

      <div className="mt-12 border-t border-dark-300/50 pt-12">
        <Pagination />
      </div>
    </>
  );
};

export default Page;
