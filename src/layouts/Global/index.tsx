import React from 'react';

import Animes from './Animes';
import MyCard from './MyCard';
import Tags from './Tags';

import { Container, Right } from './styles';

interface GlobalLayoutProps {
    children: React.ReactNode;
}

const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => (
    <Container>
        <MyCard />
        {children}
        <Right>
            <Tags />
            <Animes />
        </Right>
    </Container>
);

export default GlobalLayout;
