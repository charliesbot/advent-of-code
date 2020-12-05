import { getInputLines } from "../../utils.ts";

const TREE = "#";

const getResult = async () => {
  const lines = await getInputLines("./day03.input.txt");
  const graph = lines.map((l) => l.split(""));
  let x = 0;
  let y = 0;
  let trees = 0;
  while (y < graph.length - 1) {
    if (x + 3 >= graph[y].length) {
      x = Math.abs(graph[y].length - x - 3);
    } else {
      x += 3;
    }

    y += 1;

    if (graph[y]?.[x] === TREE) {
      trees++;
    }
  }

  return trees;
};

const result = await getResult();

console.log(result);
