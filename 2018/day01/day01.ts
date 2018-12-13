import { input } from "./day01.input";

const getFinalFrequency = (frequencies: number[]) => {
  return frequencies.reduce((acum, current) => {
    return acum + current;
  }, 0);
};

console.log(getFinalFrequency(input));
