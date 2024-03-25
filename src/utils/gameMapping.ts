import { type GameMap, gameMap } from "~/app/jeopardy/GameBoard";

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
