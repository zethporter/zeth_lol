import GameBoard from "./GameBoard";
import { auth } from "@clerk/nextjs/server";
import { validated } from "~/db/schema/validated";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { eq } from "drizzle-orm";

async function getValidUser(userId: string | null): Promise<boolean | null> {
  if (userId) {
    const client = createClient({
      url: process.env.TURSO_ENDPOINT_URL!,
      authToken: process.env.TURSO_SECRET_KEY,
    });
    const db = drizzle(client);
    const result = await db
      .select()
      .from(validated)
      .where(eq(validated.userId, userId));
    return result[0] ? result[0].valid : false;
  }
  return false;
}

export default async function Jeopardy() {
  const { userId }: { userId: string | null } = auth();
  console.log("user", userId);

  const validUser = await getValidUser(userId);

  return (
    <main>
      <GameBoard validUser={validUser} />
    </main>
  );
}
