import React, { ReactElement } from 'react';

import { Container } from './styles';

interface TagProps {
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
