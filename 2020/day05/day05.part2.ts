import { getInputLines } from "../../utils.ts";

const binarySearch = (steps: string) => {
  let front = 0;
  let back = 127;
  let left = 0;
  let right = 7;

  let index = -1;

  while (index <= steps.length) {
    index++;
    const current = steps[index];
    if (current === "F") {
      back = Math.floor((front + back) / 2);
    }

    if (current === "B") {
      front = Math.ceil((front + back) / 2);
    }

    if (current === "L") {
      right = Math.floor((left + right) / 2);
    }

    if (current === "R") {
      left = Math.ceil((left + right) / 2);
    }
  }

  return back * 8 + left;
};

const getResult = async () => {
  const lines = await getInputLines("./day05.input.txt");
  let max = -Infinity;
  let min = Infinity;
  const seats: Set<number> = new Set();
  for (const line of lines) {
    const val = binarySearch(line);
    seats.add(val);
    min = Math.min(val, min);
    max = Math.max(val, max);
  }

  let mySeat;

  for (let i = min; i <= max; i++) {
    if (!seats.has(i)) {
      mySeat = i;
      break;
    }
  }

  return mySeat;
};

const result = await getResult();

console.log(result);
