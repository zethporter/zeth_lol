// await db.insert(users).values({ name: 'Andrew' });
import { auth } from "@clerk/nextjs/server";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { jeoGames, insertGamesSchema } from "~/db/schema/jeo";
import { nanoid } from "nanoid";
import { type NextRequest, NextResponse } from "next/server";

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

type PostBody = {
  userId: string;
};

export async function POST(request: NextRequest) {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ message: "Not Authorized" }, { status: 401 });
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const req: PostBody = await request.json();
  console.log("Called Create Game", req);
  if (req.userId === null) {
    return NextResponse.json({ message: "Missing userId" }, { status: 500 });
  }
  const db = dbContext();
  try {
    await db
      .insert(jeoGames)
      .values(
        insertGamesSchema.parse({
          userId: req.userId,
          public: false,
          publicId: makeId(),
        }),
      );
    return NextResponse.json({ message: "Game added!" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Oops, something went wrong." },
      { status: 500 },
    );
  }
}
