const getInputLines = async (fileName: string): Promise<Array<string>> => {
  const text = await Deno.readTextFile(fileName);
  return text.split("\n").filter((t: string | undefined) => t);
};

const getParagraphs = async (fileName: string) => {
  const lines = await Deno.readTextFile(fileName);
  const paragraphs = lines.split("\n\n").map((l) => l.split("\n").join(" "));
  return paragraphs;
};

export { getInputLines, getParagraphs };
