import { getInputAsNumbers } from "./day02.utils.ts";

function getSafeReports(input: number[][]) {
  const DELTA = 3;
  let safeReports = 0;

  for (let i = 0; i < input.length; i++) {
    const currentLine = input[i];
    let baseIsPositive: boolean | null = null;
    let isSafe = true;

    for (let j = 1; j < currentLine.length; j++) {
      const diff = currentLine[j] - currentLine[j - 1];
      if (diff === 0 || Math.abs(diff) > DELTA) {
        isSafe = false;
        break;
      }

      let currentIsPositive = diff > 0;

      if (baseIsPositive === null) {
        baseIsPositive = currentIsPositive;
      } else if (baseIsPositive !== currentIsPositive) {
        isSafe = false;
        break;
      }
    }

    if (isSafe) {
      safeReports++;
    }
  }
  return safeReports;
}

const input = await getInputAsNumbers();
console.log(getSafeReports(input));
