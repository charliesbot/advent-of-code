import { input } from "./day05.input";

const checkChars = (char1: string, char2: string) => {
  if (!char1 || !char2) {
    return false;
  }

  return Math.abs(char1.charCodeAt(0) - char2.charCodeAt(0)) === 32;
};

export const polymerCount = (polymer: string) => {
  const queue = [];

  for (let currentIndex = 0; currentIndex < polymer.length; currentIndex++) {
    const peek = queue[queue.length - 1];
    const current = polymer[currentIndex];
    if (checkChars(peek, current)) {
      queue.pop();
    } else {
      queue.push(current);
    }
  }

  return queue.length;
};

// console.log(polymerCount(input));
