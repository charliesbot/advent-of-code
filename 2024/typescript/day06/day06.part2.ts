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
  // [up, right, down, left]
  let paths = [1, 1, 1, 1];

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
      paths[directionIndex]++;
    }

    row += rowDelta;
    column += columnDelta;

    if (paths[0] === paths[2] && paths[1] === paths[3]) {
      paths = [1, 1, 1, 1];
      console.log("Block may be in: ", row + rowDelta, column + columnDelta);
    }
  }

  for (const row of matrix) {
    console.log(row.join(""));
  }
  //   return visits;
}

const input = await getInputAsMatrix();
console.log(getGuardVisits(input));
