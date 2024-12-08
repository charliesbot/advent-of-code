import { readFile } from "../../../utils.deno.ts";

export type Matrix = string[][];

export async function getInputAsMatrix(): Promise<Matrix> {
  const lines = await readFile("../../inputs/day06.input.txt");
  const matrix: Matrix = [];
  lines.forEach((line) => {
    matrix.push(line.trim().split(""));
  });

  return matrix;
}

type GuardStartPosition = [number, number];
export function getGuardStartPosition(matrix: Matrix): GuardStartPosition {
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] === "^") {
        matrix[i][j] = "*"; // remove the guard
        return [i, j];
      }
    }
  }

  throw new Error("Guard start position not found");
}
