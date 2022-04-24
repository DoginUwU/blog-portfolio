import styled from 'styled-components';

const Container = styled.article`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
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

    h1 {
        font-size: 1.5rem;
    }

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
        margin-top: 4px;
    }
`;

const Content = styled.div`
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.black};

    img {
        width: 100%;
        border-radius: 8px;
        margin-top: 16px;
    }
`;

export { Container, Header, Content };
