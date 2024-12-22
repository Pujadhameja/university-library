import BookCard from "./Card";

interface Props {
  title: string;
  books: Book[];
  containerClassName?: string;
}

const BookList = ({ title, books, containerClassName }: Props) => {
  return (
    <section className={containerClassName}>
      <h2 className="font-bebas-neue text-4xl text-light-100">{title}</h2>

      <ul className="mt-10 flex flex-wrap gap-5 max-xs:justify-between xs:gap-10">
        {books.map((item) => (
          <BookCard key={item.title} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default BookList;
