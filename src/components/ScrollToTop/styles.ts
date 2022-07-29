import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  .icon-position {
    position: fixed;
    bottom: 40px;
    right: 25px;
    z-index: 20;
  }

  .icon-style {
    background-color: #551b54;
    border: 2px solid #fff;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    color: #fff;
    cursor: pointer;
    animation: movebtn 3s ease-in-out infinite;
    transition: all 0.5s ease-in-out;
  }

  .icon-style:hover {
    animation: none;
    background: #fff;
    color: #551b54;
    border: 2px solid #551b54;
  }

  @keyframes movebtn {
    0% {
      transform: translateY(0px);
    }
    25% {
      transform: translateY(20px);
    }
    50% {
      transform: translateY(0px);
    }
    75% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
