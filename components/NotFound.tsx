import Link from "next/link";
import Image from "next/image";

import { Button } from "./ui/button";

interface Props {
  title?: string;
  description?: string;
  linkBtn?: boolean;
}

const NotFound = ({
  title = "No Results Found",
  description = "We couldn’t find any books matching your search. Try using different keywords or check for typos.",
  linkBtn = false,
}: Props) => {
  return (
    <div className="flex justify-center items-center flex-col text-center w-full">
      <Image
        src="/images/no-books.png"
        alt="no-books"
        width={200}
        height={200}
        className="object-contain"
      />

      <h4 className="text-white mt-6 font-semibold text-2xl">{title}</h4>
      <p className="text-light-100 w-[360px] mt-1">{description}</p>

      {linkBtn && (
        <Button
          asChild
          className="bg-primary font-bebas-neue min-w-[360px] mt-6 text-dark-100 text-xl hover:bg-primary/90 min-h-12"
        >
          <Link href="/library">Clear Search</Link>
        </Button>
      )}
    </div>
  );
};

export default NotFound;
