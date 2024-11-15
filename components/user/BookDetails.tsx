"use client";
import React from "react";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import Book from "../Book";

interface BookProps {
  book: {
    title: string;
    author: string;
    narrator: string;
    genre: string;
    length: string;
    rating: number;
    description: string;
    color: string;
    cover: string;
  };
}

const BookDetails = ({ book }: BookProps) => {
  return (
    <div className="flex flex-row gap-40 max-xl:flex-col-reverse max-xl:gap-8">
      <div className="flex max-w-[645px] flex-col gap-5">
        <h1 className="text-7xl font-semibold text-light-900">{book.title}</h1>
        <div className="flex flex-row gap-4">
          <p>
            By <span className="text-user-primary">{book.author}</span>
          </p>
          <p>
            Read by <span className="text-user-primary">{book.narrator}</span>
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <p>
            Category: <span className="text-user-primary">{book.genre}</span>
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
            <p>{book.rating}</p>
          </div>
          <div className="flex flex-row gap-1">
            <Image
              src="/assets/icons/user/clock.svg"
              alt="clock"
              width={22}
              height={22}
            />
            <p>{book.length}</p>
          </div>
        </div>
        <div className="text-justify">
          <p>{book.description}</p>
        </div>
        <div className="flex flex-row gap-6 max-md:flex-col">
          <AlertDialog>
            <AlertDialogTrigger
              className="inline-flex h-[54px] w-[223px] items-center justify-center gap-2 whitespace-nowrap rounded-md bg-user-primary px-6 py-2"
              onClick={() => {
                console.log("test");
              }}
            >
              <Image
                src="/assets/icons/user/book.svg"
                alt="book"
                width={20}
                height={20}
              />
              <p className="font-bebas-neue text-xl text-dark-800">
                Borrow Book Request
              </p>
            </AlertDialogTrigger>
            <AlertDialogContent className="border-none bg-dark-500">
              <AlertDialogHeader className="items-center">
                <Image
                  src="/assets/images/user/approval.svg"
                  alt="approval"
                  width={110}
                  height={110}
                />
                <AlertDialogTitle className="text-2xl font-semibold text-light-900">
                  Book Request Pending Approval
                </AlertDialogTitle>
                <AlertDialogDescription className="text-center">
                  Your request for the book is currently being reviewed. You
                  will be notified once it’s approved and ready for you to
                  borrow.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction className="min-h-[56px] w-full bg-user-primary font-bold text-dark-800 hover:bg-user-primary">
                  Okay!
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
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
      <Book color={book.color} cover={book.cover} size="large" />
    </div>
  );
};

export default BookDetails;
