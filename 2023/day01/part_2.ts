import { getInputLines } from "../../utils_bun";

const dict = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

function isNumber(maybeNumber: string) {
  return !isNaN(parseInt(maybeNumber));
}

function getLeftNumber(line: string, index: number) {
  if (isNumber(line[index])) {
    return line[index];
  }
  return (
    dict[line.slice(index, index + 3)] ??
    dict[line.slice(index, index + 4)] ??
    dict[line.slice(index, index + 5)]
  );
}

function getRightNumber(line: string, index: number) {
  if (isNumber(line[index])) {
    return line[index];
  }
  return (
    dict[line.slice(index - 3, index)] ??
    dict[line.slice(index - 4, index)] ??
    dict[line.slice(index - 5, index)]
  );
}

async function getSumOfFirstAndLastDigit() {
  const lines = await getInputLines("./input.txt");
  let finalResult: number = 0;
  for (const line of lines) {
    let leftIndex = 0;
    let rightIndex = line.length;
    let result: (string | undefined)[] = [undefined, undefined];
    while (leftIndex <= line.length) {
      if (result[0] == undefined) {
        let leftWord = getLeftNumber(line, leftIndex);
        result[0] = leftWord;
      }
      if (result[1] == undefined) {
        let rightWord = getRightNumber(line, rightIndex);
        result[1] = rightWord;
      }
      if (result[0] && result[1]) {
        break;
      }
      leftIndex++;
      rightIndex--;
    }
    finalResult += parseInt(result[0]! + result[1]!);
  }

  return finalResult;
}

let a = await getSumOfFirstAndLastDigit();
console.log(a);
