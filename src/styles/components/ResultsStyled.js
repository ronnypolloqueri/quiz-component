import styled from "styled-components";
import { colors } from "../utils";

const ResultsStyled = styled.div`
  padding: 2em;
  h2 {
    color: ${colors.whiteText};
    font-size: 2em;
    font-weight: 600;
  }
  p {
    color: ${colors.whiteText};
    font-size: 1em;
    font-weight: 300;
  }
`;

export default ResultsStyled;
