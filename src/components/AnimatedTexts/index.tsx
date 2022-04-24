import React, { useEffect, useState } from 'react';
import { changeText } from './helper';

interface AnimatedTextsProps {
    texts: string[];
}

const AnimatedTexts: React.FC<AnimatedTextsProps> = ({ texts }) => {
    const [id, setId] = useState(0);
    const [text, setText] = useState('');

    const updateAnimatedTexts = () => {
        changeText(setText, texts).then(() => {
            const timeoutId = setTimeout(() => {
                updateAnimatedTexts();
            }, 1500);

            setId(timeoutId);
        });
    };

    useEffect(() => {
        updateAnimatedTexts();

        return () => {
            setText('');
            clearTimeout(id);
        };
    }, []);

    // return <p dangerouslySetInnerHTML={{ __html: text }} />;
    return <p>Desenvolvedor Full-Stack</p>;
};

export default AnimatedTexts;
