import styled from "styled-components";
import Theme from "../../styles/Theme";

const StyledSelect = styled.div`
  background-color: ${Theme.colors.gray2};
  width: 100%;
  height: 3rem;
  border: none;
  border-radius: 0.25rem;
  margin-bottom: 1.3125rem;

  &:hover, &:focus{
  border: 1px solid ${Theme.colors.gray0};

}
  select {
    width: 96%;
    height: 100%;
    border-radius: 0.25rem;
    font-family: "Inter";
    font-size: 1.015rem;
    background-color: ${Theme.colors.gray2};
    color: ${Theme.colors.gray1};
    border: none;
    padding: .75rem;
  }

  button {
    width: 100%;
    height: 3rem;
    border-radius: 0.25rem;
    font-family: "Inter";
    font-size: 1.015rem;
    text-align: center;
    background-color: ${Theme.colors.colorNegative};
    color: #ffffff;
    border: none;
    font-family: "Inter";
    font-size: 16px;
    font-weight: 500;
`;
export default StyledSelect;
