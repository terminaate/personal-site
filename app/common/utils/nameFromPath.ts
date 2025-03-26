export function nameFromPath(path: string) {
  return path.split('/').slice(-2)[0].split('.')[0].replace(/^\++/, '');
}
