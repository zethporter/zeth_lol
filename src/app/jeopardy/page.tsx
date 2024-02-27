"use client";
import { atom, useAtomValue } from "jotai";
import { z } from "zod";

import QuestionModal from "./QuestionModal";
import JeopardyHeader from "./JeopardyHeader";
import { defaultGame, game } from "./DefaultGame";

const team = z.object({
  name: z.string(),
  score: z.number(),
});

export type Team = z.infer<typeof team>;

export const themeAtom = atom("dark");

export const gameAtom = atom(null);
export const teamsAtom = atom<Team[]>([]);

export default function Jeopardy() {
  const theme = useAtomValue(themeAtom);
  const newGame = game.parse(defaultGame);
  return (
    <main
      id={"jeopardyMain"}
      data-theme={theme}
      className="h-screen w-full bg-gradient-to-br from-primary via-accent via-85% to-secondary"
    >
      <div className="flex h-full w-full flex-col-reverse gap-2 bg-base-300/75 p-2">
        <div className="container mx-auto grid flex-1 grid-cols-6 gap-2 rounded-xl p-2">
          {newGame.topics.map((topic, i) => (
            <div key={i} className="grid grid-rows-6 gap-2">
              <div className="flex w-full items-center justify-center rounded-lg bg-accent font-sans text-2xl font-bold text-accent-content">
                {topic.topicLabel}
              </div>
              {topic.questions.map(({ question, answer, points }, j) => (
                <QuestionModal
                  key={j}
                  points={points}
                  question={question}
                  answer={answer}
                />
              ))}
            </div>
          ))}
        </div>
        <JeopardyHeader />
      </div>
    </main>
  );
}
