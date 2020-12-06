import { getParagraphs } from "../../utils.ts";

const requiredFields = {
  byr: false,
  iyr: false,
  eyr: false,
  hgt: false,
  hcl: false,
  ecl: false,
  pid: false,
  // "cid", // we can omit this field
};

const getResult = async () => {
  const paragraphs = await getParagraphs("./day04.input.txt");
  let totalResults = 0;
  for (const paragraph of paragraphs) {
    let keys = 0;
    const hash: { [key: string]: boolean } = { ...requiredFields };
    const keyValues = paragraph.split(" ");
    keyValues.forEach((kV) => {
      const [key] = kV.split(":");
      if (hash[key] === false) {
        hash[key] = true;
        keys++;
      }
    });

    if (keys === 7) {
      totalResults++;
    }
  }

  return totalResults;
};

const result = await getResult();

console.log(result);
