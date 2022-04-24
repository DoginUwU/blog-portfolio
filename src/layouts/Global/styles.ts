import styled from 'styled-components';
import BaseContainer from '../../components/BaseContainer';

const Container = styled(BaseContainer)`
    max-width: 1500px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    padding-bottom: 100px;
`;

const Right = styled.section`
    max-width: 240px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        display: none;
    }
`;

export { Container, Right };
