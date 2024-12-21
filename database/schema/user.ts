import { integer, text, boolean, pgTable } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: integer("id").primaryKey(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  admin: boolean("admin").notNull().default(false),
  active: boolean("active").notNull().default(true),
});
