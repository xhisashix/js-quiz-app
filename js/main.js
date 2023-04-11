// 3択クイズの問題を作成する
var quiz = [
  {
    question: "ゲーム市場、最も売れたゲーム機は次のうちどれ？",
    answers: [
      "スーパーファミコン",
      "プレイステーション2",
      "ニンテンドースイッチ",
    ],
    correct: "ニンテンドースイッチ",
  },
  {
    question:
      "任天堂が開発した、任天堂以外の会社が開発したゲーム機は次のうちどれ？",
    answers: [
      "スーパーファミコン",
      "プレイステーション2",
      "ニンテンドースイッチ",
    ],
    correct: "プレイステーション2",
  },
  {
    question: "ファイナルファンタジーⅣの主人公の名前は？",
    answers: ["フリオニール", "クラウド", "ティーダ"],
    correct: "ティーダ",
  },
];

let correctCount = 0; // 正解数をカウントする変数
let incorrectCount = 0; // 不正解数をカウントする変数
let quizCount = 0; // 問題数をカウントする変数

// クイズを初期化する
function initQuiz() {
  correctCount = 0;
  incorrectCount = 0;
  quizCount = 0;
  showResult();
  showQuiz(quizCount);
}

// 正解数と不正回数を表示する
function showResult() {
  document.getElementById("correct").textContent = `正解数：${correctCount}`;
  document.getElementById(
    "incorrect"
  ).textContent = `不正解数：${incorrectCount}`;
}

// quizの1問目を表示する
function showQuiz(quizCount) {
  // 問題文を表示する
  document.getElementById("question").textContent = quiz[quizCount].question;
  // 問題数をカウントする
  let count = quiz[0].answers.length;
  // 選択肢を表示する
  for (let i = 0; i < count; i++) {
    document.getElementById(`answer${i}`).textContent = quiz[quizCount].answers[i];
  }
}

// 今の問題と問題数を比較する
function compareQuizCount(quizCount) {
  if (quizCount === quiz.length) {
    // 問題数とquizの数が同じなら終了
    alert(`終了！正解数は${correctCount}です！`);
    initQuiz();
  } else {
    showQuiz(quizCount);
  }
}
// 正誤判定
function checkAnswer() {
  // クリックしたボタンのテキストを取得する
  let answer = event.target.textContent;
  console.log(answer);
  if (answer === quiz[0].correct) {
    correctCount++;
    console.log("正解");
  } else {
    incorrectCount++;
    console.log("不正解");
  }
  showResult();
  quizCount++;
  compareQuizCount(quizCount);
}

showResult();
showQuiz(quizCount);
