import { styled } from "styled-components";
import Theme from "../../styles/Theme";

const Title3 = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.5rem;
`;

const LabelModal = styled.label`
  font-size: 12px;
  font-weight: 400;
  color: ${Theme.colors.gray0};
`;

export { Title3, LabelModal };
