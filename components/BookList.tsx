import BookCard from "./BookCard";

interface Props {
  title: string;
  books: Book[];
  isLoaned?: boolean;
  containerClassName?: string;
}

const BookList = ({ title, books, isLoaned, containerClassName }: Props) => {
  return (
    <section className={containerClassName}>
      <h2 className="font-bebas-neue text-4xl text-light-100">{title}</h2>

      <ul className="book-list">
        {books.map((item) => (
          <BookCard key={item.title} {...item} isLoaned={isLoaned} />
        ))}
      </ul>
    </section>
  );
};

export default BookList;
