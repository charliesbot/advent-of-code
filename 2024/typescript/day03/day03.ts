import { readFile } from "../../../utils.deno.ts";

function getMults(input: string) {
  const regex = /mul\((\d+),(\d+)\)/g;
  const matches = [...input.matchAll(regex)];

  return matches.reduce((acc, match) => {
    return acc + Number(match[1]) * Number(match[2]);
  }, 0);
}

const lines = await readFile("../../inputs/day03.input.txt");
const input = lines.join("");

console.log(getMults(input));
