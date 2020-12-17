import { getInputLines } from "../../utils.ts";

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

    return expected;
  }

  return -1;
};

const result = await getResult(25);

console.log(result);
