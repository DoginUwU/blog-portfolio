import React from 'react';
import Tag from '../../../components/Tag';

import { Container, Content } from './styles';

const Tags: React.FC = () => (
    <Container>
        <p className="title">Tags</p>
        <Content>
            <Tag to="/tag/react" text="React" />
            <Tag to="/tag/react" text="React" />
            <Tag to="/tag/react" text="React" />
            <Tag to="/tag/react" text="React" />
            <Tag to="/tag/react" text="React" />
            <Tag to="/tag/react" text="React" />
        </Content>
    </Container>
);

export default Tags;
