import React from 'react';
import Post from '../Post';

import { Container } from './styles';

const Posts: React.FC = () => (
    <Container>
        <Post />
        <Post />
        <Post />
    </Container>
);

export default Posts;
