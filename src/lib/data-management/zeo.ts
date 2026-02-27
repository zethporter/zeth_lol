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
import z from "zod";

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

export const getCategories = createServerFn({ method: "GET" }).handler(
  async () => {
    const categories = await db.select().from(zeoCategories);
    return categories;
  },
);

export const insertCategory = createServerFn({ method: "POST" })
  .inputValidator(zeoCategoriesInsertSchema.parse)
  .handler(async ({ data }) => {
    const category = await db.insert(zeoCategories).values(data).returning();
    return category;
  });

export const insertRound = createServerFn({ method: "POST" })
  .inputValidator(zeoRoundsInsertSchema.parse)
  .handler(async ({ data }) => {
    const round = await db.insert(zeoRounds).values(data).returning();
    return round;
  });

export const updateRound = createServerFn({ method: "POST" })
  .inputValidator(zeoRoundsUpdateSchema.parse)
  .handler(async ({ data }) => {
    if (data.id) {
      const updatedRound = await db
        .update(zeoRounds)
        .set(data)
        .where(eq(zeoRounds.id, data.id))
        .returning();
      return updatedRound;
    }
    throw new Error("Invalid round ID");
  });

const GetGameRoundsSchema = z.object({
  gameId: z.uuid(),
});
export const getGameRounds = createServerFn({ method: "GET" })
  .inputValidator(GetGameRoundsSchema.parse)
  .handler(async ({ data }) => {
    const rounds = await db
      .select()
      .from(zeoRounds)
      .where(eq(zeoRounds.gameId, data.gameId));
    return rounds;
  });
