export const mockBooks = [
  {
    title: "Origin",
    author: "Dan Brown",
    narrator: "Paul Michael",
    genre: "Thrller / Mystery",
    length: "18 hrs 10 mins",
    rating: 4.5,
    description:
      "Origin is a 2017 mystery-thriller novel by American author Dan Brown. It is the fifth installment in the Robert Langdon series, following previous bestsellers such as The Da Vinci Code and Angels & Demons. ",
    color: "#012B48",
    cover: "/assets/images/user/origin.png",
  },
  {
    title: "Hobbit",
    author: "J. R. R. Tolkien",
    narrator: "Paul Michael",
    genre: "Fantasy / Adventure",
    length: "22 hrs 30 mins",
    rating: 4.7,
    description:
      "The Hobbit is set in Middle-earth and follows home-loving Bilbo Baggins, the hobbit of the title, who joins the wizard Gandalf and the thirteen dwarves of Thorin's Company, on a quest to reclaim the dwarves' home and treasure from the dragon Smaug.",
    color: "#70935d",
    cover: "/assets/images/user/hobbit.png",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    narrator: "Nick Carraway",
    genre: "Tragedy / Romance",
    length: "4 hrs 49 mins",
    rating: 4.9,
    description:
      "The Great Gatsby, novel by American author F. Scott Fitzgerald, published in 1925. It tells the story of Jay Gatsby, a self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth. Set in 1920s New York, the book is narrated by Nick Carraway.",
    color: "#203492",
    cover: "/assets/images/user/gatsby.png",
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    narrator: "Stephen Fry",
    genre: "Fantasy / Adventure",
    length: "8 hrs 44 mins",
    rating: 4.2,
    description:
      "Harry Potter and the Philosopher's Stone is a fantasy novel written by the British author J. K. Rowling. It is the first novel in the Harry Potter series and was Rowling's debut novel.",
    color: "#c1895c",
    cover: "/assets/images/user/harry.png",
  },
  {
    title: "The Huge Book of Amazing Facts & Interesting Stuff",
    author: "Jenny Kellett",
    narrator: "Stephen Fry",
    genre: "Non-Fiction",
    length: "12 hrs 30 mins",
    rating: 3.9,
    description:
      "The Huge Book of Amazing Facts & Interesting Stuff is a collection of facts and trivia that will entertain and educate. It covers a wide range of topics, from history and science to pop culture and the natural world.",
    color: "#59236b",
    cover: "/assets/images/user/amazing.png",
  },
  {
    title: "Don't Turn Around",
    author: "Jessica Barry",
    narrator: "Catherine Taber",
    genre: "Thriller / Mystery",
    length: "10 hrs 30 mins",
    rating: 4.1,
    description:
      "Two strangers, Cait and Rebecca, are driving across America. Cait’s job is to transport women to safety. Out of respect, she never asks any questions. Like most of the women, Rebecca is trying to escape something. But what if Rebecca’s secrets put them both in danger? There’s a reason Cait chooses to keep on the road, helping strangers. She has a past of her own, and knows what it’s like to be followed. And there is someone right behind them, watching their every move…",
    color: "#058a9c",
    cover: "/assets/images/user/dont.png",
  },
  {
    title: "Gerald's Game",
    author: "Stephen King",
    narrator: "Lindsay Crouse",
    genre: "Horror / Thriller",
    length: "10 hrs 30 mins",
    rating: 4.1,
    description:
      "Gerald's Game is a 1992 suspense novel by American writer Stephen King. The story is about a woman whose husband dies of a heart attack while she is handcuffed to a bed, and, following the subsequent realization that she is trapped with little hope of rescue, begins to let the voices inside her head take over.",
    color: "#c94241",
    cover: "/assets/images/user/gerald.png",
  },
  {
    title: "The Maidens",
    author: "Alex Michaelides",
    narrator: "Louise Brealey",
    genre: "Thriller / Mystery",
    length: "12 hrs 30 mins",
    rating: 4.5,
    description:
      "Edward Fosca is a murderer. Of this Mariana is certain. But Fosca is untouchable. A handsome and charismatic Greek Tragedy professor at Cambridge University, Fosca is adored by staff and students alike—particularly by the members of a secret society of female students known as The Maidens.",
    color: "#020202",
    cover: "/assets/images/user/maidens.png",
  },
  {
    title: "The Fury",
    author: "Alex Michaelides",
    narrator: "Alex Jennings",
    genre: "Thriller / Mystery",
    length: "8 hrs 8 mins",
    rating: 4.5,
    description:
      "Lana Farrar is a reclusive ex-movie star and one of the most famous women in the world. Every year, she invites her closest friends to escape the English weather and spend Easter on her idyllic private Greek island.",
    color: "#ac8662",
    cover: "/assets/images/user/fury.png",
  },
];

