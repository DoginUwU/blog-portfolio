import styled from 'styled-components';

const Container = styled.main`
    flex: 1;
    width: fit-content;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 24px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    p {
        font-weight: 100;
    }
`;

export { Container };
