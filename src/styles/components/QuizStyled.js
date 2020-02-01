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
      label {
        box-sizing: border-box;
        cursor: pointer;
        display: block;
        padding: 1em 1em 1em 1em;
        input[type="radio"] {
          display: block;
          float: right;
          margin: 2px 0 0 0;
          position: relative;
          &:after {
            background-color: ${colors.blue};
            border-radius: 50%;
            content: "";
            display: block;
            height: 20px;
            position: absolute;
            right: 0;
            top: -2px;
            width: 20px;
            z-index: 2;
          }
          &:checked {
            &:before {
              background-color: ${colors.whiteText};
              border-radius: 50%;
              content: "";
              display: block;
              height: 10px;
              position: absolute;
              right: 5px;
              top: 3px;
              width: 10px;
              z-index: 3;
            }
          }
        }
      }
    }
  }
  .buttons {
    text-align: center;
  }
`;

export default QuizStyled;
