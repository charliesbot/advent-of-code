import { getParagraphs } from "../../utils.ts";

const getResult = async () => {
  const paragraphs = await getParagraphs("./day06.input.txt");
  let sum = 0;

  for (const paragraph of paragraphs) {
    const hash: { [key: string]: number } = {};
    let groups = 1;

    for (let index = 0; index < paragraph.length; index++) {
      const char = paragraph[index];

      if (char === " ") {
        if (index < paragraph.length - 1) {
          groups++;
        }

        continue;
      }

      hash[char] = hash[char] ?? 0;
      hash[char]++;
    }

    Object.keys(hash).forEach((key) => {
      if (hash[key] === groups) {
        sum++;
      }
    });
  }

  return sum;
};

const result = await getResult();

console.log(result);
