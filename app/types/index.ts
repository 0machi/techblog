import type { MicroCMSImage, MicroCMSDate } from 'microcms-js-sdk';

export type Category = {
    id: string;
    name: string;
} & MicroCMSDate;

export type Blog = {
    id: string;
    title: string;
    author: string;
    content: string;
    eyecatch?: MicroCMSImage;
    categories: Category[];
} & MicroCMSDate;
