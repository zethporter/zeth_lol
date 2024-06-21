// await db.insert(users).values({ name: 'Andrew' });
import { auth } from "@clerk/nextjs/server";
import { drizzle } from "drizzle-orm/libsql";
import { eq } from "drizzle-orm";
import { createClient } from "@libsql/client";
import {
  jeoGames,
  insertGamesSchema,
  selectGamesSchema,
  type GameZod,
} from "~/db/schema/jeo";
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
  const req: PostBody = (await request.json()) as PostBody;
  console.log("Called Create Game", req);
  if (req.userId === null) {
    return NextResponse.json({ message: "Missing userId" }, { status: 500 });
  }
  const db = dbContext();
  try {
    await db.insert(jeoGames).values(
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

export async function PUT(request: NextRequest) {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ message: "Not Authorized" }, { status: 401 });
  }

  const req: GameZod = (await request.json()) as GameZod;
  const db = dbContext();

  try {
    const game = await db
      .update(jeoGames)
      .set(insertGamesSchema.parse(req))
      .where(eq(jeoGames.publicId, req.publicId!))
      .returning();

    return NextResponse.json(selectGamesSchema.parse(game), { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Oops, something went wrong." },
      { status: 500 },
    );
  }
}

type DeleteBody = {
  publicId: string;
};

export async function DELETE(request: NextRequest) {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ message: "Not Authorized" }, { status: 401 });
  }

  const req: DeleteBody = (await request.json()) as DeleteBody;
  const db = dbContext();

  try {
    const deletedGame: { publicId: string }[] = (await db
      .delete(jeoGames)
      .where(eq(jeoGames.publicId, req.publicId))
      .returning({ publicId: jeoGames.publicId })) as { publicId: string }[];

    return NextResponse.json(`Deleted GameId: ${deletedGame[0]!.publicId}`, {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Oops, something went wrong." },
      { status: 500 },
    );
  }
}
