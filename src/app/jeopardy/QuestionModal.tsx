import React, { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useAtom } from "jotai";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import clsx from "clsx";

import { teamsAtom } from "./GameBoard";

const QuestionModal = ({
  points,
  question,
  answer,
}: {
  points: number;
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [teams, setTeams] = useAtom(teamsAtom);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
          answered && "pointer-events-none text-transparent",
        )}
      >
        {points}
      </div>
      <Dialog.Portal container={document.getElementById("jeopardyMain")}>
        <Dialog.Overlay
          onClick={() => setOpen(false)}
          className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black/80"
        />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] flex h-5/6 w-5/6 translate-x-[-50%] translate-y-[-50%] flex-col gap-4 rounded-box bg-base-200 p-6 focus:outline-none">
          <div
            onClick={() => setAnswered(!answered)}
            className="flex flex-1 items-center justify-center text-center text-4xl"
          >
            <motion.h1
              animate={answered ? "answered" : "notAnswered"}
              variants={variants}
              className="font-bold text-primary"
            >
              {question}
            </motion.h1>
            <motion.h1
              animate={answered ? "notAnswered" : "answered"}
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
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default QuestionModal;
