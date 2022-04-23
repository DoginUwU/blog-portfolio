import styled from 'styled-components';
import BaseContainer from '../../components/BaseContainer';

const Container = styled(BaseContainer)`
    max-width: 1500px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
`;

export { Container };
