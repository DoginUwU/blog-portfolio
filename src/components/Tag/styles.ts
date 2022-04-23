import styled from 'styled-components';

const Container = styled.div`
    width: fit-content;
    background-color: ${({ theme }) => theme.colors.semantic.blue};
    border-radius: 4px;
    padding: 8px 12px;

    font-size: 0.85rem;
`;

export { Container };
