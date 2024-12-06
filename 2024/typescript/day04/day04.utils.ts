import { readFile } from "../../../utils.deno.ts";

export async function getInputAsGrid() {
  const grid: string[][] = [];
  const lines = await readFile("../../inputs/day04.input.txt");

  for (const line of lines) {
    grid.push(line.split(""));
  }

  return grid;
}
