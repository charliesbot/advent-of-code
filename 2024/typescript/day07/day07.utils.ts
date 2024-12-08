import { readFile } from "../../../utils.deno.ts";

export type Input = { result: number; numbers: number[] };

export async function getInputAsList(): Promise<Input[]> {
  const lines = await readFile("../../inputs/day07.input.txt");
  const resultList: { result: number; numbers: number[] }[] = [];
  lines.forEach((line) => {
    const [result, maybeNumbers] = line.split(":");
    const numbers = maybeNumbers.trim().split(" ").map(Number);
    resultList.push({ result: Number(result), numbers });
  });

  return resultList;
}
