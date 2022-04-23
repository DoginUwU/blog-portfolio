import React from 'react';
import MyCard from '../../layouts/Home/MyCard';
import Posts from '../../layouts/Home/Posts';
import Tags from '../../layouts/Home/Tags';

import { Container } from './styles';

const Home: React.FC = () => (
    <Container>
        <MyCard />
        <Posts />
        <Tags />
    </Container>
);

export default Home;
