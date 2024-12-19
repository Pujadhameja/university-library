import Book from "@/components/Book";
import React from "react";

const Page = () => {
  return (
    <section>
      <h2 className="font-bebas-neue text-4xl text-light-200">
        All Library Books
      </h2>

      <ul className="flex gap-10 flex-wrap mt-10">
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <Book key={item} />
        ))}
      </ul>
    </section>
  );
};

export default Page;
