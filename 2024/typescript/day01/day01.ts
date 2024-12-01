import { getListsAsNumbers } from "./day01.utils.ts";

async function totalDistanceBetweenLists(left: number[], right: number[]) {
  left.sort((a, b) => a - b);
  right.sort((a, b) => a - b);
  let totalDistance = 0;

  for (let i = 0; i < left.length; i++) {
    totalDistance += Math.abs(left[i] - right[i]);
  }

  return totalDistance;
}

const { leftList, rightList } = await getListsAsNumbers();
console.log(await totalDistanceBetweenLists(leftList, rightList));
