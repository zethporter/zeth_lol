import React, { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useAtom } from "jotai";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import clsx from "clsx";

import { SparklesCore } from "~/components/Sparkles";
import { teamsAtom, gameMapAtom } from "./GameBoard";

const QuestionModal = ({
  points,
  question,
  answer,
  x,
  y,
}: {
  points: number;
  question: string;
  answer: string;
  x: number;
  y: number;
}) => {
  const [open, setOpen] = useState(false);
  const [teams, setTeams] = useAtom(teamsAtom);
  const [gameMap, setGameMap] = useAtom(gameMapAtom);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const setViewed = () => {
    const newGameMap = gameMap.map((col, xx) =>
      col.map((rowVal, yy) => {
        if (x === xx && y === yy) {
          return "v";
        } else {
          return rowVal;
        }
      }),
    );

    setGameMap(newGameMap);
  };

  const variants = {
    notAnswered: { opacity: 1, x: 0, display: "block" },
    answered: { opacity: 0, x: "-100%", display: "none" },
  };

  const addPoints = (teamIndex: number) => {
    const updatedTeams = teams.map((team, i) =>
      i === teamIndex ? { ...team, score: team.score + points } : team,
    );
    setTeams(updatedTeams);
    setOpen(false);
  };

  const minusPoints = (teamIndex: number) => {
    const updatedTeams = teams.map((team, i) =>
      i === teamIndex ? { ...team, score: team.score - points } : team,
    );
    setTeams(updatedTeams);
  };

  if (!isMounted) return null;
  return (
    <Dialog.Root open={open}>
      <div
        onClick={() => setOpen(true)}
        className={clsx(
          "btn glass h-full w-full rounded-lg border border-base-300 text-2xl shadow-xl",
          gameMap[x]![y] === "v" && "pointer-events-none text-transparent",
          gameMap[x]![y] === "d" && "text-primary",
        )}
      >
        {points}
      </div>
      <Dialog.Portal container={document.getElementById("jeopardyMain")}>
        <Dialog.Overlay
          onClick={() => setOpen(false)}
          className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black/80"
        />
        <Dialog.Content className="fixed left-[50%] top-[50%] h-5/6 w-5/6 translate-x-[-50%] translate-y-[-50%] focus:outline-none">
          <motion.div
            initial={{ y: -20, scale: 0.8 }}
            animate={{ y: 0, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 10,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            exit={{ y: 20, scale: 0.8 }}
            className="relative flex h-full flex-col gap-4 rounded-box bg-base-200 p-6 focus:outline-none"
          >
            {gameMap[x]![y] === "d" && (
              <div className="absolute inset-0 w-full">
                <SparklesCore
                  id="tsparticlesfullpage"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={100}
                  className="h-full w-full"
                  particleColor="#FFFFFF"
                />
              </div>
            )}
            {gameMap[x]![y] === "d" && (
              <span className="w-full text-center text-4xl font-bold text-accent">
                Daily Double!
              </span>
            )}
            <div
              onClick={() => setViewed()}
              className="flex flex-1 items-center justify-center text-center text-4xl"
            >
              <motion.h1
                animate={gameMap[x]![y] === "v" ? "answered" : "notAnswered"}
                variants={variants}
                className="font-bold text-primary"
              >
                {question}
              </motion.h1>
              <motion.h1
                animate={gameMap[x]![y] === "v" ? "notAnswered" : "answered"}
                variants={variants}
                className="font-light text-secondary"
              >
                {answer}
              </motion.h1>
            </div>
            <div className="divider divider-primary my-0"></div>
            <div className="flex flex-row justify-center gap-2">
              {teams.map((team, i) => (
                <div
                  key={i}
                  className="flex flex-row flex-wrap justify-center gap-1"
                >
                  <h3 className="w-full text-center text-xl font-semibold">
                    {team.name}
                  </h3>
                  <div
                    className="btn btn-square btn-error btn-sm"
                    onClick={() => minusPoints(i)}
                  >
                    <XMarkIcon />
                  </div>
                  <div
                    className="btn btn-square btn-success btn-sm"
                    onClick={() => addPoints(i)}
                  >
                    <CheckIcon />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default QuestionModal;
