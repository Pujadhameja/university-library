interface AuthCredentails {
  fullname: string;
  email: string;
  password: string;
  universityId: number;
  universityCard: string;
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
