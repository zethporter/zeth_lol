import { useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { type FieldErrors, type UseFormRegister } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { type Game } from "../DefaultGame";

const TopicSection = ({
  errors,
  register,
  i,
}: {
  errors: FieldErrors;
  register: UseFormRegister<Game>;
  i: number;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Collapsible.Root
      open={open}
      onOpenChange={setOpen}
      className="flex w-full flex-col gap-2 rounded-box bg-base-200 p-4"
    >
      <div className="flex flex-row items-center gap-2">
        <span className="flex-1 text-xl font-bold">{`Topic ${i + 1} Questions`}</span>
        <Collapsible.Trigger asChild>
          <button className="btn btn-secondary w-fit">
            {open ? "close" : "open"}
          </button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">{`Topic Title`}</span>
          </div>
          <input
            className="input input-bordered col-span-full"
            placeholder={"topic title"}
            {...register(`game.topics.${i}.topicLabel`)}
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
                  <span className="label-text">{`Question: ${q + 1}`}</span>
                </div>
                <textarea
                  rows={1}
                  className="input input-bordered input-primary pt-2"
                  placeholder={"question"}
                  {...register(`game.topics.${i}.questions.${q}.question`)}
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
                  <span className="label-text">{`Answer: ${q + 1}`}</span>
                </div>
                <textarea
                  rows={1}
                  className="input input-bordered input-secondary pt-2"
                  placeholder={"answer"}
                  {...register(`game.topics.${i}.questions.${q}.answer`)}
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
                  <span className="label-text">{`Points: ${q + 1}`}</span>
                </div>
                <input
                  className="input input-bordered input-accent"
                  placeholder={`topics.${i}.questions.${q}.points`}
                  {...register(`game.topics.${i}.questions.${q}.points`, {
                    valueAsNumber: true,
                  })}
                />
                <div className="label">
                  <ErrorMessage
                    errors={errors}
                    name={`game.topics.${i}.questions.${q}.points`}
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
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

export default TopicSection;
