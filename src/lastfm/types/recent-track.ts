import type { AlbumImage } from './album';

type RecentTrackArtist = {
  mbid: string;
  '#text': string;
};

export type RecentTrack = {
  artist: RecentTrackArtist;
  image: [
    AlbumImage<'small'>,
    AlbumImage<'medium'>,
    AlbumImage<'large'>,
    AlbumImage<'extralarge'>,
  ];
  name: string;
  url: string;
  '@attr'?: {
    nowplaying?: boolean;
  };
};
