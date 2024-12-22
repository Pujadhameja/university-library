import { signOut } from "@/auth";
import Book from "@/components/book";
import { Button } from "@/components/ui/button";
import { sampleBooks } from "@/constants";

const Page = () => {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button>Logout</Button>
      </form>

      <section>
        <h2 className="font-bebas-neue text-4xl text-light-100">
          Borrowed Books
        </h2>

        <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-20 max-xs:justify-center">
          {sampleBooks.map((item) => (
            <Book key={item.title} {...item} isLoanedBook />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Page;
