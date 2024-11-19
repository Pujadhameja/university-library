import Image from "next/image";
import Link from "next/link";
import React from "react";

import Book from "@/components/Book";

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
  createdAt: "12/11/2024",
};

const BookPage = () => {
  const bookBGColor = `bg-[${recommendation.color}]/[.1]`;
  console.log(bookBGColor);
  return (
    <div className="mt-8 flex w-full flex-col">
      <Link
        href="/dashboard/books"
        className="flex w-fit flex-row items-center gap-2 rounded-lg bg-white p-2 text-center"
      >
        <Image
          src="/assets/icons/dashboard/arrow-left.svg"
          width={18}
          height={18}
          alt="back"
        />
        <p className="font-semibold text-dark-200">Go back</p>
      </Link>
      <div className="mt-8 flex flex-row gap-8">
        <div className={`${bookBGColor} rounded-lg px-20 py-6`}>
          <Book
            color={recommendation.color}
            cover={recommendation.cover}
            size="medium"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-row items-center gap-2">
            <p className="text-light-100">Created at: </p>
            <Image
              src="/assets/icons/dashboard/calendar.svg"
              width={20}
              height={20}
              alt="createdAt"
            />
            <p className="text-sm">{recommendation.createdAt}</p>
          </div>

          <p className="text-2xl font-bold text-dark-400">
            {recommendation.title}
          </p>
          <p className="text-xl font-semibold text-dark-200">
            By {recommendation.author}
          </p>
          <p className="text-light-100">{recommendation.genre}</p>
          <button className="flex flex-row items-center justify-center gap-2 rounded-lg bg-dashboard-primary px-8 py-2">
            <Image
              src="/assets/icons/dashboard/edit.svg"
              width={16}
              height={16}
              alt="edit"
            />
            <p className="font-bold text-white">Edit Book</p>
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-row gap-12  max-sm:flex-col-reverse">
        <div className="flex max-w-[50%] flex-col">
          <div className="flex flex-col gap-4 text-justify">
            <h2 className="font-bold text-dark-400">Summary</h2>
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
        <div className="flex flex-col gap-4 ">
          <p className="font-bold text-dark-400">Video</p>
          <Image
            src="/assets/images/user/video.png"
            alt="video"
            height={342}
            width={645}
          />
        </div>
      </div>
    </div>
  );
};

export default BookPage;
