import { getInputAsGrid } from "./day04.utils.ts";

type Direction = [number, number];

const DIRECTIONS: Direction[] = [
  // Vertical
  [1, 0],
  [-1, 0],
  // Horizontal
  [0, 1],
  [0, -1],
  // Diagonal
  [-1, 1],
  [1, 1],
  [1, -1],
  [-1, -1],
];

function numberOfXmas(grid: string[][]) {
  const xmas = "XMAS";

  const dfs = (
    row: number,
    column: number,
    xmasIndex: number,
    direction: Direction
  ) => {
    // Out of bounds
    if (!grid[row] || !grid[row][column]) {
      return 0;
    }

    // Wrong letter
    if (grid[row][column] !== xmas[xmasIndex]) {
      return 0;
    }

    // Found the whole "XMAS" string
    if (xmasIndex === xmas.length - 1) {
      return 1;
    }

    const [rowOffset, columnOffset] = direction;
    return dfs(
      row + rowOffset,
      column + columnOffset,
      xmasIndex + 1,
      direction
    );
  };

  let counter = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      if (grid[row][column] === xmas[0]) {
        for (const direction of DIRECTIONS) {
          counter += dfs(row, column, 0, direction);
        }
      }
    }
  }

  return counter;
}

const grid = await getInputAsGrid();

console.log(numberOfXmas(grid));
