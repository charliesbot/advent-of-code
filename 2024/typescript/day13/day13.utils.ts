import { readFile } from "../../../utils.deno.ts";

type Config = {
  x: number;
  y: number;
};

export type Machine = {
  buttonA: Config;
  buttonB: Config;
  prize: Config;
};

function parsePrize(prizeLine: string): Config {
  const match = prizeLine.match(/X=(\d+), Y=(\d+)/);
  if (!match) throw new Error("Invalid prize format");
  return { x: parseInt(match[1]), y: parseInt(match[2]) };
}

function parseButton(buttonLine: string): Config {
  const match = buttonLine.match(/X\+(\d+), Y\+(\d+)/);
  if (!match) throw new Error("Invalid button format");
  return { x: parseInt(match[1]), y: parseInt(match[2]) };
}

function parseMachine(
  buttonALine: string,
  buttonBLine: string,
  prizeLine: string
): Machine {
  const buttonA = parseButton(buttonALine);
  const buttonB = parseButton(buttonBLine);
  const prize = parsePrize(prizeLine);
  return { buttonA, buttonB, prize };
}

export async function getInputAsMachines(): Promise<Machine[]> {
  const lines = await readFile("../../inputs/day13.input.txt");
  const machines: Machine[] = [];
  for (let i = 0; i < lines.length; i += 4) {
    machines.push(parseMachine(lines[i], lines[i + 1], lines[i + 2]));
  }
  return machines;
}
