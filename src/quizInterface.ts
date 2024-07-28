interface QuizData {
  question: string;
  answers: string[];
  correct: number;
}

interface QuizInterface {
  /**
   * クイズを初期化
   * @returns {void}
   */
  initQuiz(): void;

  /**
   * クイズを表示
   * @param {number} quizCount - 問題数
   * @returns {void}
   */
  showQuiz(quizCount: number): void;

  /**
   * 回答を送信
   * @returns {void
   */
  sendAnswer(): void;

  /**
   * 回答をチェック
   * @returns {boolean}
   */
  checkAnswer(): boolean;

  /**
   * 結果を表示
   * @param {boolean} result - 正誤判定
   * @returns {void}
   */
  showResult(result: boolean): void;

  /**
   * 問題数を比較
   * @param {number} quizCount - 問題数
   * @returns {void}
   */
  compareQuizCount(quizCount: number): void;
}

export type { QuizInterface, QuizData };
