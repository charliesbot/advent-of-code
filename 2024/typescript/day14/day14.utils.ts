import { readFile } from "../../../utils.deno.ts";

export type Robot = {
  position: { x: number; y: number };
  velocity: { x: number; y: number };
};

const parseLine = (line: string): Robot => {
  const regex = /p=(\-?\d+),(\-?\d+)\s*v=(\-?\d+),(\-?\d+)/;
  const match = line.match(regex);
  if (!match) {
    throw new Error("Invalid line format");
  }
  return {
    position: { x: parseInt(match[1]), y: parseInt(match[2]) },
    velocity: { x: parseInt(match[3]), y: parseInt(match[4]) },
  };
};

export async function getInput(): Promise<Robot[]> {
  const lines = await readFile("../../inputs/day14.input.txt");
  const data: Robot[] = [];
  lines.forEach((line) => {
    data.push(parseLine(line));
  });
  return data;
}
