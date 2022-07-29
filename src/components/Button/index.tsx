import styled from 'styled-components';

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.theme_one};
  cursor: pointer;
  border: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 45px;
  max-width: 18rem;
  position: relative;
  text-decoration: none;
  text-transform: capitalize;
  width: 100%;
  font-family: "Roboto", sans-serif;
  transition: all 0.2s linear;
  margin: 4rem 0;
  @media (min-width: 600px) {
    /* margin: 0 1em 2em; */
  }

  &:hover {
    text-decoration: none;
  }

  &.btn-1 {
    background: transparent;
    font-weight: 500;

    svg {
      height: 45px;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }

    rect {
      fill: none;
      stroke: ${({ theme }) => theme.colors.theme_one};
      stroke-width: 2;
      stroke-dasharray: 422, 0;
      transition: all 0.35s linear;
    }
  }

  &.btn-1:hover {
    font-weight: 500;
    letter-spacing: 1px;

    rect {
      stroke-width: 5;
      stroke-dasharray: 15, 310;
      stroke-dashoffset: 48;
      transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  &.btn-small {
    background: transparent;
    font-weight: 500;
    max-width: 10rem;
    font-size: 1.2rem;

    svg {
      height: 45px;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }

    rect {
      fill: none;
      stroke: ${({ theme }) => theme.colors.theme_one};
      stroke-width: 2;
      stroke-dasharray: 422, 0;
      transition: all 0.35s linear;
    }
  }

  &.btn-small:hover {
    font-weight: 500;
    letter-spacing: 1px;

    rect {
      stroke-width: 5;
      stroke-dasharray: 15, 310;
      stroke-dashoffset: 48;
      transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
    }
  }


`;
