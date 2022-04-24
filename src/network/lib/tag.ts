import { Tag, TagGet, TagsGetApi } from '../../@types/tag';
import { api } from '../../services/axios';

const convertStrapiTagToTag = (tag: TagGet): Tag => {
    const { name, color } = tag.attributes;

    return {
        name,
        color,
    };
};

const getAllTags = async (): Promise<Tag[]> => {
    const response = await api.get<TagsGetApi>('tags');

    const responseTags = response.data.data.map(convertStrapiTagToTag);

    return responseTags;
};

export { getAllTags };
