import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
`;

export const Content = styled.div`
  padding: 2rem 6rem;
  position: relative;

  p {
    font-size: 1.6rem;
    letter-spacing: 0.3rem;
    line-height: 1.5;
    margin-top: 5rem;
    max-width: 70rem;
    width: 100%;
    a,
    span {
      color: ${({ theme }) => theme.colors.theme_one};
    }
  }

  @media screen and (max-width: 400px) {
    padding: 2rem;
  }
`;

export const HtmlSyntaxAboutOne = styled.span`
  font-family: "Condiment", cursive;
  font-size: 1.4rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.text_aesthetics};
  position: absolute;
  left: 5rem;

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
  top: 13rem;

  @media screen and (max-width: 490px) {
    top: 11rem;
  }

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

  @media screen and (max-width: 400px) {
    left: 1.5rem;
  }
`;

export const Heading = styled.h1`
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.theme_one};
  margin-top: 1.5rem;

  @media (max-width: 500px) {
    font-size: 4rem;
  }
`;
