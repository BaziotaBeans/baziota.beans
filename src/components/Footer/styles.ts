import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem 6rem;

  position: relative;
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
  left: 2rem;
  top: 5rem;
`;

export const HeadingAuthorWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;

  p {
    font-size: 1.4rem;
    font-family: "Condiment", cursive;
    color: ${({ theme }) => theme.colors.text_aesthetics};
  }
  span {
    margin: 0 0.5rem;
  }

  a {
    margin-left: 1rem;
  }
`;
