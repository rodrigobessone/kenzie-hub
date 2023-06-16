import styled from "styled-components";
import Theme from "../../styles/Theme";
import { Link } from "react-router-dom";

const StyledButtonLogin = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  border-radius: 0.25rem;
  font-size: 1.015rem;
  text-align: center;
  background-color: ${Theme.colors.colorNegative};
  color: #ffffff;
  border: none;
  font-weight: 500;
  margin-top: 1.5rem;

  &:hover,
  &:focus {
    background-color: ${Theme.colors.colorPrimaryFocus};
  }
`;
export default StyledButtonLogin;
