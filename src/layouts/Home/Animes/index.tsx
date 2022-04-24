import React from 'react';

import { Container, Content } from './styles';

const Animes: React.FC = () => (
    <Container>
        <p className="title">Melhores animes</p>
        <Content>
            <img src="/assets/animes/i_want_to_eat_your_pancreas.webp" alt="Eu quero comer seu pâncreas" />
            <img src="/assets/animes/koe_no_katachi.webp" alt="Koe no Katachi" />
            <img src="/assets/animes/konosuba.webp" alt="Konosuba" />
        </Content>
    </Container>
);

export default Animes;
