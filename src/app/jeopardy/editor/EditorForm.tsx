"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowDownTrayIcon, PlayIcon } from "@heroicons/react/24/solid";
import { useSetAtom } from "jotai";
import { toast } from "sonner";

import TopicSection from "./TopicSection";
import { game, type Game } from "../DefaultGame";
import { gameAtom } from "../GameBoard";

const EditorForm = () => {
  const [gameJson, setGameJson] = useState<Game>();
  const setGame = useSetAtom(gameAtom);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<Game>({
    resolver: zodResolver(game),
    values: gameJson,
  });

  const updatePoints = () => {
    const base = getValues("game.basePoints");
    [0, 1, 2, 3, 4, 5].forEach((i) => {
      [0, 1, 2, 3, 4].forEach((j) => {
        setValue(`game.topics.${i}.questions.${j}.points`, (j + 1) * base);
      });
    });
  };

  const download = (data: Game) => {
    const fileName = data.game?.gameTitle;
    const json = JSON.stringify(data);
    const blob = new Blob([json], { type: "application/json" }); // blob just as yours
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = `${fileName}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const readJsonFile = (file: Blob) =>
    new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.onload = (event) => {
        if (event.target) {
          resolve(JSON.parse(event.target.result as string));
        }
      };

      fileReader.onerror = (error) => reject(error);
      fileReader.readAsText(file);
    });

  const uploadFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      // @ts-expect-error because this thing sucks balls. Why should I have to ignore something that works??
      const parsedData = await readJsonFile(event.target.files[0]);

      try {
        const tempJson = game.parse(parsedData);
        setGameJson(tempJson);
        toast.success("Uploaded Game!");
      } catch (error) {
        toast.error("oops something went wrong. Try again.");
      }
    }
  };

  const setFormAsGame = (data: Game) => {
    try {
      setGame(data);
      toast.success(
        "Set Current Values for Game. Return to Game to use this board",
      );
    } catch {
      toast.error("oops something went wrong maybe try again");
    }
  };

  return (
    <div className="container mx-auto flex flex-col gap-1 p-2">
      <Link className="link link-primary" href={"/jeopardy"}>
        Back to Game
      </Link>
      <div className="flex flex-row justify-between gap-2 rounded-box bg-base-300 p-2">
        <input
          type="file"
          accept=".json,application/json"
          className="file-input file-input-bordered file-input-secondary w-full"
          onChange={uploadFile}
        />
        <button
          type="button"
          onClick={handleSubmit(setFormAsGame)}
          className="btn btn-accent"
        >
          <svg className="h-5 w-5">
            <PlayIcon />
          </svg>
          Set Jeopardy Game
        </button>
        <button
          type="button"
          onClick={handleSubmit(download)}
          className="btn btn-primary"
        >
          <svg className="h-5 w-5">
            <ArrowDownTrayIcon />
          </svg>
          Download Jeopardy Game
        </button>
      </div>
      <form className="flex flex-col gap-2">
        <div className="grid grid-cols-4 items-end gap-2">
          <label className="form-control col-span-3">
            <div className="label">
              <span className="label-text">Game Title</span>
            </div>
            <input
              className="input input-bordered"
              placeholder={"zeth lol jeopardy"}
              {...register("game.gameTitle")}
            />
            <div className="label">
              <ErrorMessage
                errors={errors}
                name={"game.gameTitle"}
                render={({ message }) => (
                  <span className="label-text-alt text-error">{message}</span>
                )}
              />
            </div>
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Base Points</span>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => updatePoints()}
              >
                Set Values
              </button>
            </div>
            <input
              className="input input-bordered"
              placeholder={"100"}
              {...register("game.basePoints", { valueAsNumber: true })}
            />
            <div className="label">
              <ErrorMessage
                errors={errors}
                name={"game.basePoints"}
                render={({ message }) => (
                  <span className="label-text-alt text-error">{message}</span>
                )}
              />
            </div>
          </label>
        </div>
        {Array(6)
          .fill(0)
          .map((topic, i) => (
            <TopicSection key={i} i={i} errors={errors} register={register} />
          ))}
      </form>
    </div>
  );
};

export default EditorForm;
