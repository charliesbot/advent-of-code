import { readFile } from "../../../utils.deno.ts";

export async function getInputAsArrayOfNumbers(): Promise<number[]> {
  const lines = await readFile("../../inputs/day09.input.txt");
  const output: number[][] = [];
  lines.forEach((line: string) => {
    const numbers = line.trim().split("").map(Number);
    output.push(numbers);
  });

  return output[0];
}
