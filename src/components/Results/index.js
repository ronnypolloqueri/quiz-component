import React, { useEffect, useContext } from "react";
import { navigate } from "@reach/router";

import { AnswersContext } from "../../providers/AnswersProvider";

import ResultsStyled from "../../styles/components/ResultsStyled";

import { questions } from "../Quiz/utils";

// 1 buena 😢
// 2 buenas 😐
// 3 o 4 buenas 😁

const Results = () => {
  const { answers } = useContext(AnswersContext);
  useEffect(() => {
    if (answers === null) {
      navigate("/");
    }
  }, []);
  return (
    <ResultsStyled>
      <h2>Resultados:</h2>
      <p>
        Obtuviste {answers} buena{answers === 1 ? "" : "s"} de{" "}
        {questions.length} 😐
      </p>
    </ResultsStyled>
  );
};

export default Results;
