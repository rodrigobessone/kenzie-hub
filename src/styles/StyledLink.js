import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Theme from "./Theme";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
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
`;
export default StyledLink;
