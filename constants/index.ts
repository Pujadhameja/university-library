export const navigationLinks = [
  {
    href: "/library",
    label: "Library",
  },

  {
    img: "/icons/user.svg",
    selectedImg: "/icons/user-fill.svg",
    href: "/my-profile",
    label: "My Profile",
  },
];

export const adminSideBarLinks = [
  {
    img: "/icons/admin/home.svg",
    route: "/admin",
    text: "Home",
  },
  {
    img: "/icons/admin/users.svg",
    route: "/admin/users",
    text: "All Users",
  },
  {
    img: "/icons/admin/book.svg",
    route: "/admin/books",
    text: "All Books",
  },
  {
    img: "/icons/admin/bookmark.svg",
    route: "/admin/book-requests",
    text: "Borrow Requests",
  },
  {
    img: "/icons/admin/user.svg",
    route: "/admin/account-requests",
    text: "Account Requests",
  },
];

export const FIELD_NAMES = {
  fullname: "Full name",
  email: "Email",
  universityId: "University ID Number",
  password: "Password",
  universityCard: "Upload University ID Card",
};

export const FIELD_TYPES = {
  fullname: "text",
  email: "email",
  universityId: "number",
  password: "password",
};

export const sampleBooks = [
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    narrator: "Carey Mulligan",
    genre: "Fantasy / Fiction",
    length: "8 hrs 50 mins",
    rating: 4.6,
    description:
      "A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death.",
    color: "#1c1f40",
    cover: "https://m.media-amazon.com/images/I/81J6APjwxlL.jpg",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    narrator: "James Clear",
    genre: "Self-Help / Productivity",
    length: "5 hrs 35 mins",
    rating: 4.9,
    description:
      "A revolutionary guide to making good habits, breaking bad ones, and getting 1% better every day.",
    color: "#fffdf6",
    cover: "https://m.media-amazon.com/images/I/81F90H7hnML.jpg",
  },
  {
    title: "You Don't Know JS: Scope & Closures",
    author: "Kyle Simpson",
    narrator: "Kyle Simpson",
    genre: "Computer Science / JavaScript",
    length: "5 hrs 20 mins",
    rating: 4.7,
    description:
      "An essential guide to understanding the core mechanisms of JavaScript, focusing on scope and closures.",
    color: "#f8e036",
    cover:
      "https://m.media-amazon.com/images/I/7186YfjgHHL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    narrator: "Jeremy Irons",
    genre: "Philosophy / Adventure",
    length: "4 hrs 2 mins",
    rating: 4.5,
    description:
      "A magical tale of Santiago, an Andalusian shepherd boy, who embarks on a journey to find a worldly treasure.",
    color: "#ed6322",
    cover:
      "https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    narrator: "Jeff Bottoms",
    genre: "Self-Help / Productivity",
    length: "7 hrs 44 mins",
    rating: 4.7,
    description:
      "Rules for focused success in a distracted world, teaching how to cultivate deep focus to achieve peak productivity.",
    color: "#ffffff",
    cover: "https://m.media-amazon.com/images/I/81JJ7fyyKyS.jpg",
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    narrator: "Dean Wendt",
    genre: "Computer Science / Programming",
    length: "11 hrs 40 mins",
    rating: 4.8,
    description:
      "A handbook of agile software craftsmanship, offering best practices and principles for writing clean and maintainable code.",
    color: "#080c0d",
    cover:
      "https://m.media-amazon.com/images/I/71T7aD3EOTL._UF1000,1000_QL80_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt, David Thomas",
    narrator: "Andy Hunt",
    genre: "Computer Science / Programming",
    length: "13 hrs 30 mins",
    rating: 4.8,
    description:
      "A timeless guide for developers to hone their skills and improve their programming practices.",
    color: "#100f15",
    cover:
      "https://m.media-amazon.com/images/I/71VStSjZmpL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    narrator: "Chris Hill",
    genre: "Finance / Self-Help",
    length: "6 hrs 14 mins",
    rating: 4.8,
    description:
      "Morgan Housel explores the unique behaviors and mindsets that shape financial success and decision-making.",
    color: "#ffffff",
    cover:
      "https://m.media-amazon.com/images/I/81Dky+tD+pL._AC_UF1000,1000_QL80_.jpg",
  },
];
