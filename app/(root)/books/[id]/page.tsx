import Book from "@/components/book";
import BookVideo from "@/components/book/Video";
import BookOverview from "@/components/book/Overview";
import { sampleBooks } from "@/constants";

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

            <BookVideo />
          </section>

          <section className="mt-10 flex flex-col gap-7">
            <h3 className="text-xl font-semibold text-primary">Summary</h3>

            <div className="space-y-5 text-xl text-light-100">
              <p>
                People in Glass Houses by Jayne Castle (a pseudonym for Jayne
                Ann Krentz) is a science fiction romance set in a future world
                where people with psychic abilities live in harmony with
                advanced technology. The story follows the main characters,
                Harriet and Sam, who are drawn together under unusual
                circumstances.
              </p>

              <p>
                Harriet, a talented psychic, works for a company that offers
                psychic services in a futuristic society. When she finds herself
                tangled in a dangerous situation involving a mysterious
                conspiracy, she enlists the help of Sam, a former investigator
                with a dark past. As they uncover the secrets surrounding a
                glass house—a mysterious structure tied to their
                investigation—they must navigate their growing attraction while
                facing hidden dangers.
              </p>

              <p>
                The novel combines elements of mystery, suspense, and romance,
                with a focus on psychic abilities, futuristic technology, and
                the complexities of relationships. The title, &#34;People in
                Glass Houses&#34; symbolizes the fragile nature of the world the
                characters inhabit and the vulnerabilities they face in their
                personal and professional lives.
              </p>
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
