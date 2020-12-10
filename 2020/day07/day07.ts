import { getInputLines } from "../../utils.ts";

const parseColor = (color: string) => {
  const [number, ...colorNameBag] = color.split(" ");
  colorNameBag.pop();
  const actualName = colorNameBag.join("_");

  const amount = parseInt(number);

  return { actualName, amount: isNaN(amount) ? 0 : amount };
};

const getResult = async () => {
  const lines = await getInputLines("./day07.input.txt");

  const hash: { [key: string]: { [c: string]: number } } = {};

  lines.forEach((line) => {
    const [rootColorBags, colors] = line.split("contain");
    const [rootColor] = rootColorBags
      .split(" bags")
      .map((m) => m.replace(" ", "_"));

    const mappedColors = colors.split(", ").map((c) => parseColor(c.trim()));
    mappedColors.forEach((m) => {
      hash[m.actualName] = {
        ...(hash[m.actualName] ?? {}),
        [rootColor]: m.amount,
      };
    }, {});
  });

  let counter = 0;

  counter += Object.keys(hash["shiny_gold"]).length;
  console.log(hash);
  const set: Set<string> = new Set();

  Object.keys(hash).forEach((k) => {
    const keys = Object.keys(hash[k]);
    if (keys.includes("shiny_gold")) {
      set.add(k);
    }
  });

  return counter + set.size;
};

const result = await getResult();

console.log(result);
