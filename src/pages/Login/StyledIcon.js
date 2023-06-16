import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Theme from "../../styles/Theme";

const StyledIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 1rem;
  bottom: 0.9375rem;
  color: ${Theme.colors.gray1};
`;
export default StyledIcon;
