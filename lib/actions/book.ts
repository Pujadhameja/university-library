"use server";

import dayjs from "dayjs";
import { and, asc, count, desc, eq, like, or } from "drizzle-orm";

import { db } from "@/database/drizzle";
import { books, borrowRecords, users } from "@/database/schema";

const ITEMS_PER_PAGE = 20;

export async function createBook(params: BookParams) {
  try {
    const newBook = await db
      .insert(books)
      .values({
        ...params,
        availableQuantity: params.totalQuantity,
      })
      .returning();

    return {
      success: true,
      data: JSON.parse(JSON.stringify(newBook)),
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: "Error creating book",
    };
  }
}

export async function borrowBook(params: BorrowBookParams) {
  const { userId, bookId } = params;

  try {
    const book = await db
      .select({
        availableQuantity: books.availableQuantity,
      })
      .from(books)
      .where(eq(books.id, bookId))
      .limit(1);

    if (!book.length || book[0].availableQuantity <= 0) {
      return {
        success: false,
        error: "Book is not available",
      };
    }

    const dueDate = dayjs().add(7, "day").toDate().toDateString();

    const record = await db.insert(borrowRecords).values({
      userId,
      bookId,
      dueDate,
      status: "BORROWED",
    });

    await db
      .update(books)
      .set({
        availableQuantity: book[0].availableQuantity - 1,
      })
      .where(eq(books.id, bookId));

    return {
      success: true,
      data: JSON.parse(JSON.stringify(record)),
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: "Error borrowing book",
    };
  }
}

export async function getBorrowedBooks(userId: string) {
  try {
    const borrowedBooks = await db
      .select({
        id: books.id,
        title: books.title,
        author: books.author,
        category: books.category,
        rating: books.rating,
        totalQuantity: books.totalQuantity,
        availableQuantity: books.availableQuantity,
        coverColor: books.coverColor,
        coverImage: books.coverImage,
        videoUrl: books.videoUrl,
        summary: books.summary,
        createdAt: books.createdAt,
        borrow: {
          id: borrowRecords.id,
          userId: borrowRecords.userId,
          bookId: borrowRecords.bookId,
          borrowDate: borrowRecords.borrowDate,
          dueDate: borrowRecords.dueDate,
          returnDate: borrowRecords.returnDate,
          status: borrowRecords.status,
        },
      })
      .from(borrowRecords)
      .innerJoin(books, eq(borrowRecords.bookId, books.id))
      .innerJoin(users, eq(borrowRecords.userId, users.id))
      .where(eq(borrowRecords.userId, userId))
      .orderBy(desc(borrowRecords.borrowDate));

    return {
      success: true,
      data: JSON.parse(JSON.stringify(borrowedBooks)),
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: "Error getting borrowed books",
    };
  }
}

export async function searchBooks({
  query,
  sort = "available",
  page = 1,
}: {
  query?: string;
  sort?: string;
  page?: number;
}) {
  try {
    let buildConditions;
    if (query) {
      buildConditions = or(
        like(books.title, `%${query}%`),
        like(books.category, `%${query}%`),
        like(books.author, `%${query}%`)
      );
    }

    let buildSort = desc(books.createdAt);
    if (sort === "newest") {
      buildSort = desc(books.createdAt);
    } else if (sort === "oldest") {
      buildSort = asc(books.createdAt);
    } else if (sort === "highestRated") {
      buildSort = desc(books.rating);
    } else if (sort === "available") {
      buildSort = desc(books.totalQuantity);
    }

    const allBooks = await db
      .select()
      .from(books)
      .where(buildConditions)
      .orderBy(buildSort)
      .limit(ITEMS_PER_PAGE)
      .offset((page - 1) * ITEMS_PER_PAGE);

    const totalBooks = await db
      .select({
        count: count(),
      })
      .from(books)
      .where(buildConditions);

    const totalPage = Math.ceil(totalBooks[0].count / ITEMS_PER_PAGE);
    const hasNextPage = page < totalPage;

    return {
      success: true,
      data: JSON.parse(JSON.stringify(allBooks)),
      metadata: {
        totalPage,
        hasNextPage,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: "Error searching books",
    };
  }
}
