import styled from 'styled-components';

const Container = styled.article`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 24px;

    display: flex;
    flex-direction: column;
    gap: 16px;

    button {
        width: fit-content;
        font-size: 1rem;
    }
`;

const Header = styled.header`
    width: 100%;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
        margin-top: 4px;
    }
`;

const Content = styled.main`
    display: flex;
    flex-direction: column;
    gap: 15px;

    section {
        padding-top: 15px;
        color: ${({ theme }) => theme.colors.black};
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    h1 {
        width: 100%;
        font-size: 2rem;
        margin-bottom: -20px;

        &::after {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background-color: ${({ theme }) => theme.colors.gray[600]};
            margin-top: 8px;
        }
    }

    p {
        text-indent: 8px;
    }

    img {
        width: 100%;
        border-radius: 8px;
    }

    pre {
        border-radius: 8px;
        overflow: hidden;
    }

    code span {
        color: rgb(166, 162, 140);
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.semantic.lightBlue};
        transition: opacity 0.2s ease-in-out;

        &::after {
            content: url('https://api.iconify.design/bx/link-external.svg?color=%23428aff&height=12');
            display: inline-block;
            margin-left: -5px;
        }

        &:hover {
            opacity: 0.8;
        }
    }
`;

export { Container, Header, Content };
