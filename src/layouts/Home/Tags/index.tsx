import React from 'react';
import Tag from '../../../components/Tag';

import { Container, Content } from './styles';

const Tags: React.FC = () => (
    <Container>
        <p>Tags</p>
        <Content>
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
        </Content>
    </Container>
);

export default Tags;
