import { type GameMap, gameMap } from "~/app/jeopardy/GameBoard";
import { insertGamesSchema, type GameZod } from "~/db/jeo";
import { type Game } from "~/app/jeopardy/DefaultGame";

export const createGameMap = (setGameMap: (e: GameMap) => void) => {
  /***
   * Game map is a 6x5 square
   */
  const rando = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const dDx = rando(0, 5);
  const dDy = rando(0, 4);

  console.log("Daily Double Location: {", "x:", dDx, "y:", dDy, "}");

  const gameMapping = Array<GameMap>(6)
    .fill([])
    .map((arr, x) =>
      Array<string>(5)
        .fill("n")
        .map((q, y) => {
          if (x === dDx && y === dDy) {
            return "d";
          } else {
            return q;
          }
        }),
    );
  const parsedGameMap = gameMap.parse(gameMapping);
  setGameMap(parsedGameMap);
};

export const flattenJson = (json: Game) => {
  const g = {} as GameZod;
  g.public = true;
  g.id = json.game?.id ?? 0;
  g.userId = json.game?.userId ?? null;
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

export const unflattenJson = (flatGame: GameZod) => {
  console.log("flatGame", flatGame);
  const g = {} as Game;
  g.game = {
    id: flatGame.id,
    public: flatGame.public ?? false,
    userId: flatGame.userId ?? "none",
    gameTitle: flatGame.gameTitle!,
    basePoints: flatGame.basePoints!,
    topics: [
      {
        topicLabel: flatGame.topicLabel1!,
        questions: [
          {
            question: flatGame.topic1Question1!,
            answer: flatGame.topic1Answer1!,
            points: flatGame.basePoints!,
          },
          {
            question: flatGame.topic1Question2!,
            answer: flatGame.topic1Answer2!,
            points: flatGame.basePoints! * 2,
          },
          {
            question: flatGame.topic1Question3!,
            answer: flatGame.topic1Answer3!,
            points: flatGame.basePoints! * 3,
          },
          {
            question: flatGame.topic1Question4!,
            answer: flatGame.topic1Answer4!,
            points: flatGame.basePoints! * 4,
          },
          {
            question: flatGame.topic1Question5!,
            answer: flatGame.topic1Answer5!,
            points: flatGame.basePoints! * 5,
          },
        ],
      },
      {
        topicLabel: "topic One",
        questions: [
          {
            question: flatGame.topic2Question1!,
            answer: flatGame.topic2Answer1!,
            points: flatGame.basePoints!,
          },
          {
            question: flatGame.topic2Question2!,
            answer: flatGame.topic2Answer2!,
            points: flatGame.basePoints! * 2,
          },
          {
            question: flatGame.topic2Question3!,
            answer: flatGame.topic2Answer3!,
            points: flatGame.basePoints! * 3,
          },
          {
            question: flatGame.topic2Question4!,
            answer: flatGame.topic2Answer4!,
            points: flatGame.basePoints! * 4,
          },
          {
            question: flatGame.topic2Question5!,
            answer: flatGame.topic2Answer5!,
            points: flatGame.basePoints! * 5,
          },
        ],
      },
      {
        topicLabel: "topic One",
        questions: [
          {
            question: flatGame.topic3Question1!,
            answer: flatGame.topic3Answer1!,
            points: flatGame.basePoints!,
          },
          {
            question: flatGame.topic3Question2!,
            answer: flatGame.topic3Answer2!,
            points: flatGame.basePoints! * 2,
          },
          {
            question: flatGame.topic3Question3!,
            answer: flatGame.topic3Answer3!,
            points: flatGame.basePoints! * 3,
          },
          {
            question: flatGame.topic3Question4!,
            answer: flatGame.topic3Answer4!,
            points: flatGame.basePoints! * 4,
          },
          {
            question: flatGame.topic3Question5!,
            answer: flatGame.topic3Answer5!,
            points: flatGame.basePoints! * 5,
          },
        ],
      },
      {
        topicLabel: "topic One",
        questions: [
          {
            question: flatGame.topic4Question1!,
            answer: flatGame.topic4Answer1!,
            points: flatGame.basePoints!,
          },
          {
            question: flatGame.topic4Question2!,
            answer: flatGame.topic4Answer2!,
            points: flatGame.basePoints! * 2,
          },
          {
            question: flatGame.topic4Question3!,
            answer: flatGame.topic4Answer3!,
            points: flatGame.basePoints! * 3,
          },
          {
            question: flatGame.topic4Question4!,
            answer: flatGame.topic4Answer4!,
            points: flatGame.basePoints! * 4,
          },
          {
            question: flatGame.topic4Question5!,
            answer: flatGame.topic4Answer5!,
            points: flatGame.basePoints! * 5,
          },
        ],
      },
      {
        topicLabel: "topic One",
        questions: [
          {
            question: flatGame.topic5Question1!,
            answer: flatGame.topic5Answer1!,
            points: flatGame.basePoints!,
          },
          {
            question: flatGame.topic5Question2!,
            answer: flatGame.topic5Answer2!,
            points: flatGame.basePoints! * 2,
          },
          {
            question: flatGame.topic5Question3!,
            answer: flatGame.topic5Answer3!,
            points: flatGame.basePoints! * 3,
          },
          {
            question: flatGame.topic5Question4!,
            answer: flatGame.topic5Answer4!,
            points: flatGame.basePoints! * 4,
          },
          {
            question: flatGame.topic5Question5!,
            answer: flatGame.topic5Answer5!,
            points: flatGame.basePoints! * 5,
          },
        ],
      },
      {
        topicLabel: "topic One",
        questions: [
          {
            question: flatGame.topic6Question1!,
            answer: flatGame.topic6Answer1!,
            points: flatGame.basePoints!,
          },
          {
            question: flatGame.topic6Question2!,
            answer: flatGame.topic6Answer2!,
            points: flatGame.basePoints! * 2,
          },
          {
            question: flatGame.topic6Question3!,
            answer: flatGame.topic6Answer3!,
            points: flatGame.basePoints! * 3,
          },
          {
            question: flatGame.topic6Question4!,
            answer: flatGame.topic6Answer4!,
            points: flatGame.basePoints! * 4,
          },
          {
            question: flatGame.topic6Question5!,
            answer: flatGame.topic6Answer5!,
            points: flatGame.basePoints! * 5,
          },
        ],
      },
    ],
  };
  return g;
};
