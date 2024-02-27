import { useAtomValue } from "jotai";
import clsx from "clsx";
import { teamsAtom } from "./page";

const JeopardyScores = () => {
  const teams = useAtomValue(teamsAtom);
  return (
    <div className="flex flex-row justify-center gap-4 overflow-x-auto">
      {teams.map((team, i) => (
        <div key={i} className="stat w-fit">
          <div className="stat-figure text-primary"></div>
          <div className="stat-title">{team.name}</div>
          <div
            className={clsx(
              "stat-value",
              i % 2 === 0 ? "text-primary" : "text-secondary",
            )}
          >
            {team.score}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JeopardyScores;
