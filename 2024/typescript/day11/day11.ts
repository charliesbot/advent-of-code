import { getInput } from "./day11.utils.ts";

function getStonesByRule(stone: string) {
  if (stone === "0") {
    return ["1"];
  }

  if (stone.length % 2 === 0) {
    const left = Number(stone.slice(0, stone.length / 2)).toString();
    const right = Number(stone.slice(stone.length / 2)).toString();
    return [left, right];
  }

  const stoneNumber = Number(stone) * 2024;
  return [stoneNumber.toString()];
}

function getNumberOfStones(input: string[], numberOfBlinks: number) {
  let lineOfStones: string[] = [...input];
  for (let i = 0; i < numberOfBlinks; i++) {
    let tempLineOfStones: string[] = [];
    lineOfStones.forEach((stone) => {
      tempLineOfStones.push(...getStonesByRule(stone));
    });
    lineOfStones = tempLineOfStones;
  }

  return lineOfStones.length;
}

const input = await getInput();
console.log(getNumberOfStones(input, 25));
