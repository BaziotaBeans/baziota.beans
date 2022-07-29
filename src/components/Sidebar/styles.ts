import styled from "styled-components";

interface Props {
  toggleSidebar: boolean;
}

export const Container = styled.nav<Props>`
  display: flex;
  flex-direction: column;
  width: 13rem;
  min-height: 100vh;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.sidebarBackground};
  position: fixed;
  z-index: 9999;
  transition: all 0.3s;
  @media (max-width: 700px) {
    transform: ${({ toggleSidebar }) =>
      toggleSidebar ? "translateX(0)" : "translateX(-100%)"};
      width: 50%;
  }

  @media (max-width: 400px) { 
    width: 70%;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 18.1rem;
  background-color: ${({ theme }) => theme.colors.black};
  /* padding: 2rem 1rem 2rem; */
`;

export const GlitchtText = styled.h1`
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

export const LogoText = styled.h2`
  font-family: "Archivo", sans-serif;
  letter-spacing: 0.5rem;
  font-size: 1.3rem;
`;

export const LogoTextContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 1rem 0 2rem;
`;

export const RoleHeading = styled.h2`
  font-family: "Roboto", sans-serif;
  color: ${({ theme }) => theme.colors.text_secondary};
  text-align: center;
  font-size: 1.2rem;
`;

export const Navigation = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin-top: 4rem;

  li {
    width: 100%;
    border-top: 0.1rem solid ${({ theme }) => theme.colors.sidebarDivider};
    a {
      width: 100%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 2rem 1rem;
      font-size: 1.6rem;
      font-family: "Roboto", sans-serif;
      color: ${({ theme }) => theme.colors.text_secondary};
      transition: all 0.3s;
      overflow: hidden;
      position: relative;
      /* vertical-align: top; */

      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        left: 0;
      }

      &::before {
        background-color: ${({ theme }) => theme.colors.theme_one};
        height: 0.1rem;
        bottom: 0;
        transform-origin: 100% 50%;
        transform: scaleX(0);
        transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
      }

      &::after {
        content: attr(data-replace);
        height: 100%;
        top: 0;
        transform-origin: 100% 50%;
        transform: translate3d(200%, 0, 0);
        transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
        color: ${({ theme }) => theme.colors.theme_one};

        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      &:hover::before {
        transform-origin: 0% 50%;
        transform: scaleX(1);
      }

      &:hover::after {
        transform: translate3d(0, 0, 0);
      }

      span {
        display: inline-block;
        transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
      }

      &:hover span {
        transform: translate3d(-1000%, 0, 0);
      }
    }
  }
`;

export const SocialLinkGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  margin-top: 4rem;
`;

export const SocialLink = styled.a`
  cursor: pointer;
  transition: all 0.3s;
  color: ${({ theme }) => theme.colors.text_secondary};
  & > * {
    font-size: 1.4rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.theme_one};
    transform: rotate(360deg) scale(1.4);
  }
`;
