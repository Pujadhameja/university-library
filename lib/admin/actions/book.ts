"use server";

import { or, like, desc, asc, eq } from "drizzle-orm";

import { db } from "@/database/drizzle";
import { books, borrowRecords, users } from "@/database/schema";

const BOOK_PER_PAGE = 20;

export async function getBorrowRecords({
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

    const allRecords = await db
      .select({
        id: borrowRecords.id,
        book: {
          id: books.id,
          title: books.title,
          coverImage: books.coverImage,
          coverColor: books.coverColor,
        },
        user: users.fullname,
        borrowDate: borrowRecords.borrowDate,
        returnDate: borrowRecords.returnDate,
        dueDate: borrowRecords.dueDate,
      })
      .from(borrowRecords)
      .innerJoin(books, eq(borrowRecords.bookId, books.id))
      .innerJoin(users, eq(borrowRecords.userId, users.id))
      .where(buildConditions)
      .orderBy(buildSort)
      .limit(BOOK_PER_PAGE)
      .offset((page - 1) * BOOK_PER_PAGE);

    return {
      success: true,
      data: allRecords,
    };
  } catch (error) {
    return {
      success: false,
      error: "Something went wrong",
    };
  }
}
