import styled from 'styled-components';

const Container = styled.main`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 24px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;

    .title {
        width: 100%;
        text-align: start;
    }

    p {
        font-weight: 100;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        display: none;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;

    img {
        width: 100%;
        height: 80px;
        border-radius: 8px;
        object-fit: cover;
    }
`;

export { Container, Content };
