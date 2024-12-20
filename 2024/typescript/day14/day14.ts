import { Robot, getInput } from "./day14.utils.ts";

const getFinalX = (robot: Robot, time: number, width: number) =>
  (((robot.position.x + robot.velocity.x * time) % width) + width) % width;

const getFinalY = (robot: Robot, time: number, height: number) =>
  (((robot.position.y + robot.velocity.y * time) % height) + height) % height;

function getQuadrant(
  finalX: number,
  finalY: number,
  quadrantXDelta: number,
  quadrantYDelta: number,
  height: number,
  width: number
) {
  if (finalX < quadrantXDelta) {
    if (finalY < quadrantYDelta) {
      return 0;
    }

    if (finalY >= height - quadrantYDelta) {
      return 2;
    }
  }

  if (finalX >= width - quadrantXDelta) {
    if (finalY < quadrantYDelta) {
      return 1;
    }

    if (finalY >= height - quadrantYDelta) {
      return 3;
    }
  }
  return -1;
}

function getSafetyFactor(
  input: Robot[],
  seconds: number,
  width: number,
  height: number
) {
  const quadrantXDelta = Math.floor(width / 2);
  const quadrantYDelta = Math.floor(height / 2);
  const quadrants: number[] = [0, 0, 0, 0];

  for (let i = 0; i < input.length; i++) {
    const robot = input[i];
    const finalX = getFinalX(robot, seconds, width);
    const finalY = getFinalY(robot, seconds, height);
    const quadrant = getQuadrant(
      finalX,
      finalY,
      quadrantXDelta,
      quadrantYDelta,
      height,
      width
    );
    if (quadrant === -1) {
      continue;
    }
    quadrants[quadrant]++;
  }
  return quadrants.reduce((a, b) => a * b, 1);
}

const input = await getInput();
console.log(getSafetyFactor(input, 100, 101, 103));
