import { getInputAsArrayOfNumbers } from "./day09.utils.ts";

function getExpandedInput(input: number[]) {
  const expandedArray: string[] = [];
  let currentDigit = -1;
  let currentSymbol: "INTEGER" | "SYMBOL" = "INTEGER";
  for (const counter of input) {
    if (currentSymbol === "INTEGER") {
      currentDigit++;
    }

    const symbol = currentSymbol === "INTEGER" ? currentDigit.toString() : ".";

    // expand symbol
    for (let i = 0; i < counter; i++) {
      expandedArray.push(symbol);
    }

    currentSymbol = currentSymbol === "INTEGER" ? "SYMBOL" : "INTEGER";
  }

  return expandedArray;
}

function moveBlocks(blocks: string[]) {
  let left = 0;
  let right = blocks.length - 1;
  while (left < right) {
    if (blocks[left] !== ".") {
      left++;
    } else {
      if (blocks[right] !== ".") {
        blocks[left] = blocks[right];
        blocks[right] = ".";
        left++;
        right--;
      } else {
        right--;
      }
    }
  }

  return blocks;
}

function getChecksum(blocks: string[]) {
  let digit = 0;
  let sum = 0;
  for (const block of blocks) {
    if (block === ".") {
      break;
    }
    sum += digit * Number(block);
    digit++;
  }
  return sum;
}

function getResult(input: number[]) {
  const expandedInput = getExpandedInput(input);
  moveBlocks(expandedInput);
  return getChecksum(expandedInput);
}

const data = await getInputAsArrayOfNumbers();
console.log(getResult(data));
