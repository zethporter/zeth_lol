import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { createSelectSchema } from "drizzle-zod";

export const validated = sqliteTable("validated", {
  userId: text("userId").primaryKey(),
  name: text("name"),
  valid: integer("valid", { mode: "boolean" }),
  special: integer("special", { mode: "boolean" }),
});

export const selectGamesSchema = createSelectSchema(validated);
