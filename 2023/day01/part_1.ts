import { getInputLines } from "../../utils_bun";

function isNumber(maybeNumber: string) {
  return !isNaN(parseInt(maybeNumber));
}

async function getSumOfFirstAndLastDigit() {
  const lines = await getInputLines("./input.txt");
  let finalResult: number = 0;
  for (const line of lines) {
    let leftIndex = 0;
    let rightIndex = line.length - 1;
    let currentResult: (string | undefined)[] = [undefined, undefined];
    while (leftIndex < line.length && rightIndex >= 0) {
      if (currentResult[0] == undefined && isNumber(line[leftIndex])) {
        currentResult[0] = line[leftIndex];
      }
      if (currentResult[1] == undefined && isNumber(line[rightIndex])) {
        currentResult[1] = line[rightIndex];
      }
      if (currentResult[0] && currentResult[1]) {
        break;
      }
      leftIndex++;
      rightIndex--;
    }
    finalResult += parseInt(currentResult[0]! + currentResult[1]!);
  }

  return finalResult;
}

let a = await getSumOfFirstAndLastDigit();
console.log(a);
