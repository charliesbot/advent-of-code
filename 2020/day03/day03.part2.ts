import { getInputLines } from "../../utils.ts";

const TREE = "#";

type Args = {
  xMoves: number;
  yMoves: number;
};

const loopGraph = ({ xMoves, yMoves }: Args, graph: string[][]) => {
  let x = 0;
  let y = 0;
  let trees = 0;
  while (y < graph.length - 1) {
    if (x + xMoves >= graph[y].length) {
      x = Math.abs(graph[y].length - x - xMoves);
    } else {
      x += xMoves;
    }

    y += yMoves;

    if (graph[y]?.[x] === TREE) {
      trees++;
    }
  }

  return trees;
};

const getResult = async () => {
  const lines = await getInputLines("./day03.input.txt");
  const graph = lines.map((l) => l.split(""));

  const options = [
    { xMoves: 1, yMoves: 1 },
    { xMoves: 3, yMoves: 1 },
    { xMoves: 5, yMoves: 1 },
    { xMoves: 7, yMoves: 1 },
    { xMoves: 1, yMoves: 2 },
  ];

  const result = options
    .map((o) => loopGraph(o, graph))
    .reduce((acum, current) => acum * current, 1);

  return result;
};

const result = await getResult();

console.log(result);
