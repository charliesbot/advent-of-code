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

  for (let index = 0; index < data.length; index++) {
    const { password, char, max, min } = data[index];

    type Hash = {
      [key: string]: number;
    };

    const hash = password.split("").reduce<Hash>((acum, current) => {
      acum[current] = acum[current] ?? 0;
      acum[current]++;
      return acum;
    }, {});

    if (hash.hasOwnProperty(char) && hash[char] >= min && hash[char] <= max) {
      validPasswords.push(password);
    }
  }

  return validPasswords.length;
};

const result = await getResult();

console.log(result);
