import React from "react";
import QuizStyled from "../../styles/components/QuizStyled";
import ButtonStyled from "../../styles/components/ButtonStyled";

const Quiz = () => {
  return (
    <QuizStyled>
      <h3 className="questionNumber">
        Question 1<span>/10</span>
      </h3>
      <h2 className="questionTitle">
        What attraction in Montreal is one of the largest in the world?
      </h2>
      <ul className="alternatives">
        <li>The botanic gardens</li>
        <li>The Science Museum</li>
        <li>The Olympic Stadium</li>
      </ul>
      <div className="buttons">
        <ButtonStyled primary={true}>Next</ButtonStyled>
      </div>
    </QuizStyled>
  );
};

export default Quiz;
