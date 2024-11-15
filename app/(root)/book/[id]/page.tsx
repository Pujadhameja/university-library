import Image from "next/image";
import React from "react";

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

const page = () => {
  return (
    <div className="user-page-container">
      <div className="flex flex-row gap-40 max-xl:flex-col-reverse max-xl:gap-8">
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
      <div className="flex flex-row gap-40 max-md:flex-col max-md:gap-8">
        <div className="max-w-[645px] max-xl:pt-12">
          <div className="flex flex-col gap-4 ">
            <p className="font-semibold text-user-primary">Video</p>
            <Image
              src="/assets/images/user/video.png"
              alt="video"
              height={342}
              width={645}
            />
          </div>
          <div className="flex flex-col gap-4 pt-12">
            <p className="font-semibold text-user-primary">Summary</p>
            <p>
              People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann
              Krentz) is a science fiction romance set in a future world where
              people with psychic abilities live in harmony with advanced
              technology. The story follows the main characters, Harriet and
              Sam, who are drawn together under unusual circumstances.
            </p>
            <p>
              Harriet, a talented psychic, works for a company that offers
              psychic services in a futuristic society. When she finds herself
              tangled in a dangerous situation involving a mysterious
              conspiracy, she enlists the help of Sam, a former investigator
              with a dark past. As they uncover the secrets surrounding a glass
              house—a mysterious structure tied to their investigation—they must
              navigate their growing attraction while facing hidden dangers.
            </p>
            <p>
              The novel combines elements of mystery, suspense, and romance,
              with a focus on psychic abilities, futuristic technology, and the
              complexities of relationships. The title, &quot;People in Glass
              Houses,&quot; symbolizes the fragile nature of the world the
              characters inhabit and the vulnerabilities they face in their
              personal and professional lives.
            </p>
          </div>
        </div>
        <div className="flex max-w-[380px] flex-col pt-8">
          <h2 className="font-bebas-neue text-3xl">More Similar Books</h2>
          <div className="flex flex-wrap">
            {mockBooks.map((book, index) => (
              <div
                key={index}
                className=" min-md:w-full mt-10 w-1/2 min-w-[143px] flex-col justify-between"
              >
                <Book color={book.color} cover={book.cover} size="medium" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
