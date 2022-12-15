import { readLines } from "https://deno.land/std@0.78.0/io/mod.ts";

export class FileReader {
  static async read(fileName: string) {
    const f = await Deno.open(fileName);
    const lines: string[] = [];
    for await (const l of readLines(f)) {
      if (l !== "") {
        lines.push(l);
      }
    }
    return lines;
  }
}
