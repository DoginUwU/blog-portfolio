interface TagAttributes {
    name: string;
    color: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
}

interface TagData {
    id: number;
    attributes: TagAttributes;
}

interface Tags {
    data: TagData[];
}

interface AuthorAttributes {
    firstname: string;
    lastname: string;
    username: string;
    preferedLanguage?: any;
    createdAt: Date;
    updatedAt: Date;
}

interface AuthorData {
    id: number;
    attributes: AuthorAttributes;
}

interface Author {
    data: AuthorData;
}

interface ProviderMetadata {
    public_id: string;
    resource_type: string;
}

interface Large {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path?: any;
    size: number;
    width: number;
    height: number;
    provider_metadata: ProviderMetadata;
}

interface ProviderMetadata2 {
    public_id: string;
    resource_type: string;
}

interface Small {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path?: any;
    size: number;
    width: number;
    height: number;
    provider_metadata: ProviderMetadata2;
}

interface ProviderMetadata3 {
    public_id: string;
    resource_type: string;
}

interface Medium {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path?: any;
    size: number;
    width: number;
    height: number;
    provider_metadata: ProviderMetadata3;
}

interface ProviderMetadata4 {
    public_id: string;
    resource_type: string;
}

interface Thumbnail {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path?: any;
    size: number;
    width: number;
    height: number;
    provider_metadata: ProviderMetadata4;
}

interface Formats {
    large: Large;
    small: Small;
    medium: Medium;
    thumbnail: Thumbnail;
}

interface ProviderMetadata5 {
    public_id: string;
    resource_type: string;
}

interface ImageAttributes {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: any;
    provider: string;
    provider_metadata: ProviderMetadata5;
    createdAt: Date;
    updatedAt: Date;
}

interface ImageData {
    id: number;
    attributes: ImageAttributes;
}

interface Image {
    data: ImageData;
}

interface Content {
    id: number;
    __component: string;
    text: string;
    title: string;
}

interface PostAttributes {
    title: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    short_description: string;
    tags: Tags;
    author: Author;
    image: Image;
    content?: Content[];
}

export interface PostGet {
    id: number;
    attributes: PostAttributes;
}

interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

interface Meta {
    pagination: Pagination;
}

export interface PostsGetApi {
    data: PostGet[];
    meta: Meta;
}

export interface Post {
    title: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    short_description: string;
    tags: TagAttributes[];
    author: AuthorAttributes;
    image: string;
    content?: Content[];
}
