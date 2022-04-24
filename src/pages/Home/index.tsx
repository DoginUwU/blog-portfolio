import React from 'react';
import Animes from '../../layouts/Home/Animes';

import MyCard from '../../layouts/Home/MyCard';
import Posts from '../../layouts/Home/Posts';
import Tags from '../../layouts/Home/Tags';

import { Container, Right } from './styles';

const Home: React.FC = () => (
    <Container>
        <MyCard />
        <Posts />
        <Right>
            <Tags />
            <Animes />
        </Right>
    </Container>
);

export default Home;
