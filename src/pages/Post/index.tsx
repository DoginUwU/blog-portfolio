import React from 'react';

import GlobalLayout from '../../layouts/Global';
import Article from '../../layouts/Post/Article';
import Bookmarks from '../../layouts/Post/Bookmarks';

const Post: React.FC = () => (
    <GlobalLayout rightChildren={<Bookmarks />}>
        <Article />
    </GlobalLayout>
);

export default Post;
