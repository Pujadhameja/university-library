import { sampleBooks } from "@/constants";

import BookList from "@/components/book/List";
import BookOverview from "@/components/book/Overview";

const Home = async () => (
  <>
    <BookOverview {...sampleBooks[0]} />

    <BookList
      title="Latest Books"
      books={sampleBooks}
      containerClassName="mt-28"
    />
  </>
);

export default Home;
