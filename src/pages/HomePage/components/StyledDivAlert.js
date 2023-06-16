import styled from "styled-components";
import Theme from "../../../styles/Theme";

const StyledDivAlert = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    width: 50rem;
    gap: 22px;
    justify-content: space-between;
  }

  h2 {
    font-family: "Inter";
    font-size: 18px;
    font-weight: 700;
    color: ${Theme.colors.gray0};
  }

  p {
    color: ${Theme.colors.gray1};
    font-family: "Inter";
    font-size: 12px;
    font-weight: 600;
  }
`;
export default StyledDivAlert;
