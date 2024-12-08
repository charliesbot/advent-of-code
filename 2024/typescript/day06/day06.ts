import {
  getInputAsMatrix,
  getGuardStartPosition,
  Matrix,
} from "./day06.utils.ts";

const DIRECTIONS = [
  // UP
  [-1, 0],
  // RIGHT
  [0, 1],
  // DOWN
  [1, 0],
  // LEFT
  [0, -1],
];

function getGuardVisits(matrix: Matrix) {
  let [row, column] = getGuardStartPosition(matrix);
  let directionIndex = 0; // start with UP
  let visits = 1;
  // Mark starting position as visited
  matrix[row][column] = "!";

  while (true) {
    const [rowDelta, columnDelta] = DIRECTIONS[directionIndex];
    // undefined means the guard reached the exit
    const maybeNextPosition = matrix[row + rowDelta]?.[column + columnDelta];
    if (maybeNextPosition === undefined) {
      break;
    }

    if (maybeNextPosition === "#") {
      // if guard hits a wall, move 90 degrees
      directionIndex = (directionIndex + 1) % DIRECTIONS.length;
      continue;
    }

    if (maybeNextPosition === ".") {
      // ! means visited
      matrix[row + rowDelta][column + columnDelta] = "!";
      visits++;
    }

    row += rowDelta;
    column += columnDelta;
  }

  return visits;
}

const input = await getInputAsMatrix();
console.log(getGuardVisits(input));
