import { readFile } from "../../../utils.deno.ts";

async function totalDistanceBetweenLists(left: number[], right: number[]) {
  left.sort((a, b) => a - b);
  right.sort((a, b) => a - b);
  let totalDistance = 0;

  for (let i = 0; i < left.length; i++) {
    totalDistance += Math.abs(left[i] - right[i]);
  }

  return totalDistance;
}

const leftList: number[] = [];
const rightList: number[] = [];

const lines = await readFile("./day01.input.txt");
lines.forEach((line) => {
  const [left, right] = line.trim().split(/\s+/).map(Number);
  leftList.push(left);
  rightList.push(right);
});

console.log(await totalDistanceBetweenLists(leftList, rightList));
