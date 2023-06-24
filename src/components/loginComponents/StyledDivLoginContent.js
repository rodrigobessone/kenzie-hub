import styled from "styled-components";
import Theme from "../../styles/Theme";

const StyledDivLoginContent = styled.div`
  width: 95%;
  max-width: 23.0625rem;
  top: 30px;
  border-radius: 4px;
  padding: 42px 22px 42px 22px;
  display: flex;
  flex-direction: column;
  background-color: ${Theme.colors.gray3};
  margin-bottom: 5.3125rem;

  margin: 0 auto;

  h2 {
    color: ${Theme.colors.gray0};
    font-weight: 700;
    font-family: "Inter";
    text-align: center;
    margin-top: 0.75rem;
    margin-bottom: -0.25rem;
  }

  div:nth-child(2) {
    position: relative;
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
    font-size: 0.875rem;
    color: ${Theme.colors.gray0};
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

  h3 {
    font-family: "Inter";
    font-size: 0.75rem;
    font-weight: 500;
    text-align: center;
    color: ${Theme.colors.gray1};
    margin-top: 2rem;
    margin-bottom: 1.375rem;
  }

  @media (max-width: 400px) {
    padding: 1.25rem;

    div {
      flex-wrap: wrap;
    }
  }
`;
export default StyledDivLoginContent;
