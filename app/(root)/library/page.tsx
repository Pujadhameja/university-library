import Search from "@/components/Search";
import BookList from "@/components/book/List";

import { sampleBooks } from "@/constants";

const Page = () => (
  <>
    <section className="mx-auto flex max-w-xl flex-col text-center">
      <p className="text-lg font-semibold uppercase text-light-100">
        Discover Your Next Great Read
      </p>

      <h2 className="mt-2 text-3xl font-semibold text-white xs:text-5xl">
        Explore and Search for{" "}
        <span className="font-semibold text-primary">Any Book</span> In Our
        Library
      </h2>

      <Search />
    </section>

    <BookList
      title="All Library Books"
      books={sampleBooks}
      containerClassName="mt-16"
    />
  </>
);

export default Page;
