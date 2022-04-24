import React from 'react';
import { useScrollSections } from 'react-scroll-section';

import { StickyContainer, Bookmark, Container, Content } from './styles';

const Bookmarks: React.FC = () => {
    const sections = useScrollSections();

    return (
        <StickyContainer top="#bookmarks" innerActiveClass="sticky">
            <Container id="bookmarks">
                <p className="title">Marcadores</p>
                <Content>
                    {sections.map(({ id, onClick, selected }) => (
                        <Bookmark key={id} active={selected} onClick={onClick}>
                            {id}
                        </Bookmark>
                    ))}
                </Content>
            </Container>
        </StickyContainer>
    );
};

export default Bookmarks;
