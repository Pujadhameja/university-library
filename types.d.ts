interface AuthCredentails {
  fullname: string;
  email: string;
  password: string;
  universityId: number;
  universityCard: string;
}

interface Book {
  title: string;
  author: string;
  narrator: string;
  genre: string;
  length: string;
  rating: number;
  description: string;
  color: string;
  cover: string;
  isLoanedBook?: boolean;
}
