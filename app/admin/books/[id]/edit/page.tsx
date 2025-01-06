import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

import { db } from "@/database/drizzle";
import { books } from "@/database/schema";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BookForm from "@/components/admin/forms/BookForm";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const book = await db
    .select()
    .from(books)
    .where(eq(books.id, (await params).id))
    .limit(1);
  console.log(book);

  if (!book) redirect("/404");

  return (
    <>
      <Button asChild className="back-btn">
        <Link href="/admin/books">Go Back</Link>
      </Button>

      <section className="w-full max-w-2xl">
        <BookForm type="update" {...book[0]} />
      </section>
    </>
  );
};

export default Page;
