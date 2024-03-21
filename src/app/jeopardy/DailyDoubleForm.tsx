import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { type dailyDoubleForm } from "./QuestionModal";
import { type Team } from "./GameBoard";

const DailyDoubleForm = ({
  setBet,
  teams,
}: {
  setBet: (c: dailyDoubleForm) => void;
  teams: Team[];
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<dailyDoubleForm>({
    defaultValues: {
      teamIndex: 0,
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const team = watch("teamIndex");

  return (
    <form onSubmit={handleSubmit((data) => setBet(data))}>
      <label className="form-control">
        <div className="label">
          <span className="label-text text-xl font-bold">Select Team</span>
        </div>
        {teams.map((team, i) => (
          <div key={i} className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-xl font-semibold">
                {team.name}
              </span>
              <input
                type="radio"
                {...register("teamIndex", { required: "must select team" })}
                value={i}
                className="radio-accent radio"
              />
            </label>
          </div>
        ))}
        <div className="label">
          <ErrorMessage
            errors={errors}
            name={"teamIndex"}
            render={({ message }) => (
              <span className="label-text-alt text-xl font-semibold text-error">
                {message}
              </span>
            )}
          />
        </div>
      </label>
      <label className="form-control">
        <div className="label">
          <span className="label-text text-xl font-bold">Bet</span>
          <span className="label-text-alt text-xl font-semibold">{`Max Bet: ${teams[team]!.score == 0 ? 500 : teams[team]!.score}`}</span>
        </div>
        <input
          className="input input-lg input-bordered"
          placeholder={"Place Bet"}
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          {...register("bet", {
            valueAsNumber: true,
            required: "Must Place Bet",
            min: { value: 1, message: "must be more than 0" },
            max: {
              value: teams[team]!.score == 0 ? 500 : teams[team]!.score,
              message: "Not enough points to bet that much",
            },
          })}
        />
        <div className="label">
          <ErrorMessage
            errors={errors}
            name={"bet"}
            render={({ message }) => (
              <span className="label-text-alt text-xl font-semibold text-error">
                {message}
              </span>
            )}
          />
        </div>
      </label>
      <button type="submit" className="btn btn-primary btn-sm">
        Set Bet
      </button>
    </form>
  );
};

export default DailyDoubleForm;
