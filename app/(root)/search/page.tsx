import Book from "@/components/book";
import Search from "@/components/Search";

const Page = () => {
  return (
    <>
      <section className="flex flex-col mx-auto text-center max-w-3xl">
        <p className="text-primary text-lg font-semibold uppercase">
          Find Books to Borrow
        </p>

        <h2 className="font-semibold text-5xl text-white mt-2">
          Discover Your Next Great Read: Search for Any Book in Our Library
        </h2>

        <Search />
      </section>

      <section className="mt-20">
        <h2 className="font-bebas-neue text-4xl text-light-200">
          Search Result
        </h2>

        <ul className="flex gap-10 flex-wrap mt-10">
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <Book key={item} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Page;
