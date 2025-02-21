import { createRequestHandler } from '@remix-run/express';
import express from 'express';
import type { ServerBuild } from '@remix-run/node';
import 'dotenv/config';
import { YTMCurrentState } from '@/common/types/YTM';
import * as http from 'node:http';
import { Server } from 'socket.io';

const viteDevServer =
  process.env.NODE_ENV === 'production'
    ? null
    : await import('vite').then((vite) =>
        vite.createServer({
          server: { middlewareMode: true },
        }),
      );

const app = express();
app.use(
  viteDevServer ? viteDevServer.middlewares : express.static('build/client'),
);
const server = http.createServer(app);
const io = new Server(server);

let lastData: YTMCurrentState;

io.on('connection', (socket) => {
  socket.emit('ytm:new-current-state', lastData ?? null);

  socket.on('ytm:update-current-state', (data: YTMCurrentState) => {
    lastData = data;

    if (socket.handshake.auth.secretKey !== process.env.YTM_UPDATE_KEY) {
      console.log(
        `invalid auth token provided: ${socket.handshake.auth.secretKey}`,
      );
      return;
    }

    socket.broadcast.emit('ytm:new-current-state', data);
  });
});

// GOD, MY EYES
const build = viteDevServer
  ? () =>
      viteDevServer.ssrLoadModule(
        'virtual:remix/server-build',
      ) as Promise<ServerBuild>
  : // @ts-ignore
    ((await import('./build/server/index.js')) as ServerBuild);

app.all('*', createRequestHandler({ build }));

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log('App listening on http://localhost:3000');
});
