import { input } from "./day02.input";

const compareBoxes = (boxId1: string, boxId2: string) => {
  if (boxId1.length !== boxId2.length) {
    return -1;
  }

  let mistakes = 0;
  let index = -1;

  for (let i = 0; i < boxId1.length; i++) {
    if (boxId1[i] !== boxId2[i]) {
      mistakes++;
      index = i;
    }
  }

  return mistakes !== 1 ? -1 : index;
};

const getBoxId = (boxIds: string[]) => {
  for (let i = 0; i < boxIds.length; i++) {
    for (let j = i + 1; j < boxIds.length; j++) {
      const index = compareBoxes(boxIds[i], boxIds[j]);
      if (index !== -1) {
        return (
          boxIds[i].slice(0, index) +
          boxIds[i].slice(index + 1, boxIds[i].length)
        );
      }
    }
  }
};

console.log(getBoxId(input));
