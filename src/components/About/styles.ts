import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  padding: 2rem 6rem;

  position: relative;

  @media screen and (max-width: 400px) {
    padding: 2rem 2rem;
  }

  .changeColor {
    animation: changeColor 5s infinite;
    animation-delay: 2s;
    animation-play-state: running;

    @media screen and (max-width: 400px) {
      left: 0;
    }

    @keyframes changeColor {
      0%,
      100% {
        color: ${({ theme }) => theme.colors.theme_one};
      }
      50% {
        color: ${({ theme }) => theme.colors.text_aesthetics};
      }
    }
  }
`;

export const Heading = styled.p`
  font-family: "Archivo", sans-serif;
  font-size: 6.6rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  margin: 9rem 0 2.5rem;

  @media screen and (max-width: 500px) {
    font-size: 5rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 4rem;
  }
`;

export const HtmlSyntaxAboutOne = styled.span`
  font-family: "Condiment", cursive;
  font-size: 1.4rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.text_aesthetics};
  position: absolute;
  left: 3rem;
`;

export const HtmlSyntaxAboutTwo = styled.span`
  font-family: "Condiment", cursive;
  font-size: 1.4rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.text_aesthetics};
  position: absolute;
  left: 5rem;
  top: 4rem;
  @media screen and (max-width: 400px) {
    left: 1rem;
  }
`;

export const HtmlSyntaxAboutThree = styled.span`
  font-family: "Condiment", cursive;
  font-size: 1.4rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.text_aesthetics};
  position: absolute;
  left: 5rem;
  top: 10rem;
  @media screen and (max-width: 400px) {
    left: 1.5rem;
    top: 9rem;
  }
`;

export const HtmlSyntaxAboutFour = styled.span`
  font-family: "Condiment", cursive;
  font-size: 1.4rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.text_aesthetics};
  position: absolute;
  left: 68rem;
  top: 30rem;
  @media screen and (max-width: 870px) {
    left: 36rem;
    top: 38rem;
  }

  @media screen and (max-width: 500px) {
    left: 30rem;
    top: 30rem;
  }

  @media screen and (max-width: 400px) {
    left: 21rem;
    top: 27rem;
  }
`;

export const HtmlSyntaxAboutSix = styled.span`
  font-family: "Condiment", cursive;
  font-size: 1.4rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.text_aesthetics};
  position: absolute;
  left: 5rem;
  top: 33rem;
  @media screen and (max-width: 870px) {
    top: 40rem;
  }
  @media screen and (max-width: 500px) {
    top: 33rem;
  }
  @media screen and (max-width: 400px) {
    top: 28.5rem;
    left: 1.5rem;
  }
`;

export const HtmlSyntaxAboutSeven = styled.span`
  font-family: "Condiment", cursive;
  font-size: 1.4rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.text_aesthetics};
  position: absolute;
  left: 5rem;
  top: 37rem;
  @media screen and (max-width: 870px) {
    top: 45rem;
  }
  @media screen and (max-width: 700px) {
    top: 46rem;
  }
  @media screen and (max-width: 500px) {
    top: 40rem;
  }
  @media screen and (max-width: 400px) {
    top: 35rem;
    left: 1.5rem;
  }
`;

export const SubHeading = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1.4rem;
  letter-spacing: 0.3rem;
  color: ${({ theme }) => theme.colors.text_secondary};
`;

export const ScrollDownButtonLeft = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text_primary};
  font-size: 1.4rem;
  font-weight: 600;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;

  position: absolute;
  transform: rotate(90deg);
  bottom: -3rem;
  left: -2rem;

  transition: all 0.3s;

  /* bottom: 0rem;  */
  &:hover {
    color: ${({ theme }) => theme.colors.theme_one};
  }
`;

export const ScrollDownButtonRight = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text_primary};
  font-size: 1.4rem;
  font-weight: 600;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;

  position: absolute;
  transform: rotate(90deg);
  bottom: -3rem;
  right: -2rem;

  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.theme_one};
  }

  /* bottom: 0rem;  */
`;