export const mockBorrowRequests = [
  {
    book: {
      title: "Origin",
      author: "Dan Brown",
      narrator: "Paul Michael",
      genre: "Thrller / Mystery",
      length: "18 hrs 10 mins",
      rating: 4.5,
      description:
        "Origin is a 2017 mystery-thriller novel by American author Dan Brown. It is the fifth installment in the Robert Langdon series, following previous bestsellers such as The Da Vinci Code and Angels & Demons. ",
      color: "#012B48",
      cover: "/assets/images/user/origin.png",
    },
    user: {
      name: "John Doe",
      email: "johndoe@gmail.com",
    },
    requestDate: "12/11/2024",
  },
  {
    book: {
      title: "Hobbit",
      author: "J. R. R. Tolkien",
      narrator: "Paul Michael",
      genre: "Fantasy / Adventure",
      length: "22 hrs 30 mins",
      rating: 4.7,
      description:
        "The Hobbit is set in Middle-earth and follows home-loving Bilbo Baggins, the hobbit of the title, who joins the wizard Gandalf and the thirteen dwarves of Thorin's Company, on a quest to reclaim the dwarves' home and treasure from the dragon Smaug.",
      color: "#70935d",
      cover: "/assets/images/user/hobbit.png",
    },

    user: {
      name: "Jane Doe",
      email: "janedoe@gmail.com",
    },
    requestDate: "15/11/2024",
  },
  {
    book: {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      narrator: "Stephen Fry",
      genre: "Fantasy / Adventure",
      length: "8 hrs 44 mins",
      rating: 4.2,
      description:
        "Harry Potter and the Philosopher's Stone is a fantasy novel written by the British author J. K. Rowling. It is the first novel in the Harry Potter series and was Rowling's debut novel.",
      color: "#c1895c",
      cover: "/assets/images/user/harry.png",
    },

    user: {
      name: "Marc Atenson",
      email: "marcine@gmail.com",
    },
    requestDate: "01/11/2024",
  },
  {
    book: {
      title: "Gerald's Game",
      author: "Stephen King",
      narrator: "Lindsay Crouse",
      genre: "Horror / Thriller",
      length: "10 hrs 30 mins",
      rating: 4.1,
      description:
        "Gerald's Game is a 1992 suspense novel by American writer Stephen King. The story is about a woman whose husband dies of a heart attack while she is handcuffed to a bed, and, following the subsequent realization that she is trapped with little hope of rescue, begins to let the voices inside her head take over.",
      color: "#c94241",
      cover: "/assets/images/user/gerald.png",
    },

    user: {
      name: "Susan Drake",
      email: "contact@susandrake.com",
    },
    requestDate: "20/11/2024",
  },
  {
    book: {
      title: "The Fury",
      author: "Alex Michaelides",
      narrator: "Alex Jennings",
      genre: "Thriller / Mystery",
      length: "8 hrs 8 mins",
      rating: 4.5,
      description:
        "Lana Farrar is a reclusive ex-movie star and one of the most famous women in the world. Every year, she invites her closest friends to escape the English weather and spend Easter on her idyllic private Greek island.",
      color: "#ac8662",
      cover: "/assets/images/user/fury.png",
    },

    user: {
      name: "Ronald Richards",
      email: "ronaldrichard@gmail.com",
    },
    requestDate: "13/11/2024",
  },
];
