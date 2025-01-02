import Image from "next/image";

import BookCover from "../BookCover";

interface Props {
  coverColor: string;
  cover: string;
  title: string;
  author: string;
  genre: string;
  date: string;
  user: {
    name: string;
    image: string;
  };
}

const BookStripe = ({
  coverColor,
  cover,
  title,
  author,
  genre,
  date,
  user,
}: Props) => {
  return (
    <div className="flex flex-row gap-4 bg-light-300 p-4 rounded-lg">
      <BookCover
        variant="thin"
        coverColor="#012B48"
        coverUrl="books/covers/file_-ik4mAydL.png?updatedAt=1735233398192"
      />

      <div>
        <p className="font-semibold text-base text-dark-400">
          Inside Evil: Inside Evil Series, Book 1
        </p>

        <div className="flex flex-wrap flex-row items-center gap-2">
          <p className="text-light-500 text-sm">By Rachel Heng</p>
          <div className="size-1 rounded-full bg-light-500" />
          <p className="text-light-500 text-sm">Strategic, Fantasy</p>
        </div>

        <div className="mt-3 flex flex-row flex-wrap gap-5">
          {user && (
            <div className="flex flex-row items-center gap-1.5">
              <div className="size-5 rounded-full relative">
                <Image
                  src="/images/auth-illustration.png"
                  alt="user"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <p className="text-xs text-dark-200">John Doe</p>
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
            <p className="text-xs text-dark-200">01/01/25</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookStripe;
