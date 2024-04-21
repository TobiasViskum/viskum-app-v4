export enum QuestionType {
  MultipleChoice,
  TrueFalse,
  CorrectOrder,
  Input,
}

type Question = {
  question: string;
  questionType: QuestionType;
};

const questions: Question[] = [
  {
    question: "",
    questionType: QuestionType.MultipleChoice,
  },
];

export default function TestPreparationPage() {
  return <div>hej</div>;
}
