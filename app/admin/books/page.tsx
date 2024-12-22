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
    <section className="rounded-2x w-full bg-white p-7">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">All Books</h2>
        <Button className="bg-primary-admin">+ Create a New Book</Button>
      </div>

      <div className="mt-7 w-full overflow-hidden">
        <Table className="overflow-hidden">
          <TableHeader>
            <TableRow className="bg-light-700 h-14 border-none">
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
                <TableCell className="py-5 font-medium">
                  <div className="text-dark-400 flex w-96 flex-row items-center gap-2 text-sm font-semibold">
                    <BookCover variant="small" />
                    <p className="flex-1">{book.title}</p>
                  </div>
                </TableCell>
                <TableCell className="text-dark-200 text-sm font-medium">
                  {book.author}
                </TableCell>
                <TableCell className="text-dark-200 text-sm font-medium">
                  {book.genre}
                </TableCell>
                <TableCell className="text-dark-200 text-sm font-medium">
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
