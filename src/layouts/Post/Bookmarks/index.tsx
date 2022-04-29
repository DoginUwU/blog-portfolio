import React from 'react';
import { useScrollSections } from 'react-scroll-section';
import ReactStickyBox from 'react-sticky-box';

import { Bookmark, Container, Content } from './styles';

const Bookmarks: React.FC = () => {
    const sections = useScrollSections();

    return (
        <ReactStickyBox offsetTop={75}>
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
        </ReactStickyBox>
    );
};

export default Bookmarks;
