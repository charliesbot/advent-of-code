import { input } from "./day03.input";

type Values = {
  id: number;
  width: number;
  height: number;
  xCoord: number;
  yCoord: number;
};

const getInitialValues = (data: string) => {
  const [numberWithHash, rest] = data.split("@");
  const id = parseInt(numberWithHash.slice(1));
  const [rawCoords, rawSizes] = rest.split(":");
  const [xCoord, yCoord] = rawCoords.split(",").map(coord => parseInt(coord));
  const [width, height] = rawSizes.split("x").map(size => parseInt(size));
  return {
    id,
    width,
    height,
    xCoord,
    yCoord
  };
};

const evaluation = (
  entries: object,
  idsWithoutClashes: object,
  values: Values
) => {
  let { id, width, height, xCoord, yCoord } = values;
  let currentId;
  for (let row = yCoord; row < yCoord + height; row++) {
    for (let column = xCoord; column < xCoord + width; column++) {
      entries[row] = entries[row] || {};

      if ((currentId = entries[row][column])) {
        delete idsWithoutClashes[id];
        delete idsWithoutClashes[currentId];
        continue;
      }

      entries[row][column] = id;
    }
  }
};

const getSquareInches = (input: string[]) => {
  const entries = {};
  const idsWithoutClashes = {};
  for (let i = 0; i < input.length; i++) {
    const values = getInitialValues(input[i]);
    idsWithoutClashes[values.id] = values.id;
    evaluation(entries, idsWithoutClashes, values);
  }
  return idsWithoutClashes;
};

console.log(getSquareInches(input));
