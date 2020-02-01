import styled from "styled-components";
import { colors } from "../utils";

const ButtonStyled = styled.button`
  background-color: ${props => (props.primary ? colors.blue : "gray")};
  background-color: ${props => (props.secondary ? colors.green : null)};
  border: 0;
  border-radius: 30px;
  color: ${colors.whiteText};
  font-size: 1em;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 1em 3em;
  opacity: 1;
  outline: 0;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${props => (props.primary ? colors.hoverBlue : "gray")};
  }
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
    opacity: 0.8;
  }
`;

export default ButtonStyled;
