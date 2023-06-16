import styled from "styled-components";
import Theme from "../../../styles/Theme";

const StyledDivContent = styled.div`
  width: 23.125rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  color: white;
  background-color: ${Theme.colors.gray3};
  border-radius: 0.25rem;
  padding: 1.375rem;
  margin-bottom: 6rem;

  h2 {
    color: ${Theme.colors.gray0};
    font-weight: 700;
    font-family: "Inter";
    text-align: center;
    margin-top: 1.75rem;
  }

  h3 {
    font-family: "Inter";
    font-size: 0.75rem;
    font-weight: 400;
    text-align: center;
    color: ${Theme.colors.gray1};
    margin-top: 1.1875rem;
    margin-bottom: -0.2rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-top: 1.375rem;
    margin-bottom: 1.375rem;
    font-family: "Inter";
    font-weight: 400;
    font-size: 0.8125rem;
  }

  input {
    width: 100%;
    height: 3rem;
    background-color: ${Theme.colors.gray2};
    color: ${Theme.colors.gray1};
    border: none;
    border-radius: 0.25rem;
    font-family: "Inter";
    font-size: 1.015rem;
    padding-left: 1rem;
  }
`;
export default StyledDivContent;
