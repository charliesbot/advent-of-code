import { getInputLines } from "../../utils.ts";

const previousSum = (array: number[], expected: number) => {
  let acum = 0;
  let minIndex = 0;
  let maxIndex = 0;

  while (maxIndex < array.length) {
    const current = array[maxIndex];
    acum += current;

    if (acum === expected) {
      const newList = array.slice(minIndex, maxIndex + 1);
      const min = Math.min(...newList);
      const max = Math.max(...newList);
      return min + max;
    }

    if (acum > expected) {
      acum = 0;
      maxIndex = minIndex + 1;
      minIndex = maxIndex;
      continue;
    }

    maxIndex++;
  }

  return [-1, -1];
};

const twoSum = (array: number[], expected: number) => {
  const hash: { [key: number]: number } = {};

  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const diff = expected - current;
    if (hash.hasOwnProperty(current)) {
      return true;
    }

    hash[diff] = i;
  }

  return false;
};

const getResult = async (preamble: number) => {
  const lines = await getInputLines("./day09.input.txt");
  let init = 0;
  const numbers = lines.map((x) => parseInt(x));

  for (let i = preamble; i < numbers.length; i++) {
    const sliced = numbers.slice(init, init + preamble);
    const expected = numbers[i];

    if (twoSum(sliced, expected)) {
      init++;
      continue;
    }

    // failed paired
    return previousSum(numbers, expected);
  }

  return -1;
};

const result = await getResult(25);

console.log(result);
