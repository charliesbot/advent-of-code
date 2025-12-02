export async function readInput(): Promise<[string, number][]> {
  const inputPath = `${import.meta.dir}/../../input/day01.txt`;
  const file = Bun.file(inputPath);
  const text = await file.text();

  const lines = text
    .split(/\r?\n/)
    .filter((line) => line.length > 0)
    .map((row: string): [string, number] => {
      const direction = row.slice(0, 1);
      const value = row.slice(1);
      return [direction, Number(value)];
    });

  return lines;
}
