import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const Content = styled.div`
  padding: 2rem 6rem;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  width: 100%;

  @media (max-width: 1170px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 400px) {
    padding: 2rem;
  }
`;

export const Text = styled.p`
  margin-top: 7rem;
  font-size: 1.4rem;
  font-family: "Roboto", sans-serif;
  line-height: 1.5;
  letter-spacing: 0.2rem;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const HtmlSyntaxAboutOne = styled.span`
  font-family: "Condiment", cursive;
  font-size: 1.4rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.text_aesthetics};
  position: absolute;
  left: 5rem;
  top: 1rem;

  @media screen and (max-width: 400px) {
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
  top: 10rem;

  @media screen and (max-width: 400px) {
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
  top: 14rem;

  @media screen and (max-width: 400px) {
    left: 1.5rem;
  }
`;

export const HtmlSyntaxAboutFour = styled.span`
  font-family: "Condiment", cursive;
  font-size: 1.4rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.text_aesthetics};
  position: absolute;
  left: 5rem;
  top: 23.5rem;

  @media (max-width: 1315px) {
    top: 25rem;
  }

  @media (max-width: 750px) {
    top: 28rem;
  }


  @media screen and (max-width: 400px) {
    left: 1.5rem;
    top: 30rem;
  }
`;

export const HtmlSyntaxAboutFive = styled.span`
  font-family: "Condiment", cursive;
  font-size: 1.4rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.text_aesthetics};
  position: absolute;
  left: 5rem;
  top: 26.5rem;
  @media (max-width: 1315px) {
    top: 27.5rem;
  }
  @media (max-width: 750px) {
    top: 30rem;
  }
  @media (max-width: 400px) {
    top: 32rem;
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
  top: 56rem;
  @media (max-width: 750px) {
    top: 60rem;
  }

  @media (max-width: 600px) {
    top: 70rem;
  }

  @media (max-width: 400px) {
    left: 1.5rem;
  }
`;

export const Heading = styled.h1`
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.theme_one};
  margin-top: 1.5rem;

  @media screen and (max-width: 500px) {
    font-size: 4rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 7rem;

  button {
    margin-left: auto;
    margin-top: 2rem;
  }

  @media screen and (max-width: 400px) {
    margin-top: 10rem;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  /* max-width: 400px; */
  margin: 0 auto;
  border-radius: 2px;
  padding: 1.4rem 2rem 1.6rem;
  background: ${({ theme }) => theme.colors.sidebarDivider};
  &:after {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    width: 100%;
    z-index: 999;
    height: 2px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    background-position: 0% 0%;
    background: linear-gradient(
      to right,
      #b294ff,
      #57e6e6,
      #feffb8,
      #57e6e6,
      #b294ff,
      #57e6e6
    );
    background-size: 500% auto;
    animation: gradient 3s linear infinite;
    transition: all 0.3s;
  }

  &:focus-within:after {
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.theme_one},
      ${({ theme }) => theme.colors.theme_one}
    );
  }

  @keyframes gradient {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  vertical-align: middle;
  border-style: none;
  background: transparent;
  outline: none;
  color: ${({ theme }) => theme.colors.text_primary};
  font-size: 1.6rem;
`;

export const TextArea = styled.textarea`
  resize: none;
  min-height: 10rem;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  vertical-align: middle;
  border-style: none;
  background: transparent;
  outline: none;
  color: ${({ theme }) => theme.colors.text_primary};
  font-size: 1.6rem;
  
`;

export const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  
`;

export const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.theme_one};

  gap: 2rem;
  margin-top: 10rem;
  margin-bottom: 5rem;

  .text {
    font-size: 2.4rem;
    font-weight: 400;
  }

  .pin {
    width: 100px;
    height: 100px;
    margin-left: auto;
    /* background-color: #a55eea; */
    border: 0.2rem solid ${({ theme }) => theme.colors.theme_one};
    border-radius: 5rem 5rem 0 5rem;
    position: relative;
    transform: rotate(45deg);
    @media (max-width: 1170px) {
      margin-left: 0;
    }
  }
  .pin::after {
    content: "";
    width: 5rem;
    height: 5rem;
    background: ${({ theme }) => theme.colors.theme_one};
    position: absolute;
    left: 28%;
    top: 28%;
    border-radius: 60px;
  }

  img {
    width: 6rem;
    object-fit: cover;
    border-radius: 50%;
    transform: rotate(-45deg);
    border: 0.2rem solid ${({ theme }) => theme.colors.theme_one};
    z-index: 10;
    position: absolute;
    top: 20%;
    left: 20%;
  }
`;

export const MapContent = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  background-color: rgba(0, 0, 0, 0.47);
  align-self: flex-end;
  min-height: 28rem;
  box-shadow: 17px 14px 18px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const MapContentView = styled.div`
  padding: 2rem;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.46);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s;
  }

  &:hover:before {
    width: 0%;
    height: 0%;
  }
`;

export const MapContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  h3 {
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.theme_one};
  }

  p {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.8rem;
    margin-top: 1rem;
  }

  button {
    margin-top: auto;
  }

  @media screen and (max-width: 600px) {
    button {
      margin-top: 2rem;
    }
  }
`;

export const TransitionContactHeading = styled.h1`
  color: ${({ theme }) => theme.colors.sidebarDivider};
  font-size: 38rem;
  position: absolute;
  top: 0rem;
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
