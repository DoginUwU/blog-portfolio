import { Icon } from '@iconify/react';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Post as IPost } from '../../../@types/post';
import Button from '../../../components/Button';
import Tag from '../../../components/Tag';
import { formatDate } from '../../../utils/date';

import { Container, Content, Header } from './styles';

interface PostProps {
    data: IPost;
}

const Post: React.FC<PostProps> = ({ data }) => {
    const theme = useTheme();

    return (
        <Container>
            <Header>
                <h1>{data.title}</h1>
                <div>
                    {data.tags.map((tag) => (
                        <Tag key={tag.name} to={`/tag/${tag.name}`} text={tag.name} color={tag.color} />
                    ))}
                    <Tag
                        to="/"
                        color={theme.colors.background}
                        icon={<Icon icon="fa-solid:clock" />}
                        text={formatDate(data.updatedAt)}
                    />
                </div>
            </Header>
            <Content>
                <ReactMarkdown>{data.short_description}</ReactMarkdown>
                <img src={data.image} alt={data.title} />
            </Content>
            <Link to={`/post/${data.slug}`}>
                <Button>Continuar leitura</Button>
            </Link>
        </Container>
    );
};

export default Post;
