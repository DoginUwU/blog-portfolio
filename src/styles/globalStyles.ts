import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        padding-top: 30px;
    }

    @media (max-width: 1000px) {
        html {
            font-size: 93.75%;
        }
    }
    
    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }

    body {
        font-family: 'Poppins', sans-serif;
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.white};
        overflow-x: hidden;
    }

    button {
        cursor: pointer;
    }

    h1, h2, h3, h4, h5, h6, p, span {
        font-family: 'Poppins', sans-serif;
        color: ${({ theme }) => theme.colors.text.primary};
    }

    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 10px;
    }
`;

export { GlobalStyles };
