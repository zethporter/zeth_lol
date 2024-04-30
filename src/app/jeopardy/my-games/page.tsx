import { z } from "zod";
import GameCards from "./GameCards";

const gameCard = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    lastEdited: z.date(),
  }),
);

export type gameCardType = z.infer<typeof gameCard>;

export default function MyGamesPage() {
  const randomGames: gameCardType = [
    {
      name: "The Woz",
      lastEdited: new Date("2024-01-01"),
      id: 1,
    },
    {
      name: "Lando",
      lastEdited: new Date("2024-01-01"),
      id: 2,
    },
    {
      name: "Sammy",
      lastEdited: new Date("2024-01-01"),
      id: 3,
    },
    {
      name: "Brutal",
      lastEdited: new Date("2024-01-01"),
      id: 4,
    },
  ];

  return <GameCards games={randomGames} />;
}
