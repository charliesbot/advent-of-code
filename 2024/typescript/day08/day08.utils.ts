import { readFile } from "../../../utils.deno.ts";

export type Matrix = string[][];

export async function getInputAsMatrix(): Promise<Matrix> {
  const lines = await readFile("../../inputs/day08.input.txt");
  const matrix: Matrix = [];
  lines.forEach((line) => {
    matrix.push(line.trim().split(""));
  });

  return matrix;
}

export type Position = [number, number];

export function getFrequenciesPositions(matrix: Matrix) {
  const hashMap: { [key: string]: Position[] } = {};
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      const current = matrix[row][column];
      if (current !== ".") {
        hashMap[current] = hashMap[current] || [];
        hashMap[current].push([row, column]);
      }
    }
  }

  return hashMap;
}
