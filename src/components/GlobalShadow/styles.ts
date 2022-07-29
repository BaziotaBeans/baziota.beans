import styled from "styled-components";

interface ContainerProps {
  isActive: boolean;
}

export const Container = styled.div<ContainerProps>`
  webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.2);

  transition: all 0.1s cubic-bezier(0.785, 0.135, 0.15, 0.86);

  min-height: 100vh;
  height: 100%;
  width: 100%;

  z-index: 999;

  position: fixed;
  left: 0;
  top: 0;

  transform: translateY(-100%);

  @media (max-width: 700px) {
    transform: ${({ isActive }) =>
    isActive ? "translateY(0)" : "translateY(-100%)"};
  }

  
`;
