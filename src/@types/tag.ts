export interface Tag {
    name: string;
    color: string;
}

interface TagAttributes {
    name: string;
    color: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
}

export interface TagGet {
    id: number;
    attributes: TagAttributes;
}

export interface TagsGetApi {
    data: TagGet[];
}
