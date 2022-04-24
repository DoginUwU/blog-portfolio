import React, { ReactElement } from 'react';
import { LinkProps } from 'react-router-dom';

import { Container } from './styles';

interface TagProps extends LinkProps {
    icon?: ReactElement;
    text: string;
    color?: string;
}

const Tag: React.FC<TagProps> = ({ text, icon, ...rest }) => (
    <Container {...rest}>
        <>
            {icon}
            {text}
        </>
    </Container>
);

export default Tag;
