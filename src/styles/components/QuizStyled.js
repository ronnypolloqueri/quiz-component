import styled from "styled-components";

import { colors } from "../utils";

const QuizStyled = styled.section`
  background-color: ${colors.darkBlue};
  color: white;
  padding: 2em 2em 2em 2em;
  .questionNumber {
    border-bottom: 1px dashed ${colors.softPurple};
    color: ${colors.softPurple};
    font-size: 1.5em;
    font-weight: 600;
    padding: 0 0 0.6em 0;
    span {
      font-size: 0.8em;
      font-weight: 300;
    }
  }
  .questionTitle {
    color: ${colors.whiteText};
    font-size: 1.5em;
    font-weight: 600;
    line-height: 1.4;
  }
  .alternatives {
    list-style: none;
    margin: 0 0 3em 0;
    padding: 0 0 0 0;
    li {
      border: 3px solid #204868;
      border-radius: 20px;
      box-sizing: border-box;
      display: block;
      margin: 0 0 1em 0;
      padding: 1em 1em 1em 1em;
    }
  }
  .buttons {
    text-align: center;
  }
`;

export default QuizStyled;
