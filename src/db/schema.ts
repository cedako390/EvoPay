import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

import { toZodV4SchemaTyped } from "@/lib/zod-utils";

export const users = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar({ length: 255 }).notNull(),
  passwordHash: varchar({ length: 255 }).notNull(),
});

export const selectUsersSchema = toZodV4SchemaTyped(createSelectSchema(users));
export const insertUsersSchema = toZodV4SchemaTyped(createInsertSchema(users));

// export const tasks = sqliteTable("tasks", {
//   id: integer({ mode: "number" })
//     .primaryKey({ autoIncrement: true }),
//   name: text().notNull(),
//   done: integer({ mode: "boolean" })
//     .notNull()
//     .default(false),
//   createdAt: integer({ mode: "timestamp" })
//     .$defaultFn(() => new Date()),
//   updatedAt: integer({ mode: "timestamp" })
//     .$defaultFn(() => new Date())
//     .$onUpdate(() => new Date()),
// });
//
// export const selectTasksSchema = toZodV4SchemaTyped(createSelectSchema(tasks));
//
// export const insertTasksSchema = toZodV4SchemaTyped(createInsertSchema(
//   tasks,
//   {
//     name: field => field.min(1).max(500),
//   },
// ).required({
//   done: true,
// }).omit({
//   id: true,
//   createdAt: true,
//   updatedAt: true,
// }));
//
// // @ts-expect-error partial exists on zod v4 type
// export const patchTasksSchema = insertTasksSchema.partial();
