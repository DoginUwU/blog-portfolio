import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GlobalLayout from '../../layouts/Global';

import { Post as IPost } from '../../@types/post';
import { getAllPosts } from '../../network/lib/post';
import Post from '../../layouts/Global/Post';
import Loading from '../../components/Loading';

const Tag: React.FC = () => {
    const { name } = useParams();
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getAllPosts({
            tags: {
                name: {
                    $in: name,
                },
            },
        }).then(setPosts);
    }, [name]);

    return (
        <GlobalLayout>
            {posts.map((post) => (
                <Post key={post.slug} data={post} />
            ))}

            {!posts.length && <Loading />}
        </GlobalLayout>
    );
};

export default Tag;
