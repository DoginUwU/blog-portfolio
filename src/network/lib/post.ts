import qs from 'qs';
import { Post, PostGet, PostsGetApi } from '../../@types/post';
import { api } from '../../services/axios';

const convertStrapiPostToPost = (post: PostGet): Post => {
    const { createdAt, publishedAt, updatedAt, author, image, tags, ...rest } = post.attributes;

    return {
        createdAt: new Date(createdAt),
        updatedAt: new Date(updatedAt),
        publishedAt: new Date(publishedAt),
        author: author.data.attributes,
        image: image.data.attributes.url,
        tags: tags.data.map((tag) => tag.attributes),
        ...rest,
    };
};

const getAllPosts = async (filters?: any): Promise<Post[]> => {
    const query = qs.stringify({
        populate: ['image', 'author', 'tags'],
        filters,
    });
    const response = await api.get<PostsGetApi>(`posts?${query}`);

    const responsePosts = response.data.data.map(convertStrapiPostToPost);

    return responsePosts;
};

const getPostBySlug = async (slug: string): Promise<Post | undefined> => {
    const query = qs.stringify({
        populate: '*',
        filters: {
            slug: {
                $eq: slug,
            },
        },
    });
    const response = await api.get<PostsGetApi>(`posts?${query}`);

    if (!response.data.data.length) return undefined;

    const responsePost = convertStrapiPostToPost(response.data.data[0]);

    return responsePost;
};

export { getAllPosts, getPostBySlug };
