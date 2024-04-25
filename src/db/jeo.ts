import {
  sqliteTable,
  text,
  integer,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const jeoGames = sqliteTable(
  "jeoGames",
  {
    id: integer("id").primaryKey(),
    userId: text("userId"),
    public: integer("public", { mode: "boolean" }),
    gameTitle: text("gameTitle"),
    basePoints: integer("basePoints"),
    topicLabel1: text("topicLabelOne"),
    topic1Question1: text("topic1Question1"),
    topic1Question2: text("topic1Question2"),
    topic1Question3: text("topic1Question3"),
    topic1Question4: text("topic1Question4"),
    topic1Question5: text("topic1Question5"),
    topic1Answer1: text("topic1Answer1"),
    topic1Answer2: text("topic1Answer2"),
    topic1Answer3: text("topic1Answer3"),
    topic1Answer4: text("topic1Answer4"),
    topic1Answer5: text("topic1Answer5"),
    topicLabel2: text("topicLabelOne"),
    topic2Question1: text("topic2Question1"),
    topic2Question2: text("topic2Question2"),
    topic2Question3: text("topic2Question3"),
    topic2Question4: text("topic2Question4"),
    topic2Question5: text("topic2Question5"),
    topic2Answer1: text("topic2Answer1"),
    topic2Answer2: text("topic2Answer2"),
    topic2Answer3: text("topic2Answer3"),
    topic2Answer4: text("topic2Answer4"),
    topic2Answer5: text("topic2Answer5"),
    topicLabel3: text("topicLabelOne"),
    topic3Question1: text("topic3Question1"),
    topic3Question2: text("topic3Question2"),
    topic3Question3: text("topic3Question3"),
    topic3Question4: text("topic3Question4"),
    topic3Question5: text("topic3Question5"),
    topic3Answer1: text("topic3Answer1"),
    topic3Answer2: text("topic3Answer2"),
    topic3Answer3: text("topic3Answer3"),
    topic3Answer4: text("topic3Answer4"),
    topic3Answer5: text("topic3Answer5"),
    topicLabel4: text("topicLabelOne"),
    topic4Question1: text("topic4Question1"),
    topic4Question2: text("topic4Question2"),
    topic4Question3: text("topic4Question3"),
    topic4Question4: text("topic4Question4"),
    topic4Question5: text("topic4Question5"),
    topic4Answer1: text("topic4Answer1"),
    topic4Answer2: text("topic4Answer2"),
    topic4Answer3: text("topic4Answer3"),
    topic4Answer4: text("topic4Answer4"),
    topic4Answer5: text("topic4Answer5"),
    topicLabel5: text("topicLabelOne"),
    topic5Question1: text("topic5Question1"),
    topic5Question2: text("topic5Question2"),
    topic5Question3: text("topic5Question3"),
    topic5Question4: text("topic5Question4"),
    topic5Question5: text("topic5Question5"),
    topic5Answer1: text("topic5Answer1"),
    topic5Answer2: text("topic5Answer2"),
    topic5Answer3: text("topic5Answer3"),
    topic5Answer4: text("topic5Answer4"),
    topic5Answer5: text("topic5Answer5"),
    topicLabel6: text("topicLabelOne"),
    topic6Question1: text("topic6Question1"),
    topic6Question2: text("topic6Question2"),
    topic6Question3: text("topic6Question3"),
    topic6Question4: text("topic6Question4"),
    topic6Question5: text("topic6Question5"),
    topic6Answer1: text("topic6Answer1"),
    topic6Answer2: text("topic6Answer2"),
    topic6Answer3: text("topic6Answer3"),
    topic6Answer4: text("topic6Answer4"),
    topic6Answer5: text("topic6Answer5"),
  },
  (games) => ({
    nameIdx: uniqueIndex("nameIdx").on(games.gameTitle),
  }),
);
export const insertGamesSchema = createInsertSchema(jeoGames);
// Schema for selecting a user - can be used to validate API responses
export const selectGamesSchema = createSelectSchema(jeoGames);

const partialInsertGameSchema = insertGamesSchema.partial();

export type GameZod = z.infer<typeof partialInsertGameSchema>;
