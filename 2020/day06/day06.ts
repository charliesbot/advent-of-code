import { getParagraphs } from "../../utils.ts";

const getResult = async () => {
  const paragraphs = await getParagraphs("./day06.input.txt");
  let sum = 0;

  for (const paragraph of paragraphs) {
    const set: Set<string> = new Set();
    for (const char of paragraph) {
      if (char !== " ") {
        set.add(char);
      }
    }
    sum += set.size;
  }

  return sum;
};

const result = await getResult();

console.log(result);
