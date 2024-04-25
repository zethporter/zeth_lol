import { atom, useAtom } from "jotai";
import { type Game, defaultGame } from "../DefaultGame";
import { insertGamesSchema, type GameZod } from "~/db/jeo";

const testAtom = atom<GameZod>({});

const flattenJson = (json: Game) => {
  const g = {} as GameZod;
  g.public = true;
  g.gameTitle = json.game?.gameTitle;
  g.basePoints = json.game?.basePoints;
  g.topicLabel1 = json.game?.topics[0]?.topicLabel;
  g.topic1Question1 = json.game?.topics[0]?.questions[0]?.question;
  g.topic1Question2 = json.game?.topics[0]?.questions[1]?.question;
  g.topic1Question3 = json.game?.topics[0]?.questions[2]?.question;
  g.topic1Question4 = json.game?.topics[0]?.questions[3]?.question;
  g.topic1Question5 = json.game?.topics[0]?.questions[4]?.question;
  g.topic1Answer1 = json.game?.topics[0]?.questions[0]?.answer;
  g.topic1Answer2 = json.game?.topics[0]?.questions[1]?.answer;
  g.topic1Answer3 = json.game?.topics[0]?.questions[2]?.answer;
  g.topic1Answer4 = json.game?.topics[0]?.questions[3]?.answer;
  g.topic1Answer5 = json.game?.topics[0]?.questions[4]?.answer;
  g.topicLabel2 = json.game?.topics[1]?.topicLabel;
  g.topic2Question1 = json.game?.topics[1]?.questions[0]?.question;
  g.topic2Question2 = json.game?.topics[1]?.questions[1]?.question;
  g.topic2Question3 = json.game?.topics[1]?.questions[2]?.question;
  g.topic2Question4 = json.game?.topics[1]?.questions[3]?.question;
  g.topic2Question5 = json.game?.topics[1]?.questions[4]?.question;
  g.topic2Answer1 = json.game?.topics[1]?.questions[0]?.answer;
  g.topic2Answer2 = json.game?.topics[1]?.questions[1]?.answer;
  g.topic2Answer3 = json.game?.topics[1]?.questions[2]?.answer;
  g.topic2Answer4 = json.game?.topics[1]?.questions[3]?.answer;
  g.topic2Answer5 = json.game?.topics[1]?.questions[4]?.answer;
  g.topicLabel3 = json.game?.topics[2]?.topicLabel;
  g.topic3Question1 = json.game?.topics[2]?.questions[0]?.question;
  g.topic3Question2 = json.game?.topics[2]?.questions[1]?.question;
  g.topic3Question3 = json.game?.topics[2]?.questions[2]?.question;
  g.topic3Question4 = json.game?.topics[2]?.questions[3]?.question;
  g.topic3Question5 = json.game?.topics[2]?.questions[4]?.question;
  g.topic3Answer1 = json.game?.topics[2]?.questions[0]?.answer;
  g.topic3Answer2 = json.game?.topics[2]?.questions[1]?.answer;
  g.topic3Answer3 = json.game?.topics[2]?.questions[2]?.answer;
  g.topic3Answer4 = json.game?.topics[2]?.questions[3]?.answer;
  g.topic3Answer5 = json.game?.topics[2]?.questions[4]?.answer;
  g.topicLabel4 = json.game?.topics[3]?.topicLabel;
  g.topic4Question1 = json.game?.topics[3]?.questions[0]?.question;
  g.topic4Question2 = json.game?.topics[3]?.questions[1]?.question;
  g.topic4Question3 = json.game?.topics[3]?.questions[2]?.question;
  g.topic4Question4 = json.game?.topics[3]?.questions[3]?.question;
  g.topic4Question5 = json.game?.topics[3]?.questions[4]?.question;
  g.topic4Answer1 = json.game?.topics[3]?.questions[0]?.answer;
  g.topic4Answer2 = json.game?.topics[3]?.questions[1]?.answer;
  g.topic4Answer3 = json.game?.topics[3]?.questions[2]?.answer;
  g.topic4Answer4 = json.game?.topics[3]?.questions[3]?.answer;
  g.topic4Answer5 = json.game?.topics[3]?.questions[4]?.answer;
  g.topicLabel5 = json.game?.topics[4]?.topicLabel;
  g.topic5Question1 = json.game?.topics[4]?.questions[0]?.question;
  g.topic5Question2 = json.game?.topics[4]?.questions[1]?.question;
  g.topic5Question3 = json.game?.topics[4]?.questions[2]?.question;
  g.topic5Question4 = json.game?.topics[4]?.questions[3]?.question;
  g.topic5Question5 = json.game?.topics[4]?.questions[4]?.question;
  g.topic5Answer1 = json.game?.topics[4]?.questions[0]?.answer;
  g.topic5Answer2 = json.game?.topics[4]?.questions[1]?.answer;
  g.topic5Answer3 = json.game?.topics[4]?.questions[2]?.answer;
  g.topic5Answer4 = json.game?.topics[4]?.questions[3]?.answer;
  g.topic5Answer5 = json.game?.topics[4]?.questions[4]?.answer;
  g.topicLabel6 = json.game?.topics[4]?.topicLabel;
  g.topic6Question1 = json.game?.topics[4]?.questions[0]?.question;
  g.topic6Question2 = json.game?.topics[4]?.questions[1]?.question;
  g.topic6Question3 = json.game?.topics[4]?.questions[2]?.question;
  g.topic6Question4 = json.game?.topics[4]?.questions[3]?.question;
  g.topic6Question5 = json.game?.topics[4]?.questions[4]?.question;
  g.topic6Answer1 = json.game?.topics[4]?.questions[0]?.answer;
  g.topic6Answer2 = json.game?.topics[4]?.questions[1]?.answer;
  g.topic6Answer3 = json.game?.topics[4]?.questions[2]?.answer;
  g.topic6Answer4 = json.game?.topics[4]?.questions[3]?.answer;
  g.topic6Answer5 = json.game?.topics[4]?.questions[4]?.answer;

  return g;
};

export const TestBody = () => {
  const [converted, setConverted] = useAtom(testAtom);
  return (
    <div className="flex flex-col gap-2 p-2">
      <button
        onClick={() => setConverted(flattenJson(defaultGame))}
        type="button"
        className="btn btn-primary btn-block"
      >
        Convert
      </button>
      <div className="rounded-box bg-base-300 p-2">
        <pre>{JSON.stringify(defaultGame, null, 2)}</pre>
      </div>
      <div className="rounded-box bg-secondary p-2">
        <pre>{JSON.stringify(converted, null, 2)}</pre>
      </div>
    </div>
  );
};
