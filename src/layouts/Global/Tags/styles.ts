import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 24px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    .title {
        width: 100%;
        text-align: start;
    }

    p {
        font-weight: 100;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 4px;
`;

export { Container, Content };
