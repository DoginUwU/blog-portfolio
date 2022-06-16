import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from 'styled-components';
import Button from '../Button';
import { navigationItems } from './helper';

import { Container, Content, LinkNavigation, NavbarContainer } from './styles';

const Navbar: React.FC = () => {
    const theme = useTheme();
    const location = useLocation();

    const checkActive = (path: string) => location.pathname === path;

    return (
        <NavbarContainer>
            <Container>
                <a href="https://gotardo.vercel.app" rel="noreferrer">
                    <img src="/favicon.svg" alt="Website logo" width="42px" height="42px" />
                </a>
                <Content>
                    {navigationItems.map((item) => (
                        <LinkNavigation to={item.link} active={checkActive(item.link)} key={item.name}>
                            {item.name}
                        </LinkNavigation>
                    ))}
                </Content>
                <div />
            </Container>
        </NavbarContainer>
    );
};

export default Navbar;
