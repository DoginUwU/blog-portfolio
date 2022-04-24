import React from 'react';

import { Container, Content } from './styles';

const Animes: React.FC = () => (
    <Container>
        <p className="title">Melhores animes</p>
        <Content>
            <a
                href="https://skdesu.com/kimi-no-suizou-wo-tabetai-eu-quero-comer-seu-pancreas/"
                target="_blank"
                rel="noreferrer"
            >
                <img src="/assets/animes/i_want_to_eat_your_pancreas.webp" alt="Eu quero comer seu pâncreas" />
            </a>
            <a href="https://www.netflix.com/br/title/80223226" target="_blank" rel="noreferrer">
                <img src="/assets/animes/koe_no_katachi.webp" alt="Koe no Katachi" />
            </a>
            <a
                href="https://www.crunchyroll.com/pt-br/konosuba-gods-blessing-on-this-wonderful-world"
                target="_blank"
                rel="noreferrer"
            >
                <img src="/assets/animes/konosuba.webp" alt="Konosuba" />
            </a>
        </Content>
    </Container>
);

export default Animes;
