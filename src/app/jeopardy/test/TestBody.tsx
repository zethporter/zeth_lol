import { atom, useAtom } from "jotai";
import { type Game, defaultGame } from "../DefaultGame";
import { insertGamesSchema, type GameZod } from "~/db/jeo";
import { flattenJson, unflattenJson } from "~/utils/gameMapping";

const testAtom = atom<GameZod>({});
const unFlattenAtom = atom<Game>({});

export const TestBody = () => {
  const [converted, setConverted] = useAtom(testAtom);
  const [unflattened, setUnflattened] = useAtom(unFlattenAtom);
  return (
    <div className="flex flex-col gap-2 p-2">
      <button
        onClick={() => setConverted(flattenJson(defaultGame))}
        type="button"
        className="btn btn-secondary btn-block"
      >
        Convert
      </button>
      <button
        onClick={() => setUnflattened(unflattenJson(converted))}
        type="button"
        className="btn btn-accent btn-block"
      >
        Convert
      </button>
      <div className="rounded-box bg-base-300 p-2">
        <pre>{JSON.stringify(defaultGame, null, 2)}</pre>
      </div>
      <div className="rounded-box bg-secondary p-2 text-secondary-content">
        <pre>{JSON.stringify(converted, null, 2)}</pre>
      </div>
      <div className="rounded-box bg-accent p-2 text-accent-content">
        <pre>{JSON.stringify(unflattened, null, 2)}</pre>
      </div>
    </div>
  );
};
