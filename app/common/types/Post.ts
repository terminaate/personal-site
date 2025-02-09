type BasePostMetaInfo = {
  published: boolean;
  name: string;
  description: string;
  date: string;
};

export type Post = BasePostMetaInfo & {
  slug: string;
};
