import Image from "next/image";

import Book from "@/components/Book";
import { mockBooks } from "@/constants";

const recommendation = {
  title: "Origin",
  author: "Dan Brown",
  narrator: "Paul Michael",
  genre: "Thrller / Mystery",
  length: "18 hrs 10 mins",
  rating: 4.5,
  description:
    "Origin is a 2017 mystery-thriller novel by American author Dan Brown. It is the fifth installment in the Robert Langdon series, following previous bestsellers such as The Da Vinci Code and Angels & Demons. ",
  color: "#012B48",
  cover: "/assets/images/user/origin.png",
};

const Home = () => {
  return (
    <div className="mx-auto w-full px-16 pt-24 text-light-200">
      {/* Recommended book */}
      <div className="flex flex-row gap-40 max-lg:flex-col-reverse max-lg:gap-8">
        <div className="flex max-w-[645px] flex-col gap-5">
          <h1 className="text-7xl font-semibold text-light-900">
            {recommendation.title}
          </h1>
          <div className="flex flex-row gap-4">
            <p>
              By{" "}
              <span className="text-user-primary">{recommendation.author}</span>
            </p>
            <p>
              Read by{" "}
              <span className="text-user-primary">
                {recommendation.narrator}
              </span>
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-row gap-1">
              <Image
                src="/assets/icons/user/star.svg"
                alt="star"
                width={22}
                height={22}
              />
              <p>{recommendation.rating}</p>
            </div>
            <div className="flex flex-row gap-1">
              <Image
                src="/assets/icons/user/clock.svg"
                alt="clock"
                width={22}
                height={22}
              />
              <p>{recommendation.length}</p>
            </div>
          </div>
          <div className="text-justify">
            <p>{recommendation.description}</p>
          </div>
          <div className="flex flex-row gap-6 max-md:flex-col">
            <button className="inline-flex  w-[223px] items-center justify-center gap-2 whitespace-nowrap rounded-md bg-user-primary px-6 py-2">
              <Image
                src="/assets/icons/user/book.svg"
                alt="book"
                width={20}
                height={20}
              />
              <p className="font-bebas-neue text-xl text-dark-800">
                Borrow Book Request
              </p>
            </button>
            <button className="bg-gradient-secondary inline-flex h-[54px] w-[223px] items-center justify-center gap-2 whitespace-nowrap rounded-md px-6 py-2">
              <Image
                src="/assets/icons/user/heart.svg"
                alt="book"
                width={20}
                height={20}
              />
              <p className="font-bebas-neue text-xl text-user-primary">
                Add to wishlist
              </p>
            </button>
          </div>
        </div>
        <Book
          color={recommendation.color}
          cover={recommendation.cover}
          size="large"
        />
      </div>
      {/* Your Borrowed Books */}
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
                <p className="">{book.genre}</p>
              </div>
              <div className="flex flex-row gap-2 pt-2">
                <Image
                  src="/assets/icons/user/calendar.svg"
                  alt="calendar"
                  width={18}
                  height={18}
                />
                <p className="">11 days left to due</p>
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
    </div>
  );
};

export default Home;
