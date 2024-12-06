import { getInputAsNumbers } from "./day02.utils.ts";

function analyzeLevels(input: number[], excludedIndex: number) {
  let baseIsIncreasing: boolean | null = null;
  let initialJ = excludedIndex === 0 ? 2 : 1;
  const DELTA = 3;

  if (excludedIndex > input.length) {
    return false;
  }

  let isSafe = true;

  for (let j = initialJ; j < input.length; j++) {
    if (j === excludedIndex) {
      continue;
    }

    const prevDiffIndex = j - 1 === excludedIndex ? 2 : 1;

    const diff = input[j] - input[j - prevDiffIndex];
    if (diff === 0 || Math.abs(diff) > DELTA) {
      isSafe = false;
      break;
    }

    let currentIsIncreasing = diff > 0;

    if (baseIsIncreasing === null) {
      baseIsIncreasing = currentIsIncreasing;
    } else if (baseIsIncreasing !== currentIsIncreasing) {
      isSafe = false;
      break;
    }
  }

  return isSafe ? true : analyzeLevels(input, excludedIndex + 1);
}

function getSafeReports(input: number[][]) {
  let safeReports = 0;

  for (let i = 0; i < input.length; i++) {
    const currentLine = input[i];
    if (analyzeLevels(currentLine, -1)) {
      safeReports++;
    }
  }
  return safeReports;
}

const input = await getInputAsNumbers();
console.log(getSafeReports(input));
