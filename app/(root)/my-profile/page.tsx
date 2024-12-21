import Book from "@/components/book";
import { sampleBooks } from "@/constants";

const Page = () => {
  return (
    <>
      <section>
        <h2 className="font-bebas-neue text-4xl text-light-100">
          Borrowed Books
        </h2>

        <ul className="flex gap-x-10 gap-y-20 max-xs:justify-center flex-wrap mt-10">
          {sampleBooks.map((item) => (
            <Book key={item.title} {...item} isLoanedBook />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Page;
