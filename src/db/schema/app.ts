import { sql } from "drizzle-orm";
import { sqliteTable, text, int } from "drizzle-orm/sqlite-core";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";
import { v7 as uuid } from "uuid";

export const zeoGames = sqliteTable("zeo_games", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => uuid()),
  owner: text("owner"),
  createdOn: text("created_on")
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  createdBy: text("created_by").notNull(),
});
export const zeoGamesSelectSchema = createSelectSchema(zeoGames);
export const zeoGamesInsertSchema = createInsertSchema(zeoGames);
export const zeoGamesUpdateSchema = createUpdateSchema(zeoGames);

export const zeoCategories = sqliteTable("zeo_categories", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => uuid()),
  name: text("name").notNull(),
  displayName: text("display_name").notNull(),
});
export const zeoCategoriesSelectSchema = createSelectSchema(zeoCategories);
export const zeoCategoriesInsertSchema = createInsertSchema(zeoCategories);
export const zeoCategoriesUpdateSchema = createUpdateSchema(zeoCategories);

export const zeoRounds = sqliteTable("zeo_rounds", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => uuid()),
  gameId: text("game_id")
    .notNull()
    .references(() => zeoGames.id, { onDelete: "cascade" }),
  catOne: text("category_one").references(() => zeoCategories.id, {
    onDelete: "set null",
  }),
  catTwo: text("category_two").references(() => zeoCategories.id, {
    onDelete: "set null",
  }),
  catThree: text("category_three").references(() => zeoCategories.id, {
    onDelete: "set null",
  }),
  catFour: text("category_four").references(() => zeoCategories.id, {
    onDelete: "set null",
  }),
  catFive: text("category_five").references(() => zeoCategories.id, {
    onDelete: "set null",
  }),
  catSix: text("category_six").references(() => zeoCategories.id, {
    onDelete: "set null",
  }),
});
export const zeoRoundsSelectSchema = createSelectSchema(zeoRounds);
export const zeoRoundsInsertSchema = createInsertSchema(zeoRounds);
export const zeoRoundsUpdateSchema = createUpdateSchema(zeoRounds);

export const zeoClues = sqliteTable("zeo_clues", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => uuid()),
});
export const zeoCluesSelectSchema = createSelectSchema(zeoClues);
export const zeoCluesInsertSchema = createInsertSchema(zeoClues);
export const zeoCluesUpdateSchema = createUpdateSchema(zeoClues);

export const zeoTags = sqliteTable("zeo_tags", {
  id: int("id").primaryKey({ autoIncrement: true }),
  tagName: text("tag_name"),
  gameId: text("game_id").references(() => zeoGames.id, {
    onDelete: "cascade",
  }),
  roundId: text("round_id").references(() => zeoRounds.id, {
    onDelete: "cascade",
  }),
  clueId: text("clue_id").references(() => zeoClues.id, {
    onDelete: "cascade",
  }),
  userId: text("user_id").notNull(),
});
export const zeoTagsSelectSchema = createSelectSchema(zeoTags);
export const zeoTagsInsertSchema = createInsertSchema(zeoTags);
export const zeoTagsUpdateSchema = createUpdateSchema(zeoTags);

export const zeoShared = sqliteTable("zeo_shared", {
  id: int("id").primaryKey({ autoIncrement: true }),
  gameId: text("game_id")
    .notNull()
    .references(() => zeoGames.id, { onDelete: "cascade" }),
  orgId: text("org_id"),
  userId: text("user_id"),
  ownerId: text("owner_id").notNull(),
});
export const zeoSharedSelectSchema = createSelectSchema(zeoShared);
export const zeoSharedInsertSchema = createInsertSchema(zeoShared);
export const zeoSharedUpdateSchema = createUpdateSchema(zeoShared);
