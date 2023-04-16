// 3択クイズの問題を作成する
var quiz = [
  {
    question: "ゲーム市場、最も売れたゲーム機は次のうちどれ？",
    answers: [
      "スーパーファミコン",
      "プレイステーション2",
      "ニンテンドースイッチ",
    ],
    correct: 2,
  },
  {
    question:
      "任天堂が開発した、任天堂以外の会社が開発したゲーム機は次のうちどれ？",
    answers: [
      "スーパーファミコン",
      "プレイステーション2",
      "ニンテンドースイッチ",
    ],
    correct: 1,
  },
  {
    question: "ファイナルファンタジーⅣの主人公の名前は？",
    answers: ["フリオニール", "クラウド", "ティーダ"],
    correct: 2,
  },
];

let correctCount = 0; // 正解数をカウントする変数
let incorrectCount = 0; // 不正解数をカウントする変数
let quizCount = 0; // 問題数をカウントする変数

function sendAnswer() {
  let result = checkAnswer();
  showResult(result);

  // 次の問題を表示する
  quizCount++;
  compareQuizCount(quizCount);
  showQuiz(quizCount);
}

/**
 * クイズを初期化する
 */
function initQuiz() {
  correctCount = 0;
  incorrectCount = 0;
  quizCount = 0;
  showQuiz(quizCount);
}

/**
 *  正解数と不正回数をカウントする
 * @param {boolean} result - 正誤判定
 */
function showResult(result) {
  if (result) {
    correctCount++;
  } else {
    incorrectCount++;
  }
  document.getElementById("correct").textContent = `正解数：${correctCount}`;
  document.getElementById(
    "incorrect"
  ).textContent = `不正解数：${incorrectCount}`;
}

/**
 * quizを表示する
 * @param {number} quizCount - 問題数
 */
function showQuiz(quizCount) {
  // 問題文を表示する
  document.getElementById("question").textContent = quiz[quizCount].question;
  // 問題数をカウントする
  let count = quiz[0].answers.length;
  // 選択肢を表示する
  for (let i = 0; i < count; i++) {
    document.getElementById(`answer${i}`).textContent =
      quiz[quizCount].answers[i];
  }
}

/**
 * 今の問題と問題数を比較する
 * @param {number} quizCount - 問題数
 * */
function compareQuizCount(quizCount) {
  if (quizCount === quiz.length) {
    // 問題数とquizの数が同じなら終了
    alert(`終了！正解数は${correctCount}です！`);
    initQuiz();
  } else {
    showQuiz(quizCount);
  }
}

/**
 * 正誤判定をする
 * @param {string} answer - 選択した答え
 * @return {boolean} 正誤判定
 */
function checkAnswer(quizCount) {
  // クリックしたボタンのテキストを取得する
  let _answer = document.querySelector("input[name=flexRadioDefault]:checked");
  let answer = Number(_answer.value)
  console.log(quiz[0].correct);
  if (answer === quiz[0].correct) {
    return true;
  } else {
    console.log("不正解");
    return false;
  }
}

initQuiz();
