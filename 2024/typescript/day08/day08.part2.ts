import {
  getFrequenciesPositions,
  getInputAsMatrix,
  Matrix,
  Position,
} from "./day08.utils.ts";

function markIfAntiNode(position: Position, delta: Position, matrix: Matrix) {
  const [x, y] = position;
  const [deltaX, deltaY] = delta;
  const [newX, newY] = [x + deltaX, y + deltaY];
  const maybeAntinode = matrix[newX]?.[newY];
  if (maybeAntinode !== undefined && maybeAntinode !== "#") {
    matrix[newX][newY] = "#";
    return 1;
  }
  return 0;
}

function findAntiNodes(positions: Position[], matrix: Matrix) {
  let uniqueAntiNodesCount = 0;
  for (let i = 0; i < positions.length; i++) {
    const [baseX, baseY] = positions[i];
    for (let j = i + 1; j < positions.length; j++) {
      const [currentX, currentY] = positions[j];
      const deltaOne: Position = [baseX - currentX, baseY - currentY];
      const deltaTwo: Position = [currentX - baseX, currentY - baseY];
      uniqueAntiNodesCount += markIfAntiNode(positions[i], deltaOne, matrix);
      uniqueAntiNodesCount += markIfAntiNode(positions[j], deltaTwo, matrix);
    }
    uniqueAntiNodesCount += positions.length - 1;
  }
  return uniqueAntiNodesCount;
}

function getAntiNodes(matrix: Matrix) {
  const frequenciesPositions = getFrequenciesPositions(matrix);
  let totalAntiNodesCount = 0;
  for (const frequency in frequenciesPositions) {
    totalAntiNodesCount += findAntiNodes(
      frequenciesPositions[frequency],
      matrix
    );
  }
  return totalAntiNodesCount;
}

const matrix = await getInputAsMatrix();
console.log(getAntiNodes(matrix));
