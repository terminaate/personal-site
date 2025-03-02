import { useEffect, useRef } from 'react';
import { useLoaderData } from '@remix-run/react';
import { AppData } from '@remix-run/react/dist/data';
import { SerializeFrom } from '@remix-run/node';

export const useAnimatedLoaderData = <T = AppData>(): SerializeFrom<T> => {
  const lastMessage = useRef<T>({} as unknown as T);
  const data = useLoaderData<T>() || lastMessage.current;

  useEffect(() => {
    if (data) {
      lastMessage.current = data;
    }
  }, [data]);

  return data as SerializeFrom<T>;
};
