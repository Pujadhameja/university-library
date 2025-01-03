import dayjs from "dayjs";
import Image from "next/image";

import Avatar from "../Avatar";
import BookCover from "../BookCover";
import BookReceipt from "../BookReceipt";

const BookStripe = ({ book }: { book: BorrowedBook | Book }) => {
  const { coverColor, coverUrl, title, author, genre, createdAt } = book;

  return (
    <div className="flex flex-row gap-4 bg-light-300 p-4 rounded-lg">
      <BookCover variant="small" coverColor={coverColor} coverUrl={coverUrl} />

      <div className="flex-1">
        <p className="font-semibold text-base text-dark-400 line-clamp-1">
          {title}
        </p>

        <div className="flex flex-wrap flex-row items-center gap-2">
          <p className="text-light-500 text-sm line-clamp-1">By {author}</p>
          <div className="size-1 rounded-full bg-light-500" />
          <p className="text-light-500 text-sm">{genre}</p>
        </div>

        <div className="mt-2.5 flex flex-row flex-wrap gap-5">
          {"user" in book && book.user && (
            <div className="flex flex-row items-center gap-1.5">
              <Avatar size="xs" name={book.user} />
              <p className="text-xs text-dark-200">{book.user}</p>
            </div>
          )}

          <div className="flex flex-row items-center gap-1.5">
            <Image
              src="/icons/admin/calendar.svg"
              alt="user"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-xs text-dark-200">
              {dayjs(createdAt).format("MMM DD, YYYY")}
            </p>
          </div>
        </div>
      </div>

      {"borrow" in book && book.borrow! && (
        <BookReceipt {...(book as BorrowedBook)} btnVariant="preview" />
      )}
    </div>
  );
};

export default BookStripe;
