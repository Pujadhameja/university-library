import Book from "@/components/book";
import BookVideo from "@/components/book/Video";
import BookOverview from "@/components/book/Overview";

const Page = () => {
  return (
    <>
      <BookOverview
        book={{
          title: "Origin",
          author: "Dan Brown",
          narrator: "Paul Michael",
          genre: "Thriller / Mystery",
          length: "18 hrs 10 mins",
          rating: 4.5,
          description:
            "Origin is a 2017 mystery-thriller novel by American author Dan Brown. It is the fifth installment in the Robert Langdon series, following previous bestsellers such as The Da Vinci Code and Angels & Demons. ",
          color: "#012B48",
          cover: "/images/origin.png",
        }}
      />

      <div className="flex lg:flex-row flex-col my-20 gap-16">
        <div className="flex-[1.5]">
          <section className="flex flex-col gap-7">
            <h3 className="text-primary font-semibold text-xl">Video</h3>

            <BookVideo />
          </section>

          <section className="flex flex-col gap-7 mt-10">
            <h3 className="text-primary font-semibold text-xl">Summary</h3>

            <div className="text-light-100 text-xl space-y-5">
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
                the complexities of relationships. The title, "People in Glass
                Houses," symbolizes the fragile nature of the world the
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

          <ul className="flex xs:gap-10 gap-5 max-xs:justify-between flex-wrap mt-10">
            {[1, 2, 3, 4].map((item) => (
              <Book key={item} />
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Page;
