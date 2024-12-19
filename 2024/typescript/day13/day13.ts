import { getInputAsMachines, Machine } from "./day13.utils.ts";

function maybeWinMachine(machine: Machine): number | null {
  let minCost = Infinity;
  for (let numPressesA = 0; numPressesA < 100; numPressesA++) {
    for (let numPressesB = 0; numPressesB < 100; numPressesB++) {
      const isWin =
        numPressesA * machine.buttonA.x + numPressesB * machine.buttonB.x ==
          machine.prize.x &&
        numPressesA * machine.buttonA.y + numPressesB * machine.buttonB.y ==
          machine.prize.y;
      if (isWin) {
        const cost = 3 * numPressesA + numPressesB;
        minCost = Math.min(minCost, cost);
      }
    }
  }

  return minCost === Infinity ? null : minCost;
}

function getFewestTokens(machines: Machine[]): number {
  let tokens = 0;
  for (const machine of machines) {
    tokens += maybeWinMachine(machine) ?? 0;
  }
  return tokens;
}

const machines = await getInputAsMachines();
console.log(getFewestTokens(machines));
