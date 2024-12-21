import Book from "@/components/book";

const Page = () => {
  return (
    <section>
      <h2 className="font-bebas-neue text-4xl text-light-100">
        All Library Books
      </h2>

      <ul className="flex xs:gap-10 gap-5 max-xs:justify-between flex-wrap mt-10">
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <Book key={item} />
        ))}
      </ul>
    </section>
  );
};

export default Page;
