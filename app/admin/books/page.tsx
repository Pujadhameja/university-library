import BookCover from "@/components/book/Cover";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const books = [
  {
    id: 1,
    title: "The Great Reclamation: A Novel",
    author: "Rachel Heng",
    genre: "Strategic, Fantasy",
    dateCreated: "Dec 19 2023",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help, Productivity",
    dateCreated: "Jan 5 2024",
  },
  {
    id: 3,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Thriller, Mystery",
    dateCreated: "Feb 12 2023",
  },
  {
    id: 4,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "History, Non-fiction",
    dateCreated: "Mar 9 2023",
  },
];

const Page = () => {
  return (
    <section className="bg-white p-7 rounded-2x w-full">
      <div className="flex flex-wrap justify-between gap-2 items-center">
        <h2 className="font-semibold text-xl">All Books</h2>
        <Button className="bg-primary-admin">+ Create a New Book</Button>
      </div>

      <div className="mt-7 w-full overflow-hidden">
        <Table className="overflow-hidden">
          <TableHeader>
            <TableRow className="border-none bg-light-700 h-14">
              <TableHead className="w-[500px]">Book Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Genre</TableHead>
              <TableHead>Date Created</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {books.map((book) => (
              <TableRow key={book.id} className="border-b-dark-100/5">
                <TableCell className="font-medium py-5">
                  <div className="flex flex-row gap-2 items-center font-semibold text-sm text-dark-400 w-96">
                    <BookCover variant="small" />
                    <p className="flex-1">{book.title}</p>
                  </div>
                </TableCell>
                <TableCell className="font-medium text-sm text-dark-200">
                  {book.author}
                </TableCell>
                <TableCell className="font-medium text-sm text-dark-200">
                  {book.genre}
                </TableCell>
                <TableCell className="font-medium text-sm text-dark-200">
                  {book.dateCreated}
                </TableCell>
                <TableCell>
                  <div className="flex flex-row gap-5">
                    <Image
                      src="/icons/admin/edit.svg"
                      width={20}
                      height={20}
                      className="object-contain"
                      alt="edit"
                    />
                    <Image
                      src="/icons/admin/trash.svg"
                      width={20}
                      height={20}
                      className="object-contain"
                      alt="delete"
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default Page;
