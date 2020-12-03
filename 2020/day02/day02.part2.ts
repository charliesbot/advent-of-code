import { getInputLines } from "../../utils.ts";

const transformData = (data: string[]) => {
  return data.map((d) => {
    const [ranges, maybeChar, password] = d.split(" ");
    const [min, max] = ranges.split("-").map((r) => parseInt(r));
    const [char] = maybeChar.split(":");

    return {
      min,
      max,
      char,
      password,
    };
  });
};

const getResult = async () => {
  const lines = await getInputLines("./day02.input.txt");
  const data = transformData(lines);

  const validPasswords: string[] = [];

  data.forEach((d) => {
    const { password, char, max, min } = d;
    let counter = 0;

    if (password[max - 1] === char) {
      counter++;
    }

    if (password[min - 1] === char) {
      counter++;
    }

    if (counter === 1) {
      validPasswords.push(password);
    }
  });

  return validPasswords.length;
};

const result = await getResult();

console.log(result);
