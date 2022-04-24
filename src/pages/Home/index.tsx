import React, { useEffect, useState } from 'react';
import GlobalLayout from '../../layouts/Global';

import { Post as IPost } from '../../@types/post';
import { getAllPosts } from '../../network/lib/post';
import Post from '../../layouts/Global/Post';
import Loading from '../../components/Loading';

const Home: React.FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getAllPosts().then(setPosts);
    }, []);

    return (
        <GlobalLayout>
            {posts.map((post) => (
                <Post key={post.slug} data={post} />
            ))}

            {!posts.length && <Loading />}
        </GlobalLayout>
    );
};

export default Home;
