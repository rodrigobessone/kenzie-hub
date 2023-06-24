import Theme from "../../../../styles/Theme";
import { styled } from "styled-components";

export const StyledList = styled.ul`
  width: 100%;
  height: auto;
  background-color: ${Theme.colors.gray3};
  border-radius: 0.25rem;
  margin-top: 1.375rem;
  padding: 1.625rem 1.375rem;
  display: flex;
  flex-direction: column;
  gap: 1.375rem;
`;

export default StyledList;
