import Sort from "./Sort";
import BookCard from "./BookCard";

interface Props {
  title: string;
  books: Book[] | BorrowedBook[];
  isBorrowed?: boolean;
  containerClassName?: string;
  showSorts?: boolean;
}

const BookList = ({
  title,
  books,
  isBorrowed,
  containerClassName,
  showSorts = false,
}: Props) => {
  return (
    <section className={containerClassName}>
      <div className="flex flex-row items-center justify-between">
        <h2 className="font-bebas-neue text-4xl text-light-100">{title}</h2>

        {showSorts && <Sort />}
      </div>

      <ul className="book-list">
        {books.map((item: Book) => (
          <BookCard key={item.title} {...item} isBorrowed={isBorrowed} />
        ))}
      </ul>
    </section>
  );
};

export default BookList;
