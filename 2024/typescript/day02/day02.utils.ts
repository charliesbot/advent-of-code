import { readFile } from "../../../utils.deno.ts";

export async function getInputAsNumbers(): Promise<number[][]> {
  const lines = await readFile("../../inputs/day02.input.txt");
  const result: number[][] = [];
  lines.forEach((line) => {
    result.push(line.split(" ").map(Number));
  });

  return result;
}
