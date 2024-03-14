import { z } from "zod";

export const game = z.object({
  game: z.object({
    gameTitle: z.string(),
    basePoints: z.number(),
    topics: z
      .array(
        z.object({
          topicLabel: z.string(),
          questions: z.array(
            z.object({
              question: z.string(),
              answer: z.string(),
              points: z.number(),
            }),
          ),
        }),
      )
      .max(6)
      .min(6),
  }),
});
export type Game = z.infer<typeof game>;

export const defaultGame = {
  game: {
    gameTitle: "Game Title",
    basePoints: 100,
    topics: [
      {
        topicLabel: "topic One",
        questions: [
          {
            question: "Color of the sky",
            answer: "What is blue",
            points: 100,
          },
          {
            question: "Color of the sky",
            answer: "What is blue",
            points: 200,
          },
          {
            question: "Color of the sky",
            answer: "What is blue",
            points: 300,
          },
          {
            question: "Color of the sky",
            answer: "What is blue",
            points: 400,
          },
          {
            question: "Color of the sky",
            answer: "What is blue",
            points: 500,
          },
        ],
      },
      {
        topicLabel: "topic One",
        questions: [
          {
            question: "Color of the sky",
            answer: "What is blue",
            points: 100,
          },
          {
            question: "Color of the sky",
            answer: "What is blue",
            points: 200,
          },
          {
            question: "Color of the sky",
            answer: "What is blue",
            points: 300,
          },
          {
            question: "Color of the sky",
            answer: "What is blue",
            points: 400,
          },
          {
            question: "Color of the sky",
            answer: "What is blue",
            points: 500,
          },
        ],
      },
      {
        topicLabel: "topic One",
        questions: [
          {
            question: "Color of the sky",
            answer: "What is blue",
            points: 100,
          },
          {
            question: "Color of the sky",
            answer: "What is blue",
            points: 200,
          },
          {
            question: "Color of the sky",
            answer: "What is blue",
            points: 300,
          },
          {
            question: "Color of the sky",
            answer: "What is blue",
            points: 400,
          },
          {
            question: "Color of the sky",
            answer: "What is blue",
            points: 500,
          },
        ],
      },
      {
        topicLabel: "topic One",
        questions: [
          {
            question: "Color of the sky",
            answer: "What is blue",
            points: 100,
          },
          {
            question: "Color of the sky",
            answer: "What is blue",
            points: 200,
          },
          {
            question: "Color of the sky",
            answer: "What is blue",
            points: 300,
          },
          {
            question: "Color of the sky",
            answer: "What is blue",
            points: 400,
          },
          {
            question: "Color of the sky",
            answer: "What is blue",
            points: 500,
          },
        ],
      },
      {
        topicLabel: "topic One",
        questions: [
          {
            question: "Color of the sky",
            answer: "What is blue",
            points: 100,
          },
          {
            question: "Color of the sky",
            answer: "What is blue",
            points: 200,
          },
          {
            question: "Color of the sky",
            answer: "What is blue",
            points: 300,
          },
          {
            question: "Color of the sky",
            answer: "What is blue",
            points: 400,
          },
          {
            question: "Color of the sky",
            answer: "What is blue",
            points: 500,
          },
        ],
      },
      {
        topicLabel: "topic One",
        questions: [
          {
            question: "Color of the sky",
            answer: "What is blue",
            points: 100,
          },
          {
            question: "Color of the sky",
            answer: "What is blue",
            points: 200,
          },
          {
            question: "Color of the sky",
            answer: "What is blue",
            points: 300,
          },
          {
            question: "Color of the sky",
            answer: "What is blue",
            points: 400,
          },
          {
            question: "Color of the sky",
            answer: "What is blue",
            points: 500,
          },
        ],
      },
    ],
  },
};

