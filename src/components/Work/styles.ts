import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  overflow: hidden;
`;

export const BlockContent = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  button {
    align-self: flex-end;
    top: 2rem;
  }

  @media (max-width: 780px) {
    padding: 0 6rem;
  }

  @media (max-width: 400px) {
    padding: 0 2rem;
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 4rem;
  height: 100%;
  position: relative;
  padding-right: 2rem;

  @media (max-width: 780px) {
    flex-direction: column;
    button {
      align-self: flex-start;
    }
  }
`;

export const Content = styled.div`
  flex: 2;
  padding: 2rem 6rem;
  position: relative;

  @media (max-width: 400px) {
    padding: 2rem 2rem;
  }

  p {
    font-size: 1.6rem;
    letter-spacing: 0.3rem;
    line-height: 1.5;
    margin-top: 5rem;
    a {
      color: ${({ theme }) => theme.colors.theme_one};
    }
  }
`;

export const Heading = styled.h1`
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.theme_one};

  @media (max-width: 500px) {
    font-size: 4rem;
  }
`;

export const HtmlSyntaxAboutOne = styled.span`
  font-family: "Condiment", cursive;
  font-size: 1.4rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.text_aesthetics};
  position: absolute;
  left: 5rem;
  top: 0.5rem;

  @media (max-width: 400px) {
    left: 1.5rem;
  }
`;

export const HtmlSyntaxAboutTwo = styled.span`
  font-family: "Condiment", cursive;
  font-size: 1.4rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.text_aesthetics};
  position: absolute;
  left: 5rem;
  top: 8rem;

  @media (max-width: 400px) {
    left: 1.5rem;
  }
`;

export const HtmlSyntaxAboutThree = styled.span`
  font-family: "Condiment", cursive;
  font-size: 1.4rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.text_aesthetics};
  position: absolute;
  left: 5rem;
  top: 11rem;

  @media (max-width: 400px) {
    left: 1.5rem;
    top: 10rem;
  }
`;

export const HtmlSyntaxAboutFour = styled.span`
  font-family: "Condiment", cursive;
  font-size: 1.4rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.text_aesthetics};
  position: absolute;
  left: 5rem;
  top: 26rem;

  @media (max-width: 1200px) {
    top: 28rem;
  }

  @media (max-width: 980px) {
    top: 34rem;
  }

  @media (max-width: 880px) {
    top: 34rem;
  }

  @media (max-width: 490px) {
    top: 38rem;
  }

  @media (max-width: 400px) {
    left: 1.5rem;
    top: 38rem;
  }

  @media (max-width: 340px) {
    left: 1.5rem;
    top: 48rem;
  }
`;

export const HtmlSyntaxAboutFive = styled.span`
  font-family: "Condiment", cursive;
  font-size: 1.4rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.text_aesthetics};
  position: absolute;
  left: 5rem;
  top: 5rem;

  @media (max-width: 400px) {
    left: 1.5rem;
  }
`;

export const HtmlSyntaxAboutSix = styled.span`
  font-family: "Condiment", cursive;
  font-size: 1.4rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.text_aesthetics};
  position: absolute;
  left: 5rem;
  bottom: -4rem;

  @media (max-width: 400px) {
    left: 1.5rem;
  }
`;

export const TransitionWorkHeading = styled.h1`
  color: ${({ theme }) => theme.colors.sidebarDivider};
  font-size: 38rem;
  position: absolute;
  top: -7rem;
  font-family: "Archivo", sans-serif;
  z-index: -1;
  animation-name: moveHeading;
  animation-duration: 25s;
  animation-delay: 0s;
  animation-timing-function: linear;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  animation-play-state: running;

  @keyframes moveHeading {
    0% {
      transform: translateX(-10%);
    }
    50% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-10%);
    }
  }
`;

export const SectionGalleryWorkWrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 0rem 0;
`;

export const SectionGalleryWork = styled.div`
  margin-top: 8rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 25.8rem;
  gap: 0.3rem;
`;

export const SectionGalleryWorkItem = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.theme_six};
`;
