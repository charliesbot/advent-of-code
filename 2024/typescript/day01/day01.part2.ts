import { getListsAsNumbers } from "./day01.utils.ts";

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

const { leftList, rightList } = await getListsAsNumbers();

console.log(await getSimilarityScore(leftList, rightList));
