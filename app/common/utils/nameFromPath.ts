export function nameFromPath(path: string) {
  return path.split('/').slice(-1)[0].split('.')[0].replace(/^\++/, '');
}
