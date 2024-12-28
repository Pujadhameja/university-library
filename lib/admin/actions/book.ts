"use server";

import { or, like, desc, asc, eq, count } from "drizzle-orm";

import { db } from "@/database/drizzle";
import { books, borrowRecords, users } from "@/database/schema";

const ITEMS_PER_PAGE = 20;

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
    const searchConditions = query
      ? or(
          like(books.title, `%${query}%`),
          like(books.category, `%${query}%`),
          like(books.author, `%${query}%`)
        )
      : undefined;

    const sortOptions: Record<string, any> = {
      newest: desc(books.createdAt),
      oldest: asc(books.createdAt),
      highestRated: desc(books.rating),
      available: desc(books.totalQuantity),
    };

    const sortingCondition = sortOptions[sort] || desc(books.createdAt);

    const borrowRecordsData = await db
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
      .where(searchConditions)
      .orderBy(sortingCondition)
      .limit(ITEMS_PER_PAGE)
      .offset((page - 1) * ITEMS_PER_PAGE);

    const totalRecords = await db
      .select({ count: count() })
      .from(borrowRecords)
      .where(searchConditions);

    const totalPage = Math.ceil(totalRecords[0].count / ITEMS_PER_PAGE);
    const hasNextPage = page < totalPage;

    return {
      success: true,
      data: borrowRecordsData,
      metadata: {
        totalPage,
        hasNextPage,
      },
    };
  } catch (error) {
    console.error("Error fetching borrow records:", error);
    return {
      success: false,
      error: "Something went wrong while fetching borrow records.",
    };
  }
}
