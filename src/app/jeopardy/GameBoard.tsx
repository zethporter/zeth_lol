import { atom, useAtomValue } from "jotai";
import { z } from "zod";

const team = z.object({
  name: z.string(),
  score: z.number(),
});

export type Team = z.infer<typeof team>;

export const themeAtom = atom<string>("dark");
export const teamsAtom = atom<Team[]>([]);
export const gameAtom = atom<unknown>(null);

export default function GameBoard({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const theme = useAtomValue(themeAtom);
  return (
    <section
      id="jeopardyMain"
      data-theme={theme}
      className="h-screen w-full bg-gradient-to-br from-primary via-accent via-85% to-secondary"
    >
      {children}
    </section>
  );
}
