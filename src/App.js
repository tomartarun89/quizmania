import { useState } from "react";
import QuizScreen from "./components/quiz_screen/QuizScreen";
import StartScreen from "./components/start_screen/StartScreen";
import QuizContext from "./state/QuizContext";
import ScoreBoard from "./components/score_board/ScoreBoard";
import { START_SCREEN, SCORE_BOARD, QUIZ_SCREEN } from "./constants";

export default function App() {
  const [currentPage, setCurrentPage] = useState(START_SCREEN);
  const [totalScore, setTotalScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  return (
    <QuizContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        totalScore,
        setTotalScore,
        maxScore,
        setMaxScore,
      }}
    >
      <div>
        <div className="w-4 py-8">
          <h1 className="text-special font-extrabold text-2xl px-8 md:px-20 ">
            QuizMania
          </h1>
        </div>
        <div className="container  mx-auto px-4 md:max-w-fit">
          {currentPage === QUIZ_SCREEN ? (
            <QuizScreen />
          ) : currentPage === SCORE_BOARD ? (
            <ScoreBoard />
          ) : (
            <StartScreen />
          )}
        </div>
      </div>
    </QuizContext.Provider>
  );
}
