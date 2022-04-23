import React, { useEffect, useState } from 'react';
import { changeText } from './helper';

import { Container } from './styles';

interface AnimatedTextsProps {
    texts: string[];
}

const AnimatedTexts: React.FC<AnimatedTextsProps> = ({ texts }) => {
    const [text, setText] = useState('');

    const updateAnimatedTexts = () => {
        changeText(setText, texts).then(() => {
            setTimeout(() => {
                updateAnimatedTexts();
            }, 1500);
        });
    };

    useEffect(() => {
        updateAnimatedTexts();
    }, []);

    return <p dangerouslySetInnerHTML={{ __html: text }} />;
};

export default AnimatedTexts;
