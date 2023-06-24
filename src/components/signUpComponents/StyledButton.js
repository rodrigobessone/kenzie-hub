import styled from "styled-components";
import Theme from "../../styles/Theme";

const StyledButton = styled.button`
  width: ${(props) =>
    props.edit === "true"
      ? "62.5%"
      : props.delete === "true"
      ? "28.5%"
      : "100%"};
  height: 3rem;
  border-radius: 0.25rem;
  font-family: "Inter";
  font-size: 1.015rem;
  text-align: center;
  background-color: ${(props) =>
    props.edit === "true"
      ? `${Theme.colors.colorPrimaryNegative}`
      : props.delete === "true"
      ? `${Theme.colors.gray1}`
      : `${Theme.colors.colorNegative}`};
  color: #ffffff;
  border: none;
  font-family: "Inter";
  font-size: 16px;
  font-weight: 500;
`;
export default StyledButton;
