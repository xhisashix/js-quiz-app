import { QuizClass } from "./QuizClass";

const quiz = new QuizClass();

const answer = document.getElementById("answer") as HTMLElement;

answer.addEventListener("click", () => {
  quiz.sendAnswer();
});
