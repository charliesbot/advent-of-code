import { getInputAsList, Input } from "./day07.utils.ts";

type Operator = "SUM" | "MULTIPLY" | "CONCAT";

function doOperation(operator: Operator, a: number, b: number): number {
  if (operator === "SUM") {
    return a + b;
  }
  if (operator === "MULTIPLY") {
    return a * b;
  }
  if (operator === "CONCAT") {
    return parseInt(`${a}${b}`);
  }
  throw new Error("Invalid operator");
}

function combineOperators(
  currentCalc: number,
  index: number,
  operator: Operator,
  input: Input
) {
  let calc = doOperation(operator, currentCalc, input.numbers[index]);

  if (index === input.numbers.length - 1) {
    return calc === input.result;
  }

  return (
    combineOperators(calc, index + 1, "SUM", input) ||
    combineOperators(calc, index + 1, "MULTIPLY", input) ||
    combineOperators(calc, index + 1, "CONCAT", input)
  );
}

function getEquationResultIfValid(input: Input) {
  const initialNumber = input.numbers[0];
  return (
    combineOperators(initialNumber, 1, "SUM", input) ||
    combineOperators(initialNumber, 1, "MULTIPLY", input) ||
    combineOperators(initialNumber, 1, "CONCAT", input)
  );
}

function getValidEquationSum(inputList: Input[]) {
  let sum = 0;
  for (const input of inputList) {
    const isValid = getEquationResultIfValid(input);
    if (isValid) {
      sum += input.result;
    }
  }
  return sum;
}

const input = await getInputAsList();
console.log(getValidEquationSum(input));
