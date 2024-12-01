import { readFile } from "../../../utils.deno.ts";

export async function getListsAsNumbers() {
  const leftList: number[] = [];
  const rightList: number[] = [];
  const lines = await readFile("./day01.input.txt");
  lines.forEach((line) => {
    const [left, right] = line.trim().split(/\s+/).map(Number);
    leftList.push(left);
    rightList.push(right);
  });

  return { leftList, rightList };
}
