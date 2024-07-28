import { QuizInterface } from "./quizInterface";

export class QuizClass {
  private correctCount: number = 0; // 正解数をカウントする変数
  private incorrectCount: number = 0; // 不正解数をカウントする変数
  private quizCount: number = 0; // 問題数をカウントする変数
  private quiz: QuizInterface = new QuizInterface();
  private questionElement: HTMLElement;
  private correctElement: HTMLElement;
  private incorrectElement: HTMLElement;

  constructor() {
    this.questionElement = document.getElementById("question") as HTMLElement;
    this.correctElement = document.getElementById("correct") as HTMLElement;
    this.incorrectElement = document.getElementById("incorrect") as HTMLElement;
    this.initQuiz();
  }

  /**
   * クイズを初期化する
   * @returns {void}
   */
  public initQuiz(): void {
    this.correctCount = 0;
    this.incorrectCount = 0;
    this.quizCount = 0;
    this.questionElement.textContent = "";
    this.showQuiz(this.quizCount);
  }

  public showQuiz(quizCount: number): void {
    // 問題文を表示する
    this.questionElement.textContent = this.quiz.quizData[quizCount].question;
    // 問題数をカウントする
    let count = this.quiz.quizData[0].answers.length;
    // 選択肢を表示する
    for (let i = 0; i < count; i++) {
      let answer = document.getElementById(`answer${i}`) as HTMLElement;

      answer.textContent = this.quiz.quizData[quizCount].answers[i];
    }
  }

  public sendAnswer(): void {
    let result = this.checkAnswer();
    this.showResult(result);

    // 次の問題を表示する
    this.quizCount++;
    this.compareQuizCount(this.quizCount);
    this.showQuiz(this.quizCount);
  }

  /**
   *  正解数と不正回数をカウントする
   * @param {boolean} result - 正誤判定
   */
  public showResult(result: boolean): void {
    if (result) {
      this.correctCount++;
    } else {
      this.incorrectCount++;
    }

    this.correctElement.textContent = `正解数：${this.correctCount}`;
    this.incorrectElement.textContent = `不正解数：${this.incorrectCount}`;
  }

  /**
   * 問題数を比較する
   * @param {number} quizCount - 問題数
   * @returns {void}
   * @memberof QuizClass
   * @returns {void}
   */
  public compareQuizCount(quizCount: number): void {
    if (quizCount >= this.quiz.quizData.length) {
      alert("終了です！");
      this.initQuiz();
    }
  }

  /**
   * 答え合わせを行う
   * @returns {boolean}
   */
  private checkAnswer(): boolean {
    const answer = this.quiz.quizData[this.quizCount].correct;
    const select = document.querySelector(
      'input[name="flexRadioDefault"]:checked'
    ) as HTMLInputElement;

    return Number(select.value) === answer;
  }
}
