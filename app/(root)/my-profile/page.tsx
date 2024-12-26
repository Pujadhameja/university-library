import { auth, signOut } from "@/auth";
import BookList from "@/components/BookList";

import { Button } from "@/components/ui/button";
import { getBorrowedBooks } from "@/lib/actions/book";

interface BorrowedBookProps {
  data: BorrowedBook[];
  success: boolean;
}

const Page = async () => {
  const session = await auth();
  if (!session?.user?.id) return;

  const { data: borrowedBooks, success } = (await getBorrowedBooks(
    session?.user?.id
  )) as BorrowedBookProps;

  return (
    <>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
        className="mb-10"
      >
        <Button>Logout</Button>
      </form>

      {success &&
        (borrowedBooks.length > 0 ? (
          <BookList
            title="Borrowed Books"
            books={borrowedBooks.map((b) => b.book)}
            isLoaned={true}
          />
        ) : (
          <p className="text-2xl text-light-100">
            You have not borrowed any book
          </p>
        ))}
    </>
  );
};

export default Page;
