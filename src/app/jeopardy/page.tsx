"use client";
import { atom } from "jotai";

import QuestionModal from "./QuestionModal";
import JeopardyHeader from "./JeopardyHeader";
import { defaultGame, game } from "./DefaultGame";

type team = {
  name: string | null;
  score: number | null;
};

export const gameAtom = atom(null);
export const teamsAtom = atom<team[]>([]);

export default function Jeopardy() {
  const newGame = game.parse(defaultGame);
  return (
    <main className="flex h-screen w-full flex-col gap-2 bg-gradient-to-br from-base-300 via-base-200 via-85% to-secondary">
      <JeopardyHeader />
      <div className="container mx-auto grid flex-1 grid-cols-6 gap-2 rounded-xl p-2">
        {newGame.topics.map((topic, i) => (
          <div key={i} className="grid grid-rows-6 gap-2">
            <div className="flex w-full items-center justify-center rounded-lg bg-accent font-sans text-2xl font-bold text-accent-content">
              {topic.topicLabel}
            </div>
            {topic.questions.map(({ question, points }, j) => (
              <QuestionModal key={j} points={points} question={question} />
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
