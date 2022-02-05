import React, { useContext } from "react";

import GameContext from "../../state/QuizContext";
import Button from "../common/Button";

import { START_SCREEN } from "../../constants";

export default function ScoreBoard() {
  const { maxScore, totalScore, setTotalScore, setCurrentPage, setMaxScore } =
    useContext(GameContext);
  const handlePlayAgain = () => {
    setTotalScore(0);
    setCurrentPage(START_SCREEN);
    setMaxScore(0);
  };
  return (
    <div className="flex flex-col text-center">
      <h1 className="text-4xl font-bold my-4">
        {totalScore === maxScore
          ? "Awesome! Well Played"
          : totalScore < 10
          ? "Atleast you tried."
          : "Well Played"}
      </h1>
      <h1 className="font-extrabold text-6xl md:text-8xl my-8">{`${totalScore}/${maxScore}`}</h1>
      <Button handleOnClick={handlePlayAgain} displayText="Try again"></Button>
    </div>
  );
}
