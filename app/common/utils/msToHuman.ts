export function msToHuman(ms: number) {
  const minutes = ms / 1000 / 60;
  const m = Math.floor(minutes);
  const s = Math.floor((minutes - m) * 60);
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}
