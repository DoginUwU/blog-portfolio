import styled from 'styled-components';

const Container = styled.article`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 12px;

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
