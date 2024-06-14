"use client";
import { useEffect } from "react";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { z } from "zod";
import { type Game, game, defaultGame } from "./DefaultGame";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";

import { createGameMap } from "~/utils/gameMapping";
import QuestionModal from "./QuestionModal";
import JeopardyHeader from "./JeopardyHeader";
import CMDK from "./CMDK";

export const gameCol = z.string().array().length(5);
export const gameMap = z.array(gameCol).length(6);

export type GameMap = z.infer<typeof gameMap>;

const team = z.object({
  name: z.string(),
  score: z.number(),
});

export type Team = z.infer<typeof team>;

export const themeAtom = atomWithStorage<string>("theme", "dark");
export const teamsAtom = atom<Team[]>([
  { name: "Team 1", score: 0 },
  { name: "Team 2", score: 0 },
]);
export const gameAtom = atom<Game>(game.parse(defaultGame));
export const gameMapAtom = atom<GameMap>([
  ["n", "n", "n", "n", "n"],
  ["n", "n", "n", "n", "n"],
  ["n", "n", "n", "n", "n"],
  ["n", "n", "n", "n", "n"],
  ["n", "n", "n", "n", "n"],
  ["n", "n", "n", "n", "n"],
]);

export default function GameBoard({
  validUser,
}: {
  validUser: boolean | null;
}) {
  const game = useAtomValue(gameAtom);
  const setGameMap = useSetAtom(gameMapAtom);
  const theme = useAtomValue(themeAtom);

  useEffect(() => {
    createGameMap(setGameMap);
  }, []);

  console.log("user", validUser);
  return (
    <AnimatePresence>
      <section
        id="jeopardyMain"
        data-theme={theme}
        className="h-screen w-full bg-gradient-to-br from-primary via-accent via-85% to-secondary"
      >
        <div className="flex h-full w-full flex-col-reverse gap-2 bg-base-300/75 p-2">
          <div className="container mx-auto grid flex-1 grid-cols-6 gap-2 rounded-xl p-2">
            {game.game?.topics.map((topic, x) => (
              <div key={x} className="grid grid-rows-6 gap-2">
                <div className="flex w-full items-center justify-center rounded-lg bg-accent font-sans text-2xl font-bold text-accent-content">
                  {topic.topicLabel}
                </div>
                {topic.questions.map(({ question, answer, points }, y) => (
                  <QuestionModal
                    key={y}
                    points={points}
                    question={question}
                    answer={answer}
                    x={x}
                    y={y}
                  />
                ))}
              </div>
            ))}
          </div>
          <JeopardyHeader />
        </div>
      </section>
      <Toaster />
      <CMDK />
    </AnimatePresence>
  );
}
