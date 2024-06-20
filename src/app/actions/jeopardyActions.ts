// await db.insert(users).values({ name: 'Andrew' });

import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { jeoGames } from "~/db/schema/jeo";
import { nanoid } from "nanoid";

const dbContext = () => {
  const client = createClient({
    url: process.env.TURSO_ENDPOINT_URL!,
    authToken: process.env.TURSO_SECRET_KEY,
  });
  const db = drizzle(client);
  return db;
};

const makeId = () => {
  return nanoid();
};

export const jeoActions = {
  create: async (userId: string) => {
    const db = dbContext();
    try {
      await db
        .insert(jeoGames)
        .values({ userId: userId, public: false, publicId: makeId() });
    } catch (error) {
      throw error;
    }
  },
};
