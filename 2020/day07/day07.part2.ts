import { getInputLines } from "../../utils.ts";

type Data = { [key: string]: { [c: string]: number } };

const getParents = (searchColor: string, data: Data, set: Set<string>) => {
  if (!data[searchColor] || set.has(searchColor)) {
    return set;
  }

  Object.keys(data[searchColor]).forEach((k) => {
    getParents(k, data, set);
    set.add(k);
  });
};

const getResult = async () => {
  const lines = await getInputLines("./day07.input.txt");

  const hash: Data = {};

  lines.forEach((line) => {
    const nameRegex = /[a-z]+ [a-z]+/;
    const reg = /(?:(\d+) ([a-z]+ [a-z]+))+/g;
    const rootName = line.match(nameRegex)![0];
    [...line.matchAll(reg)].forEach(([, quantity, name]) => {
      hash[name] = {
        ...(hash[name] ?? {}),
        [rootName]: parseInt(quantity),
      };
    });
  });

  const colors: Set<string> = new Set();

  getParents("shiny gold", hash, colors);

  return colors.size;
};

const result = await getResult();

console.log(result);
