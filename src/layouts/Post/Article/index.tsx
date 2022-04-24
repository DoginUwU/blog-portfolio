import { Icon } from '@iconify/react';
import React from 'react';
import { Section } from 'react-scroll-section';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useTheme } from 'styled-components';
import Tag from '../../../components/Tag';

import { Container, Content, Header } from './styles';

const Article: React.FC = () => {
    const theme = useTheme();

    return (
        <Container>
            <Header>
                <h1>Novidades do React 18</h1>
                <div>
                    <Tag to="/tag/react" text="React" />
                    <Tag
                        to="/"
                        color={theme.colors.background}
                        icon={<Icon icon="fa-solid:clock" />}
                        text="24/04/2022"
                    />
                    <Tag to="/" color={theme.colors.background} icon={<Icon icon="bxs:user" />} text="Dogs" />
                </div>
            </Header>
            <Content>
                <Section id="Inicio">
                    <h1>Inicio</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis et nunc et tempus. Sed
                        molestie enim ut libero ornare, sed porttitor libero vulputate. Cras nec luctus elit. Nam tortor
                        nulla, pretium et sagittis sed, cursus vitae nulla. Aliquam quis lacinia mi. Phasellus commodo,
                        eros nec ultricies varius, orci ipsum vestibulum lorem, eu porttitor quam felis a lectus. Sed
                        gravida ut odio eget pharetra. Donec fermentum risus vehicula egestas tempus. Suspendisse mattis
                        nec nisl id porta. Etiam eget commodo nunc. Duis semper quam ut est egestas, non pharetra ipsum
                        aliquam. Nullam a urna lectus. Donec vitae leo id felis egestas lacinia quis vel nulla.
                        Curabitur quis nisi odio. Praesent ut erat eu nibh molestie scelerisque. Donec sed imperdiet
                        ligula. Donec vulputate elit sit amet imperdiet luctus. Praesent et ipsum quam. Duis porttitor
                        justo eu ante finibus, quis finibus erat consectetur. Integer in viverra nibh. In tortor eros,
                        lacinia id dapibus id, bibendum et ligula. Vivamus ut consectetur ante, eget sollicitudin ante.
                        Praesent id diam dolor. Etiam dapibus semper orci, eu finibus ante condimentum et. Aliquam eros
                        nunc, tempus eu mauris ut, mollis malesuada nisl. Aliquam erat volutpat. Praesent elementum
                        ultricies velit, ut dignissim quam eleifend id. Donec nec leo euismod, mollis ex id, cursus
                        erat. Duis eros metus, ultricies nec massa efficitur, tristique dapibus lectus. Praesent neque
                        sem, sagittis eget est sed, efficitur convallis erat. Donec eu porta ex. Phasellus at enim ex.
                        In faucibus placerat dui. Sed ac leo lectus. Cras faucibus turpis vitae ante congue euismod. Nam
                        tempus nunc risus. Sed dapibus purus urna, ut fringilla est pulvinar nec. Aliquam nunc est,
                        mollis et lacus sit amet, malesuada aliquam nunc. Sed fringilla et est non convallis. Nam non
                        nisl nulla. Quisque sollicitudin nunc justo, sed vehicula ante pharetra sed. Vestibulum commodo,
                        massa quis tempor venenatis, nunc erat finibus nulla, non dignissim elit neque vitae ipsum. Sed
                        hendrerit condimentum accumsan. Vestibulum et malesuada metus. Duis ac dignissim est. Nulla
                        viverra sapien erat, nec vestibulum tortor pulvinar id. Aenean sed nisl mattis, porta velit id,
                        elementum mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                        himenaeos. Duis porta mauris erat, ut egestas ligula fringilla ut. Curabitur lorem nunc,
                        volutpat eu sapien vestibulum, faucibus molestie leo. Proin lobortis lorem sed odio commodo
                        condimentum. Fusce et imperdiet diam, a sagittis nulla. Proin eget leo sed massa porttitor
                        malesuada nec sit amet odio. Phasellus eget tortor consequat est dignissim egestas vel non eros.
                        Phasellus feugiat tortor magna, ut semper dolor rhoncus at. In scelerisque ante nibh, a
                        sollicitudin mauris ultrices et.
                    </p>
                    <SyntaxHighlighter language="javascript" style={atelierDuneDark} showLineNumbers>
                        {`import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';`}
                    </SyntaxHighlighter>
                    <img
                        src="https://cdn.discordapp.com/attachments/880778290170834944/967644147051819078/wp2465923.webp"
                        alt=""
                    />
                    <p>
                        <a href="https://gotardo.vercel.app" target="_blank" rel="noreferrer">
                            Lorem ipsum
                        </a>{' '}
                        dolor sit amet, consectetur adipiscing elit. In mollis et nunc et tempus. Sed molestie enim ut
                        libero ornare, sed porttitor libero vulputate. Cras nec luctus elit. Nam tortor nulla, pretium
                        et sagittis sed, cursus vitae nulla. Aliquam quis lacinia mi. Phasellus commodo, eros nec
                        ultricies varius, orci ipsum vestibulum lorem, eu porttitor quam felis a lectus. Sed gravida ut
                        odio eget pharetra. Donec fermentum risus vehicula egestas tempus. Suspendisse mattis nec nisl
                        id porta. Etiam eget commodo nunc. Duis semper quam ut est egestas, non pharetra ipsum aliquam.
                    </p>
                </Section>
                <Section id="Detalhes">
                    <h1>Detalhes</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis et nunc et tempus. Sed
                        molestie enim ut libero ornare, sed porttitor libero vulputate. Cras nec luctus elit. Nam tortor
                        nulla, pretium et sagittis sed, cursus vitae nulla. Aliquam quis lacinia mi. Phasellus commodo,
                        eros nec ultricies varius, orci ipsum vestibulum lorem, eu porttitor quam felis a lectus. Sed
                        gravida ut odio eget pharetra. Donec fermentum risus vehicula egestas tempus. Suspendisse mattis
                        nec nisl id porta. Etiam eget commodo nunc. Duis semper quam ut est egestas, non pharetra ipsum
                        aliquam. Nullam a urna lectus. Donec vitae leo id felis egestas lacinia quis vel nulla.
                        Curabitur quis nisi odio. Praesent ut erat eu nibh molestie scelerisque. Donec sed imperdiet
                        ligula. Donec vulputate elit sit amet imperdiet luctus. Praesent et ipsum quam. Duis porttitor
                        justo eu ante finibus, quis finibus erat consectetur. Integer in viverra nibh. In tortor eros,
                        lacinia id dapibus id, bibendum et ligula. Vivamus ut consectetur ante, eget sollicitudin ante.
                        Praesent id diam dolor. Etiam dapibus semper orci, eu finibus ante condimentum et. Aliquam eros
                        nunc, tempus eu mauris ut, mollis malesuada nisl. Aliquam erat volutpat. Praesent elementum
                        ultricies velit, ut dignissim quam eleifend id. Donec nec leo euismod, mollis ex id, cursus
                        erat. Duis eros metus, ultricies nec massa efficitur, tristique dapibus lectus. Praesent neque
                        sem, sagittis eget est sed, efficitur convallis erat. Donec eu porta ex. Phasellus at enim ex.
                        In faucibus placerat dui. Sed ac leo lectus. Cras faucibus turpis vitae ante congue euismod. Nam
                        tempus nunc risus. Sed dapibus purus urna, ut fringilla est pulvinar nec. Aliquam nunc est,
                        mollis et lacus sit amet, malesuada aliquam nunc. Sed fringilla et est non convallis. Nam non
                        nisl nulla. Quisque sollicitudin nunc justo, sed vehicula ante pharetra sed. Vestibulum commodo,
                        massa quis tempor venenatis, nunc erat finibus nulla, non dignissim elit neque vitae ipsum. Sed
                        hendrerit condimentum accumsan. Vestibulum et malesuada metus. Duis ac dignissim est. Nulla
                        viverra sapien erat, nec vestibulum tortor pulvinar id. Aenean sed nisl mattis, porta velit id,
                        elementum mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                        himenaeos. Duis porta mauris erat, ut egestas ligula fringilla ut. Curabitur lorem nunc,
                        volutpat eu sapien vestibulum, faucibus molestie leo. Proin lobortis lorem sed odio commodo
                        condimentum. Fusce et imperdiet diam, a sagittis nulla. Proin eget leo sed massa porttitor
                        malesuada nec sit amet odio. Phasellus eget tortor consequat est dignissim egestas vel non eros.
                        Phasellus feugiat tortor magna, ut semper dolor rhoncus at. In scelerisque ante nibh, a
                        sollicitudin mauris ultrices et.
                    </p>
                    <SyntaxHighlighter language="javascript" style={atelierDuneDark} showLineNumbers>
                        {`console.log("Hello World");`}
                    </SyntaxHighlighter>
                </Section>
            </Content>
        </Container>
    );
};

export default Article;
