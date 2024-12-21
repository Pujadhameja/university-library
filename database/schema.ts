import {
  integer,
  text,
  pgTable,
  varchar,
  pgEnum,
  boolean,
  date,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

const STATUS_ENUM = pgEnum("status", ["PENDING", "APPROVED", "REJECTED"]);

export const users = pgTable("users", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  fullname: varchar("fullname", { length: 255 }).notNull(),
  email: text("email").notNull().unique(),
  universityId: integer("university_id").notNull().unique(),
  password: text("password").notNull(),
  universityCard: text("university_card").notNull(),
  status: STATUS_ENUM("status").default("PENDING"),
  isActive: boolean("is_active").default(false),
  lastActivityDate: date("last_activity_date").defaultNow(),
  createdAt: timestamp("created_at", {
    withTimezone: true,
  }).defaultNow(),
});
