interface Answer {
  answerText: string;
  answerIndex: number;
}

interface Question {
  answers: Answer[];
  questionText: string;
  id: string;
  correctAnswerIndex: number;
  randomized: boolean;
}

interface MockData {
  questions: Question[];
  minimumScore: number;
  randomized: boolean;
}

export const mockData: MockData = {
  questions: [
    {
      answers: [
        {
          answerText: "Jawaban Satu",
          answerIndex: 0,
        },
        {
          answerText: "Jawaban Dua",
          answerIndex: 1,
        },
        {
          answerText: "Jawaban Tiga",
          answerIndex: 2,
        },
        {
          answerText: "Jawaban Empat",
          answerIndex: 3,
        },
      ],
      questionText: "Pertanyaan Satu",
      correctAnswerIndex: 0,
      randomized: false,
      id: 'q1',
    },
    {
      answers: [
        {
          answerText: "Jawaban Satu",
          answerIndex: 0,
        },
        {
          answerText: "Jawaban Dua",
          answerIndex: 1,
        },
        {
          answerText: "Jawaban Tiga",
          answerIndex: 2,
        },
        {
          answerText: "Jawaban Empat",
          answerIndex: 3,
        },
      ],
      questionText: "Pertanyaan Dua",
      correctAnswerIndex: 0,
      randomized: false,
      id: 'q2',
    },
    {
      answers: [
        {
          answerText: "Jawaban Satu",
          answerIndex: 0,
        },
        {
          answerText: "Jawaban Dua",
          answerIndex: 1,
        },
        {
          answerText: "Jawaban Tiga",
          answerIndex: 2,
        },
        {
          answerText: "Jawaban Empat",
          answerIndex: 3,
        },
      ],
      questionText: "Pertanyaan Tiga",
      correctAnswerIndex: 0,
      randomized: false,
      id: 'q3',
    },
    {
      answers: [
        {
          answerText: "Jawaban Satu",
          answerIndex: 0,
        },
        {
          answerText: "Jawaban Dua",
          answerIndex: 1,
        },
        {
          answerText: "Jawaban Tiga",
          answerIndex: 2,
        },
        {
          answerText: "Jawaban Empat",
          answerIndex: 3,
        },
      ],
      questionText: "Pertanyaan Empat",
      correctAnswerIndex: 0,
      randomized: false,
      id: 'q4',
    },
    {
      answers: [
        {
          answerText: "Jawaban Satu",
          answerIndex: 0,
        },
        {
          answerText: "Jawaban Dua",
          answerIndex: 1,
        },
        {
          answerText: "Jawaban Tiga",
          answerIndex: 2,
        },
        {
          answerText: "Jawaban Empat",
          answerIndex: 3,
        },
      ],
      questionText: "Pertanyaan Lima",
      correctAnswerIndex: 0,
      randomized: false,
      id: 'q5',
    },
  ],
  minimumScore: 70,
  randomized: false,
};
