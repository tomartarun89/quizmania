import { useState, useContext, useEffect } from "react";

import Questions from "../../stub/quiz-data";
import GameContext from "../../state/QuizContext";
import Button from "../common/Button";

import { SCORE_BOARD } from "../../constants";

const Card = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { setCurrentPage, setTotalScore, setMaxScore } =
    useContext(GameContext);

  useEffect(() => {
    setMaxScore((oldMax) => {
      return oldMax + Questions[currentQuestion].correctAnswers.length * 10;
    });
  }, [currentQuestion]);

  const calculateTotal = () => {
    setTotalScore((oldScore) => {
      if (
        selectedOptions.filter((value) =>
          Questions[currentQuestion].correctAnswers.includes(value)
        ).length === Questions[currentQuestion].correctAnswers.length
      ) {
        return oldScore + Questions[currentQuestion].correctAnswers.length * 10;
      } else {
        return oldScore;
      }
    });
  };

  const handleNextQuestion = () => {
    calculateTotal();
    setCurrentQuestion((previousQuestion) => previousQuestion + 1);
    setSelectedOptions([]);
  };

  const handleOptionClick = (currentSelectedOption) => {
    if (selectedOptions.includes(currentSelectedOption)) {
      setSelectedOptions((oldSelections) => {
        return oldSelections.filter((value) => value !== currentSelectedOption);
      });
    } else {
      setSelectedOptions((oldSelections) => [
        ...oldSelections,
        currentSelectedOption,
      ]);
    }
  };

  const handleSubmit = () => {
    calculateTotal();
    setCurrentPage(SCORE_BOARD);
  };

  return (
    <div className="rounded-xl bg-white my-4 p-4 shadow-lg">
      <h1 className="text-xl md:text-2xl font-bold pb-4 text-slate-800">
        {`${currentQuestion + 1} : ${Questions[currentQuestion].questiontext}`}
      </h1>
      <h1
        className={`text-slate-600 pb-2 block text-lg hover:text-xl hover:font-bold hover:cursor-pointer ${
          selectedOptions.includes(1) ? "font-bold" : ""
        }`}
        onClick={() => handleOptionClick(1)}
      >
        {`a : ${Questions[currentQuestion].option1}`}
      </h1>
      <h1
        className={`text-slate-600 pb-2 block text-lg hover:text-xl hover:font-bold hover:cursor-pointer ${
          selectedOptions.includes(2) ? "font-bold" : ""
        }`}
        onClick={() => handleOptionClick(2)}
      >
        {`b : ${Questions[currentQuestion].option2}`}
      </h1>
      <h1
        className={`text-slate-600 pb-2 block text-lg hover:text-xl hover:font-bold hover:cursor-pointer ${
          selectedOptions.includes(3) ? "font-bold" : ""
        }`}
        onClick={() => handleOptionClick(3)}
      >
        {`c : ${Questions[currentQuestion].option3}`}
      </h1>
      <h1
        className={`text-slate-600 pb-2 block text-lg hover:text-xl hover:font-bold hover:cursor-pointer ${
          selectedOptions.includes(4) ? "font-bold" : ""
        }`}
        onClick={() => handleOptionClick(4)}
      >
        {`d : ${Questions[currentQuestion].option4}`}
      </h1>
      <div className="flex flex-row-reverse">
        {currentQuestion === Questions.length - 1 ? (
          <Button handleOnClick={handleSubmit} displayText="Submit 💪"></Button>
        ) : (
          <Button
            handleOnClick={handleNextQuestion}
            displayText="Next Question"
          ></Button>
        )}
      </div>
    </div>
  );
};

export default Card;
