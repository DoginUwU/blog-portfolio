import React from 'react';
import { Icon } from '@iconify/react';

import { Container, Contacts } from './styles';
import AnimatedTexts from '../../../components/AnimatedTexts';

const MyCard: React.FC = () => (
    <Container>
        <img src="/assets/my_picture.jpg" alt="" />
        <h2>Dogs</h2>
        <AnimatedTexts
            texts={['Amante de jogos', 'Desenvolvedor Full-Stack', 'Buscando emprego', 'Amante de animes']}
        />
        <Contacts>
            <a href="https://github.com/DoginUwU" target="_blank" rel="noreferrer">
                <Icon icon="akar-icons:github-fill" />
            </a>
            <a href="https://www.linkedin.com/in/luiz-gotardo/" target="_blank" rel="noreferrer">
                <Icon icon="akar-icons:linkedin-fill" />
            </a>
            <a href="https://discord.com/users/656129876092518400" target="_blank" rel="noreferrer">
                <Icon icon="akar-icons:discord-fill" />
            </a>
        </Contacts>
    </Container>
);

export default MyCard;
