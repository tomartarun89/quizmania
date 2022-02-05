const Button = ({ handleOnClick, displayText }) => {
  return (
    <button
      onClick={handleOnClick}
      className="px-6 py-2 bg-special rounded-lg text-white font-extrabold "
    >
      {displayText}
    </button>
  );
};

export default Button;
