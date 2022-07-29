import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  transition: all .3s ease-in-out;

  

  /* background-color: rgb(255,2,184, 0.3); */

  /* visibility: visible; */

  .menu-toggle {
    width: 4.5rem;
    cursor: pointer;
    display: none;
    flex-direction: column;
    align-items: flex-end;
    margin: 1.5rem 1rem 0 0;
  }
  .one,
  .two,
  .three {
    background-color: white;
    height: 0.4rem;
    width: 100%;
    margin: 0.5rem;
    transition: 0.5s;
    border-radius: 20px;
  }

  .one {
    width: 67%;
  }
  .two {
    width: 50%;
  }
  .three {
    width: 100%;
  }
  &.menu-container {
    display: none;
    align-items: center;
    justify-content: center;
  }

  &.menu-container .menu-toggle:hover .one {
    //width: 70%;
  }
  &.menu-container .menu-toggle:hover .two {
    //width: 50%;
  }
  

  &.menu-container.on .menu-toggle .one {
    width: 100%;
    transform: rotate(45deg) translate(1rem, 1rem);
  }

  &.menu-container.on .menu-toggle .two {
    opacity: 0;
  }

  &.menu-container.on .menu-toggle .three {
    transform: rotate(-45deg) translate(1rem, -1rem);
  }

  h1 {
    font-family: sans-serif;
    text-align: center;
    color: white;
  }
  .orange {
    color: #ff9900;
  }
  .yellow {
    color: #ffe600;
  }


  @media (max-width: 700px) {
    display: flex;

    .menu-toggle {
      display: flex;
    }

    &.menu-container {
      display: flex;
    }
  }
`;
