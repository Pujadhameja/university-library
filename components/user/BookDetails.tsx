"use client";
import React, { useState } from "react";
import Image from "next/image";

import Book from "../Book";
import { Button } from "../ui/button";
import UserDialog from "./UserDialog";

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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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
          <Button
            className="button-primary w-[223px]"
            onClick={() => {
              setIsDialogOpen(true);
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
          </Button>
          <UserDialog
            open={isDialogOpen}
            title="Account Pending Approval"
            description="Your account is awaiting admin approval. You will receive an email
              once your account has been approved."
            image="/assets/images/user/user-approval.svg"
            buttonText="Okay!"
            action={() => {
              setIsDialogOpen(false);
            }}
          />
          <Button className="button-secondary w-[223px]">
            <Image
              src="/assets/icons/user/heart.svg"
              alt="book"
              width={20}
              height={20}
            />
            <p className="font-bebas-neue text-xl text-user-primary">
              Add to wishlist
            </p>
          </Button>
        </div>
      </div>
      <Book color={book.color} cover={book.cover} size="large" />
    </div>
  );
};

export default BookDetails;
