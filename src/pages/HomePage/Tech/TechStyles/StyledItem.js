import Theme from "../../../../styles/Theme";
import { styled } from "styled-components";

export const StyledItem = styled.li`
  width: 100%;
  height: 3.0625rem;
  background-color: ${Theme.colors.gray4};
  border-radius: 0.25rem;
  padding: 0 1.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  h2 {
    color: ${Theme.colors.gray0};
  }
  span {
    color: ${Theme.colors.gray1};
  }
  &:hover,
  &:focus {
    background-color: ${Theme.colors.gray2};
  }
  &:hover span {
    color: ${Theme.colors.gray0};
  }
`;

export default StyledItem;
