import { Icon } from '@iconify/react';
import React from 'react';
import { useTheme } from 'styled-components';
import Button from '../../../components/Button';
import Tag from '../../../components/Tag';

import { Container, Content, Header } from './styles';

const Post: React.FC = () => {
    const theme = useTheme();

    return (
        <Container>
            <Header>
                <h1>Novidades do React 18</h1>
                <div>
                    <Tag text="React" />
                    <Tag color={theme.colors.background} icon={<Icon icon="fa-solid:clock" />} text="24/04/2022" />
                </div>
            </Header>
            <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim sem in gravida interdum.
                Pellentesque ac nulla in enim tempor dignissim. Vestibulum vitae rutrum magna, eu efficitur justo. Sed
                imperdiet odio eu ex volutpat consectetur. Vestibulum pharetra augue nec pharetra scelerisque. Integer
                pretium metus vel feugiat volutpat. Sed sit amet eleifend sapien.
                <img
                    src="https://cdn.discordapp.com/attachments/880778290170834944/967644147051819078/wp2465923.webp"
                    alt=""
                />
            </Content>
            <Button>Continuar leitura</Button>
        </Container>
    );
};

export default Post;
