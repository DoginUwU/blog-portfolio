import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Post as IPost } from '../../@types/post';
import Loading from '../../components/Loading';

import GlobalLayout from '../../layouts/Global';
import Article from '../../layouts/Post/Article';
import Bookmarks from '../../layouts/Post/Bookmarks';
import { getPostBySlug } from '../../network/lib/post';

const Post: React.FC = () => {
    const navigate = useNavigate();
    const { slug } = useParams();
    const [post, setPost] = useState<IPost>();

    useEffect(() => {
        if (!slug) {
            navigate('/');
            return;
        }

        getPostBySlug(slug).then((response) => {
            if (!response) navigate('/');

            setPost(response);
        });
    }, [slug]);

    if (!post) return <Loading />;

    return (
        <GlobalLayout rightChildren={<Bookmarks />}>
            <Article data={post} />
        </GlobalLayout>
    );
};

export default Post;
