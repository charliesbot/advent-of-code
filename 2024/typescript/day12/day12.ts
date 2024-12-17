import { getInputAsMatrix, Matrix } from "./day12.utils.ts";

function getVisitedKey(row: number, col: number) {
  return `${row},${col}`;
}

function getUnitPerimeter(
  matrix: Matrix,
  row: number,
  col: number,
  expectedRegion: string
) {
  if (matrix[row]?.[col] === undefined || matrix[row][col] !== expectedRegion) {
    return 1;
  }

  return 0;
}

function getPerimeter(
  matrix: Matrix,
  row: number,
  col: number,
  expectedRegion: string
) {
  return (
    getUnitPerimeter(matrix, row + 1, col, expectedRegion) +
    getUnitPerimeter(matrix, row - 1, col, expectedRegion) +
    getUnitPerimeter(matrix, row, col + 1, expectedRegion) +
    getUnitPerimeter(matrix, row, col - 1, expectedRegion)
  );
}

function getRegionPrice(
  matrix: Matrix,
  row: number,
  col: number,
  visited: Set<string>
) {
  const region = matrix[row][col];
  let area = 0;
  let perimeter = 0;
  function dfs(row: number, col: number) {
    if (
      matrix[row]?.[col] === undefined ||
      matrix[row][col] !== region ||
      visited.has(getVisitedKey(row, col))
    ) {
      return;
    }

    visited.add(getVisitedKey(row, col));
    area++;
    perimeter += getPerimeter(matrix, row, col, region);
    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  }

  dfs(row, col);

  return area * perimeter;
}

function getRegionsPrice(matrix: Matrix) {
  let price = 0;
  const visited = new Set<string>();
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (!visited.has(getVisitedKey(row, col))) {
        price += getRegionPrice(matrix, row, col, visited);
      }
    }
  }
  return price;
}

const matrix = await getInputAsMatrix();
console.log(getRegionsPrice(matrix));
