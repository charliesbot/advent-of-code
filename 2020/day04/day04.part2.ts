import { getParagraphs } from "../../utils.ts";

const validHexSymbol = new Set([
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
]);

const validateYear = (minYear: number, maxYear: number) => (s: string) => {
  const n = parseInt(s);
  if (isNaN(n)) {
    return false;
  }

  return n >= minYear && n <= maxYear;
};

const validateHeight = (s: string) => {
  const unit = s.endsWith("m") ? "cm" : "in";
  const [value] = s.split(unit);

  const numValue = parseInt(value);

  if (unit === "cm") {
    return numValue >= 150 && numValue <= 193;
  }

  if (unit === "in") {
    return numValue >= 59 && numValue <= 76;
  }

  return false;
};

const validateColor = (s: string) => {
  if (!s.startsWith("#")) {
    return false;
  }

  const [_, color] = s.split("#");

  if (color.length !== 6) {
    return false;
  }

  for (const char of color) {
    if (!validHexSymbol.has(char)) {
      return false;
    }
  }

  return true;
};

const validateEyeColor = (s: string) => {
  const validEyeColors = new Set([
    "amb",
    "blu",
    "brn",
    "gry",
    "grn",
    "hzl",
    "oth",
  ]);

  return validEyeColors.has(s);
};

const validatePassport = (s: string) => {
  if (s.length !== 9) {
    return false;
  }

  const num = parseInt(s);

  return !isNaN(num);
};

const requiredFields: { [key: string]: (s: string) => boolean } = {
  byr: validateYear(1920, 2002),
  iyr: validateYear(2010, 2020),
  eyr: validateYear(2020, 2030),
  hgt: validateHeight,
  hcl: validateColor,
  ecl: validateEyeColor,
  pid: validatePassport,
  // "cid", // we can omit this field
};

const getResult = async () => {
  const paragraphs = await getParagraphs("./day04.input.txt");
  let totalResults = 0;
  for (const paragraph of paragraphs) {
    let keys = 0;
    const keyValues = paragraph.split(" ");
    for (const kV of keyValues) {
      const [key, value] = kV.split(":");

      if (!requiredFields[key]) {
        continue;
      }

      console.log(requiredFields[key](value), key, value);
      if (requiredFields[key](value)) {
        keys++;
      } else {
        break;
      }
    }

    if (keys === 7) {
      totalResults++;
    }
  }

  return totalResults;
};

const result = await getResult();

console.log(result);
