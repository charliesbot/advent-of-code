import { getInputLines } from "../../utils.ts";

const getResult = async () => {
  const lines = await getInputLines("./day08.input.txt");
  let hash: { [key: string]: Set<number> } = {};
  const tracker: Set<number> = new Set();
  let iteration = 1;

  let transformed = false;

  let index = 0;
  let accumulator = 0;
  while (index < lines.length && iteration < lines.length) {
    const line = lines[index];
    let [, action, _value] = /(acc|jmp|nop)\s([+-]\d*)/.exec(line)!;

    const value = parseInt(_value);

    if (hash[line]?.has(index)) {
      transformed = false;
      hash = {};
      index = 0;
      accumulator = 0;
      iteration++;
      continue;
    }

    if (!transformed && (action === "nop" || action === "jmp")) {
      if (!tracker.has(index)) {
        action = action === "nop" ? "jmp" : "nop";
        transformed = true;
        tracker.add(index);
      }
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
