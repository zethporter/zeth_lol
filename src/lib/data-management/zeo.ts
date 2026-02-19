import { createServerFn } from "@tanstack/react-start";
import { eq } from "drizzle-orm";
import {
  zeoGames,
  zeoGamesInsertSchema,
  zeoGamesSelectSchema,
  zeoGamesUpdateSchema,
  zeoCategories,
  zeoCategoriesInsertSchema,
  zeoCategoriesSelectSchema,
  zeoCategoriesUpdateSchema,
  zeoRounds,
  zeoRoundsInsertSchema,
  zeoRoundsSelectSchema,
  zeoRoundsUpdateSchema,
  zeoClues,
  zeoCluesSelectSchema,
  zeoCluesUpdateSchema,
  zeoCluesInsertSchema,
  zeoTags,
  zeoTagsSelectSchema,
  zeoTagsUpdateSchema,
  zeoTagsInsertSchema,
  zeoShared,
  zeoSharedSelectSchema,
  zeoSharedUpdateSchema,
  zeoSharedInsertSchema,
} from "@/db/schema/app";
import { db } from "@/db/app";

export const getGamesList = createServerFn({ method: "GET" }).handler(
  async () => {
    // Will need a more complex query once users and sharing is set up.
    const games = await db.select().from(zeoGames);
    return games;
  },
);

export const insertNewGame = createServerFn({ method: "POST" })
  .inputValidator(zeoGamesInsertSchema.parse)
  .handler(async ({ data }) => {
    const game = await db.insert(zeoGames).values(data).returning();
    return game;
  });
