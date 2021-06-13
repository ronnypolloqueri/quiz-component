import React, { Fragment } from "react";
import { Router } from "@reach/router";

import AnswersProvider from "../../providers/AnswersProvider";

import GlobalStyles from "../../styles/GlobalStyles";
import Quiz from "../Quiz";
import Results from "../Results";
import { animals, generateQuestions } from "../Quiz/utils";

const Application = () => {
  const questions = generateQuestions(animals, 4);

  return (
    <AnswersProvider>
      <Fragment>
        <GlobalStyles />
        <Router>
          <Quiz path="/" questions={ questions } />
          <Results path="/results" questionslength={ questions.length } />
        </Router>
      </Fragment>
    </AnswersProvider>
  );
};

export default Application;
