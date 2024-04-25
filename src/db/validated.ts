import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { createSelectSchema } from "drizzle-zod";

export const validated = sqliteTable("cities", {
  id: integer("id").primaryKey(),
  name: text("name"),
  userId: text("userId"),
  valid: integer("valid", { mode: "boolean" }),
});

export const selectGamesSchema = createSelectSchema(validated);
