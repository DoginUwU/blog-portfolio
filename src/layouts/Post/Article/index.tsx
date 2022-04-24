import { Icon } from '@iconify/react';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Section } from 'react-scroll-section';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useTheme } from 'styled-components';
import { Post } from '../../../@types/post';
import Tag from '../../../components/Tag';
import { formatDate } from '../../../utils/date';
import { CodeSyntax } from './helper';

import { Container, Content, Header } from './styles';

interface ArticleProps {
    data: Post;
}

const Article: React.FC<ArticleProps> = ({ data }) => {
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
                {data.content?.map((content) => (
                    <Section key={content.id} id={content.title}>
                        <h1>{content.title}</h1>
                        <ReactMarkdown
                            components={{
                                code: CodeSyntax,
                            }}
                        >
                            {content.text}
                        </ReactMarkdown>
                    </Section>
                ))}
            </Content>
        </Container>
    );
};

export default Article;
