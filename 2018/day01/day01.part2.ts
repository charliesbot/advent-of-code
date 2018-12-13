import { input } from "./day01.input";

const getFinalFrequency = (frequencies: number[]) => {
  const set = new Set();
  let counter = 0;
  let index = 0;
  while (true) {
    if (index === frequencies.length) {
      index = 0;
    }

    counter += frequencies[index];
    if (set.has(counter)) {
      return counter;
    }

    set.add(counter);
    index++;
  }
};

console.log(getFinalFrequency(input));
