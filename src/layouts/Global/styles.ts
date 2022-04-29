import styled from 'styled-components';
import BaseContainer from '../../components/BaseContainer';

const Container = styled(BaseContainer)`
    position: relative;
    max-width: 1500px;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    gap: 16px;
    padding-bottom: 100px;
`;

const Right = styled.section`
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        display: none;
    }
`;

export { Container, Right };
