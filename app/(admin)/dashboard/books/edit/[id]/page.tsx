import Image from "next/image";
import Link from "next/link";
import React from "react";

import BookForm from "@/components/dashboard/forms/BookForm";
const BookEdit = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  console.log(id);
  return (
    <div className="mt-8 flex w-full flex-col items-start gap-8 py-8">
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
      <div className="xl:w-1/2">
        <BookForm />
      </div>
    </div>
  );
};

export default BookEdit;
