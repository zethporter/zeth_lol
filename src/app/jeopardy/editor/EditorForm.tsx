"use client";

import { useForm, type SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";

import { game, type Game } from "../DefaultGame";

const EditorForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<Game>({
    resolver: zodResolver(game),
  });

  const updatePoints = () => {
    const base = getValues("basePoints");
    [0, 1, 2, 3, 4, 5].forEach((i) => {
      [0, 1, 2, 3, 4].forEach((j) => {
        setValue(`topics.${i}.questions.${j}.points`, (j + 1) * base);
      });
    });
  };

  const download: SubmitHandler<Game> = (data) => {
    const fileName = data.gameTitle;
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

  return (
    <form className="container mx-auto flex flex-col gap-1 p-2">
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Game Title</span>
        </div>
        <input
          className="input input-bordered"
          placeholder={"zeth lol jeopardy"}
          {...register("gameTitle")}
        />
        <div className="label">
          <ErrorMessage
            errors={errors}
            name={"gameTitle"}
            render={({ message }) => (
              <span className="label-text-alt text-error">{message}</span>
            )}
          />
        </div>
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Base Points</span>
          <button
            type="button"
            className="btn btn-primary label-text-alt btn-sm"
            onClick={() => updatePoints()}
          >
            Set Values
          </button>
        </div>
        <input
          className="input input-bordered"
          placeholder={"100"}
          {...register("basePoints", { valueAsNumber: true })}
        />
        <div className="label">
          <ErrorMessage
            errors={errors}
            name={"basePoints"}
            render={({ message }) => (
              <span className="label-text-alt text-error">{message}</span>
            )}
          />
        </div>
      </label>
      {Array(6)
        .fill(0)
        .map((topic, i) => (
          <div
            className="flex w-full flex-col gap-2 rounded-box bg-base-200 p-4"
            key={i}
          >
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">{`Topic ${i + 1} label`}</span>
              </div>
              <input
                className="input input-bordered col-span-full"
                placeholder={"topic title"}
                {...register(`topics.${i}.topicLabel`)}
              />
              <div className="label">
                <ErrorMessage
                  errors={errors}
                  name={`topic.${i}.topicLabel`}
                  render={({ message }) => (
                    <span className="label-text-alt text-error">{message}</span>
                  )}
                />
              </div>
            </label>
            {Array(5)
              .fill(0)
              .map((question, q) => (
                <div className="grid grid-cols-5 gap-2" key={q}>
                  <label className="form-control col-span-2">
                    <div className="label">
                      <span className="label-text">{`Topic: ${i + 1}, Question: ${q + 1}`}</span>
                    </div>
                    <textarea
                      rows={1}
                      className="input input-bordered input-primary pt-2"
                      placeholder={"question"}
                      {...register(`topics.${i}.questions.${q}.question`)}
                    />
                    <div className="label">
                      <ErrorMessage
                        errors={errors}
                        name={`topics.${i}.questions.${q}.question`}
                        render={({ message }) => (
                          <span className="label-text-alt text-error">
                            {message}
                          </span>
                        )}
                      />
                    </div>
                  </label>
                  <label className="form-control col-span-2">
                    <div className="label">
                      <span className="label-text">{`Topic: ${i + 1}, Answer: ${q + 1}`}</span>
                    </div>
                    <textarea
                      rows={1}
                      className="input input-bordered input-secondary pt-2"
                      placeholder={"answer"}
                      {...register(`topics.${i}.questions.${q}.answer`)}
                    />
                    <div className="label">
                      <ErrorMessage
                        errors={errors}
                        name={`topics.${i}.questions.${q}.answer`}
                        render={({ message }) => (
                          <span className="label-text-alt text-error">
                            {message}
                          </span>
                        )}
                      />
                    </div>
                  </label>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">{`Topic: ${i + 1}, Points: ${q + 1}`}</span>
                    </div>
                    <input
                      className="input input-bordered input-accent"
                      placeholder={`topics.${i}.questions.${q}.points`}
                      {...register(`topics.${i}.questions.${q}.points`, {
                        valueAsNumber: true,
                      })}
                    />
                    <div className="label">
                      <ErrorMessage
                        errors={errors}
                        name={`topics.${i}.questions.${q}.points`}
                        render={({ message }) => (
                          <span className="label-text-alt text-error">
                            {message}
                          </span>
                        )}
                      />
                    </div>
                  </label>
                </div>
              ))}
          </div>
        ))}
      <button
        type="button"
        onClick={handleSubmit(download)}
        className="btn btn-primary"
      >
        Download Jeopardy Game
      </button>
    </form>
  );
};

export default EditorForm;
