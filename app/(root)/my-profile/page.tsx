import { auth, signOut } from "@/auth";

import { Button } from "@/components/ui/button";
import { getBorrowedBooks } from "@/lib/actions/book";

const Page = async () => {
  const session = await auth();
  if (!session?.user?.id) return;

  const { data: borrowedBooks, success } = await getBorrowedBooks(
    session?.user?.id
  );
  if (!success) return;

  console.log("BORROWED BOOKS", borrowedBooks);

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

      {/* <BookList title="Borrowed Books" books={sampleBooks} /> */}
    </>
  );
};

export default Page;
