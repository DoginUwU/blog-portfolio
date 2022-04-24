import React from 'react';

import Animes from './Animes';
import MyCard from './MyCard';
import Tags from './Tags';

import { Container, Right } from './styles';

interface GlobalLayoutProps {
    children: React.ReactNode;
    rightChildren?: React.ReactNode;
}

const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children, rightChildren }) => (
    <Container>
        <MyCard />
        {children}
        <Right>
            <Tags />
            <Animes />
            {rightChildren}
        </Right>
    </Container>
);

export default GlobalLayout;
