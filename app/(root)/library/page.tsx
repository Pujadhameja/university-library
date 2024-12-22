import Search from "@/components/Search";
import BookList from "@/components/BookList";

import { sampleBooks } from "@/constants";

const Page = () => (
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
      books={sampleBooks}
      containerClassName="mt-16"
    />
  </>
);

export default Page;
