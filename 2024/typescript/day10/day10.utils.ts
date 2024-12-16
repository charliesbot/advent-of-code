import { readFile } from "../../../utils.deno.ts";

export async function getInputAsMatrix() {
  const lines = await readFile("../../inputs/day10.input.txt");
  const output: number[][] = [];
  lines.forEach((line: string) => {
    const numbers = line.trim().split("").map(Number);
    output.push(numbers);
  });

  return output;
}

export type TrailHeads = [number, number][];
export const getTrailHeads = (matrix: number[][]): TrailHeads => {
  const trailHeads: TrailHeads = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      if (matrix[row][column] === 0) {
        trailHeads.push([row, column]);
      }
    }
  }

  return trailHeads;
};
