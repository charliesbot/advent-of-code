import { readFile } from "../../../utils.deno.ts";

export type Matrix = string[][];

export async function getInputAsMatrix(): Promise<Matrix> {
  const lines = await readFile("../../inputs/day12.input.txt");
  const matrix: Matrix = [];
  lines.forEach((line) => {
    matrix.push(line.split(""));
  });
  return matrix;
}
