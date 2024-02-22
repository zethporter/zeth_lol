import { z } from "zod";

export const game = z.object({
  gameTitle: z.string(),
  basePoints: z.number(),
  topics: z.array(
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
  ),
});

export const defaultGame = {
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
};
