import { getInputLines } from "../../utils.ts";

const getResult = async () => {
  const lines = await getInputLines("./day08.input.txt");
  const hash: { [key: string]: Set<number> } = {};

  let index = 0;
  let accumulator = 0;
  while (index < lines.length) {
    const line = lines[index];
    const [, action, _value] = /(acc|jmp|nop)\s([+-]\d*)/.exec(line)!;

    const value = parseInt(_value);

    if (hash[line]?.has(index)) {
      break;
    }

    hash[line] = hash[line] ?? new Set([]);
    hash[line].add(index);

    if (action === "acc") {
      accumulator += value;
    }

    if (action === "jmp") {
      index += value;
      continue;
    }

    // nop doesn't no anything
    index++;
  }

  return accumulator;
};

const result = await getResult();

console.log(result);
