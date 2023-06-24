import { styled } from "styled-components";
import Theme from "../../../../styles/Theme";

const StyledModal = styled.div`
  width: 95%;
  max-width: 23.0625rem;
  border-radius: 0.25rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${Theme.colors.gray3};

  div:nth-child(1) {
    background-color: ${Theme.colors.gray2};
    height: 3.125rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.25rem;

    h2 {
      color: ${Theme.colors.gray0};
    }

    img {
      cursor: pointer;
    }
  }
`;

export default StyledModal;
