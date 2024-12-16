import { getInputAsMatrix, getTrailHeads } from "./day10.utils.ts";

type TrailPosition = [number, number];

function dfs(
  input: number[][],
  trailPosition: TrailPosition,
  nextValidDigit: number,
  reached9: Set<string>
): number {
  const [row, column] = trailPosition;
  // Out of bounds
  if (input[row]?.[column] === undefined) {
    return 0;
  }

  const currentValue = input[row][column];

  if (currentValue !== nextValidDigit) {
    return 0;
  }

  if (
    nextValidDigit === 9 &&
    currentValue === 9 &&
    !reached9.has(`${row},${column}`)
  ) {
    reached9.add(`${row},${column}`);
    return 1;
  }

  return (
    dfs(input, [row + 1, column], nextValidDigit + 1, reached9) +
    dfs(input, [row - 1, column], nextValidDigit + 1, reached9) +
    dfs(input, [row, column + 1], nextValidDigit + 1, reached9) +
    dfs(input, [row, column - 1], nextValidDigit + 1, reached9)
  );
}

function getTrailHeadsScore(input: number[][]) {
  const trailHeads = getTrailHeads(input);
  let score = 0;
  for (const trailHead of trailHeads) {
    score += dfs(input, trailHead, 0, new Set());
  }
  return score;
}

const input = await getInputAsMatrix();
console.log(getTrailHeadsScore(input));
