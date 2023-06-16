import styled from "styled-components";
import Theme from "../../../styles/Theme";

const StyledHeaderHome = styled.header`
  height: 4.5rem;
  width: 100%;
  display: flex;
  justify-content: space-around;

  align-items: center;

  button {
    height: 2.5069rem;
    width: 4.2178rem;
    border-radius: 4px;
    padding: 0px 16px 0px 16px;
    background-color: ${Theme.colors.gray3};
    color: ${Theme.colors.gray0};
    border: none;
    font-weight: 600;
    font-size: 0.75rem;
    font-family: "Inter";
  }
`;
export default StyledHeaderHome;
