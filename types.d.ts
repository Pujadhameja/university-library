interface AuthCredentails {
  fullname: string;
  email: string;
  password: string;
  universityId: number;
  universityCard: string;
}

interface User {
  id: string;
  fullname: string;
  email: string;
  universityId: number;
  universityCard: string;
  status: string;
  role: string;
  lastActivityDate: Date;
  createdAt: Date;
}

interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  rating: number;
  totalQuantity: number;
  availableQuantity: number;
  coverColor: string;
  coverImage: string;
  videoUrl: string;
  summary: string;
  createdAt: Date;
}

interface BorrowRecord {
  id: string;
  userId: string;
  bookId: string;
  borrowDate: Date;
  dueDate: string;
  returnDate: string;
  status: string;
}

interface BorrowedBook extends Book {
  borrow: BorrowRecord;
}

interface BookParams {
  title: string;
  author: string;
  category: string;
  rating: number;
  coverImage: string;
  coverColor: string;
  summary: string;
  totalQuantity: number;
  videoUrl: string;
}

interface BorrowBookParams {
  bookId: string;
  userId: string;
}

interface PageProps {
  searchParams: Promise<{
    query?: string;
    sort?: string;
    page?: number;
  }>;
}

interface QueryParams {
  query?: string;
  sort?: string;
  page?: number;
}

interface Metdata {
  totalPages?: number;
  hasNextPage?: boolean;
}
