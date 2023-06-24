import { styled } from "styled-components";
import Theme from "../../../../styles/Theme";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 1.375rem;

  label {
    margin-top: 1.375rem;
    margin-bottom: 1.375rem;
    font-family: "Inter";
    font-weight: 400;
    font-size: 0.8125rem;
  }

  input,
  select {
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

  select {
    width: 96%;
    height: 100%;
  }
  select:focus {
    border: none;
    outline: none;
  }

  button {
    margin-bottom: 1.375rem;
    cursor: pointer;
  }
`;

export default StyledForm;
