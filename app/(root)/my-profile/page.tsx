import Book from "@/components/Book";

const Page = () => {
  return (
    <>
      <section>
        <h2 className="font-bebas-neue text-4xl text-light-200">
          Borrowed Books
        </h2>

        <ul className="flex gap-x-10 gap-y-20 flex-wrap mt-10">
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <Book key={item} isLoanedBook />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Page;
