import { readFile } from "../../../utils.deno.ts";

function getMultsWithDisabledAndEnabledStates(input: string) {
  const regex = /mul\((\d+),(\d+)\)|do\(\)|don'?t\(\)/g;
  const matches = [...input.matchAll(regex)];
  let enabled = true;
  let result = 0;

  for (const match of matches) {
    const [action, num1, num2] = match;
    if (num1 && num2 && enabled) {
      result += Number(num1) * Number(num2);
    } else {
      enabled = action === "do()";
    }
  }

  return result;
}

const lines = await readFile("../../inputs/day03.input.txt");
const input = lines.join("");

console.log(getMultsWithDisabledAndEnabledStates(input));
