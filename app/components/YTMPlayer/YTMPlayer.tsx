import cl from './YTMPlayer.module.scss';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react/src';
import { io, Socket } from 'socket.io-client';
import { Song, YTMCurrentState } from '@/common/types/YTM';
import { useEffect, useState } from 'react';
import { msToHuman } from '@/common/utils/msToHuman';
import { enableStaticRendering } from 'mobx-react';

// TODO: optimize, add requesting lastYTMData on server side, so we can show first ytm data as fast as we can
class YTMStore {
  public song: Song | null = null;
  public isPlaying = false;
  public mPosition = 0;

  private start = 0;
  private socket: Socket;

  constructor() {
    makeAutoObservable(this);

    this.socket = io(import.meta.env.VITE_SERVER_URL);

    this.socket.on('connect', () => {
      console.log('Connected to server!');
    });

    this.socket.on('ytm:new-current-state', (data: YTMCurrentState) => {
      if (!data) {
        this.resetData();

        return;
      }

      this.setData(data);
    });
  }

  get position(): number {
    let pos = this.mPosition;

    if (this.isPlaying) {
      pos += Date.now() - this.start;
    }

    return pos;
  }

  set position(p: number) {
    this.mPosition = p * 1000;

    this.start = Date.now();
  }

  setData(data: YTMCurrentState) {
    if (data.song) {
      this.song = data.song;
      this.position = data.song.elapsedSeconds ?? 0;
    }

    if (data.isPlaying != null) {
      this.isPlaying = data.isPlaying;
    }

    if (data.position && data.position !== this.position) {
      this.position = data.position ?? 0;
    }
  }

  resetData() {
    this.song = null;
    this.isPlaying = false;
    this.position = 0;
    this.start = 0;
  }
}

const ytmStore = new YTMStore();

enableStaticRendering(true);

export const loader = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/last-ytm-data`,
  ).catch(() => null);

  // eslint-disable-next-line no-unsafe-optional-chaining
  const lastYTMData = (await response?.json()).catch(() => null);

  // if (lastYTMData) {
  //   ytmStore.setData(lastYTMData);
  // }
};

export const YTMPlayer = observer(() => {
  const { song, isPlaying } = ytmStore;

  const [position, setPosition] = useState<number>(0);

  useEffect(() => {
    if (isPlaying) {
      setPosition(ytmStore.position);

      const interval = setInterval(() => {
        setPosition((p) => p + 1000);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [ytmStore.mPosition]);

  console.log('song', song);
  if (!song) {
    return null;
  }

  const songDuration = song.songDuration * 1000;

  return (
    <a
      target={'_blank'}
      rel={'noreferrer'}
      href={song.url}
      className={cl.container}
    >
      {song.imageSrc && (
        <img className={cl.albumImage} src={song.imageSrc} alt="Album Image" />
      )}
      <div className={cl.infoContainer}>
        <div>
          <h3 className={cl.title}>{song.title}</h3>
          <h4 className={cl.artist}>by {song.artist}</h4>
        </div>
        <div className={cl.seekBarContainer}>
          <span>{msToHuman(position)}</span>
          <div className={cl.seekBar}>
            <div
              style={{
                width: `${Math.floor((position / songDuration) * 100)}%`,
              }}
              className={cl.progressBar}
            />
          </div>
          <span>{msToHuman(songDuration)}</span>
        </div>
      </div>
    </a>
  );
});
