import type { MicroCMSDate, MicroCMSImage } from 'microcms-js-sdk'

export type Category = {
  id: string;
  name: string;
} & MicroCMSDate;

export type Article = {
  id: string;
  title: string;
  author: string;
  summary: string;
  content: string;
  eyecatch?: MicroCMSImage;
  categories: Category[];
} & MicroCMSDate;

export type Service = {
  name: string
  url: string
}

export type Toc = {
  text: string
  id: string
  name: string
}[]