export const GlitchtText = styled.span`
  &.glitch {
    position: relative;
    color: #fff;
    /* background-color: ${({ theme }) => theme.colors.theme_one}; */
    font-size: 6.4rem;
    /* letter-spacing: 0.5em; */
    letter-spacing: 0em;
    animation: glitch-skew 1s infinite linear alternate-reverse;
  }
  &.glitch::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    left: 2px;
    text-shadow: -2px 0 #ff00c1;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 5s infinite linear alternate-reverse;
  }
  &.glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    left: -2px;
    text-shadow: -2px 0 #ff00c1, 2px 2px #ff00c1;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim2 5s infinite linear alternate-reverse;
  }
  @keyframes glitch-anim {
    0% {
      clip: rect(42px, 9999px, 71px, 0);
      transform: skew(0.5deg);
    }
    5% {
      clip: rect(93px, 9999px, 43px, 0);
      transform: skew(0.48deg);
    }
    10% {
      clip: rect(58px, 9999px, 90px, 0);
      transform: skew(0.68deg);
    }
    15% {
      clip: rect(94px, 9999px, 92px, 0);
      transform: skew(0.2deg);
    }
    20% {
      clip: rect(13px, 9999px, 87px, 0);
      transform: skew(0.52deg);
    }
    25% {
      clip: rect(32px, 9999px, 19px, 0);
      transform: skew(0.91deg);
    }
    30% {
      clip: rect(77px, 9999px, 62px, 0);
      transform: skew(0.26deg);
    }
    35% {
      clip: rect(79px, 9999px, 66px, 0);
      transform: skew(0.78deg);
    }
    40% {
      clip: rect(9px, 9999px, 77px, 0);
      transform: skew(0.81deg);
    }
    45% {
      clip: rect(37px, 9999px, 41px, 0);
      transform: skew(0.99deg);
    }
    50% {
      clip: rect(83px, 9999px, 23px, 0);
      transform: skew(0.71deg);
    }
    55% {
      clip: rect(60px, 9999px, 70px, 0);
      transform: skew(0.38deg);
    }
    60% {
      clip: rect(11px, 9999px, 77px, 0);
      transform: skew(0.55deg);
    }
    65% {
      clip: rect(73px, 9999px, 49px, 0);
      transform: skew(0.62deg);
    }
    70% {
      clip: rect(42px, 9999px, 96px, 0);
      transform: skew(0.67deg);
    }
    75% {
      clip: rect(26px, 9999px, 35px, 0);
      transform: skew(0.76deg);
    }
    80% {
      clip: rect(52px, 9999px, 12px, 0);
      transform: skew(0.39deg);
    }
    85% {
      clip: rect(82px, 9999px, 15px, 0);
      transform: skew(0.02deg);
    }
    90% {
      clip: rect(68px, 9999px, 57px, 0);
      transform: skew(0.97deg);
    }
    95% {
      clip: rect(54px, 9999px, 47px, 0);
      transform: skew(1deg);
    }
  }
  @keyframes glitch-anim2 {
    0% {
      clip: rect(71px, 9999px, 52px, 0);
      transform: skew(0.49deg);
    }
    5% {
      clip: rect(33px, 9999px, 54px, 0);
      transform: skew(0.95deg);
    }
    10% {
      clip: rect(52px, 9999px, 30px, 0);
      transform: skew(0.86deg);
    }
    15% {
      clip: rect(45px, 9999px, 8px, 0);
      transform: skew(0.03deg);
    }
    20% {
      clip: rect(47px, 9999px, 59px, 0);
      transform: skew(0.56deg);
    }
    25% {
      clip: rect(65px, 9999px, 87px, 0);
      transform: skew(0.92deg);
    }
    30% {
      clip: rect(66px, 9999px, 24px, 0);
      transform: skew(0.14deg);
    }
    35% {
      clip: rect(38px, 9999px, 85px, 0);
      transform: skew(0.9deg);
    }
    40% {
      clip: rect(18px, 9999px, 21px, 0);
      transform: skew(0.51deg);
    }
    45% {
      clip: rect(58px, 9999px, 4px, 0);
      transform: skew(0.9deg);
    }
    50% {
      clip: rect(46px, 9999px, 35px, 0);
      transform: skew(0.21deg);
    }
    55% {
      clip: rect(92px, 9999px, 45px, 0);
      transform: skew(0.8deg);
    }
    60% {
      clip: rect(33px, 9999px, 37px, 0);
      transform: skew(0.5deg);
    }
    65% {
      clip: rect(36px, 9999px, 3px, 0);
      transform: skew(0.59deg);
    }
    70% {
      clip: rect(2px, 9999px, 29px, 0);
      transform: skew(0.94deg);
    }
    75% {
      clip: rect(89px, 9999px, 93px, 0);
      transform: skew(0.7deg);
    }
    80% {
      clip: rect(41px, 9999px, 56px, 0);
      transform: skew(0.89deg);
    }
    85% {
      clip: rect(11px, 9999px, 32px, 0);
      transform: skew(0.64deg);
    }
    90% {
      clip: rect(95px, 9999px, 64px, 0);
      transform: skew(0.97deg);
    }
    95% {
      clip: rect(80px, 9999px, 16px, 0);
      transform: skew(0.8deg);
    }
  }
  @keyframes glitch-skew {
    0% {
      transform: skew(4deg);
    }
    10% {
      transform: skew(2deg);
    }
    20% {
      transform: skew(-1deg);
    }
    30% {
      transform: skew(-4deg);
    }
    40% {
      transform: skew(5deg);
    }
    50% {
      transform: skew(5deg);
    }
    60% {
      transform: skew(5deg);
    }
    70% {
      transform: skew(0deg);
    }
    80% {
      transform: skew(0deg);
    }
    90% {
      transform: skew(-1deg);
    }
  }
`;
