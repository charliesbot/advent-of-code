import { readFile } from "../../../utils.deno.ts";

export async function getInput(): Promise<string[]> {
  const lines = await readFile("../../inputs/day11.input.txt");
  const lineOfStones: string[] = [];
  lines.forEach((line) => {
    lineOfStones.push(...line.split(" "));
  });
  return lineOfStones;
}
