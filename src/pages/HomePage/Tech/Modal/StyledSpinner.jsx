import React from "react";
import styled, { keyframes } from "styled-components";
import Theme from "../../../../styles/Theme";

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
`;

const bounceAnimation = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const LoadingDot = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${Theme.colors.colorPrimaryNegative};
  border-radius: 50%;
  margin: 0 5px;
  animation: ${bounceAnimation} 1.4s infinite ease-in-out;
  animation-delay: ${(props) => props.delay};
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingDot delay="0s" />
      <LoadingDot delay=".2s" />
      <LoadingDot delay=".4s" />
    </LoadingContainer>
  );
};

export default Loading;