export const gameOutline = {
  gameTitle: "gameTitle",
  basePoints: "basePoints",
  topics: [
    {
      topicLabel: "topics.0.topicLabel",
      questions: [
        {
          question: "topics.0.questions.0.question",
          answer: "topics.0.questions.0.answer",
          points: "topics.0.questions.0.points",
        },
        {
          question: "topics.0.questions.1.question",
          answer: "topics.0.questions.1.answer",
          points: "topics.0.questions.1.points",
        },
        {
          question: "topics.0.questions.2.question",
          answer: "topics.0.questions.2.answer",
          points: "topics.0.questions.2.points",
        },
        {
          question: "topics.0.questions.3.question",
          answer: "topics.0.questions.3.answer",
          points: "topics.0.questions.3.points",
        },
        {
          question: "topics.0.questions.4.question",
          answer: "topics.0.questions.4.answer",
          points: "topics.0.questions.4.points",
        },
      ],
    },
    {
      topicLabel: "topics.1.topicLabel",
      questions: [
        {
          question: "topics.1.questions.0.question",
          answer: "topics.1.questions.0.answer",
          points: "topics.1.questions.0.points",
        },
        {
          question: "topics.1.questions.1.question",
          answer: "topics.1.questions.1.answer",
          points: "topics.1.questions.1.points",
        },
        {
          question: "topics.1.questions.2.question",
          answer: "topics.1.questions.2.answer",
          points: "topics.1.questions.2.points",
        },
        {
          question: "topics.1.questions.3.question",
          answer: "topics.1.questions.3.answer",
          points: "topics.1.questions.3.points",
        },
        {
          question: "topics.1.questions.4.question",
          answer: "topics.1.questions.4.answer",
          points: "topics.1.questions.4.points",
        },
      ],
    },
    {
      topicLabel: "topics.2.topicLabel",
      questions: [
        {
          question: "topics.2.questions.0.question",
          answer: "topics.2.questions.0.answer",
          points: "topics.2.questions.0.points",
        },
        {
          question: "topics.2.questions.1.question",
          answer: "topics.2.questions.1.answer",
          points: "topics.2.questions.1.points",
        },
        {
          question: "topics.2.questions.2.question",
          answer: "topics.2.questions.2.answer",
          points: "topics.2.questions.2.points",
        },
        {
          question: "topics.2.questions.3.question",
          answer: "topics.2.questions.3.answer",
          points: "topics.2.questions.3.points",
        },
        {
          question: "topics.2.questions.4.question",
          answer: "topics.2.questions.4.answer",
          points: "topics.2.questions.4.points",
        },
      ],
    },
    {
      topicLabel: "topics.3.topicLabel",
      questions: [
        {
          question: "topics.3.questions.0.question",
          answer: "topics.3.questions.0.answer",
          points: "topics.3.questions.0.points",
        },
        {
          question: "topics.3.questions.1.question",
          answer: "topics.3.questions.1.answer",
          points: "topics.3.questions.1.points",
        },
        {
          question: "topics.3.questions.2.question",
          answer: "topics.3.questions.2.answer",
          points: "topics.3.questions.2.points",
        },
        {
          question: "topics.3.questions.3.question",
          answer: "topics.3.questions.3.answer",
          points: "topics.3.questions.3.points",
        },
        {
          question: "topics.3.questions.4.question",
          answer: "topics.3.questions.4.answer",
          points: "topics.3.questions.4.points",
        },
      ],
    },
    {
      topicLabel: "topics.4.topicLabel",
      questions: [
        {
          question: "topics.4.questions.0.question",
          answer: "topics.4.questions.0.answer",
          points: "topics.4.questions.0.points",
        },
        {
          question: "topics.4.questions.1.question",
          answer: "topics.4.questions.1.answer",
          points: "topics.4.questions.1.points",
        },
        {
          question: "topics.4.questions.2.question",
          answer: "topics.4.questions.2.answer",
          points: "topics.4.questions.2.points",
        },
        {
          question: "topics.4.questions.3.question",
          answer: "topics.4.questions.3.answer",
          points: "topics.4.questions.3.points",
        },
        {
          question: "topics.4.questions.4.question",
          answer: "topics.4.questions.4.answer",
          points: "topics.4.questions.4.points",
        },
      ],
    },
    {
      topicLabel: "topics.5.topicLabel",
      questions: [
        {
          question: "topics.5.questions.0.question",
          answer: "topics.5.questions.0.answer",
          points: "topics.5.questions.0.points",
        },
        {
          question: "topics.5.questions.1.question",
          answer: "topics.5.questions.1.answer",
          points: "topics.5.questions.1.points",
        },
        {
          question: "topics.5.questions.2.question",
          answer: "topics.5.questions.2.answer",
          points: "topics.5.questions.2.points",
        },
        {
          question: "topics.5.questions.3.question",
          answer: "topics.5.questions.3.answer",
          points: "topics.5.questions.3.points",
        },
        {
          question: "topics.5.questions.4.question",
          answer: "topics.5.questions.4.answer",
          points: "topics.5.questions.4.points",
        },
      ],
    },
  ],
};
