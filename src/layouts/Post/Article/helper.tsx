/* eslint-disable react/no-children-prop */
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeSyntax: React.FC<any> = ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
        <SyntaxHighlighter
            children={String(children).replace(/\n$/, '')}
            style={atelierDuneDark}
            language={match[1]}
            PreTag="div"
            showLineNumbers
            {...props}
        />
    ) : (
        <code className={className} {...props}>
            {children}
        </code>
    );
};

export { CodeSyntax };
