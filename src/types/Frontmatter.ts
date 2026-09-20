import type { MarkdownInstance } from 'astro';

export type IFrontmatter = {
  title: string;
  description: string;
  pubDate: string;
  imgSrc: string;
  imgAlt: string;
  url?: string;
};

export type IPost = MarkdownInstance<IFrontmatter>;

export type FrontmatterPage = {
  data: IPost[];
  start: number;
  end: number;
  total: number;
  currentPage: number;
  size: number;
  lastPage: number;
  url: {
    current: string;
    next?: string;
    prev?: string;
  };
};
