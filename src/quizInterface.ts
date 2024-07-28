interface QuizData {
  question: string;
  answers: string[];
  correct: number;
}

export class QuizInterface {
  public quizData: QuizData[] = [
    {
      question: "ゲーム市場、最も売れたゲームは次のうちどれ？",
      answers: [
        "スーパーファミコン",
        "プレイステーション2",
        "ニンテンドースイッチ",
      ],
      correct: 1,
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
      correct: 0,
    },
  ];
}