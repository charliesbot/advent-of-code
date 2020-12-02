import { getInputLines } from "../../utils.ts";

const getResult = async () => {
  const lines = await getInputLines("./day01.input.txt");

  const hash: { [key: string]: number } = {};
  const goal = 2020;

  for (let i = 0; i < lines.length; i++) {
    const current = lines[i];
    const currentAsNumber = parseInt(current);

    if (hash.hasOwnProperty(current)) {
      const previous = hash[current];
      const result = currentAsNumber * previous;
      console.log("rteeest ", result);
      return result;
    }

    const diff = goal - currentAsNumber;
    hash[diff] = currentAsNumber;
  }
};

const result = await getResult();

console.log(result);
