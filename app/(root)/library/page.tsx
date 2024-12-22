import Book from "@/components/book";
import Search from "@/components/Search";
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

    <section className="mt-16">
      <h2 className="font-bebas-neue text-4xl text-light-100">
        All Library Books
      </h2>

      <ul className="mt-10 flex flex-wrap gap-10">
        {sampleBooks.map((item) => (
          <Book key={item.title} {...item} />
        ))}
      </ul>
    </section>
  </>
);

export default Page;
