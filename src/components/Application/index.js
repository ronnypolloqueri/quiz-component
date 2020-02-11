import React, { Fragment } from "react";
import { Router } from "@reach/router";

import AnswersProvider from "../../providers/AnswersProvider";

import GlobalStyles from "../../styles/GlobalStyles";
import Quiz from "../Quiz";
import Results from "../Results";

const Application = () => {
  return (
    <AnswersProvider>
      <Fragment>
        <GlobalStyles />
        <Router>
          <Quiz path="/" />
          <Results path="/results" />
        </Router>
      </Fragment>
    </AnswersProvider>
  );
};

export default Application;
