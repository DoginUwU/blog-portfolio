import React, { useEffect, useState } from 'react';
import { Tag as ITag } from '../../../@types/tag';
import Tag from '../../../components/Tag';
import { getAllTags } from '../../../network/lib/tag';

import { Container, Content } from './styles';

const Tags: React.FC = () => {
    const [tags, setTags] = useState<ITag[]>([]);

    useEffect(() => {
        getAllTags().then(setTags);
    }, []);

    return (
        <Container>
            <p className="title">Tags</p>
            <Content>
                {tags.map((tag) => (
                    <Tag key={tag.name} to={`/tag/${tag.name}`} text={tag.name} color={tag.color} />
                ))}
            </Content>
        </Container>
    );
};

export default Tags;
