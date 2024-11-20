import Image from "next/image";
import Link from "next/link";
import React from "react";

import Book from "@/components/Book";
import BookDetails from "@/components/user/BookDetails";
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
    <section>
      <BookDetails book={recommendation} />
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
          <div className="flex flex-col gap-4 pt-12 text-justify">
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
                <Link href={`/book/${index}`}>
                  <Book color={book.color} cover={book.cover} size="medium" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
