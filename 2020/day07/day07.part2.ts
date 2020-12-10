import { getInputLines } from "../../utils.ts";

const lines = await getInputLines("./day07.input.txt");

const nameRegex = /[a-z]+ [a-z]+/;
const reg = /(?:(\d+) ([a-z]+ [a-z]+))+/g;
const bags = lines.map((line: string) => {
  const name = line.match(nameRegex)![0];
  const children = [...line.matchAll(reg)].map(([, quantity, name]) => ({
    quantity: +quantity,
    name,
  }));

  return { name, children };
});

const poss = getPossibleParents("shiny gold", bags);

console.log(poss.length - 1);

function getPossibleParents(name: string, bags: any) {
  const possibles: string[] = [];
  req(name);
  return possibles;

  function req(name: string) {
    possibles.push(name);
    const children = bags.filter((bag: any) =>
      bag.children.some((child: any) => child.name == name)
    );
    children.forEach((child: any) => {
      if (!possibles.includes(child.name)) {
        req(child.name);
      }
    });
  }
}
