import styled from "styled-components";
import Theme from "../../styles/Theme";

const StyledDivHome = styled.div`
  height: 7.375rem;
  width: 100%;
  display: flex;
  border-top: 1px solid ${Theme.colors.gray3};
  border-bottom: 1px solid ${Theme.colors.gray3};
  justify-content: center;

  div {
    display: flex;
    width: 48rem;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    font-family: "Inter";
    font-size: 18px;
    font-weight: 700;
    color: ${Theme.colors.gray0};
  }

  h3 {
    color: ${Theme.colors.gray1};
    font-family: "Inter";
    font-size: 12px;
    font-weight: 600;
  }
  @media (max-width: 49rem) {
    padding: 1.25rem;
  }
  @media (max-width: 32rem) {
    div {
      flex-wrap: wrap;
    }
  }
`;
export default StyledDivHome;
