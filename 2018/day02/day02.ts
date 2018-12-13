import { input } from "./day02.input";

const getCounters = (word: string) => {
  const hash = {};
  for (let j = 0; j < word.length; j++) {
    const letter = word[j];
    hash[letter] = hash[letter] || 0;
    hash[letter]++;
  }

  const keys = Object.keys(hash);
  const result = { two: 0, three: 0 };
  for (let j = 0; j < keys.length; j++) {
    const key = keys[j];
    if (hash[key] === 2) {
      result.two = 1;
    }

    if (hash[key] === 3) {
      result.three = 1;
    }

    if (result.two === 1 && result.three === 1) {
      break;
    }
  }

  return result;
};

const getCheckSum = (boxIds: string[]) => {
  let twoFactor = 0;
  let threeFactor = 0;
  for (let i = 0; i < boxIds.length; i++) {
    const { two, three } = getCounters(boxIds[i]);
    twoFactor += two;
    threeFactor += three;
  }

  return twoFactor * threeFactor;
};

console.log(getCheckSum(input));
