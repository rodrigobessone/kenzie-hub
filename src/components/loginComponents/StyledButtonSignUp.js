import styled from "styled-components";
import Theme from "../../styles/Theme";
import { Link } from "react-router-dom";

const StyledButtonSignUp = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  border-radius: 0.25rem;
  font-size: 1.015rem;
  text-align: center;
  background-color: ${Theme.colors.gray1};
  color: #ffffff;
  border: 1px ${Theme.colors.gray1};
  font-size: 16px;
  font-weight: 500;

  &:hover,
  &:focus {
    background-color: ${Theme.colors.gray2};
  }
`;
export default StyledButtonSignUp;
