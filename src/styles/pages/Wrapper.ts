import styled from "styled-components";

interface GlobalShadowProps {
  isOpen: boolean;
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-left: 13rem;

  @media (max-width: 700px) {
    margin-left: 0;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  position: relative;
`;

export const GlobalShadow = styled.div`
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  min-height: 100%;
  height: 100%;
  max-height: 100%;
`;
