import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 0rem;
  overflow: hidden;
  width: 100%;
`;

export const Content = styled.div`
  padding: 2rem 2rem;
  position: relative;
`;

export const TransitionSkillHeading = styled.h1`
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

export const SkillWrapperCards = styled.div`
  margin-top: 14rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 25.8rem;
  gap: 2rem;
`;


export const SkillCard = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
    padding: 2rem;

    h4 {
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        letter-spacing: .2rem;
        margin-bottom: .5rem;
    }

    h2{
        color: ${({ theme }) => theme.colors.text_primary};
        font-size: 2rem;
        font-weight: 400;
        height: 4rem;
    }
    
    p{
        color: ${({ theme }) => theme.colors.text_secondary};
        font-size: 1.4rem;
        line-height: 1.4;
        margin-top: 4rem;
    }

    &:nth-child(1) {
        border-top: .1rem solid ${({ theme }) => theme.colors.theme_one};
        h4{
            color: ${({ theme }) => theme.colors.theme_one};
        }
    }
    &:nth-child(2) {
        border-top: .1rem solid ${({ theme }) => theme.colors.theme_two};
        h4 {
            color: ${({ theme }) => theme.colors.theme_two};
        }
    }
    &:nth-child(3) {
        border-top: .1rem solid ${({ theme }) => theme.colors.theme_three};
        h4 {
            color: ${({ theme }) => theme.colors.theme_three};
        }
    }
    &:nth-child(4) {
        border-top: .1rem solid ${({ theme }) => theme.colors.theme_four};
        color: ${({ theme }) => theme.colors.theme_four};
    }
    &:nth-child(5) {
        border-top: .1rem solid ${({ theme }) => theme.colors.theme_five};
        color: ${({ theme }) => theme.colors.theme_five};
    }
    &:nth-child(6) {
        border-top: .1rem solid ${({ theme }) => theme.colors.theme_six};
        color: ${({ theme }) => theme.colors.theme_six};
    }
    &:nth-child(7) {
        border-top: .1rem solid ${({ theme }) => theme.colors.theme_seven};
        color: ${({ theme }) => theme.colors.theme_seven};
    }
    &:nth-child(8) {
        border-top: .1rem solid ${({ theme }) => theme.colors.theme_eight};
        color: ${({ theme }) => theme.colors.theme_eight};
    }
    &:nth-child(9) {
        border-top: .1rem solid ${({ theme }) => theme.colors.theme_nine};
        color: ${({ theme }) => theme.colors.theme_nine};
    }
    &:nth-child(10) {
        border-top: .1rem solid ${({ theme }) => theme.colors.theme_ten};
        color: ${({ theme }) => theme.colors.theme_ten};
    }
    &:nth-child(11) {
        border-top: .1rem solid ${({ theme }) => theme.colors.theme_eleven};
        color: ${({ theme }) => theme.colors.theme_eleven};
    }
    &:nth-child(12) {
        border-top: .1rem solid ${({ theme }) => theme.colors.theme_twelve};
        color: ${({ theme }) => theme.colors.theme_twelve};
    }
    &:nth-child(13) {
        border-top: .1rem solid ${({ theme }) => theme.colors.theme_thirteen};
        color: ${({ theme }) => theme.colors.theme_thirteen};
    }
    &:nth-child(14) {
        border-top: .1rem solid ${({ theme }) => theme.colors.theme_fourteen};
        color: ${({ theme }) => theme.colors.theme_fourteen};
    }
    &:nth-child(15) {
        border-top: .1rem solid ${({ theme }) => theme.colors.theme_fifteen};
        color: ${({ theme }) => theme.colors.theme_fifteen};
    }
    &:nth-child(16) {
        border-top: .1rem solid ${({ theme }) => theme.colors.theme_sixteen};
        color: ${({ theme }) => theme.colors.theme_sixteen};
    }
    &:nth-child(17) {
        border-top: .1rem solid ${({ theme }) => theme.colors.theme_seventeen};
        color: ${({ theme }) => theme.colors.theme_seventeen};
    }
    &:nth-child(18) {
        border-top: .1rem solid ${({ theme }) => theme.colors.theme_eighteen};
        color: ${({ theme }) => theme.colors.theme_eighteen};
    }
`;