import { getRulesAndInput, isPageValid, getMid, Rules } from "./day05.utils.ts";

function getValidMiddlePageSum(rules: Rules, input: number[][]) {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    const page = input[i];
    if (isPageValid(page, rules)) {
      sum += getMid(page);
    }
  }

  return sum;
}

const { rules, input } = await getRulesAndInput();

console.log(getValidMiddlePageSum(rules, input));
