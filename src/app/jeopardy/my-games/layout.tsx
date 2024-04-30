import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default function MyGamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId }: { userId: string | null } = auth();
  return (
    <section className="flex flex-col gap-2 p-4">
      <div className="flex w-full justify-between gap-2">
        <h1 className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">
          Your Games
        </h1>
        {userId ? (
          <UserButton />
        ) : (
          <Link href="/sign-in" type="button" className="btn btn-primary">
            Login
          </Link>
        )}
      </div>
      <div>{children}</div>
    </section>
  );
}
