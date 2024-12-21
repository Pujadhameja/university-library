import Book from "@/components/book";
import Search from "@/components/Search";
import { sampleBooks } from "@/constants";

const Page = () => {
  return (
    <>
      <section className="flex flex-col mx-auto text-center max-w-xl">
        <p className="text-light-100 text-lg font-semibold uppercase">
          Discover Your Next Great Read
        </p>

        <h2 className="font-semibold xs:text-5xl text-3xl text-white mt-2">
          Explore and Search for{" "}
          <span className="text-primary font-semibold">Any Book</span> In Our
          Library
        </h2>

        <Search />
      </section>

      <section className="mt-16">
        <h2 className="font-bebas-neue text-4xl text-light-100">
          All Library Books
        </h2>

        <ul className="flex gap-10 flex-wrap mt-10">
          {sampleBooks.map((item) => (
            <Book key={item.title} {...item} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Page;
