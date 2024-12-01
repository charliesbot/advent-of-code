import { readFile } from "../../../utils.deno.ts";

async function getSimilarityScore(left: number[], right: number[]) {
  const scores = {};
  let finalScore = 0;
  right.forEach((r) => {
    scores[r] = scores[r] ?? 0;
    scores[r]++;
  });
  left.forEach((l) => {
    finalScore += l * (scores[l] ?? 0);
  });
  return finalScore;
}

const leftList: number[] = [];
const rightList: number[] = [];

const lines = await readFile("./day01.input.txt");
lines.forEach((line) => {
  const [left, right] = line.trim().split(/\s+/).map(Number);
  leftList.push(left);
  rightList.push(right);
});

console.log(await getSimilarityScore(leftList, rightList));
