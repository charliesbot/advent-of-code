import { getInputLines } from "../../utils.ts";

type Data = { [key: string]: { [c: string]: number } };

const getResult = async () => {
  const lines = await getInputLines("./day07.input.txt");

  const hash: Data = {};

  lines.forEach((line) => {
    const nameRegex = /[a-z]+ [a-z]+/;
    const reg = /(?:(\d+) ([a-z]+ [a-z]+))+/g;
    const rootName = line.match(nameRegex)![0];
    [...line.matchAll(reg)].forEach(([, quantity, name]) => {
      hash[rootName] = {
        ...(hash[rootName] ?? {}),
        [name]: parseInt(quantity),
      };
    });
  });

  const BFS = () => {
    const queue = [{ color: "shiny gold", parent: 1, value: 1 }];
    let counter = 0;

    while (queue.length > 0) {
      const { color, parent, value } = queue.pop()!;
      const children = parent * value;
      counter = counter + children;

      if (!hash[color]) {
        continue;
      }

      Object.entries(hash[color]).forEach(([k, v]) => {
        queue.push({ color: k, parent: children, value: v });
      });
    }

    return counter - 1;
  };

  const total = BFS();

  return total;
};

const result = await getResult();

console.log(result);
