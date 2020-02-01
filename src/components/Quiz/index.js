import React, { useState } from "react";
import QuizStyled from "../../styles/components/QuizStyled";
import ButtonStyled from "../../styles/components/ButtonStyled";
import { questions } from "./utils";

const Quiz = () => {
  const [index, setIndex] = useState(1);
  const questionsNumber = questions.length;
  const handleNext = () => {
    if (index + 1 <= questionsNumber) {
      document.querySelector(
        'input[name="alternative"]:checked'
      ).checked = false;
      setIndex(index + 1);
    }
  };
  return (
    <QuizStyled>
      <h3 className="questionNumber">
        Question {index}
        <span>/{questionsNumber}</span>
      </h3>
      <h2 className="questionTitle">{questions[index - 1].question}</h2>
      <ul className="alternatives">
        {questions[index - 1].alternatives.map((alternative, i) => (
          <li key={i}>
            <label htmlFor={`op${i}`}>
              {alternative}
              <input type="radio" name="alternative" id={`op${i}`} />
            </label>
          </li>
        ))}
      </ul>
      <div className="buttons">
        {index === questionsNumber ? (
          <ButtonStyled secondary={true} onClick={handleNext}>
            Finish
          </ButtonStyled>
        ) : (
          <ButtonStyled primary={true} onClick={handleNext}>
            Next
          </ButtonStyled>
        )}
      </div>
    </QuizStyled>
  );
};

export default Quiz;
