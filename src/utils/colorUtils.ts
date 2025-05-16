export function generateColorPair(level: number) {
  const baseHue = Math.floor(Math.random() * 360);
  const lightness = 50 + Math.random() * 10;

  const diff = Math.max(12 - level * 0.3, 6);

  const base = `hsl(${baseHue}, 60%, ${lightness}%)`;
  const odd = `hsl(${baseHue}, 60%, ${lightness + (Math.random() > 0.5 ? diff : -diff)}%)`;

  return { base, odd };
}
