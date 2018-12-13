import { parseLine } from "./day06.utils";
import { input } from "./day06.input";

const getValidPath = (input, workers, delta = 0) => {
  let completed = [];
  let dependencies = {};
  let next = {};
  let count = 0;
  let queue = input.forEach(x => parseLine(x, next, dependencies));
  let running = {};

  queue = Object.keys(dependencies).filter(x => !dependencies[x].length);

  while (true) {
    for (let i = Object.keys(running).length; i < workers; i++) {
      if (!queue.length) {
        break;
      }
      const currentChar = queue.shift();
      const currentDependencies = dependencies[currentChar].filter(
        x => !completed.includes(x)
      );

      if (!currentDependencies.length) {
        running[currentChar] = currentChar.charCodeAt(0) - 4 + delta;
      }
    }

    if (!queue.length && !Object.keys(running).length) {
      break;
    }

    count++;

    const keys = Object.keys(running);
    keys.forEach(key => running[key]--);

    const finishedTasks = keys.filter(key => running[key] === 0);
    finishedTasks.forEach(k => {
      if (running[k] === 0) {
        completed.push(k);
        delete running[k];
        queue.push(...next[k].filter(x => !queue.includes(x)));
      }
    });
  }

  return count;
};

console.log(getValidPath(input, 5) === 975);
