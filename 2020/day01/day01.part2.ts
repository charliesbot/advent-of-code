import { getInputLines } from "../../utils.ts";

const goal = 2020;

const getResult = async () => {
  const numsLines: string[] = await getInputLines("./day01.input.txt");

  const nums = numsLines.map((n) => parseInt(n)).filter((n) => !isNaN(n));
  const result: number[] = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === goal) {
        result.push(nums[i], nums[left], nums[right]);
        break;
      }

      if (sum < goal) {
        left++;
      }

      if (sum > goal) {
        right--;
      }
    }
  }

  return result.reduce((acum, current) => acum * current, 1);
};

const result = await getResult();
console.log(result);
