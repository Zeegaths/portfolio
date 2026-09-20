import type { IPost } from '@/types/Frontmatter';

export const sortByDate = (posts: IPost[]) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
  );
};
