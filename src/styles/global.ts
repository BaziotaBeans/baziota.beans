import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    

    html{
        font-size: 62.5%;
        width: 100%;
        width: 100%;
        scroll-behavior: smooth;
    }

    ::selection {
        background-color: ${({ theme }) => theme.colors.theme_one};
        color: ${({ theme }) => theme.colors.black};;
    }

    body {
        scroll-behavior: smooth;
        overflow-x: hidden;
        min-height: 100vh;
        width: 100%;
        height: 100%;
        font-family: 'Roboto', sans-serif;
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text_primary};
        
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;

        position: relative;

        scrollbar-width: thin;
        scrollbar-color: ${({ theme }) => theme.colors.theme_one} ${({
  theme,
}) => theme.colors.sidebarBackground};
        
           
    }

    body::-webkit-scrollbar {
        width: 1rem;
    }

    body::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.colors.sidebarBackground};
    }

    body::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.black};
        border-radius: 20px;
        transition: all .3s;
    }
    
    body::-webkit-scrollbar-thumb:hover {
        //background-color: ${({ theme }) => theme.colors.theme_one};
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    div, section {
        -webkit-overflow-scrolling: touch;
        /* overflow-y: scroll; */
    }
`;
