import { getInputAsGrid } from "./day04.utils.ts";

type Direction = [number, number];

const DIRECTIONS: Direction[] = [
  // X Diagonal
  [1, 1],
  [1, -1],
];

function getWordToCheck(letter: string) {
  if (letter === "M") {
    return "MAS";
  }
  return "SAM";
}

function numberOfXmas(grid: string[][]) {
  const dfs = (
    row: number,
    column: number,
    xmasIndex: number,
    wordToCheck: string,
    direction: Direction
  ) => {
    // Out of bounds
    if (!grid[row] || !grid[row][column]) {
      return 0;
    }

    // Wrong letter
    if (grid[row][column] !== wordToCheck[xmasIndex]) {
      return 0;
    }

    if (xmasIndex === wordToCheck.length - 1) {
      return 1;
    }

    const [rowOffset, columnOffset] = direction;
    return dfs(
      row + rowOffset,
      column + columnOffset,
      xmasIndex + 1,
      wordToCheck,
      direction
    );
  };

  let counter = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      if (grid[row][column] !== "X") {
        let xCheck =
          dfs(
            row,
            column,
            0,
            getWordToCheck(grid[row][column]),
            DIRECTIONS[0]
          ) +
          // Check the other diagonal
          dfs(
            row,
            column + 2,
            0,
            getWordToCheck(grid[row][column + 2]),
            DIRECTIONS[1]
          );
        // if both diagonals are valid, increase the counter
        if (xCheck === 2) {
          counter++;
        }
      }
    }
  }

  return counter;
}

const grid = await getInputAsGrid();

console.log(numberOfXmas(grid));
