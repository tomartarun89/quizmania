import { useContext } from "react";

import GameContext from "../../state/QuizContext";

import { QUIZ_SCREEN } from "../../constants";

const StartScreen = () => {
  const { setCurrentPage } = useContext(GameContext);
  return (
    <>
      <h1 className="text-royal-blue text-4xl pl-4 md:text-6xl font-extrabold">
        Let's Play
      </h1>
      <button
        onClick={() => setCurrentPage(QUIZ_SCREEN)}
        className="bg-special py-2 px-6 rounded ml-4 font-bold text-white  my-10"
      >
        Start
      </button>
    </>
  );
};

export default StartScreen;
