import Color from 'color';
import styled from 'styled-components';

interface ContainerProps {
    color?: string;
}

const Container = styled.div<ContainerProps>`
    width: fit-content;
    background-color: ${({ theme, color }) => color ?? theme.colors.semantic.blue};
    color: ${({ theme, color }) => (Color(color).isDark() ? theme.colors.white : theme.colors.black)};
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        opacity: 0.8;
    }
`;

export { Container };
