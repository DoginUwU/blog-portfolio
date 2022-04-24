import Color from 'color';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ContainerProps {
    color?: string;
}

const Container = styled(Link)<ContainerProps>`
    width: fit-content;
    background-color: ${({ theme, color }) => color ?? theme.colors.semantic.blue};
    color: ${({ theme, color }) => (Color(color).isDark() ? theme.colors.white : theme.colors.black)};
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.2s;
    text-decoration: none;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;

    &:hover {
        opacity: 0.8;
    }
`;

export { Container };
