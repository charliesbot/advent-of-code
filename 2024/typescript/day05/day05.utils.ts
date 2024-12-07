import { readFile } from "../../../utils.deno.ts";

export type Rules = Record<number, Set<number>>;

export async function getRulesAndInput() {
  const lines = await readFile("../../inputs/day05.input.txt");
  const input: number[][] = [];
  const rules: Record<number, Set<number>> = {};
  let index = 0;
  for (index = 0; index < lines.length; index++) {
    if (lines[index] === "") {
      break;
    }
    const [left, right] = lines[index].split("|").map(Number);
    rules[left] = rules[left] || new Set();
    rules[left].add(right);
  }
  for (index = index + 1; index < lines.length; index++) {
    input.push(lines[index].split(",").map(Number));
  }

  return { rules, input };
}

export function isPageValid(page: number[], rules: Rules) {
  for (let i = 0; i < page.length; i++) {
    const current = page[i];
    for (let j = i + 1; j < page.length; j++) {
      const next = page[j];
      if (rules[next]?.has(current)) {
        return false;
      }
    }
  }

  return true;
}

export function getMid(page: number[]) {
  return page[Math.floor(page.length / 2)];
}
