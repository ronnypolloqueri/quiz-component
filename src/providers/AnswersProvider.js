import React, { Component, createContext } from "react";
// Comment

export const AnswersContext = createContext(null);

class AnswersProvider extends Component {
  state = {
    answers: null
  };
  setAnswers = answers => {
    this.setState({ answers });
  };
  render() {
    const { answers } = this.state;
    const { children } = this.props;
    return (
      <AnswersContext.Provider
        value={{ answers: answers, setAnswers: this.setAnswers }}
      >
        {children}
      </AnswersContext.Provider>
    );
  }
}

export default AnswersProvider;
