import Book from "@/components/book";
import BookOverview from "@/components/book/Overview";

const Home = () => {
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

      <section className="mt-20">
        <h2 className="font-bebas-neue text-4xl text-light-200">
          Your Borrowed Books
        </h2>

        <ul className="flex gap-10 flex-wrap mt-10">
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <Book key={item} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
