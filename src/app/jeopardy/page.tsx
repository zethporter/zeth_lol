"use client";
// import { Toaster } from "react-hot-toast";

import QuestionModal from "./QuestionModal";
import JeopardyHeader from "./JeopardyHeader";
import GameBoard from "./GameBoard";
import { defaultGame, game } from "./DefaultGame";

export default function Jeopardy() {
  const newGame = game.parse(defaultGame);
  return (
    <main>
      <GameBoard>
        <div className="flex h-full w-full flex-col-reverse gap-2 bg-base-300/75 p-2">
          <div className="container mx-auto grid flex-1 grid-cols-6 gap-2 rounded-xl p-2">
            {newGame.game.topics.map((topic, i) => (
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
      </GameBoard>
    </main>
  );
}
