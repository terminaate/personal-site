export type AlbumArtist = {
  name: string;
  url: string;
};

export type AlbumImage<T extends string> = {
  size: T;
  '#text': string;
};

export type Album = {
  artist: AlbumArtist;
  image: [
    AlbumImage<'small'>,
    AlbumImage<'medium'>,
    AlbumImage<'large'>,
    AlbumImage<'extralarge'>,
  ];
  url: string;
  name: string;
};
