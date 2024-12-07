import { getMid, getRulesAndInput, isPageValid, Rules } from "./day05.utils.ts";

function createComparator(rules: Rules) {
  return (a: number, b: number) => {
    // If a should come before b
    if (rules[a]?.has(b)) {
      return -1;
    }
    // If a should come after b
    if (rules[b]?.has(a)) {
      return 1;
    }
    // No direct rule between a and b
    return 0;
  };
}

function getValidMiddlePageSum(rules: Rules, input: number[][]) {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    const page = input[i];
    if (!isPageValid(page, rules)) {
      sum += getMid(page.sort(createComparator(rules)));
    }
  }

  return sum;
}

const { rules, input } = await getRulesAndInput();

console.log(getValidMiddlePageSum(rules, input));
