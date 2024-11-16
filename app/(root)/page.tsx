import Image from "next/image";

import Book from "@/components/Book";
import BookDetails from "@/components/user/BookDetails";
import { mockBooks } from "@/constants";

const recommendation = {
  title: "Origin",
  author: "Dan Brown",
  narrator: "Paul Michael",
  genre: "Thriller / Mystery",
  length: "18 hrs 10 mins",
  rating: 4.5,
  description:
    "Origin is a 2017 mystery-thriller novel by American author Dan Brown. It is the fifth installment in the Robert Langdon series, following previous bestsellers such as The Da Vinci Code and Angels & Demons. ",
  color: "#012B48",
  cover: "/assets/images/user/origin.png",
};

const Home = () => {
  return (
    <section>
      <BookDetails book={recommendation} />
      <div className="pt-12">
        <h2 className="font-bebas-neue text-3xl">Your Borrowed Books</h2>
        <div className="flex flex-wrap gap-10 pt-8 max-sm:flex-col">
          {mockBooks.map((book, index) => (
            <div
              key={index}
              className="flex w-[243px] flex-col justify-between"
            >
              <div className="flex justify-center">
                <Book color={book.color} cover={book.cover} size="medium" />
              </div>
              <div>
                <p className="text-lg text-light-900">
                  {book.title} - By {book.author}
                </p>
                <p>{book.genre}</p>
              </div>
              <div className="flex flex-row gap-2 pt-2">
                <Image
                  src="/assets/icons/user/calendar.svg"
                  alt="calendar"
                  width={18}
                  height={18}
                />
                <p>11 days left to due</p>
              </div>
              <div className="pt-2">
                <button className="bg-gradient-secondary inline-flex h-[40px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-md px-6 py-2">
                  <p className="font-bebas-neue text-xl text-user-primary">
                    Download Receipt
                  </p>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
