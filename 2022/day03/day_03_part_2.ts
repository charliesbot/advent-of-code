import { FileReader } from "../utils/fileReader.ts";

function groupByThree(
  items: string[],
  startIndex: number,
) {
  const group: string[][] = [];
  for (let i = startIndex; i < items.length; i += 6) {
    group.push(items.slice(i, i + 3));
  }
  return group;
}

function getCharValue(char: string): number {
  const ASCII = char.toUpperCase() === char ? 38 : 96;
  return char.charCodeAt(0) - ASCII;
}

function getPriority(group: string[]): number {
  const hash: Record<string, number> = {};
  let maxChar = "";
  for (let i = 0; i < group.length; i++) {
    const set = new Set(group[i]);
    set.forEach((x: string) => {
      hash[x] = hash[x] ?? 0;
      hash[x]++;
      if (hash[x] == 3) {
        maxChar = x;
      }
    });
  }
  return getCharValue(maxChar);
}

async function getItemTypeSumPriorities() {
  const lines = await FileReader.read("../inputs/day03.txt");
  const firstGroup = groupByThree(lines, 0);
  const secondGroup = groupByThree(lines, 3);
  let acum = 0;
  for (let index = 0; index < firstGroup.length; index++) {
    acum += getPriority(firstGroup[index]) + getPriority(secondGroup[index]);
  }
  return acum;
}

const a = await getItemTypeSumPriorities();
console.log(a);
