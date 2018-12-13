import { input } from "./day06.input";
import { parseLine } from "./day06.utils";

const getValidPath = input => {
  let completed = [];
  let dependencies = {};
  let next = {};
  let queue = input.forEach(x => parseLine(x, next, dependencies));
  queue = Object.keys(dependencies).filter(x => !dependencies[x].length);
  let path = "";
  while (queue.length) {
    queue.sort();
    while (true) {
      const first = queue.shift();
      dependencies[first] = dependencies[first].filter(
        x => !completed.includes(x)
      );
      if (!dependencies[first].length) {
        completed.push(first);
        queue.push(...next[first].filter(x => !queue.includes(x)));
        path += first;
        break;
      }

      queue.push(first);
    }
  }
  console.log(path);
};

// const input = [
// "Step C must be finished before step A can begin.",
// "Step C must be finished before step F can begin.",
// "Step A must be finished before step B can begin.",
// "Step A must be finished before step D can begin.",
// "Step B must be finished before step E can begin.",
// "Step D must be finished before step E can begin.",
// "Step F must be finished before step E can begin."
// ];

getValidPath(input);
