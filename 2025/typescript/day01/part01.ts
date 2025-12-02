import { readInput } from "../utils/day01.parser";

async function followRotations() {
  const START = 50;
  const rules = await readInput();
  let knob = START;
  let zeroCounter = 0;
  for (const [direction, value] of rules) {
    const fixedValue = value % 100;
    const delta = direction === "L" ? -fixedValue : fixedValue;
    const nextPosition = knob + delta;

    knob = nextPosition;

    if (nextPosition < 0) {
      knob = nextPosition + 100;
    }

    if (nextPosition >= 100) {
      knob = nextPosition - 100;
    }

    // If we stayed within range, check if we landed exactly on 0
    if (knob === 0) {
      zeroCounter++;
    }
  }
  return zeroCounter;
}

console.log(await followRotations());
