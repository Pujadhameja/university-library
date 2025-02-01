/* eslint-disable object-shorthand */
import { config } from "dotenv";
import ImageKit from "imagekit";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import { books } from "./schema";

config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client: sql });

const dummyBooks = [
  {
    title: "Artificial Intelligence: A Modern Approach",
    author: "Stuart Russell and Peter Norvig",
    genre: "Artificial Intelligence",
    rating: 4,
    coverUrl:
      "https://m.media-amazon.com/images/I/61nHC3YWZlL._AC_UF1000,1000_QL80_.jpg",
    coverColor: "#c7cdd9",
    description:
      "A leading textbook on artificial intelligence, offering a deep dive into algorithms, machine learning, and robotics, suitable for both beginners and professionals.",
    totalCopies: 10,
    videoUrl:
      "https://www.shutterstock.com/shutterstock/videos/3482284603/preview/stock-footage-new-book-opening-green-screen-k-video-animation-chrome-key.webm",
    summary:
      "Artificial Intelligence: A Modern Approach is a comprehensive guide to the field of AI, combining foundational concepts with cutting-edge research. The book covers topics like search algorithms, knowledge representation, machine learning, and robotics. \n\nIts clear explanations and practical examples make it a valuable resource for students, researchers, and industry professionals. By bridging theory and application, this book serves as a cornerstone for understanding and advancing AI technologies. \n\nThe book is suitable for both beginners and professionals, offering a deep understanding of the fundamental concepts and applications of AI.",
  },
  {
    title: "Computer Networking: A Top-Down Approach",
    author: "James F. Kurose and Keith W. Ross",
    genre: "Networking",
    rating: 5,
    coverUrl:
      "https://m.media-amazon.com/images/I/91hg1HHyiWL._AC_UF1000,1000_QL80_.jpg",
    coverColor: "#f7a13e",
    description:
      "A comprehensive introduction to computer networking, using a top-down approach to explain protocols, architecture, and applications.",
    totalCopies: 25,
    videoUrl:
      "https://www.shutterstock.com/shutterstock/videos/1107129903/preview/stock-footage-an-open-book-is-on-fire-big-bright-flame-burning-paper-on-old-publication-in-the-dark-book.webm",
    summary:
      "'Computer Networking: A Top-Down Approach' provides a thorough and accessible introduction to the world of computer networks. James Kurose and Keith Ross present networking concepts by starting with high-level applications like web browsers and email, gradually moving down to the underlying layers of networking protocols. \n\nThe book covers essential topics such as HTTP, DNS, TCP/IP, and network security. Each chapter includes practical examples, hands-on exercises, and real-world scenarios to help readers grasp complex concepts. The authors also explore emerging trends like cloud computing and the Internet of Things, ensuring that the material remains relevant in a rapidly evolving field. \n\nWhether you're a student, professional, or enthusiast, this book offers a clear and engaging path to understanding the architecture and operation of modern computer networks.",
  },
  
    {
        "id": "9084986f-456c-449b-ae6e-59ef1f26b129",
        "title": "CSS in Depth",
        "author": "Keith J. Grant",
        "genre": "Web Development",
        "rating": 4,
        "coverUrl": "https://ik.imagekit.io/pwd17k26p/books/covers/file_zIgYlIxcY.png",
        "coverColor": "#1e2a4b",
        "description": "CSS in Depth by Keith J. Grant is a comprehensive guide for web developers who want to go beyond the basics of CSS and master the intricacies of styling web pages. The book is designed for intermediate to advanced developers who are already familiar with CSS but want to deepen their understanding and leverage its full potential.",
        "totalCopies": 18,
        "availableCopies": 16,
        "videoUrl": "https://ik.imagekit.io/pwd17k26p/books/videos/file_O-O0Z_Vz5.png",
        "summary": "CSS in Depth starts by reviewing the basic principles of CSS, then quickly moves on to more advanced concepts. Grant emphasizes the importance of understanding the underlying mechanics of CSS properties like layout, box model, and positioning. Readers learn how to use these tools more effectively, making their code more predictable and easier to debug.\n\nThe book dedicates significant time to discussing modern layout systems, especially Flexbox and CSS Grid. These powerful tools enable developers to create complex, responsive designs with minimal code. Grant explains how to use them in different contexts, providing practical examples of when and why they are useful.\n\nOne of the book’s highlights is its in-depth coverage of animations and transitions. Readers learn how to add dynamic effects to their web pages without relying on JavaScript. This is especially useful for creating smooth, interactive designs that improve user experience.\n\nThe book also discusses CSS preprocessors and methodologies like BEM (Block Element Modifier), teaching developers how to structure their stylesheets for larger projects. Grant encourages best practices such as keeping CSS DRY (Don’t Repeat Yourself) and modularizing code.\n\nBy the end of the book, readers will have the knowledge and confidence to tackle complex CSS challenges and create stunning web interfaces with efficiency and elegance."
    },
    {
        "id": "350c3bc8-a5cc-45a3-ba16-97b93ed056b0",
        "title": "HTML and CSS: Design and Build Websites",
        "author": "Jon Duckett",
        "genre": "Web Development",
        "rating": 5,
        "coverUrl": "https://ik.imagekit.io/pwd17k26p/books/covers/file_1pCoBDI11.png",
        "coverColor": "#3a2931",
        "description": "Whether you’re a complete beginner or someone looking to brush up on HTML and CSS, this book provides a solid foundation and practical skills that can be applied immediately to real-world projects.",
        "totalCopies": 45,
        "availableCopies": 45,
        "videoUrl": "https://ik.imagekit.io/pwd17k26p/books/videos/file_MONyhmpr4V.png",
        "summary": "HTML and CSS: Design and Build Websites starts with an introduction to HTML, covering the basic building blocks of a webpage, including elements like headings, paragraphs, links, and images. Duckett carefully explains the structure and syntax of HTML, teaching readers how to write and organize their code.\n\nThe book then transitions to CSS, showing readers how to apply styles to their HTML elements. Topics such as fonts, colors, borders, padding, and margins are introduced in clear, easy-to-understand terms. Duckett uses plenty of visual examples to help readers see the immediate impact of the styles they apply.\n\nAs the book progresses, readers dive deeper into layout techniques, learning about the box model, positioning, floats, and flexible layouts with CSS Flexbox. The concept of responsive design is also covered, teaching readers how to make their websites adapt to different screen sizes and devices.\n\nThroughout, the book is full of practical tips and techniques to create beautiful, functional websites. Duckett’s clear explanations and colorful layout make complex topics easier to understand, making this book a perfect guide for anyone starting their web development journey."
    },
    {
        "id": "b514f922-a715-45ec-846e-e51d40e15aa2",
        "title": "System Design Interview",
        "author": "Alex Xu",
        "genre": "System Design",
        "rating": 5,
        "coverUrl": "https://ik.imagekit.io/pwd17k26p/books/covers/file_CmVaNeXrQ.png",
        "coverColor": "#363b63",
        "description": "System Design Interview: An Insider's Guide by Alex Xu is a must-read for software engineers and professionals preparing for system design interviews. The book provides a detailed overview of the principles and techniques needed to excel in system design interviews, which are often a key part of the hiring process at top tech companies.",
        "totalCopies": 10,
        "availableCopies": 10,
        "videoUrl": "https://ik.imagekit.io/pwd17k26p/books/videos/file_x_vGP6M7Y.png",
        "summary": "System Design Interview: An Insider's Guide begins by introducing the key concepts of system design, emphasizing the importance of understanding requirements, scalability, and reliability. Xu explains how to approach an open-ended problem by breaking it down into smaller, manageable components, ensuring a structured response.\n\nThe book covers essential topics, such as database design, caching, load balancing, and message queues, explaining their relevance in building scalable and fault-tolerant systems. Xu also delves into the intricacies of designing high-availability systems, explaining concepts like replication, partitioning, and sharding.\n\nReaders are guided through various real-world system design problems, from designing a URL shortening service to building a recommendation system. Each example provides a deep dive into the trade-offs involved, offering valuable insights into how to optimize systems for performance, cost, and maintainability.\n\nXu also emphasizes the importance of communication during system design interviews, teaching readers how to present their solutions clearly and justify their decisions. With practice problems and tips on handling tough interview questions, the book is an essential resource for anyone looking to ace a system design interview."
    },
    {
        "id": "b4ed06bf-02b2-42c4-8886-b3847af02cca",
        "title": "Computer Science Distilled",
        "author": "Wladston Ferreira Filho",
        "genre": "Computer Science",
        "rating": 5,
        "coverUrl": "https://ik.imagekit.io/pwd17k26p/books/covers/file_ZRyGl0A75A.png",
        "coverColor": "#73d173",
        "description": "Computer Science Distilled by Wladston Ferreira Filho is a concise and approachable introduction to the core concepts of computer science. Designed for beginners and those looking to strengthen their problem-solving skills, the book breaks down complex topics into digestible, easy-to-understand pieces.",
        "totalCopies": 89,
        "availableCopies": 87,
        "videoUrl": "https://ik.imagekit.io/pwd17k26p/books/videos/file_W6XGeHaEO.png",
        "summary": "Computer Science Distilled begins by explaining the art of problem-solving in computing, emphasizing the importance of breaking down problems into manageable parts. It introduces key computational concepts such as abstraction, algorithms, and complexity analysis, providing a strong foundation for tackling any programming challenge.\n\nThe book explores data structures, including arrays, linked lists, stacks, queues, and trees, with clear explanations and visual aids to make these abstract concepts tangible. Readers learn how to select the right data structure for different scenarios, enhancing the efficiency of their solutions.\n\nLogical reasoning and algorithm design are central themes. The author delves into sorting, searching, and recursion, presenting these topics in an accessible way. He also highlights the importance of trade-offs in algorithm design, such as time versus space complexity.\n\nLater chapters focus on practical problem-solving techniques, encouraging readers to approach challenges creatively while maintaining computational efficiency. The book includes exercises to reinforce learning, making it highly interactive.\n\nBy the end, readers gain a solid grasp of computer science fundamentals, enabling them to write better programs and think like problem solvers. Its concise format ensures clarity and retention without overwhelming the reader."
    },
    {
        "id": "dc73abc1-8699-4e0a-91b0-a67e80292b9c",
        "title": "The Art of Assembly Language",
        "author": "Randall Hyde",
        "genre": "Programming",
        "rating": 3,
        "coverUrl": "https://ik.imagekit.io/pwd17k26p/books/covers/file_lZrAopUNM.png",
        "coverColor": "#fff9bf",
        "description": "The Art of Assembly Language by Randall Hyde is a comprehensive and engaging introduction to assembly language programming. Known for its clarity and depth, the book provides readers with a solid foundation in low-level programming concepts, which are essential for understanding how computers operate at their core.",
        "totalCopies": 78,
        "availableCopies": 78,
        "videoUrl": "https://ik.imagekit.io/pwd17k26p/books/videos/file_VGtFawJik.png",
        "summary": "The Art of Assembly Language introduces readers to the fundamentals of assembly programming, beginning with an overview of computer architecture. It explains how CPUs process instructions and manage data, providing the necessary background to appreciate the power of assembly language.\n\nThe book then transitions into practical programming, starting with data representation and memory management. Readers learn how integers, floating-point numbers, and other data types are stored and manipulated at the binary level. Hyde uses HLA as a bridge, making assembly language concepts easier to grasp while maintaining a focus on the underlying principles.\n\nControl structures, including loops, conditionals, and functions, are explained in detail. Hyde shows how these elements work in assembly, offering a deeper understanding of how high-level languages translate into machine code.\n\nAdvanced topics include optimization techniques, hardware interactions, and system-level programming. The book explores how assembly can be used to fine-tune performance-critical applications and interact directly with hardware components.\n\nThroughout, the emphasis is on clarity and practical application. The book includes numerous exercises, real-world examples, and detailed explanations, making it a valuable resource for anyone looking to master assembly language or gain deeper insights into computer operations."
    },
    {
        "id": "17a58b62-0258-45a5-8b8b-9a21a6d6630c",
        "title": "Seriously Good Software",
        "author": "Marco Faella",
        "genre": "Programming",
        "rating": 5,
        "coverUrl": "https://ik.imagekit.io/pwd17k26p/books/covers/file_YiFXdp5P_T.png",
        "coverColor": "#061e20",
        "description": "This book is perfect for developers who want to elevate their coding skills beyond functionality, making their work robust and professional. Written in an accessible style, Seriously Good Software bridges the gap between theoretical principles and practical application.",
        "totalCopies": 45,
        "availableCopies": 45,
        "videoUrl": "https://ik.imagekit.io/pwd17k26p/books/videos/file_LhwRi_a9cJ.png",
        "summary": "Seriously Good Software starts by exploring the core principles of software development, emphasizing the importance of correctness—software must function as intended under all specified conditions. Faella uses clear examples to show how to identify and fix errors that might compromise the correctness of code.\n\nThe book progresses to readability, highlighting how clean, well-documented code improves collaboration and reduces maintenance costs. Developers learn techniques to refactor code for better readability without compromising functionality.\n\nPerformance and scalability are addressed with practical tips on optimizing code to handle increasing workloads and adapt to growth. Faella explains how to use profiling tools, optimize algorithms, and make trade-offs to enhance efficiency.\n\nSecurity is another key focus, with the book covering techniques to protect software from vulnerabilities and potential attacks. Maintainability rounds out the discussion, teaching developers how to write modular, testable code that adapts to future changes.\n\nThroughout, Seriously Good Software balances theory with hands-on examples, encouraging developers to apply best practices in their projects. With its emphasis on professionalism and long-term thinking, the book equips readers to create software that not only works but thrives."
    },
    {
        "id": "91445e57-01a8-4e1e-bb18-cf04b3a0b7d1",
        "title": "Fundamentals of Database Systems",
        "author": "Ramez Elmasri and Shamkant B. Navathe",
        "genre": "Computer Science",
        "rating": 4,
        "coverUrl": "https://ik.imagekit.io/pwd17k26p/books/covers/file_9-sl0Jo8y.png",
        "coverColor": "#ffffff",
        "description": "Fundamentals of Database Systems by Ramez Elmasri and Shamkant B. Navathe is a comprehensive textbook that serves as a cornerstone for understanding database systems and their applications. This book is widely used in academia and the industry to teach and learn foundational and advanced database concepts.",
        "totalCopies": 145,
        "availableCopies": 145,
        "videoUrl": "https://ik.imagekit.io/pwd17k26p/books/videos/file_UZULgWXVA.png",
        "summary": "Fundamentals of Database Systems begins by introducing the fundamental concepts of database systems, including their purpose, architecture, and role in modern computing. It explains key data modeling techniques, such as the Entity-Relationship (ER) model, which is used to design and visualize database schemas.\n\nThe book thoroughly explores relational database theory, including relational algebra and SQL, equipping readers with the tools to query and manipulate data efficiently. It delves into database design principles, focusing on normalization to eliminate redundancy and maintain data integrity.\n\nAdvanced topics include transaction processing, where readers learn about concurrency control and recovery mechanisms to ensure reliable and consistent database operations. The book also covers distributed databases and emerging technologies like NoSQL and big data systems, providing insights into handling massive datasets and scalable architectures.\n\nAdditionally, the authors address database security, indexing, and performance optimization, offering a holistic view of database management. Each chapter is supplemented with exercises, case studies, and real-world examples, making the concepts practical and actionable.\n\nOverall, the book provides a strong foundation in database systems, empowering readers to design, implement, and manage databases effectively in diverse environments."
    },
    {
        "id": "c3f2ff59-a3c2-47d2-a793-93457a9dccf7",
        "title": "Operating System Concepts",
        "author": "Abraham Silberschatz, Peter B. Galvin, and Greg Gagne",
        "genre": "Computer Science",
        "rating": 5,
        "coverUrl": "https://ik.imagekit.io/pwd17k26p/books/covers/file_W6Bz0KiBC.png",
        "coverColor": "#0e0e10",
        "description": "Operating System Concepts, often referred to as the \"Dinosaur Book,\" is a definitive guide to understanding the inner workings of operating systems. Written by Abraham Silberschatz, Peter B. Galvin, and Greg Gagne, this book is an essential resource for students, educators, and professionals in the field of computer science.",
        "totalCopies": 97,
        "availableCopies": 97,
        "videoUrl": "https://ik.imagekit.io/pwd17k26p/books/videos/file_rkMFYr5J0.png",
        "summary": "Operating System Concepts provides an in-depth exploration of operating systems, starting with an introduction to their fundamental role in computing. It describes how operating systems manage hardware resources, such as the CPU, memory, and storage, to ensure efficient and reliable operation.\n\nThe book dives into critical topics, such as process and thread management, illustrating how multitasking and concurrency are achieved. It explains scheduling algorithms, synchronization techniques, and methods to handle deadlocks, providing a comprehensive understanding of process control.\n\nMemory management is another focus, with detailed discussions on paging, segmentation, and virtual memory. The book explains how these mechanisms optimize resource allocation while ensuring system stability. Similarly, the authors delve into file systems and storage structures, illustrating how data is stored, retrieved, and managed.\n\nAdvanced topics include security, protection, and distributed systems. Readers learn about authentication, access control, and methods to safeguard operating systems against potential threats. The book also introduces modern developments, such as virtualization and cloud computing, making it relevant in today's tech landscape.\n\nWith a balance of theory and practical application, Operating System Concepts equips readers with the knowledge needed to design, analyze, and optimize operating systems effectively."
    },
    {
        "id": "fe03e013-53b8-4574-9ca8-caec69a9b16c",
        "title": "Algorithms",
        "author": "Robert Sedgewick and Kevin Wayne",
        "genre": "Computer Science",
        "rating": 5,
        "coverUrl": "https://ik.imagekit.io/pwd17k26p/books/covers/file_dr-f_LPwA.png",
        "coverColor": "#bf1e2e",
        "description": "Algorithms by Robert Sedgewick and Kevin Wayne is a comprehensive and authoritative guide to understanding algorithms and their role in modern computing. Widely regarded as a foundational text in computer science, the book covers a vast array of algorithms, ranging from sorting and searching to graph processing and string manipulation.",
        "totalCopies": 321,
        "availableCopies": 318,
        "videoUrl": "https://ik.imagekit.io/pwd17k26p/books/videos/file_KSZGUHg5R.png",
        "summary": "Algorithms is a thorough exploration of algorithmic principles and their applications. It begins with the basics, introducing elementary algorithms like sorting and searching. These foundational topics are covered in-depth, explaining their importance in handling data efficiently and effectively.\n\nThe book then progresses to more complex topics, such as graph algorithms and string processing. Graph processing, for instance, is explained with practical use cases like network connectivity, shortest paths, and spanning trees. Similarly, string algorithms address challenges in pattern matching and text analysis, offering insights into their relevance in fields like bioinformatics and search engines.\n\nThroughout the book, the authors emphasize the design and analysis of algorithms. They focus on efficiency and scalability, equipping readers with the tools to evaluate performance and choose appropriate algorithms for specific tasks.\n\nPractical implementation is a major focus, with the authors providing code examples and exercises that reinforce learning. The book strikes a balance between theory and practice, ensuring readers gain both conceptual knowledge and hands-on skills to solve real-world problems effectively."
    },
    {
        "id": "585df184-991b-4edf-9902-f8531c3a81d9",
        "title": "The Clean Coder",
        "author": "Robert C. Martin",
        "genre": "Software",
        "rating": 4,
        "coverUrl": "https://ik.imagekit.io/pwd17k26p/books/covers/file_EE5klEyX0.png",
        "coverColor": "#060709",
        "description": "The Clean Coder by Robert C. Martin is an essential guide for software developers who aspire to reach the highest standards of professionalism. Written by one of the most respected figures in the software engineering community, this book transcends technical skills, focusing on the mindset, ethics, and practices that define a professional programmer.",
        "totalCopies": 35,
        "availableCopies": 35,
        "videoUrl": "https://ik.imagekit.io/pwd17k26p/books/videos/file_50K9AmWND.png",
        "summary": "The Clean Coder delves into the principles and practices of professional software development. The book begins by defining what it means to be a professional programmer, emphasizing the importance of taking responsibility for your work and acting with integrity. Martin highlights how professionalism goes beyond technical ability and requires a commitment to quality, discipline, and effective communication.\n\nA key focus of the book is mastering essential soft skills, such as time management and the art of saying “no.” Martin provides practical guidance for handling unrealistic expectations, prioritizing tasks, and maintaining a healthy work-life balance. Through engaging anecdotes, he explains how developers can balance their personal and professional lives while delivering consistent value to clients and stakeholders.\n\nThe book also underscores the significance of rigorous testing, clean coding practices, and continuous learning. Martin shares tips on writing better tests, debugging code efficiently, and dealing with stressful situations like tight deadlines and unexpected errors.\n\nFinally, The Clean Coder encourages developers to cultivate a mindset of lifelong learning and self-improvement. It serves as both a guide and an inspiration for developers to achieve excellence, not only in their technical skills but also in their conduct as professionals."
    },
    {
        "id": "cea639ce-ee90-4ef9-9fef-c9562a247e99",
        "title": "The Lean Startup",
        "author": "Eric Ries",
        "genre": "Software",
        "rating": 4,
        "coverUrl": "https://ik.imagekit.io/pwd17k26p/books/covers/file_XyoNwHCdwe.png",
        "coverColor": "#1E73BE",
        "description": "The Lean Startup by Eric Ries is a guide to building and managing startups in a way that maximizes innovation while minimizing wasted effort. The book introduces the concept of the “Lean Startup” methodology, which focuses on quickly turning ideas into products, testing them with real customers, and learning from their feedback to refine and improve.",
        "totalCopies": 17,
        "availableCopies": 17,
        "videoUrl": "https://ik.imagekit.io/pwd17k26p/books/videos/file_uiRdVQTTm.png",
        "summary": "The Lean Startup by Eric Ries is a guide to building and managing startups in a way that maximizes innovation while minimizing wasted effort. The book introduces the concept of the “Lean Startup” methodology, which focuses on quickly turning ideas into products, testing them with real customers, and learning from their feedback to refine and improve. This approach helps entrepreneurs create successful businesses by avoiding long periods of untested development.\n\nA central idea of the book is the Build-Measure-Learn feedback loop. Startups should build a “minimum viable product” (MVP)—a simplified version of their idea that allows them to test assumptions quickly. By measuring how customers respond to the MVP, startups can learn what works and what doesn’t, enabling them to make informed decisions about whether to pivot (change direction) or persevere (continue improving the same idea). This process reduces the risk of investing time and money into a product that might fail in the market.\n\nThe Lean Startup methodology emphasizes the importance of continuous experimentation and validated learning. Entrepreneurs are encouraged to treat their ideas as hypotheses and to test them rigorously with data rather than assumptions. This scientific approach ensures that decisions are based on evidence, leading to better chances of success.\n\nAnother key aspect is the principle of “innovation accounting,” which focuses on measuring progress in terms of validated learning rather than vanity metrics like website traffic or social media likes. Startups should track meaningful metrics that reflect real customer engagement and satisfaction to ensure they are on the right path.\n\nOverall, The Lean Startup provides a roadmap for creating agile, customer-focused businesses. By focusing on rapid experimentation, data-driven decision-making, and constant iteration, entrepreneurs can navigate uncertainty, avoid unnecessary failures, and build products that truly meet the needs of their customers."
    },
    {
        "id": "68f7c183-b995-4ba3-a644-30110ebb932e",
        "title": "Atomic Habits",
        "author": "James Clear",
        "genre": "Self Help",
        "rating": 5,
        "coverUrl": "https://ik.imagekit.io/pwd17k26p/books/covers/file_HOCexO5Ms.png",
        "coverColor": "#ffffff",
        "description": "Atomic Habits by James Clear is a book about how small changes in daily habits can lead to significant transformations over time. Clear emphasizes that habits are the compound interest of self-improvement—tiny actions repeated consistently will eventually produce remarkable results.",
        "totalCopies": 1200,
        "availableCopies": 1200,
        "videoUrl": "https://ik.imagekit.io/pwd17k26p/books/videos/file_WyfBbHfTp.png",
        "summary": "Atomic Habits by James Clear is a book about how small changes in daily habits can lead to significant transformations over time. Clear emphasizes that habits are the compound interest of self-improvement—tiny actions repeated consistently will eventually produce remarkable results. \n\nRather than focusing on massive overhauls, the book encourages readers to aim for a 1% improvement each day, as these incremental gains accumulate to create meaningful progress.\n\nThe book introduces the \"Four Laws of Behavior Change\" as a framework for building good habits and breaking bad ones. These laws are: make it obvious, make it attractive, make it easy, and make it satisfying. Clear explains how these principles can be applied to rewire habits by adjusting cues, cravings, responses, and rewards. For instance, placing a water bottle on your desk makes drinking water more obvious and accessible, increasing the likelihood of forming a healthy hydration habit.\n\nA key insight in the book is the role of identity in shaping habits. Clear argues that lasting change comes when you focus on who you want to become rather than what you want to achieve. For example, instead of saying, \"I want to read more,\" you could say, \"I am the type of person who loves learning.\" By aligning your habits with your identity, you create a sustainable foundation for growth.\n\nThe environment also plays a critical role in habit formation. Clear emphasizes the importance of designing your surroundings to make good habits easier and bad habits harder. Simple changes, like keeping healthy snacks visible or removing distractions from your workspace, can have a profound impact on your behavior.\n\nUltimately, Atomic Habits is a reminder that success is not about huge leaps but about the small, consistent steps we take every day. By focusing on systems and making intentional adjustments, anyone can create lasting, positive changes in their life."
    },
    {
        "id": "b6b9cc5d-95fd-488e-b1df-2a805678b430",
        "title": "React in Action",
        "author": "Mark Tielens Thomas",
        "genre": "Web Development",
        "rating": 4,
        "coverUrl": "https://ik.imagekit.io/pwd17k26p/books/covers/file_rzjr6TrKF.png",
        "coverColor": "#302428",
        "description": "React in Action by Mark Tielens Thomas is a practical guide to mastering React, a popular JavaScript library for building user interfaces. The book is ideal for developers looking to learn React from the ground up and for those seeking to deepen their understanding of its ecosystem.",
        "totalCopies": 57,
        "availableCopies": 57,
        "videoUrl": "https://ik.imagekit.io/pwd17k26p/books/videos/file_jO3MUj8-s.png",
        "summary": "React in Action by Mark Tielens Thomas is a practical guide to mastering React, a popular JavaScript library for building user interfaces. The book is ideal for developers looking to learn React from the ground up and for those seeking to deepen their understanding of its ecosystem. With clear explanations and hands-on examples, it equips readers to build dynamic and interactive web applications.\n\nThe book starts by introducing the fundamentals of React, including components, JSX, props, and state management. It then explores more advanced topics, such as lifecycle methods, hooks, and performance optimization. A key focus is on the declarative nature of React and how it simplifies building complex user interfaces.\n\nReaders are guided through creating real-world applications, gaining experience with essential tools like Redux for state management, React Router for navigation, and testing frameworks like Jest and Enzyme. The book also addresses integrating React with backend services, ensuring a complete understanding of building full-stack applications.\n\nOne of the standout features of React in Action is its emphasis on modern development practices. It introduces readers to best practices for component architecture, reusable design, and effective debugging. By the end of the book, developers will have the confidence to tackle React projects with a solid foundation."
    },
    {
        "id": "8f45a8ad-e0e1-437e-8987-5bcbaca24bd9",
        "title": "JavaScript: The Good Parts",
        "author": "Douglas Crockford",
        "genre": "Programming",
        "rating": 5,
        "coverUrl": "https://ik.imagekit.io/pwd17k26p/books/covers/file_-xOn0_b32.png",
        "coverColor": "#00a199",
        "description": "JavaScript: The Good Parts by Douglas Crockford is a concise guide to understanding and using the best features of JavaScript while avoiding its pitfalls. This book is designed for developers who want to write clean, efficient, and reliable JavaScript code by focusing only on the language's strengths.",
        "totalCopies": 501,
        "availableCopies": 500,
        "videoUrl": "https://ik.imagekit.io/pwd17k26p/books/videos/file_KOYG_-R2J.png",
        "summary": "JavaScript: The Good Parts by Douglas Crockford is a concise guide to understanding and using the best features of JavaScript while avoiding its pitfalls. This book is designed for developers who want to write clean, efficient, and reliable JavaScript code by focusing only on the language's strengths.\n\nCrockford identifies \"the good parts\" of JavaScript, such as its dynamic object-oriented nature, functional programming capabilities, and simplicity when used correctly. He also highlights problematic features like global variables, type coercion, and inconsistent behavior, advising readers to steer clear of these. The book emphasizes the importance of understanding JavaScript’s quirks and using tools and practices to minimize errors.\n\nKey topics covered include syntax, objects, functions, inheritance, arrays, regular expressions, and methods for managing code quality. The book also introduces best practices for writing maintainable code and offers practical examples to demonstrate how to use JavaScript effectively in real-world applications."
    },
    {
        "id": "d125678e-80d7-4ba8-97a6-cc6ee4b980ef",
        "title": "Eloquent Javascript",
        "author": "Marijn Haverbeke",
        "genre": "Programming",
        "rating": 5,
        "coverUrl": "https://ik.imagekit.io/pwd17k26p/books/covers/file_acYPV3jV0.png",
        "coverColor": "#F8D347",
        "description": "Eloquent JavaScript by Marijn Haverbeke is a deep dive into JavaScript, designed for developers who want to master the language. The book combines clear explanations, practical examples, and exercises to help readers understand both the basics and advanced features of JavaScript.",
        "totalCopies": 121,
        "availableCopies": 120,
        "videoUrl": "https://ik.imagekit.io/pwd17k26p/books/videos/file_l0umqa2H6.png",
        "summary": "Eloquent JavaScript by Marijn Haverbeke is a deep dive into JavaScript, designed for developers who want to master the language. The book combines clear explanations, practical examples, and exercises to help readers understand both the basics and advanced features of JavaScript. It's ideal for those who are new to the language and for experienced developers looking to refine their skills.\n\nThe book begins with an introduction to programming concepts and quickly transitions into JavaScript fundamentals, including variables, functions, and control structures. It then delves into more advanced topics such as closures, asynchronous programming, and object-oriented design. Haverbeke also explores the JavaScript ecosystem, including browser-based APIs, Node.js, and modern features of the language.\n\nA unique feature of the book is its emphasis on writing elegant, clean, and efficient code. Readers are encouraged to think critically about problem-solving and are provided with exercises that challenge them to apply concepts in real-world scenarios. The book's projects, including building a game and a basic programming language, offer hands-on experience that solidifies learning."
    },
    {
        "id": "383a8140-08b8-4c7c-97a7-e1bc68dc1488",
        "title": "Fullstack React: The Complete Guide to ReactJS and Friends",
        "author": "Accomazzo, Greif, and Murray",
        "genre": "Web Development",
        "rating": 4,
        "coverUrl": "https://ik.imagekit.io/pwd17k26p/books/covers/file_aiko1JtEn.png",
        "coverColor": "#eac8bf",
        "description": "Fullstack React: The Complete Guide to ReactJS and Friends by Accomazzo, Greif, and Murray is a comprehensive resource for developers who want to master React and build full-stack applications.",
        "totalCopies": 11,
        "availableCopies": 11,
        "videoUrl": "https://ik.imagekit.io/pwd17k26p/books/videos/file_0HxM1wQe62.png",
        "summary": "Fullstack React: The Complete Guide to ReactJS and Friends by Accomazzo, Greif, and Murray is a comprehensive resource for developers who want to master React and build full-stack applications. The book provides step-by-step tutorials, hands-on projects, and deep insights into React's ecosystem, making it an excellent guide for both beginners and experienced developers.\n\nThe book starts with the fundamentals of React, including components, state, and props, before diving into more advanced concepts like lifecycle methods, hooks, and performance optimization. It also covers key tools in the React ecosystem, such as Redux for state management, React Router for navigation, and Webpack for bundling.\n\nA major highlight of the book is its focus on building real-world applications. Readers work on projects like a dynamic web app and learn to integrate React with backend technologies and APIs. The authors emphasize best practices and patterns, helping developers write clean, maintainable code that scales effectively.\n\nThe book also explores topics like testing React applications, using server-side rendering with Next.js, and deploying apps to production. It equips developers with the skills needed to build modern, high-performance web applications from start to finish."
    },
    {
        "id": "cc625b42-6852-44af-b3a3-e668fa967b8e",
        "title": "Cracking the Coding Interview",
        "author": "Gayle Laakmann McDowell",
        "genre": "Programming",
        "rating": 4,
        "coverUrl": "https://ik.imagekit.io/pwd17k26p/books/covers/file_yryJFVYWd.png",
        "coverColor": "#97cc02",
        "description": "Cracking the Coding Interview by Gayle Laakmann McDowell is a comprehensive guide for software engineers preparing for technical interviews. The book is packed with insights, strategies, and over 180 programming questions that simulate real interview scenarios.",
        "totalCopies": 32,
        "availableCopies": 32,
        "videoUrl": "https://ik.imagekit.io/pwd17k26p/books/videos/file_vcXsdjkqw.png",
        "summary": "Cracking the Coding Interview by Gayle Laakmann McDowell is a comprehensive guide for software engineers preparing for technical interviews. The book is packed with insights, strategies, and over 180 programming questions that simulate real interview scenarios. It provides not just solutions but also detailed explanations to help readers understand the reasoning and improve their problem-solving skills.\n\nThe book starts by guiding readers through the technical interview process, offering tips on resume optimization, behavioral questions, and understanding what interviewers are looking for. It breaks down complex problems into manageable parts and explains algorithms, data structures, and coding techniques essential for solving them.\n\nA standout feature of the book is its focus on strategies for tackling common topics like arrays, linked lists, trees, graphs, dynamic programming, and system design. McDowell also includes advice on how to handle pressure, communicate effectively during interviews, and debug solutions in real-time, making it more than just a collection of problems—it’s a career toolkit."
    }
];

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
});

async function uploadToImageKit(url: string, fileName: string, folder: string) {
  try {
    const response = await imagekit.upload({
      file: url,
      fileName: fileName,
      folder,
    });
    return response.filePath;
  } catch (error) {
    console.error(`Error uploading ${fileName} to ImageKit:`, error);
    throw error;
  }
}

async function seed() {
  console.log("Seeding books...");

  try {
    for (const book of dummyBooks) {
      const coverUrl = await uploadToImageKit(
        book.coverUrl,
        `${book.title}.jpg`,
        "/books/covers"
      );

      const videoUrl = await uploadToImageKit(
        book.videoUrl,
        `${book.title}.mp4`,
        "/books/videos"
      );

      await db.insert(books).values({
        ...book,
        coverUrl,
        videoUrl,
      });

      console.log(`Added book: ${book.title}`);
    }

    console.log("Seeding completed successfully.");
  } catch (error) {
    console.error("Error seeding books:", error);
  }
}

seed();
