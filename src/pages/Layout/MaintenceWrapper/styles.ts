import styled from "styled-components";

export const MaintenceContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.black};

  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: ${({ theme }) => theme.colors.text_primary};
    font-size: 2rem;
    font-family: "Roboto", sans-serif;
  }

  a {
    color: ${({ theme }) => theme.colors.text_primary};
    font-size: 1.4rem;
    margin-top: 0.85rem;
    transition: all 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.theme_one};
    }
  }
`;
