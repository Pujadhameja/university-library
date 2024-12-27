import BookCard from "./BookCard";

interface Props {
  title: string;
  books: Book[] | BorrowedBook[];
  isBorrowed?: boolean;
  containerClassName?: string;
}

const BookList = ({ title, books, isBorrowed, containerClassName }: Props) => {
  return (
    <section className={containerClassName}>
      <h2 className="font-bebas-neue text-4xl text-light-100">{title}</h2>

      <ul className="book-list">
        {books.map((item: Book) => (
          <BookCard key={item.title} {...item} isBorrowed={isBorrowed} />
        ))}
      </ul>
    </section>
  );
};

export default BookList;
