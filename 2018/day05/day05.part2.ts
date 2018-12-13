import { input } from "./day05.input";
import { polymerCount } from "./day05";

const nextChar = char => String.fromCharCode(char.charCodeAt(0) + 1);

const shortestPolymer = (polymer: string) => {
  let minLength = polymer.length;
  for (let i = "a"; i <= "z"; i = nextChar(i)) {
    const newPolymer = polymer
      .split("")
      .filter(char => char.toLowerCase() !== i)
      .join("");

    minLength = Math.min(minLength, polymerCount(newPolymer));
  }

  return minLength;
};

console.log(shortestPolymer(input));
