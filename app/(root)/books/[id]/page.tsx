import { sampleBooks } from "@/constants";

import Book from "@/components/book";
import BookVideo from "@/components/book/Video";
import BookOverview from "@/components/book/Overview";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const book = sampleBooks.find((item) => item.id === +id) || sampleBooks[0];

  return (
    <>
      <BookOverview {...book} />

      <div className="my-20 flex flex-col gap-16 lg:flex-row">
        <div className="flex-[1.5]">
          <section className="flex flex-col gap-7">
            <h3 className="text-xl font-semibold text-primary">Video</h3>

            <BookVideo videoUrl={book.video} />
          </section>

          <section className="mt-10 flex flex-col gap-7">
            <h3 className="text-xl font-semibold text-primary">Summary</h3>

            <div className="space-y-5 text-xl text-light-100">
              <p>{book.summary}</p>
            </div>
          </section>
        </div>

        <section className="flex-1">
          <h2 className="font-bebas-neue text-4xl text-light-100">
            More similar books
          </h2>

          <ul className="mt-10 flex flex-wrap gap-5 max-xs:justify-between xs:gap-10">
            {sampleBooks.slice(3).map((item) => (
              <Book key={item.title} {...item} />
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Page;
